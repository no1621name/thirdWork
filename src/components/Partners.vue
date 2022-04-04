<template>
  <div class="partners">
    <div class="container">
      <h5>
        <b>На постоянной основе</b> <br>
        работаем с такими компаниями как:
      </h5>
      <div class="partners-list">
        <div
          class="partner"
          v-for="(partner, ind) of partnersList"
          :key="ind"
        >
          <a :href="partner.siteLink">
            <img
              :src="require(`../assets/partners/${partner.logo}.png`)"
              :alt="partner.logo"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  data: () => ({
    partnersList: [
      {
        siteLink: '/',
        logo: 'balticagro',
      },
      {
        siteLink: '/',
        logo: 'fm',
      },
      {
        siteLink: '/',
        logo: 'ets',
      },
      {
        siteLink: '/',
        logo: 'arms',
      },
      {
        siteLink: '/',
        logo: 'magnum',
      },
      {
        siteLink: '/',
        logo: 'leaderbet',
      },
      {
        siteLink: '/',
        logo: 'samauto',
      },
      {
        siteLink: '/',
        logo: 'estravel',
      },
      {
        siteLink: '/',
        logo: 'kase',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.partners{
  margin-top: 130px;
  .container{
    h5{
      text-align: center;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        bottom: -30px;
        left: 31%;
        width: 250px;
        height: 1px;
        background: #B7ABFB;
      }
    }
    .partners-list{
      margin-top: 80px;
      display: grid;
      grid-template: 80px 80px / 222px 42px 194px 57px 214px ;
      justify-content: space-between;
      align-items: center;
      grid-row-gap: 60px;
      .partner{
        &:nth-child(n+6){
          margin-left: 170px;
        }
      }
    }
  }
}
</style>
