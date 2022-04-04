<template>
  <div class="translate-steps">
    <div class="container">
      <h5>5 этапов <b>качественного перевода</b></h5>
      <div class="steps-list">
        <div class="step">
          <div class="step-content">
            <span class="step-title"><span class="big-number">1</span> шаг</span>
            <img
              :src="require('../assets/translate-steps/notification.png')"
              alt="notification-icon"
            >
            <div class="step-content-bg"></div>
            <div class="step-text">
              <p>
                Вам нужно:
              </p>
              <div class="first-step-buttons">
                <a href="#calculator">Рассчитать стоимость перевода</a>
                <a href="#calculator">Оставить заказ</a>
              </div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-content">
            <span class="step-title"><span class="big-number">2</span> шаг</span>
            <img
              :src="require('../assets/translate-steps/calculator2.png')"
              alt="calculator2-icon"
            >
            <div class="step-content-bg"></div>
            <div class="step-text">
              <p>Мы проверяем ваш текст на перевод, согласовываем стоимость и сроки</p>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-content">
            <span class="step-title"><span class="big-number">3</span> шаг</span>
            <img
              :src="require('../assets/translate-steps/card.png')"
              alt="card-icon"
            >
            <div class="step-content-bg"></div>
            <div class="step-text">
              <p>Вы переводите оплату за перевод</p>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-content">
            <span class="step-title"><span class="big-number">4</span> шаг</span>
            <img
              :src="require('../assets/translate-steps/way.png')"
              alt="way-icon"
            >
            <div class="step-content-bg"></div>
            <div class="step-text">
              <p>Выполнение перевода и обработки разными людьми:</p>
              <div class="fourth-step-people-list">
                <div
                  class="person"
                  v-for="(person, ind) of peopleList"
                  :key="ind"
                >
                  <img
                    :src="require(`../assets/translate-steps/${person.icon}.png`)"
                    :alt="person.icon"
                  >
                  <span class="person-position">
                    {{ person.position }}
                  </span>
                  <svg
                    v-if="ind < peopleList.length-1"
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9H22M22 9L14 1M22 9L14 17"
                      stroke="#523F79"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-content">
            <span class="step-title"><span class="big-number">5</span> шаг</span>
            <img
              :src="require(`../assets/translate-steps/book.png`)"
              alt="book-icon"
            >
            <div class="step-content-bg"></div>
            <div class="step-text">
              <p>
                Вы получаете перевод, принимаете работу или отправляете
                на бесплатную обработку правок при необходимости
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslateSteps',
  data: () => ({
    peopleList: [
      {
        icon: 'translator2',
        position: 'Переводчик',
      },
      {
        icon: 'correcter',
        position: 'Корректор',
      },
      {
        icon: 'editor',
        position: 'Отраслевый редактор',
      },
      {
        icon: 'native-speaker',
        position: 'Носитель языка',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.translate-steps{
  margin-top: 130px;
  .container{
    .steps-list{
      margin-top: 150px;
      height: 2000px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .step{
        display: flex;
        align-items: center;
        &:nth-child(odd) {
          justify-content: start;
        }
        &:nth-child(even) {
          justify-content: end;
          .step-content{
            &::before{
              right: 0;
              left: -45%;
              width: 45%;
              border-left: 2px solid #000;
              border-right: 0;
              border-radius: 50px 0 0 0;
            }
            &::after{
              left: -47.4%;
            }
          }
        }
        &:nth-child(4) .step-content{
          &::after{
            bottom: -76%;
            left: -47.27%;
          }
          &::before{
            height: 130%;
            bottom: -79%;
          }
        }
        &:last-child .step-content{
          &::after{
            width: 0;
            height: 0;
          }
          &::before{
            width: 0;
            height: 0;
          }
        }
        .step-content{
          min-width: 670px;
          min-height: 225px;
          position: relative;
          border: 2px solid #523F79;
          box-sizing: border-box;
          box-shadow: 0px 8px 20px rgba(159, 160, 181, .4);
          padding: 30px 60px;
          display: flex;
          .step-content-bg{
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(5px);
            background: radial-gradient(100% 459.32% at 1.82% 0%,
                      rgba(226, 234, 248, 0.46) 0%, rgba(234, 240, 252, 0.02) 100%);
          }
          &::before{
            content: "";
            position: absolute;
            width: 70%;
            height: 145%;
            right: -70%;
            box-sizing: border-box;
            bottom: -95%;
            border-width: 2px;
            border-image-source: linear-gradient(0deg, #523F79 0%, #807BE4 100%);
            border-style: solid;
            border-image-slice: 1;
            border-bottom: 0;
            border-left: 0;
            border-radius: 0 50px 0 0;
            background-origin: border-box;
            background-clip: content-box, border-box;
          }
          &::after{
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border-bottom: 2px solid #523F79;
            border-left: 2px solid #523F79;
            transform: rotate(-45deg);
            bottom: -91%;
            right: -73%;
          }
         .step-title{
            top: -100px;
            left: 0;
            z-index: -2;
            position: absolute;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 700;
            font-size: 80px;
            line-height: 14px;
            display: flex;
            align-items: baseline;
            background: linear-gradient(0deg, #523F79 0%, #807BE4 98%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            .big-number{
              font-size: 200px;
              width: 127px;
              height: 144px;
              display: flex;
              align-items: center;
            }
          }
          > img{
            position: absolute;
            top: 30px;
            right: 10px;
            width: 70px;
            height: 70px;
          }
          .step-text{
            width: max-content;
            display: flex;
            justify-content: end;
            flex-direction: column;
            p{
              font-family: Montserrat;
              font-style: normal;
              font-weight: 700;
              font-size: 28px;
              line-height: 24px;
              max-width: 710px;
              color: #39435B;
            }
            .first-step-buttons{
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 550px;
              height: 70px;
              a{
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 14px;
                color: #F2F5FA;
                border-radius: 5px;
                text-decoration: none;
                cursor: pointer;
                padding: 20px;
                border-radius: 5px;
                transition: all .3s ease;
                &:first-child{
                  background: #40A798;
                  position: relative;
                  &::after{
                    content: '';
                    height: 70px;
                    width: 1px;
                    background: #6E7C83;
                    position: absolute;
                    top: -8px;
                    right: -10px;
                  }
                }
                &:last-child{
                  background: #807BE4;
                }
                &:hover{
                  opacity: .7;
                }
              }
            }
            .fourth-step-people-list{
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 750px;
              .person{
                display: flex;
                flex-direction: column;
                align-items: center;
                .person-position{
                  font-family: 'Gilroy';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 19px;
                  line-height: 22px;
                  color: #523F79;
                  letter-spacing: 0.01em;
                  padding: 10px;
                  background: #B7ABFB;
                  margin-top: 10px;
                }
                position: relative;
                svg{
                  position: absolute;
                  top: 70%;
                  right: -30px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
