<template>
  <div
    class="homepage"
    id="homepage"
  >
    <div class="container">
      <div class="content">
        <h4>Бюро переводов ПерВсеЯз</h4>
        <p>
          Переведем документы любой тематики с учетом специфической терминологии и устойчивых фраз
          <span class="rectangle"></span>
        </p>
        <a href="#calculator">Расчитать стоимость самостоятельно</a>
      </div>
      <div class="advantages">
        <div class="advantages-list">
          <div
            class="advantage"
            v-for="(advantage, ind) of advantagesList"
            :key="ind"
          >
            <div class="advantage-content">
              <div class="icon-wrap">
                <div class="border"></div>
                <img
                  :src="require(`../assets/homepage/${advantage.src}.png`)"
                  alt="time-icon"
                >
              </div>
              <p
                class="advantage-text"
                v-html="advantage.text"
              >
              </p>
            </div>
            <hr
              class="garesontal-hr"
              v-if="advantage.isHr"
            >
          </div>
        </div>
      </div>
    </div>
    <a
      class="calc-link"
      href="#calculator"
    >
      <span class="calc-link-toggle">Рассчитать стоимость</span>
      <img
        src="@/assets/homepage/calculator.png"
        alt="calculator"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    advantagesList: [
      {
        src: 'time-icon',
        text: 'Среднее время перевода - <b>3 часа</b>',
        isHr: true,
      },
      {
        src: 'lowprice-icon',
        text: 'Цены на <b>10%</b> ниже рынка',
        isHr: true,
      },
      {
        src: 'language-icon',
        text: '<b>108</b> языков в работе',
        isHr: true,
      },
      {
        src: 'translator-icon',
        text: 'Более <b>310</b> переводчиков, из которых <b>273</b> - носители языка',
        isHr: true,
      },
      {
        src: 'iso-icon',
        text: 'Соответствуем международным стандартам качества <b>ISO 17100: 2015</b>',
        isHr: true,
      },
      {
        src: 'calendar-icon',
        text: '<b>12</b> лет на рынке',
        isHr: false,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.homepage{
  position: relative;
  background: url('@/assets/homepage/homepage-bg.png');
  background-repeat: no-repeat;
  background-position: right center;
  .container{
    position: relative;
    height: 727px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .content{
      width: max-content;
      margin: 150px 0 0 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 210px;
      h4{
        margin: 0;
        padding: 0;
        display: inline-block;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 38px;
        line-height: 27px;
        color: #523F79;
        min-height: 35px;
        background: linear-gradient(270deg, #523F79 0%, #807BE4 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p{
        max-width: 470px;
        display: inline-block;
        position: relative;
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 19px;
        line-height: 22px;
        letter-spacing: 0.01em;
        color: #0B1838;
        margin-bottom: 57px;
        margin-top: 27px;
        .rectangle{
          border-right: 6px solid #B7ABFB;
          border-bottom: 6px solid #B7ABFB;
          box-sizing: border-box;
          width: 103px;
          height: 75px;
          position: absolute;
          z-index: 2;
          bottom: -22px;
          right: -15px;
          &::before{
            content: "";
            background: #B7ABFB;
            width: 6px;
            height: 16px;
            position: absolute;
            bottom: -1px;
            left: 0;
          }
          &::after{
            content: "";
            background: #B7ABFB;
            width: 46px;
            height: 6px;
            position: absolute;
            top: 0;
            right: -1px;
          }
        }
      }
      a{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 390px;
        height: 60px;
        text-decoration: none;
        padding: 23px 30px;
        color: #fff;
        border-radius: 5px;
        background: linear-gradient(270deg, #523F79 0%, #807BE4 100%);
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;
        z-index: 1;
        &::before{
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background: #807BE4;
          box-shadow: 0px 0px 15px #807BE4;
          transition: all .2s ease;
          opacity: 0;
          border-radius: 5px;
          z-index: -1;
        }
        &:hover::before{
          opacity: 1;
        }
      }
    }
    .advantages{
      .advantages-list{
        display: flex;
        justify-content: space-between;
        .advantage{
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          .advantage-content{
            width: 190px;
            height: 145px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon-wrap{
              width: max-content;
              padding: 15px;
              position: relative;
              .border{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                &::before{
                  right: 0;
                  bottom: 0;
                  border-width: 0 2px 2px 0;
                }
                &::after {
                  left: 0px;
                  bottom: 0px;
                  border-width: 0 0 2px 2px;
                }
              }
              &::before,
              &::after,
              .border::before,
              .border::after{
                content: '';
                position: absolute;
                width: 30px;
                height: 30px;
                border-style:solid;
                border-color:#807BE4;
              }
              &::before{
                left: 0px;
                top: 0px;
                border-width: 2px 0 0 2px;
              }
              &::after{
                right: 0px;
                top: 0px;
                border-width: 2px 2px 0 0;
              }
            }
            .advantage-text{
              text-align: center;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 18px;
              letter-spacing: -0.03em;
              color: #0B1838;
            }
          }
          .garesontal-hr{
            width: 60px;
            height: 1px;
            background: #B7ABFB;
            border: none;
            margin-top: 36px;
          }
        }
      }
    }
  }
  .calc-link{
    z-index: 999;
    position: fixed;
    top: 45%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 322px;
    height: 65px;
    text-decoration: none;
    transition: all .5s ease;
    opacity: .6;
    overflow: hidden;
    img{
      position: relative;
      z-index: 2;
      padding: 15px 25px;
      background: #6FE8C8;
      border-radius: 5px 0 0 5px;
    }
    .calc-link-toggle{
      position: relative;
      z-index: 1;
      transform: translateX(245px);
      width: 244px;
      padding-top: 26px;
      padding-bottom: 26px;
      padding-left: 30px;
      background: #6FE8C8;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 14px;
      color: #0B1838;
      transition: all .5s ease;
      border-radius: 5px 0 0 5px;
    }
    &:hover{
      opacity: 1;
      .calc-link-toggle{
        transform: translateX(0);
      }
      img{
        border-radius: 0;
      }
    }
  }
}

</style>
