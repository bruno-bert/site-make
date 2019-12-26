module.exports = {
  id: "hero1",
  type: "hero",
  className: "hero",
  hero: {
    styles: {
      logoStyle: "",
      titleStyle: "",
      subTitleStyle: "",
    },
    title: "Gisele <span>Bertoni</span>",
    subTitle: "Maquiagem Para Festas - Noivas - Infantil",
    backgroundImage: "landing/hero-background.jpg",
    logoImage: "landing/hero-logo.svg",
    socialMedia: [{ className: "fab fa-instagram" }],
    callToAction: {
      id: "Setmore_button_iframe",
      text: "Agende seu Horário",
      href:
        "https://my.setmore.com/bookingpage/4426feab-9602-4c48-a963-aa6fe8f69b37",
    },
  },
}

/** example on how to style the texts
 *  styles: {
      logoStyle: '{"width": "200px", "height": "200px"}',
      titleStyle: '{"color": "green"}',
      subTitleStyle: '{"color": "blue"}',
    },
 
    title: "Gisele <span style='color: yellow'>Bertoni</span>",
 */
