<template>
  <div id="app">
    <MainBg />
    <Header />
    <NavBar />
    <HomePage />
    <Calculator />
    <SpecialTranslator />
    <Director />
    <BestTranslators />
    <Advantages />
    <TestTranslate />
    <HappyCustomers />
    <TranslateSteps />
    <Clients />
    <Partners />
    <MainFooter />
    <ModalWindow />
    <MyFooter />
  </div>
</template>

<script>
import MainBg from '@/components/MainBg.vue';
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavigationBar.vue';
import HomePage from '@/components/HomePage.vue';
import Calculator from '@/components/Calculator.vue';
import SpecialTranslator from '@/components/SpecialTranslator.vue';
import Director from '@/components/Director.vue';
import BestTranslators from '@/components/BestTranslators.vue';
import Advantages from '@/components/Advantages.vue';
import TestTranslate from '@/components/TestTranslate.vue';
import HappyCustomers from '@/components/HappyCustomers.vue';
import TranslateSteps from '@/components/TranslateSteps.vue';
import Clients from '@/components/Clients.vue';
import Partners from '@/components/Partners.vue';
import MainFooter from '@/components/MainFooter.vue';
import ModalWindow from '@/components/ModalWindow.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'App',
  components: {
    MainBg,
    Header,
    NavBar,
    HomePage,
    Calculator,
    SpecialTranslator,
    Director,
    BestTranslators,
    Advantages,
    TestTranslate,
    HappyCustomers,
    TranslateSteps,
    Clients,
    Partners,
    MainFooter,
    ModalWindow,
    MyFooter,
  },
};
</script>

<style lang="scss">
@import url('@/assets/fonts/Gilroy/stylesheet.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container{
  width: 1440px;
  margin: 0 auto;
  > h5{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 38px;
    color: #39435B;
    display: block;
    width: max-content;
    margin: 0 auto;
    b{
      color: #523F79;
    }
  }
  > span {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 22px;
    display: block;
    width: max-content;
    margin: 20px auto 0 auto;
  }
}

body{
  margin: 0;
  padding: 0;
}

img{
  width: min-content;
  height: min-content;
}

*{
  scrollbar-width: none;
}

::-webkit-scrollbar {
  width: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
