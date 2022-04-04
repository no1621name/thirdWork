<template>
  <div class="clients">
    <div class="container">
      <h5>У нас более <b>500 довольных клиентов</b> по различным специализациям</h5>
      <div class="clients-list">
        <div
          class="client"
          v-for="(client, ind) of clientsList"
          :key="ind"
        >
          <img
            :src="require(`../assets/clients/${client.img}.png`)"
            :alt="client.img"
          >
          <span class="client-name">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  data: () => ({
    clientsList: [
      {
        name: 'Энергетика и машиностроение',
        img: 'energy',
      },
      {
        name: 'Банки и страховые компании',
        img: 'accounting',
      },
      {
        name: 'IT компании',
        img: 'it',
      },
      {
        name: 'Транспорт и логистика',
        img: 'logistic',
      },
      {
        name: 'Производство',
        img: 'manufactory',
      },
      {
        name: 'Частные лица',
        img: 'person',
      },
      {
        name: 'Маркетинговые и комуникационные агенства',
        img: 'accounting',
      },
      {
        name: 'Кондитерские компании',
        img: 'backery',
      },
      {
        name: 'Фармпроизводители и медицинские уреждения',
        img: 'pharmacy',
      },
      {
        name: 'Государственные структуры и т. п.',
        img: 'goverment',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.clients{
  margin-top: 130px;
  .container{
    h5{
      width: 912px;
      color: #523F79;
      text-align: center;
    }
    .clients-list{
      margin-top: 70px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 216px);
      grid-template-rows: repeat(2, 206px);
      justify-content: space-between;
      grid-row-gap: 25px;
      .client{
        width: 218px;
        height: 206px;
        box-sizing: border-box;
        box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.4);
        background: #F2F5FA;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        .client-name{
          margin-top: 35px;
          font-family: 'Gilroy';
          font-style: normal;
          font-weight: 500;
          font-size: 19px;
          line-height: 22px;
          color: #523F79;
        }
      }
    }
  }
}
</style>
