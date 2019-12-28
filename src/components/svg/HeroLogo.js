import React from "react"

export default function HeroLogo(props) {
  return (
    <svg
      width={66}
      height={66}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M58.2044 38.8641C66.6971 29.7394 66.0078 15.3084 65.9736 14.6856C65.9192 13.7016 65.1331 12.9161 64.1492 12.8617C63.8547 12.8451 59.6828 12.6417 54.4626 13.7041C53.4328 8.41595 51.6287 4.61673 51.5431 4.43797C51.1166 3.54972 50.0903 3.12473 49.1598 3.45103C48.973 3.51649 45.0131 4.9264 40.5477 7.93607C37.6186 3.51346 34.5344 0.71226 34.2897 0.49322C33.556 -0.164406 32.4447 -0.164406 31.7105 0.49322C31.4658 0.71226 28.3816 3.51346 25.4525 7.93658C20.9871 4.92691 17.0268 3.51649 16.8404 3.45103C15.9104 3.12523 14.8837 3.54972 14.4572 4.43797C14.3716 4.61673 12.5669 8.41595 11.5376 13.7047C6.31743 12.6422 2.14508 12.8456 1.8505 12.8617C0.866583 12.9161 0.0810574 13.7016 0.0266749 14.6861C-0.0080695 15.3084 -0.696915 29.7394 7.79582 38.8641C3.46889 41.2595 0.635961 44.389 0.495976 44.5451C-0.161146 45.2793 -0.161146 46.3906 0.495976 47.1247C0.80364 47.4682 8.1332 55.5344 17.4679 55.5344C19.8934 55.5344 22.1825 54.9891 24.2496 54.1768C26.3982 60.6856 31.4714 65.287 31.71 65.5015C32.0771 65.8298 32.5389 65.9945 33.0001 65.9945C33.4614 65.9945 33.9226 65.8298 34.2897 65.5015C34.5289 65.2875 39.6011 60.6856 41.7502 54.1774C43.8172 54.9891 46.1063 55.5344 48.5319 55.5344C57.8665 55.5344 65.1966 47.4682 65.5043 47.1247C66.1614 46.3906 66.1614 45.2793 65.5043 44.5451C65.3638 44.3885 62.5303 41.259 58.2044 38.8641ZM54.9148 36.7075C49.8854 41.7368 42.3942 43.2782 37.6302 43.7354C41.0674 39.631 45.9089 32.3473 45.9089 23.8843C45.9089 22.9371 45.8465 22.0055 45.7342 21.0906C51.6025 17.4646 58.8061 16.8145 62.1164 16.7214C62.0067 20.7512 61.0761 30.5461 54.9148 36.7075ZM48.7575 7.79307C49.3406 9.31729 50.1608 11.764 50.7092 14.6624C48.7831 15.2611 46.8098 16.0527 44.9064 17.0975C44.3001 15.0113 43.4642 13.0551 42.5246 11.2685C44.9602 9.60834 47.2685 8.45774 48.7575 7.79307ZM33.0021 4.66003C35.4141 7.20745 40.4707 13.2792 41.7446 20.5518C41.7451 20.5528 41.7451 20.5538 41.7456 20.5553C41.9355 21.6405 42.0417 22.7528 42.0417 23.8843C42.0417 32.5673 35.7726 40.1693 33.0001 43.106C30.2276 40.1693 23.958 32.5673 23.958 23.8843C23.958 15.1982 30.2321 7.59367 33.0021 4.66003ZM17.2423 7.79307C18.7312 8.45825 21.04 9.60884 23.4751 11.269C22.5355 13.0551 21.6996 15.0113 21.0934 17.0975C19.19 16.0527 17.2166 15.2611 15.2905 14.6624C15.8389 11.764 16.6597 9.31679 17.2423 7.79307ZM20.2655 21.0906C20.1532 22.0055 20.0913 22.9371 20.0913 23.8843C20.0913 32.3523 24.9379 39.6391 28.3751 43.7424C23.6176 43.2913 16.132 41.7545 11.0845 36.7075C4.94225 30.5653 4.00214 20.7517 3.88632 16.7184C7.19409 16.808 14.3827 17.4525 20.2655 21.0906ZM4.69652 45.8321C5.99919 44.6518 8.18557 42.903 10.882 41.624C16.5091 45.816 23.46 47.1842 28.0795 47.6102C27.1223 48.3196 26.0004 49.0558 24.7561 49.7034C24.6866 49.7336 24.6197 49.7688 24.5552 49.8066C22.461 50.8686 20.0339 51.6677 17.4679 51.6677C11.9108 51.6677 6.968 47.8841 4.69652 45.8321ZM32.9971 61.301C31.4452 59.5889 28.9098 56.3542 27.7618 52.4557C30.0297 51.1224 31.8379 49.6263 32.9996 48.5573C34.1613 49.6263 35.9695 51.1224 38.237 52.4552C37.0904 56.3391 34.549 59.5839 32.9971 61.301ZM48.5319 51.6677C44.3636 51.6677 40.5417 49.5392 37.9323 47.6086C42.5518 47.1816 49.4957 45.812 55.1172 41.6246C57.8036 42.9 59.997 44.6549 61.3042 45.8367C59.0393 47.8901 54.1136 51.6677 48.5319 51.6677Z"
        fill="#fff"
      />
    </svg>
  )
}
