<template>
  <div class="test-translate">
    <div class="container">
      <h5>
        <b>88% клиентов</b> заказавших у нас бесплатный тестовый перевод, стали нашими клиентами
      </h5>
      <span>
        Если есть какие-либо сомнения, давайте мы их развеем!
        Мы можем перевести отрывок вашего текста <b>бесплатно!</b>
      </span>
      <form
        action="/"
        method="get"
      >
        <div class="client-info">
          <label for="clientName">
            Имя
            <input
              type="text"
              name="client-name"
              id="clientName"
              placeholder="Введите имя"
              :required="true"
            > <span class="star-require">*</span>
          </label>
          <label for="clientPhone">
            Номер
            <input
              type="number"
              name="client-phone"
              id="clientPhone"
              placeholder="Введите номер"
              :required="true"
            > <span class="star-require">*</span>
          </label>
        </div>
        <div class="file-info-wrap">
          <label
            for="clientFile"
            class="file-info"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2676_2615)">
                <path
                  d="M28.4912 3.85733L27.3925 2.75856C25.3807 0.74683 22.1191 0.74683 20.1074
                  2.75851C20.1074 2.75851 20.1074 2.75851 20.1073 2.75856L6.06707
                  16.7988C4.64457 18.2213 4.64457 20.5277 6.06707 21.9502L6.79957
                  22.6827C8.2485 24.0399 10.502 24.0399 11.9509 22.6827L22.3173
                  12.3163C22.5656 12.0764 22.5725 11.6808 22.3327 11.4325C22.0929 11.1842
                  21.6972 11.1773 21.4489 11.4171C21.4437 11.4222 21.4386 11.4273 21.4336
                  11.4325L11.0671 21.7989C10.1151 22.6897 8.6354 22.6897 7.68335
                  21.7989L6.95086 21.0664C6.01645 20.1321 6.01633 18.6172 6.95062
                  17.6828C6.95068 17.6828 6.9508 17.6827 6.95086 17.6826L20.991
                  3.64229C22.536 2.17086 24.9638 2.17086 26.5086 3.64229L27.6074
                  4.74106C29.1304 6.26494 29.1304 8.73476 27.6074 10.2586L11.9509
                  25.9152C9.83776 28.0275 6.41261 28.0275 4.2995 25.9152L2.83446
                  24.4514C0.722115 22.3383 0.722115 18.9131 2.83446 16.8L14.8172
                  4.81735C15.0655 4.57752 15.0724 4.18189 14.8326 3.93357C14.5927 3.6853
                  14.1971 3.67839 13.9488 3.91821C13.9436 3.92325 13.9385 3.92835 13.9334
                  3.93357L1.95073 15.915C-0.650234 18.5159 -0.650234 22.7329 1.95067
                  25.3338C1.95067 25.3339 1.95073 25.3339 1.95073 25.3339L3.41578
                  26.799C6.01668 29.3999 10.2336 29.4 12.8346 26.7991C12.8346 26.799 12.8347
                  26.799 12.8347 26.799L28.4912 11.1424C30.5029 9.13075 30.503 5.86907 28.4912
                  3.85733C28.4912 3.85733 28.4912 3.85733 28.4912 3.85733Z"
                  fill="#CFD8DC"
                />
                <path
                  d="M8.12464 28.7503C6.35719 28.7541 4.66146 28.0516 3.41456 26.799L1.95075
                25.3352C-0.650211 22.7343 -0.65027 18.5173 1.95069 15.9164L1.95075 15.9163L13.9335
                3.93357C14.1733 3.6853 14.569 3.67839 14.8173 3.91821C15.0655 4.15804 15.0725
                4.55367 14.8326 4.802C14.8276 4.80721 14.8225 4.81231 14.8173 4.81735L2.83454
                16.7988C0.722195 18.9119 0.722195 22.3371 2.83454 24.4502L4.29958 25.9152C6.41268
                28.0276 9.83784 28.0276 11.9509 25.9152L27.6075 10.2587C29.1305 8.73482 29.1305
                6.26499 27.6075 4.74112L26.5087 3.64235C24.9638 2.17092 22.536 2.17092 20.9911
                3.64235L6.95082 17.6825C6.01641 18.6168 6.01629 20.1317 6.95058 21.0661C6.95064
                21.0662 6.95076 21.0663 6.95082 21.0663L7.68331 21.7988C8.63536 22.6896 10.115
                22.6896 11.0671 21.7988L21.4335 11.4324C21.6733 11.1841 22.069 11.1772 22.3173
                11.4171C22.5655 11.6569 22.5724 12.0525 22.3326 12.3008C22.3276 12.3061 22.3225
                12.3112 22.3173 12.3162L11.9509 22.6827C10.502 24.0399 8.24851 24.0399 6.79958
                22.6827L6.06709 21.9502C4.64459 20.5277 4.64459 18.2213 6.06709 16.7988L20.1073
                2.75856C22.1191 0.74683 25.3807 0.74683 27.3924 2.75851C27.3924 2.75851 27.3924
                2.75851 27.3925 2.75856L28.4912 3.85733C30.503 5.86907 30.503 9.13069 28.4913
                11.1424C28.4913 11.1424 28.4913 11.1424 28.4912 11.1425L12.8347 26.799C11.5878
                28.0516 9.8921 28.7541 8.12464 28.7503Z"
                  fill="#40A798"
                />
              </g>
              <defs>
                <clipPath id="clip0_2676_2615">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              type="file"
              name="client-file"
              id="clientFile"
              :required="true"
            >
            <span class="client-file-text">Прикрепить документ</span>
          </label>
        </div>
        <button type="button">
          Заказать тест
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestTranslate',
};
</script>

<style lang="scss" scoped>
.test-translate{
  margin-top: 130px;
  .container{
    h5{
      max-width: 912px;
    }
    form{
      margin: 0 auto;
      border: 3px solid #523F79;
      display: flex;
      flex-direction: column;
      width: 95%;
      height: 350px;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      .file-info-wrap{
        margin-top: 35px;
        display: flex;
        justify-content: start;
        width: 830px;
        .file-info{
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          &:hover{
            svg{
              path{
                fill: #523F79;
              }
            }
            .client-file-text{
              color: #523F79;
              &::before{
                left: 26%;
                width: 80px;
                background: #523F79;
              }
            }
          }
          svg{
            path{
              transition: fill .2s ease;
            }
          }
          input{
            visibility: hidden;
            position: absolute;
          }
          .client-file-text{
            margin-left: 15px;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 500;
            font-size: 19px;
            line-height: 22px;
            letter-spacing: 0.01em;
            color: #40A798;
            position: relative;
            transition: all .2s ease;
            &::before{
              content: '';
              width: 100%;
              height: 1px;
              background: #40A798;
              position: absolute;
              bottom: -8px;
              transition: background-color .2s ease;
            }
          }
        }
      }
      button{
        position: relative;
        cursor: pointer;
        width: 264px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border: 0;
        background: linear-gradient(270deg, #523F79 0%, #807BE4 100%);
        border-radius: 5px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        margin-top: 40px;
        transition: all .2s ease;
        z-index: 1;
        text-decoration: none;
        &::before{
          content: '';
          background: #523F79;
          width: 100%;
          height: 100%;
          position: absolute;
          top:0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          border-radius: 5px;
          z-index: -1;
          transition: all .2s ease;
        }
        &:hover{
          &::before{
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.client-info{
  display: flex;
  justify-content: space-between;
  width: 830px;
  label{
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: space-between;
    position: relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 14px;
    color: #39435B;
    input{
      width: 400px;
      height: 60px;
      border: 2px solid #B7ABFB;
      box-sizing: border-box;
      color: #6E7C83;
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 14px;
      padding: 17px 23px;
      position: relative;
      &:focus{
        outline: none;
      }
      &::-moz-placeholder{
        color: #BCC9CE;
      }
      &::-webkit-input-placeholder{
        color: #BCC9CE;
      }
      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
    .star-require{
      color: #E46161;
      position: absolute;
      bottom: 30%;
      right: 10px;
      font-size: 25px;
    }
  }
}
</style>
