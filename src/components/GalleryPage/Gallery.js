import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Box, Link } from "rebass"
import { chunk, sum, carouselFormatters } from "../../helpers"
import GatsbyImage from "gatsby-image"

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints = [1] }) => {
  const aspectRatios = images.map(image => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => {
    setModalIsOpen(false)
    const header = document.getElementById("header")
    if (header) header.style.display = "flex"
  }

  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)

    const header = document.getElementById("header")
    if (header) header.style.display = "none"
  }

  return (
    <Box className="gallery-inner">
      {images.map((image, i) => (
        <Link
          key={image.id}
          href={image.originalImg}
          onClick={e => {
            e.preventDefault()
            openModal(i)
          }}
        >
          <Box
            as={GatsbyImage}
            fluid={image}
            title={image.caption}
            width={rowAspectRatioSumsByBreakpoints.map(
              (rowAspectRatioSums, j) => {
                const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex]
                const result = `${(image.aspectRatio / rowAspectRatioSum) *
                  100}%`
                return result
              }
            )}
            css={`
              display: inline-block;
              vertical-align: middle;
              transition: filter 0.3s;
              :hover {
                filter: brightness(87.5%);
              }
            `}
          />
        </Link>
      ))}

      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={images.map(({ originalImg, caption }) => ({
                  source: originalImg,
                  caption,
                }))}
                currentIndex={modalCurrentIndex}
                formatters={carouselFormatters}
                components={{ FooterCount: () => null }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </Box>
  )
}

export default Gallery
