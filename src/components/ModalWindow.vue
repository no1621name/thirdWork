<template>
  <div
    @click="closeModalWindow"
    :class="['modal-window', 'close', {active: isShowModalWindow}]"
    ref="modalWindow"
  >
    <div :class="['modal-window-content', modalWindowContent]">
      <template v-if="modalWindowContent == 'document'">
        <img
          :src="require(`../assets/documents/${documentImgSrc}.jpg`)"
          alt="some"
          ref="modalWindowDocument"
        >
      </template>
      <template v-else>
        <div class="ordering-title">
          <h6>Оставьте свой номер</h6>
          <span>и менеджер свяжется с Вами удобным для Вас способом</span>
        </div>
        <div class="ordering-contacts">
          <button
            :class="['contact', {'active-contact': contact.active}]"
            v-for="(contact, ind) of contactsList"
            :key="ind"
            v-html="contact.icon"
            :data-name="contact.name"
            @click="selectContact(contact.name)"
            aria-label="contact"
          ></button>
          <span
            class="contacts-warning"
            ref="contactsWarning"
          >
            Пожалуйста, выберите один из способов контакта с вами.
          </span>
        </div>
        <form
          id="orderingForm"
          action="/"
          @submit.prevent="sendData"
          method="get"
          ref="orderingForm"
        >
          <div class="client-info">
            <label for="clientNameOrdering">
              <input
                type="text"
                name="client-name-ordering"
                id="clientNameOrdering"
                placeholder="Введите имя"
                :required="true"
              > <span class="star-require">*</span>
            </label>
            <label for="clientPhoneOrdering">
              <input
                type="number"
                name="client-phone-ordering"
                id="clientPhoneOrdering"
                placeholder="Введите номер"
                :required="true"
              > <span class="star-require">*</span>
            </label>
            <label for="clientComment">
              <textarea
                placeholder="Оставьте комментарий"
                name="client-comment"
                id="clientComment"
              ></textarea>
            </label>
          </div>
          <div class="file-info">
            <div class="ordering-title">
              <h6>Добавьте файлы</h6>
              <span>чтобы менеджер быстро рассчитал цену и сроки</span>
            </div>
            <label for="clientFileOrdering">
              <svg
                width="42"
                height="48"
                viewBox="0 0 42 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 2H34V40H2V2ZM0 42V0H36V6H42V48H5V42H0ZM6 42V47H41V7H36V42H6ZM10
                      28V20H8V29V30H9H27H28V29V20H26V28H10ZM18.8321 8.75192L18
                      8.19722L17.1679 8.75192L11.1679 12.7519L12.8321 15.2481L16.5
                      12.8028V26H19.5V12.8028L23.1679 15.2481L24.8321 12.7519L18.8321 8.75192Z"
                  fill="#523F79"
                />
              </svg>
              <input
                type="file"
                name="client-file-ordering"
                id="clientFileOrdering"
                :required="true"
              >
            </label>
          </div>
          <button
            type="submit"
          >
            Заказать перевод
          </button>
        </form>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ModalWindow',
  data: () => ({
    contactsList: [
      {
        name: 'tg',
        icon: `
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0
                  6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263
                  9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675
                  10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8
                  19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013
                  18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963
                  17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z"
                fill="#22A2EB"
              />
            </g>
          </svg>
        `,
        active: false,
      },
      {
        name: 'whatsapp',
        icon: `
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C23.283 30 30 23.283 30
                  15C30 6.717 23.283 0 15 0ZM15.3179 23.7334C15.3177 23.7334 15.3181 23.7334
                  15.3179 23.7334H15.3143C13.8116 23.7328 12.3351 23.356 11.0239 22.641L6.26472
                  23.8891L7.53845 19.2382C6.7527 17.8773 6.33934 16.3332 6.34003 14.7514C6.34209
                  9.80301 10.3695 5.77721 15.3179 5.77721C17.7193 5.77812 19.9736 6.71288 21.6685
                  8.40912C23.3636 10.1056 24.2965 12.3605 24.2956 14.7585C24.2935 19.7072 20.2657
                  23.7334 15.3179 23.7334Z"
                fill="#25D366"
              />
              <path
                d="M15.3209 7.29309C11.2049 7.29309 7.85751 10.6391 7.85568 14.7521C7.85523
                  16.1616 8.24982 17.5342 8.99666 18.7218L9.17404 19.0041L8.42011
                  21.7568L11.2443 21.0162L11.5169 21.1777C12.6624 21.8575 13.9758 22.2171
                  15.3147 22.2176H15.3177C19.4305 22.2176 22.7779 18.8713 22.7797 14.7581C22.7804
                  12.7647 22.0049 10.8907 20.5962 9.48074C19.1874 8.07083 17.3138 7.29378 15.3209
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
        `,
        active: false,
      },
      {
        name: 'viber',
        icon: `
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0
                  6.71573 0 15C0 23.2843 6.71573 30 15 30ZM21.7345 7.96609C23.1288 9.22114
                  23.9018 11.996 23.3797 16.3912C22.9228 20.269 20.3085 20.9558 19.431
                  21.1864C19.3449 21.209 19.2755 21.2272 19.2266 21.2436C18.9896 21.3224
                  16.9039 21.862 14.1881 21.6265L13.9179 21.9496C12.5356 23.6033 12.2974
                  23.8883 11.8057 23.7289C11.3491 23.5853 11.3761 22.8706 11.3761
                  22.8706L11.3798 21.1065H11.3761C7.40826 19.9514 7.46368 15.6933 7.51035
                  13.4202C7.55703 11.1478 7.98291 9.31229 9.19201 8.06162C11.8844 5.50485
                  19.4847 5.82208 21.7352 7.96536L21.7345 7.96609ZM12.2024 23.085C12.7369 22.5286
                  14.4558 20.3853 14.4558 20.3853C16.7588 20.5392 18.5928 20.0673 18.7905
                  20.0017C18.8365 19.9864 18.9029 19.9704 18.9856 19.9504L18.9856 19.9504C19.733
                  19.7699 21.8098 19.2685 22.1939 16.0681C22.1935 16.0522 22.1991 15.9958 22.2081
                  15.905C22.2995 14.9846 22.7419 10.5276 20.8528 8.85286C19.1551 7.25725 12.4919
                  6.76209 10.1298 8.97684C9.10596 10.0233 8.75884 11.5774 8.72237 13.4749L8.71819
                  13.6764C8.67649 15.6177 8.60316 19.0307 11.8516 19.9616C11.8516 19.9616 11.8385
                  22.6547 11.8385 22.8903C11.8356 23.2491 12.0274 23.2659 12.2024 23.085ZM15.4068
                  9.83466C15.126 9.83102 15.126 9.39346 15.4068 9.39346C17.8425 9.41024 19.8013
                  11.1502 19.8246 14.1511H19.8253C19.829 14.445 19.3987 14.4487 19.3987
                  14.1548C19.379 11.3697 17.585 9.85144 15.4068 9.83466ZM18.272 13.693C18.2654
                  13.9833 18.6949 13.9971 18.6986 13.7032C18.7343 12.0486 17.7141 10.6856 15.7969
                  10.5419C15.5161 10.5215 15.4869 10.9627 15.767 10.9831C17.4297 11.1093 18.3055
                  12.244 18.272 13.693ZM16.9338 15.7014C17.0855 15.4965 17.4523 15.3667 17.8125
                  15.5753C18.2982 15.8589 18.9166 16.3001 19.3265 16.6998C19.5576 16.8945 19.6102
                  17.192 19.4519 17.5063V17.5114C19.0953 18.1612 18.4273 18.8788 17.7403
                  18.6498L17.7338 18.6396C17.0366 18.4376 15.3943 17.5625 14.3566 16.7085C12.5313
                  15.216 11.7414 13.3243 11.3095 12.2898L11.3094 12.2897C11.2188 12.0727 11.144
                  11.8934 11.0786 11.7634C10.8576 11.0524 11.5482 10.3618 12.179
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
        `,
        active: false,
      },
      {
        name: 'phone',
        icon: `
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2652_48184)">
              <path
                d="M9.93801 14.0619C7.64725 11.7711 7.13001 9.48037 7.01332 8.56258C6.98071
                  8.3088 7.06804 8.05431 7.24959 7.87402L9.10339 6.02106C9.37608 5.74853
                  9.42447 5.32381 9.22008 4.99692L6.26849 0.413749C6.04236 0.0517829 5.57805
                  -0.0788543 5.19635 0.112094L0.458009 2.34368C0.149344 2.49567 -0.032209
                  2.82362 0.00283653 3.16589C0.251112 5.52451 1.27939 11.3226 6.97732
                  17.0209C12.6752 22.7193 18.4725 23.7471 20.8324 23.9954C21.1746 24.0304 21.5026
                  23.8489 21.6546 23.5402L23.8861 18.8019C24.0764 18.421 23.9466 17.9579 23.5861
                  17.7314L19.003 14.7806C18.6763 14.576 18.2516 14.6241 17.9788 14.8965L16.1259
                  16.7503C15.9456 16.9319 15.6911 17.0192 15.4373 16.9866C14.5195 16.8699 12.2288
                  16.3526 9.93801 14.0619Z"
                fill="#39435B"
              />
              <path
                d="M19.0346 12.8276C18.5775 12.8276 18.207 12.4571 18.207 12C18.2031 8.57364
                  15.4264 5.79699 12.0001 5.79311C11.543 5.79311 11.1725 5.42259 11.1725
                  4.96553C11.1725 4.50846 11.543 4.13794 12.0001 4.13794C16.3402 4.14273
                  19.8574 7.65989 19.8621 12C19.8621 12.4571 19.4916 12.8276 19.0346 12.8276Z"
                fill="#39435B"
              />
              <path
                d="M23.1725 12.8276C22.7154 12.8276 22.3449 12.4571 22.3449 12C22.3385 6.28936
                  17.7107 1.66156 12.0001 1.65517C11.543 1.65517 11.1725 1.28465 11.1725
                  0.827586C11.1725 0.370523 11.543 0 12.0001 0C18.6245 0.0072976 23.9928 5.37561
                  24.0001 12C24.0001 12.2195 23.9129 12.43 23.7577 12.5852C23.6025 12.7404 23.392
                  12.8276 23.1725 12.8276Z"
                fill="#39435B"
              />
            </g>
            <defs>
              <clipPath id="clip0_2652_48184">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        `,
        active: false,
      },
    ],
  }),
  methods: {
    ...mapActions(['toggleModalWindow']),
    closeModalWindow(e) {
      if (e.target.classList.contains('close')) {
        this.toggleModalWindow(false);
      }
    },
    removeSelectedContact() {
      this.contactsList.forEach((el) => {
        el.active = false;
      });
    },
    selectContact(name) {
      this.removeSelectedContact();
      this.contactsList.find((el) => el.name === name).active = true;
      this.$refs.contactsWarning.classList.remove('show-warning');
    },
    sendData(e) {
      const formOrderingData = Object.fromEntries(new FormData(e.target));
      if (document.querySelector('.active-contact') !== null) {
        formOrderingData.selectContact = this.contactsList.find((el) => el.name === document.querySelector('.active-contact').dataset.name).name;
        console.log(formOrderingData);
        this.toggleModalWindow(false);
        this.removeSelectedContact();
        e.target.reset();
      } else {
        this.$refs.contactsWarning.classList.add('show-warning');
        throw new Error('choose some contact');
      }
    },
  },
  computed: {
    ...mapGetters(['isShowModalWindow', 'modalWindowContent', 'documentImgSrc']),
  },
};
</script>

<style lang="scss" scoped>
.modal-window{
  opacity: 0;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all .3s ease;
  .modal-window-content{
    transform: translate(-50%, -200%);
    transition: transform .5s ease;
    &.document{
      width: 450px;
      height: 580px;
      background: #fff;
      border: 2px solid #523F79;
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        // there will be full-size image, but i don't have it. sorry
        display: block;
        width: 384px;
        height: 458.28px;
        box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.4);
      }
    }
    &.ordering{
      width: 950px;
      height: 760px;
      box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.4),
                  inset 15px 15px 25px #FFFFFF,
                  inset -6px -6px 14px rgba(14, 25, 48, 0.1);
      background: #F2F5FA;
      background-blend-mode: overlay, normal;
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .ordering-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        h6{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 28px;
          color: #39435B;
          margin: 0;
        }
        span{
          font-family: 'Gilroy';
          font-style: normal;
          font-weight: 500;
          font-size: 21px;
          line-height: 22px;
          color: #39435B;
          letter-spacing: 0.01em;
          margin-top: 15px;
        }
      }
      .ordering-contacts{
        position: relative;
        width: 305px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        .contact{
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: transparent;
          opacity: .5;
          border: none;
          cursor: pointer;
          position: relative;
          transition: box-shadow .2s ease, opacity .2s ease;
          svg{
            position: relative;
            z-index: -1;
          }
          &:hover{
            box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.5);
            opacity: 1;
          }
          &.active-contact{
            opacity: 1;
            box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.6);
            border: 2px solid #807BE4;
          }
        }
        .contacts-warning{
          position: absolute;
          background: #F2F5FA;
          border: 1px solid #E46161;
          color: #E46161;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 24px;
          width: max-content;
          padding: 2px;
          bottom: -30px;
          left: -26%;
          opacity: 0;
          transition: opacity .2s ease;
          &.show-warning{
            opacity: 1;
          }
        }
      }
      form{
        > div {margin-bottom: 40px;}
        .client-info{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          label{
            .star-require{
              bottom: 75%;
            }
            > input{
              border: none;
              box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
            }
            > textarea{
              box-sizing: border-box;
              width: 830px;
              height: 100px;
              box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
              padding: 20px 17px;
              border: none;
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 400;
              font-size: 17px;
              line-height: 14px;
              color: #39435B;
              resize: none;
              &:focus{
                outline: none;
              }
              &::-moz-placeholder{
                color: #BCC9CE;
              }
              &::-webkit-input-placeholder{
                color: #BCC9CE;
              }
            }
          }
        }
        .file-info{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          label{
            position: relative;
            cursor: pointer;
            > input{
              visibility: hidden;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
            }
            svg path {
              transition: all .2s ease;
            }
            &:hover{
              svg path{
                d: path("M 2 2 H 34 V 40 H 2 V 2 Z M 0 42 V 0 H 36 V 4 H 38 V 44 H 3 V 42 H 0 Z M 4 42 V 43 H 37 V 5 H 36 V 42 H 4 Z M 10 28 V 20 H 8 V 29 V 30 H 9 H 27 H 28 V 29 V 20 H 26 V 28 H 10 Z M 18.8321 8.75192 L 18 8.19722 L 17.1679 8.75192 L 11.1679 12.7519 L 12.8321 15.2481 L 16.5 12.8028 V 26 H 19.5 V 12.8028 L 23.1679 15.2481 L 24.8321 12.7519 L 18.8321 8.75192 Z");
                fill: rgb(128, 123, 228);
              }
            }
          }
        }
        button{
          box-sizing: border-box;
          width: 370px;
          height: 68px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #807BE4;
          border-radius: 5px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 24px;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
          margin: 0 auto;
        }
      }
    }
  }
  &.active{
    z-index: 10000;
    opacity: 1;
    .modal-window-content {
      transform: translate(-50%, -50%);
    }
  }
}
</style>
