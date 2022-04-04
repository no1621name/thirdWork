<template>
  <div class="navigation">
    <div class="container">
      <div class="navigation-wrap">
        <div class="brand">
          <img
            src="@/assets/logos/logo.png"
            alt="logo"
          >
          <p class="tagline">
            <span>Переводческие услуги</span> <br>
            для всего ближнего зарубежья
          </p>
        </div>
        <nav>
          <ul class="nav-main">
            <li><a href="#homepage">Главная</a></li>
            <li><a href="#calculator">Рассчет стоимости</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Вопросы и ответы</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>

.navigation{
  position: relative;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 4px 14px rgba(9, 16, 39, 0.14);
  .container{
    .navigation-wrap{
      display: flex;
      align-items: center;
      justify-content: space-between;
      nav{
        width: 75%;
        .nav-main{
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          li{
            display: inline-block;
            a{
              font-family: Gilroy;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 14px;
              color: #0B1838;
              text-decoration: none;
              position: relative;
              &::after{
                content: "";
                position: absolute;
                width: 0%;
                height: 2px;
                background: #6FE8C8;
                bottom: 0;
                left: 0;
                transition: all .2s ease;
              }
              &:hover::after{
                width: 100%;
              }
              &:hover{
                color: #6FE8C8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
