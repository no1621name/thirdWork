<template>
  <div class="spcial-translator">
    <div class="container">
      <h5>Перевод выполнит <b>переводчик с узкой специализацией</b></h5>
      <span>с соблюдением Ваших стандартов, терминов и стилистики</span>
      <div class="special-translator-content">
        <img
          src="@/assets/special-translator/earth.png"
          alt="earth-img"
        >
        <div class="special-translator-list">
          <div
            class="special-translator-list-item"
            v-for="(guarantee, ind) of guarantees"
            :key="ind"
          >
            <img
              :src="require(`../assets/special-translator/${guarantee.imgSrc}.png`)"
              :alt="guarantee.imgSrc"
            >
            <div class="special-translator-list-item-text">
              <h6>{{ guarantee.title }}</h6>
              <p> {{ guarantee.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialTranslator',
  data: () => ({
    guarantees: [
      {
        imgSrc: 'back',
        title: 'Гарантия возврата',
        text: 'Возместим 100% от уплаченной стоимости заказа, если допустим объективные ошибки в переводе',
      },
      {
        imgSrc: 'expert',
        title: 'Переводчик-эксперт',
        text: 'Переводчики имеют 2-ое профильное образование или перевод будет дополнительно проверяться отраслевым специалистом',
      },
      {
        imgSrc: 'price',
        title: 'Гарантия точной цены',
        text: 'Стоимость перевода в ходе работы не меняется - остается такой, как Вам сообщили в самом начале',
      },
      {
        imgSrc: 'terms',
        title: 'Соблюдаем сроки',
        text: 'До оплаты менеджер вам указывает четкий срок перевода, который обязательно будет соблюден. В среднем срок перевода день в день, реже - на следующий день.',
      },
      {
        imgSrc: 'quality',
        title: 'Гарантия качества',
        text: 'Перевод соответствует ГОСТ 15038, ISO 17100:2015 и ISO 9001:2008',
      },
      {
        imgSrc: 'fix',
        title: 'Удаляем недочеты в тот же день',
        text: 'Все выявленные недочеты устраняем сразу после обнаружения',
      },
      {
        imgSrc: 'auto',
        title: 'Автоматизация переводов',
        text: 'За счет технологии переводческой памяти CAT tools сокращаются сроки и цена на перевод больших документов с повторяющимися формулировками и предложениями.',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.spcial-translator{
  margin-top: 130px;
  .container{
    .special-translator-content{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 65px;
      > img{
        z-index: 2;
        width: 455px;
        height: 491ыpx;
      }
      .special-translator-list{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .special-translator-list-item{
          display: flex;
          justify-content: start;
          align-items: center;
          width: 640px;
          height: 57px;
          position: relative;
          img{
            padding-right: 15px;
          }
          .special-translator-list-item-text{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h6{
              margin: 0 0 10px 0;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 14px;
              color: #0B1838;
            }
            p{
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 14px;
              margin: 0;
            }
          }
          &::before{
            content: '';
            position: absolute;
            bottom: -10px;
            left: -10px;
            width: 4px;
            height: 20px;
            background: #807BE4;
          }
          &::after{
            content: '';
            position: absolute;
            bottom: -10px;
            left: -10px;
            width: 200px;
            height: 4px;
            background: #807BE4;
              clip-path: polygon(0px 0px, 100% 0%, 90% 150%, 0px 100%);
          }
        }
        .special-translator-list-item + .special-translator-list-item{
          margin-top: 25px;
        }
      }
    }
  }
}
</style>
