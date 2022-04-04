<template>
  <div class="advantages">
    <div class="container">
      <h5>ПерВсеЯз <b>развивается ежедневно</b></h5>
      <div class="advantages-list">
        <div
          class="advantage"
          v-for="(advantage, ind) of advantagesList"
          :key="ind"
        >
          <img
            :src="require(`../assets/advantages/${advantage.imgSrc}.png`)"
            :alt="advantage.imgSrc"
          >
          <div class="advantage-text">
            <h6>{{ advantage.title }}</h6>
            <p>{{ advantage.text }}</p>
          </div>
        </div>
      </div>
      <a href="#calculator">Заказать перевод</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
  data: () => ({
    advantagesList: [
      {
        title: '43',
        text: 'офиса по всему ближнему зарубежью',
        imgSrc: 'office',
      },
      {
        title: '310',
        text: 'переводчиков',
        imgSrc: 'translator',
      },
      {
        title: '1.7%',
        text: 'запросов на возврат',
        imgSrc: 'return',
      },
      {
        title: '39%',
        text: 'повторных заказов',
        imgSrc: 'repeat-order',
      },
      {
        title: '27%',
        text: 'клиентов стали постоянными',
        imgSrc: 'customer',
      },
      {
        title: '88%',
        text: 'Заказов после тестового периода',
        imgSrc: 'checklist',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.advantages{
  margin-top: 60px;
  .container{
    .advantages-list{
      margin-top: 60px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .advantage{
        width: 370px;
        height: 110px;
        box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
        background: #F2F5FA;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        img{
          width: max-content;
        }
        .advantage-text{
          width: 200px;
          h6{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 24px;
            margin: 0;
            margin-bottom: 6px;
            color: #523F79;
          }
          p{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 22px;
            color: #39435B;
            letter-spacing: 0.01em;
            margin: 10px 0;
          }
        }
        &:nth-child(n+3){
          margin-top: 30px;
        }
      }
    }
    a{
      margin: 0 auto;
      position: relative;
      cursor: pointer;
      width: 330px;
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
      margin-top: 25px;
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
</style>
