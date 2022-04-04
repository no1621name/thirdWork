<template>
  <div class="happy-customers">
    <div class="container">
      <h5><b>Наши клиенты</b> нами довольны</h5>
      <div class="happy-customers-list">
        <div
          class="happy-customer"
          v-for="(happyCustomer, ind) of happyCustomersList"
          :key="ind"
        >
          <div
            class="happy-customer-bg"
            :style="{
              backgroundImage:
                `url(${require(`../assets/documents/${happyCustomer.documentSrc}.jpg`)})`,
            }"
          ></div>
          <span
            class="scope-happy-client-document-wrap"
            @click="openModalWindow(happyCustomer.documentSrc)"
          >
            <span class="scope-happy-customer-document">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.53125 0V18.75H0V40H21.25V30.4688H40V0H9.53125ZM18.9062
                    37.6562H2.34375V21.0938H9.53125V30.4688H18.9062V37.6562ZM18.9062
                    28.125H11.875V21.0938H18.9062V28.125ZM37.6562
                    28.125H21.25V18.75H11.875V2.34375H37.6562V28.125Z"
                  fill="#807BE4"
                />
                <path
                  d="M23.2509 18.4068L32.9692
                    8.68852V14.0625H35.313V4.6875H25.938V7.03125H31.312L21.5938 16.7495L23.2509
                    18.4068Z"
                  fill="#807BE4"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HappyCustomers',
  data: () => ({
    happyCustomersList: [
      {
        documentSrc: 'happy-customer-document',
      },
      {
        documentSrc: 'happy-customer-document',
      },
      {
        documentSrc: 'happy-customer-document',
      },
      {
        documentSrc: 'happy-customer-document',
      },
      {
        documentSrc: 'happy-customer-document',
      },
    ],
  }),
  methods: {
    ...mapActions(['toggleModalWindow', 'changeModalWindowContent']),
    openModalWindow(src) {
      this.changeModalWindowContent(
        {
          contentName: 'document',
          documentSrc: src,
        },
      );
      this.toggleModalWindow(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.happy-customers{
  margin-top: 130px;
  .container{
    position: relative;
    h5{
      position: relative;
      bottom: -25px;
      background: #fff;
      padding: 5px 10px;
    }
    .happy-customers-list{
      width: 100%;
      height: 450px;
      border: 1px solid #523F79;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .happy-customer{
        cursor: pointer;
        position: relative;
        width: 204px;
        height: 288.28px;
        box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.4);
        .happy-customer-bg{
          background-size: cover;
          width: 100%;
          height: 100%;
          transition: all .2s ease;
        }
        &:hover{
          .happy-customer-bg{
            filter: blur(4px);
          }
          .scope-happy-client-document-wrap{
            opacity: 1;
          }
        }
        .scope-happy-client-document-wrap{
          z-index: 2;
          opacity: 0;
          cursor: pointer;
          position: absolute;
          top: 109px;
          right: 67px;
          width: 70px;
          height: 70px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: border-width .1s ease, opacity .3s ease;
          &::before{
            content: '';
            width: 20px;
            height: 20px;
            border-top: 2px solid #807be4;
            border-left: 2px solid #807BE4;
            position: absolute;
            top: -2px;
            left: -2px;
            transition: all .3s ease;
          }
          &::after{
            content: '';
            width: 20px;
            height: 20px;
            border-top: 2px solid #807be4;
            border-right: 2px solid #807BE4;
            position: absolute;
            top: -2px;
            right: -2px;
            transition: all .3s ease;
          }
          .scope-happy-customer-document{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &::before{
              content: '';
              width: 20px;
              height: 20px;
              border-bottom: 2px solid #807be4;
              border-left: 2px solid #807BE4;
              position: absolute;
              bottom: -2px;
              left: -2px;
              transition: all .3s ease;
            }
            &::after{
              content: '';
              width: 20px;
              height: 20px;
              border-bottom: 2px solid #807be4;
              border-right: 2px solid #807BE4;
              position: absolute;
              bottom: -2px;
              right: -2px;
              transition: all .3s ease;
            }
          }
          &:hover{
            &::after, &::before,
            .scope-happy-customer-document::after, .scope-happy-customer-document::before{
              opacity: 0;
            }
            border: 2px solid #807BE4;
            box-shadow: 0px 2px 15px rgba(109, 135, 154, 0.4);
            .happy-customer{
              filter: blur(4px);
            }
          }
        }
      }
    }
  }
}
</style>
