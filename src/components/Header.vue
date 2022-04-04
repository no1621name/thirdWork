<template>
  <div class="header">
    <div class="container">
      <div class="location">
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 22C8 22 16 12.5601 16 7.7C16 2.83989 12.8199 0 8 0C3.18006 0 0 2.83989 0 7.7C0
              12.5601 8 22 8 22ZM8.00002 12.4666C10.41 12.4666 12.3637 10.4967 12.3637
              8.06663C12.3637 5.63657 10.41 3.66663 8.00002 3.66663C5.59005 3.66663 3.63638
              5.63657 3.63638 8.06663C3.63638 10.4967 5.59005 12.4666 8.00002 12.4666Z"
            fill="#6E7C83"
          />
        </svg>
        <div class="location-ua">
          <span>Главный офис в Украине:</span> <br>
          г. Одесса, пр. А. Глушка, 29, БЦ "Элемент”
        </div>
        <div class="location-ru">
          <span>Главный офис в РФ:</span> <br>
          г. Москва, Чермянский пр-д, 7, БЦ “На Широкой”
        </div>
      </div>
      <button
        class="oreder-translate"
        @click="openOrdering"
      >
        Заказать перевод
      </button>
      <div class="contacts">
        <div class="phones">
          <span>
            <svg
              width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                opacity="0.8"
                filter="url(#filter0_d_2652_47280)"
              >
                <rect
                  x="2"
                  y="2"
                  width="17"
                  height="5"
                  fill="#3B61E7"
                />
                <rect
                  x="2"
                  y="7"
                  width="17"
                  height="5"
                  fill="#DEE220"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2652_47280"
                  x="0"
                  y="0"
                  width="21"
                  height="14"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2652_47280"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2652_47280"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            + 38 044 537-02-22
          </span>
          <span>
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                opacity="0.8"
                filter="url(#filter0_d_2652_47285)"
              >
                <rect
                  x="3"
                  y="3"
                  width="17"
                  height="3.33333"
                  fill="#DFE4EF"
                />
                <rect
                  x="3"
                  y="6.33325"
                  width="17"
                  height="3.33333"
                  fill="#204BE2"
                />
                <rect
                  x="3"
                  y="9.66675"
                  width="17"
                  height="3.33333"
                  fill="#E22020"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2652_47285"
                  x="0"
                  y="0"
                  width="23"
                  height="16"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2652_47285"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2652_47285"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            + 7 (499) 350-06-40
          </span>
        </div>
        <div class="social-media">
          <a href="/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity=".5">
                <path
                  d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0
                  6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263
                  9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675
                  10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8
                  19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013
                  18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985
                  11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375
                  14.675Z"
                  fill="#22A2EB"
                />
              </g>
            </svg>
          </a>
          <a href="/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity=".5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0
                    6.71573 0 15C0 23.2843 6.71573 30 15 30ZM21.7345 7.96609C23.1288 9.22114
                    23.9018 11.996 23.3797 16.3912C22.9228 20.269 20.3085 20.9558 19.431
                    21.1864C19.3449 21.209 19.2755 21.2272 19.2266 21.2436C18.9896 21.3224
                    16.9039 21.862 14.1881 21.6265L13.9179 21.9496C12.5356 23.6033 12.2974
                    23.8883 11.8057 23.7289C11.3491 23.5853 11.3761 22.8706 11.3761
                    22.8706L11.3798 21.1065H11.3761C7.40826 19.9514
                    7.46368 15.6933 7.51035 13.4202C7.55703 11.1478 7.98291 9.31229 9.19201
                    8.06162C11.8844 5.50485 19.4847 5.82208 21.7352 7.96536L21.7345 7.96609ZM12.2024
                    23.085C12.7369 22.5286 14.4558 20.3853 14.4558 20.3853C16.7588 20.5392 18.5928
                    20.0673 18.7905 20.0017C18.8365 19.9864 18.9029 19.9704 18.9856 19.9504L18.9856
                    19.9504C19.733 19.7699 21.8098 19.2685 22.1939 16.0681C22.1935 16.0522 22.1991
                    15.9958 22.2081 15.905C22.2995 14.9846 22.7419 10.5276 20.8528 8.85286C19.1551
                    7.25725 12.4919 6.76209 10.1298 8.97684C9.10596 10.0233 8.75884 11.5774 8.72237
                    13.4749L8.71819 13.6764C8.67649 15.6177 8.60316 19.0307 11.8516 19.9616C11.8516
                    19.9616 11.8385 22.6547 11.8385 22.8903C11.8356 23.2491 12.0274 23.2659 12.2024
                    23.085ZM15.4068 9.83466C15.126 9.83102 15.126 9.39346 15.4068 9.39346C17.8425
                    9.41024 19.8013 11.1502 19.8246 14.1511H19.8253C19.829 14.445 19.3987 14.4487
                    19.3987 14.1548C19.379 11.3697 17.585 9.85144 15.4068 9.83466ZM18.272
                    13.693C18.2654 13.9833 18.6949 13.9971 18.6986 13.7032C18.7343 12.0486 17.7141
                    10.6856 15.7969 10.5419C15.5161 10.5215 15.4869 10.9627 15.767 10.9831C17.4297
                    11.1093 18.3055 12.244 18.272 13.693ZM16.9338 15.7014C17.0855 15.4965 17.4523
                    15.3667 17.8125 15.5753C18.2982 15.8589 18.9166 16.3001 19.3265 16.6998C19.5576
                    16.8945 19.6102 17.192 19.4519 17.5063V17.5114C19.0953 18.1612 18.4273 18.8788
                    17.7403 18.6498L17.7338 18.6396C17.0366 18.4376 15.3943 17.5625 14.3566
                    16.7085C12.5313 15.216 11.7414 13.3243 11.3095 12.2898L11.3094 12.2897C11.2188
                    12.0727 11.144 11.8934 11.0786 11.7634C10.8576 11.0524 11.5482 10.3618 12.179
                    9.99281H12.1856C12.489 9.82873 12.7807 9.88342 12.9747 10.1263C13.02 10.1898
                    13.0762 10.258 13.1431 10.3393L13.1431 10.3393C13.3482 10.5885 13.6543 10.9605
                    14.0612 11.6956C14.2632 12.0683 14.1378 12.4475 13.9395 12.605L13.5427
                    12.9332C13.3415 13.1002 13.3684 13.4116 13.3684 13.4116C13.3684 13.4116 13.9562
                    15.7116 16.1542 16.2928C16.1542 16.2928 16.4554 16.3206 16.6166 16.112L16.9338
                    15.7014ZM16.0973 12.1696C16.7981 12.2104 17.138 12.5765 17.1744 13.3284C17.1875
                    13.6223 17.6142 13.6018 17.601 13.3079C17.5544 12.3264 17.0424 11.7794 16.1207
                    11.7284C15.8399 11.7116 15.8136 12.1528 16.0973 12.1696Z"
                  fill="#665CAC"
                />
              </g>
            </svg>
          </a>
          <a href="/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity=".5">
                <path
                  d="M15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C23.283 30 30 23.283 30 15C30
                  6.717 23.283 0 15 0ZM15.3179 23.7334C15.3177 23.7334 15.3181 23.7334 15.3179
                  23.7334H15.3143C13.8116 23.7328 12.3351 23.356 11.0239 22.641L6.26472
                  23.8891L7.53845 19.2382C6.7527 17.8773 6.33934 16.3332 6.34003 14.7514C6.34209
                  9.80301 10.3695 5.77721 15.3179 5.77721C17.7193 5.77812 19.9736 6.71288 21.6685
                  8.40912C23.3636 10.1056 24.2965 12.3605 24.2956 14.7585C24.2935 19.7072 20.2657
                23.7334 15.3179 23.7334Z"
                  fill="#25D366"
                />
                <path
                  d="M15.3209 7.29309C11.2049 7.29309 7.85751 10.6391 7.85568 14.7521C7.85523
                  16.1616 8.24982 17.5342 8.99666 18.7218L9.17404 19.0041L8.42011 21.7568L11.2443
                  21.0162L11.5169 21.1777C12.6624 21.8575 13.9758 22.2171 15.3147
                  22.2176H15.3177C19.4305 22.2176 22.7779 18.8713 22.7797 14.7581C22.7804 12.7647
                  22.0049 10.8907 20.5962 9.48074C19.1874 8.07083 17.3138 7.29378 15.3209
                  7.29309ZM19.7099 17.9592C19.5229 18.4829 18.6269 18.961 18.1959 19.0256C17.8093
                  19.0833 17.3204 19.1073 16.783 18.9368C16.4571 18.8333 16.0394 18.6953 15.504
                  18.4644C13.2539 17.493 11.7842 15.228 11.6721 15.0783C11.5599 14.9286 10.7561
                  13.8622 10.7561 12.7583C10.7561 11.6547 11.3356 11.112 11.5411 10.8877C11.7469
                  10.6631 11.99 10.6071 12.1394 10.6071C12.2889 10.6071 12.4386 10.6084 12.5693
                  10.6149C12.7071 10.6217 12.892 10.5624 13.074 10.9998C13.261 11.4489 13.7096
                  12.5526 13.7656 12.6647C13.8217 12.7771 13.859 12.908 13.7844 13.0577C13.7096
                  13.2074 13.461 13.5303 13.2237 13.8247C13.1241 13.9481 12.9943 14.0579 13.1252
                  14.2825C13.2559 14.5068 13.7064 15.2412 14.3731 15.8359C15.23 16.5999 15.9528
                  16.8365 16.1771 16.9489C16.4012 17.0611 16.5321 17.0423 16.6631 16.8929C16.7938
                  16.7432 17.2238 16.238 17.3733 16.0135C17.5227 15.789 17.6724 15.8265 17.878
                  15.9013C18.0837 15.976 19.1865 16.5186 19.4108 16.6308C19.6351 16.7432 19.7846
                  16.7992 19.8406 16.8929C19.8969 16.9865 19.8969 17.4353 19.7099 17.9592Z"
                  fill="#25D366"
                />
              </g>
            </svg>

          </a>
          <a href="/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity=".5">
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  fill="#6E7C83"
                />
                <path
                  d="M23.25 7H6.75V23.5H23.25V7Z"
                  fill="#ECEFF1"
                />
                <path
                  d="M15 16.9852L23.25 23.5V10.6382L15 16.9852Z"
                  fill="#CFD8DC"
                />
                <path
                  d="M23.9375 7H23.25L15 13.5148L6.75 7H6.0625C4.924 7 4 7.924 4 9.0625V21.4375C4
                  22.576 4.924 23.5 6.0625 23.5H6.75V10.6382L15 16.9839L23.25
                  10.6369V23.5H23.9375C25.076 23.5 26 22.576 26 21.4375V9.0625C26 7.924 25.076
                  7 23.9375 7Z"
                  fill="#F44336"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions(['toggleModalWindow', 'changeModalWindowContent']),
    openOrdering() {
      this.changeModalWindowContent(
        {
          contentName: 'ordering',
          documentSrc: null,
        },
      );
      this.toggleModalWindow(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  border-bottom: 1px solid #6E7C83;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .location{
    width: 650px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div{
      width: 275px;
      color: #6E7C83;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 14px;
      > span {
        font-weight: bold;
      }
      &:last-child{
        width: 326px;
      }
    }
  }
  .oreder-translate{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 177px;
    height: 40px;
    background: #807BE4;
    border-radius: 5px;
    padding: 13px 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    transition: all .2s ease;
    border: none;
    &:hover{
      background: #B7ABFB;
      box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.4);
    }
  }
  .contacts{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .phones{
      display: flex;
      flex-direction: column;
      >span{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 14px;
        color: #0B1838;
      }
    }
    .social-media{
      padding: 0;
      display: flex;
      width: 160px;
      justify-content: space-around;
      margin: 0;
      align-items: center;
      a{
        position: relative;
        svg{
          path, g, circle{
            transition: all .3s ease;
          }
        }
        &:hover{
          svg{
            g{
              opacity: 1;
              path{
                fill:#807BE4;
              }
            }
          }
        }
        &:last-child:hover{
          svg{
            g{
              opacity: 1;
              circle{
                fill: #807BE4;
              }
              path:last-child{
                fill: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.brand{
  display: flex;
  align-items: center;
  img{
    margin-right: 10px;
  }
  .tagline{
    margin: 0;
    padding: 0 0 0 10px;
    border-left: 1px solid #6E7C83;
    font-family: Montserrat;
    font-style: normal;
    font-size: 13px;
    line-height: 14px;
    span{
    font-weight: bold;
    color: #807BE4;
    }
  }
}
</style>
