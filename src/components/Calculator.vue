<template>
  <div
    class="calculator"
    id="calculator"
  >
    <div class="container">
      <h5>Рассчитайте стоимость и сроки перевода без менеджера</h5>
      <span class="mini-tutorial">Заполните необходимые поля и узнайте цену за 2 простых шага</span>
      <div class="calculator-body">
        <div class="calculator-bg"></div>
        <div class="calculator-input">
          <Swiper
            class="calc-swiper"
            ref="calcSwiper"
            :forbidden-slide="true"
            customize-nav=".steps-nav"
            customize-nav-active-class="active-step-bar"
            :speed="1200"
          >
            <div class="first-step">
              <div class="languages">
                <div
                  v-for="(language, ind) of languages"
                  :key="ind"
                >
                  <h6 class="option-title">
                    {{ language.title }}
                  </h6>
                  <div class="language-select-wrap">
                    <select
                      :ref="language.option"
                      @change="(e) => {
                        addOption(e.target.value, language.list, language.option)
                      }"
                    >
                      <option
                        v-for="element of language.list"
                        :key="element.short"
                        :selected="element.active"
                        :value="element.name"
                      >
                        {{ element.name }}
                      </option>
                    </select>
                    <svg
                      class="language-select-arrow"
                      width="20"
                      height="9"
                      viewBox="0 0 20 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 8.11108L0.5 0.111084H19.5L10 8.11108Z"
                        fill="#39435B"
                      />
                    </svg>
                  </div>
                  <svg
                    class="language-arrow"
                    v-if="ind === 0"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 11.1631H24M24 11.1631L14.4 1.14893M24 11.1631L14.4 21.1773"
                      stroke="#6E7C83"
                    />
                  </svg>
                </div>
              </div>
              <div class="sheets">
                <h6 class="option-title">
                  Количество страниц
                </h6>
                <label for="sheetsAmountRange">
                  <input
                    type="range"
                    name="sheets-amout-range"
                    id="sheetsAmountRange"
                    min="1"
                    max="300"
                    :value="selectedOptions.rangeValue"
                    step="1"
                    @change="(e) => saveNewRangaValue(+e.target.value)"
                  >
                </label>
                <label for="sheetaAmountNumber">
                  <input
                    type="number"
                    name="sheets-amout-number"
                    class="sheets-amout-value"
                    id="sheetaAmountNumber"
                    min="1"
                    max="300"
                    :value="selectedOptions.rangeValue"
                    @change="(e) => {
                      +e.target.value <= 300 && +e.target.value > 0 ?
                        saveNewRangaValue(+e.target.value) : ''
                    }"
                  >
                </label>
              </div>
              <div class="themes">
                <h6 class="option-title">
                  Тематика
                </h6>
                <div class="themes-list">
                  <div
                    v-for="(theme, ind) of themes"
                    :key="ind"
                    :class="['theme', {'active-theme': theme.active}]"
                    @click="addOption(theme.name, themes, 'theme')"
                  >
                    <span class="difficult-stars">{{ theme.difficultStars }}</span>
                    <img
                      :src="require(`../assets/calculator/${theme.iconSrc}.png`)"
                      :alt="theme.iconSrc"
                    >
                    <p v-html="theme.text"></p>
                  </div>
                </div>
              </div>
              <div class="forms">
                <h6 class="option-title">
                  Формат текста, который вы отправите на перевод
                </h6>
                <div class="forms-list">
                  <div
                    v-for="(form, ind) of forms"
                    :key="ind"
                    :class="['form', {'active-form': form.active}]"
                    @click="addOption(form.name, forms, 'form')"
                  >
                    <span class="difficult-stars">{{ form.difficultStars }}</span>
                    <img
                      :src="require(`../assets/calculator/${form.iconSrc}.png`)"
                      :alt="form.iconSrc"
                    >
                    <div class="form-content">
                      <h6>{{ form.title }}</h6>
                      <p v-html="form.text"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="second-step">
              <div class="services-packages">
                <h6 class="option-title">
                  Выберете пакет услуг
                </h6>
                <div
                  v-for="(servicePackage, ind) of servicesPackages"
                  :key="ind"
                  :class="[
                    'service-package',
                    {'active-package': servicePackage.active},
                    servicePackage.name
                  ]"
                  @click="addOption(servicePackage.name, servicesPackages, 'servicePackage')"
                >
                  <div class="package-title">
                    <span class="stars">
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        v-for="(star, starInd) of servicePackage.packageStars"
                        :key="starInd"
                        v-html="starsIcons[star]"
                      >
                      </svg>
                    </span>
                    <span class="package-title-text">{{ servicePackage.text }}</span>
                  </div>
                  <div class="services-list">
                    <span
                      v-for="(service, serviceInd) of servicePackage.servicesList"
                      :key="serviceInd"
                      class="service"
                    >
                      <span :class="[service.allow ? 'tick' : 'cross', 'mark']"></span>
                      {{ service.name }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="discounts">
                <h6 class="option-title">
                  Скидки %
                </h6>
                <label for="noDiscounts">
                  <input
                    type="checkbox"
                    name="no-discounts"
                    id="noDiscounts"
                    ref="noDiscounts"
                    @click="noDiscounts"
                  > Под скидку не подхожу
                </label>
                <div class="discounts-list">
                  <div
                    v-for="(discount, ind) of discounts"
                    :key="ind"
                    :class="['discount', {'active-discount': discount.active && !isNoDiscounts }]"
                    @click="!isNoDiscounts ? addOption(discount.name, discounts, 'discount') : ''"
                  >
                    <img
                      :src="require(`../assets/calculator/${discount.name}.png`)"
                      :alt="discount.name"
                    >
                    <div class="discount-content">
                      <span class="discount-value">-{{ discount.cost }}%</span>
                      <p>{{ discount.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        <div class="calculator-output">
          <div class="order-info">
            <div class="indicators">
              <span class="indicator">
                Цена: <span class="space"></span> <span class="indicator-value">
                  <b>{{ cost }}</b> RUB
                </span>
              </span>
              <span class="indicator">
                Срок: <span class="space"></span> <span class="indicator-value">
                  <b>{{ time }}</b> часов
                </span>
              </span>
              <span :class="['indicator', {'disable-indicator': !selectedOptions.discount}]">
                Скидка: <span class="space"></span> <span class="indicator-value">
                  <b>{{ selectedOptions.discount || 0 }}</b>%
                </span>
              </span>
              <div class="total">
                Итого: <span class="indicator-value"><b>{{ total }}</b> RUB</span>
              </div>
            </div>
            <div
              class="submit-translate-wrap"
            >
              <button
                :class="['submit-translate', {'disable-submit': checkFields}]"
                :disabled="checkFields"
                @click="openOrdering"
              >
                Заказать перевод
              </button>
            </div>
          </div>
          <div class="calculator-control">
            <div class="control-buttons">
              <button
                :class="{'disabled-control-button': stepNumber == 1}"
                @click="prevStep"
                :disabled="stepNumber == 1 ? true : false"
                aria-label="prev-slide"
              >
                <svg
                  style="width: 41px; height: 25px; fill: none; transform: rotate(180deg);"
                  viewBox="0 0 41 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.333498 12.5832L38.8335 12.5832M38.8335 12.5832L28.1772
                      23.6665M38.8335 12.5832L28.1772 1.49984"
                    stroke="#F2F5FA"
                    stroke-width="3"
                  />
                </svg>
              </button>
              <button
                @click="nextStep"
                :class="{'disabled-control-button': stepNumber == 2}"
                :disabled="stepNumber == 2 ? true : false"
                aria-label="next-slide"
              >
                <svg
                  style="width: 41px; height: 25px; fill: none;"
                  viewBox="0 0 41 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.333498 12.5832L38.8335 12.5832M38.8335 12.5832L28.1772
                      23.6665M38.8335 12.5832L28.1772 1.49984"
                    stroke="#F2F5FA"
                    stroke-width="3"
                  />
                </svg>
              </button>
            </div>
            <div class="steps-nav">
              <div
                id="alwaysActiveStepBar"
                class="step-indicator-wrap"
                index="1"
              >
                <span class="step-indicator"></span>
                <span class="step-indicator-number">Шаг 1</span>
              </div>
              <hr>
              <div
                class="step-indicator-wrap"
                index="2"
              >
                <span class="step-indicator"></span>
                <span class="step-indicator-number">Шаг 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Calculator',
  data: () => ({
    stepNumber: 1,
    isNoDiscounts: false,
  }),
  methods: {
    ...mapActions('calculator', ['saveNewRangaValue']),
    ...mapActions(['toggleModalWindow', 'changeModalWindowContent']),
    openOrdering() {
      this.changeModalWindowContent(
        {
          contentName: 'ordering',
          documentSrc: null,
        },
      );
      this.toggleModalWindow(true);
    },
    prevStep() {
      this.stepNumber -= 1;
      this.$refs.calcSwiper.prev();
    },
    nextStep() {
      this.stepNumber += 1;
      this.$refs.calcSwiper.next();
    },
    removeWarning(e) {
      if (e.target.firstElementChild.classList.contains('warning')) {
        e.target.firstElementChild.classList.remove('warning');
      }
      e.target.firstElementChild.disabled = false;
    },
    addOption(name, arr, option) {
      this.removeActive(arr);
      const selectedOption = arr.find((elem) => elem.name === name);
      selectedOption.active = !selectedOption.active;
      this.$set(this.selectedOptions, option, selectedOption.cost);
    },
    noDiscounts(e) {
      e.target.parentElement.classList.toggle('checked');
      this.isNoDiscounts = !this.isNoDiscounts;
      if (e.target.checked) {
        this.$set(this.selectedOptions, 'discount', 0);
        this.removeActive(this.discounts);
      } else {
        this.$set(this.selectedOptions, 'discount', null);
      }
    },
    removeActive(arr) {
      arr.forEach((elem) => {
        if (elem.active) {
          elem.active = false;
        }
      });
    },
    randomInd(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    },
  },
  computed: {
    ...mapGetters(
      'calculator',
      [
        'languages',
        'themes',
        'forms',
        'starsIcons',
        'servicesPackages',
        'discounts',
        'selectedOptions',
      ],
    ),
    checkFields() {
      let emptyFields = 0;
      Object.values(this.selectedOptions).forEach((el) => {
        if (el === null) emptyFields += 1;
      });
      if (emptyFields > 0) {
        return true;
      }
      return false;
    },
    cost() {
      let sum = 0;
      Object.entries(this.selectedOptions).forEach(([key, value]) => {
        sum += (key !== 'discount' && value !== null) ? value : 0;
      });
      return sum;
    },
    time() {
      // i couldn't think of something else)
      return (this.selectedOptions.servicePackage === 3)
        ? (this.cost * 0.12 - this.cost * 0.06).toFixed(1)
        : (this.cost * 0.12).toFixed(1);
    },
    total() {
      const discountOfTotal = (this.cost / 100) * this.selectedOptions.discount;
      const total = this.cost - discountOfTotal;
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.calculator{
  margin-top: 130px;
  .container{
    h5{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 27px;
      height: 38px;
      margin: 0 0 30px 0;
      display: flex;
      align-items: center;
      background: linear-gradient(270deg, #523F79 0%, #807BE4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .mini-tutorial{
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 300;
      font-size: 19px;
      line-height: 22px;
      color: #6E7C83;
      display: block;
      margin: 0 0 30px 0;
    }
    .calculator-body{
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .calculator-bg{
        position: absolute;
        bottom: 250px;
        right: 340px;
        z-index: -1;
        background: url('@/assets/global-backgrounds/bg.png');
        width: 474px;
        height: 90px;
        background-size: cover;
      }
      .calculator-input {
        width: 850px;
        background: #F2F5FA;
        box-shadow: 0px 4px 15px rgba(92, 107, 125, 0.27),
                    inset 0px -2px 10px rgba(193, 184, 178, 0.5);
        border-radius: 5px;
        padding: 30px;
        .calc-swiper {
          .option-title{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 24px;
            color: #39435B;
            margin-bottom: 25px;
          }
          .first-step{
            .languages{
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              > div {
                position: relative;
                h6 {
                  margin-top: 0;
                  margin-bottom: 25px;
                }
                .language-select-wrap{
                  position: relative;
                  select{
                    border: none;
                    padding: 0 20px;
                    color: #523F79;
                    position: relative;
                    z-index: 2;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
                    width: 370px;
                    height: 60px;
                    background: transparent;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 19px;
                    line-height: 22px;
                    &:focus{
                      outline: none;
                    }
                    option{
                      font-family: Gilroy;
                      font-style: normal;
                      font-weight: 300;
                      font-size: 19px;
                      line-height: 22px;
                      color: #523F79;
                    }
                  }
                  .language-select-arrow {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 1;
                    height: 40px;
                    padding: 0 20px;
                    border-left: 1px solid #BCC9CE;
                  }
                  select:focus:hover + .language-select-arrow{
                    transform: rotate(-180deg);
                    border-left: 0;
                    border-right: 1px solid #BCC9CE;
                  }
                }
                .language-arrow{
                  position: absolute;
                  top: 75%;
                  right: -65px;
                }
              }
            }
            .sheets{
              h6{
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 24px;
                margin: 45px 0 40px 0;
              }
              label{
                input[type=range] {
                  position: relative;
                  width: 600px;
                  height: 30px;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  &::before{
                    content: attr(min);
                    position: absolute;
                    bottom: -30px;
                    left: 0;
                    font-family: Gilroy;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 19px;
                    line-height: 22px;
                    color: #6E7C83;
                    letter-spacing: 0.01em;
                  }
                  &::after{
                    content: attr(max);
                    position: absolute;
                    bottom: -30px;
                    right: 0;
                    font-family: Gilroy;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 19px;
                    line-height: 22px;
                    color: #6E7C83;
                    letter-spacing: 0.01em;
                  }
                  &:focus{
                    outline: none;
                  }
                  &::-webkit-slider-thumb {
                    width: 20px;
                    height: 30px;
                    background: #807BE4;
                    border: none;
                    -webkit-appearance: none;
                    appearance: none;
                    margin-top: -15px;
                  }
                  &::-webkit-slider-runnable-track {
                    width: 100%;
                    background: #BCC9CE;
                    border: none;
                    box-sizing: border-box;
                    height: 2px;
                    -webkit-appearance: none;
                    appearance: none;
                  }
                  &::-moz-range-track {
                    width: 100%;
                    background: #BCC9CE;
                    border: none;
                    box-sizing: border-box;
                    height: 2px;
                    -webkit-appearance: none;
                    appearance: none;
                  }
                  &::-moz-range-progress {
                    background-color: #B7ABFB;
                  }
                  &::-moz-range-thumb {
                    width: 20px;
                    height: 30px;
                    background: #807BE4;
                    border: none;
                    -moz-appearance: none;
                    appearance: none;
                    border-radius: 0;
                    margin-top: -15px;
                  }
                }
              }
              label{
                .sheets-amout-value{
                  width: 158px;
                  height: 60px;
                  padding: 0 7%;
                  box-sizing: border-box;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  margin-left: 30px;
                  box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
                  font-family: Montserrat;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 14px;
                  color: #523F79;
                  border: none;
                  -moz-appearance: textfield;
                  &:focus{
                    outline: none;
                  }
                  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
                    -webkit-appearance: none;
                    margin: 0;
                  }
                }
              }
            }
            .themes, .forms{
              h6{
                margin-top: 40px;
              }
              .themes-list, .forms-list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .theme, .form {
                  cursor: pointer;
                  position: relative;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  width: 270px;
                  height: 90px;
                  box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
                  box-sizing: border-box;
                  transition: all .1s ease;
                  .difficult-stars{
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    color: #807BE4;
                    opacity: .7;
                    font-size: 30px;
                  }
                  p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 14px;
                    color: #39435B;
                  }
                  &.active-theme, &.active-form{
                    border: 2px solid #807BE4;
                    & .difficult-stars{
                      opacity: 1;
                    }
                  }
                }
              }
            }
            .forms .forms-list .form {
              width: 400px;
              height: 93px;
              .form-content{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h6{
                  margin: 0;
                  font-family: Montserrat;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 14px;
                  color: #39435B;
                }
              }
            }
          }
          .second-step{
            .services-packages{
              height: 405px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              .option-title{
                margin-top: 0;
              }
              .service-package{
                cursor: pointer;
                box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 788px;
                height: 110px;
                box-sizing: border-box;
                .package-title{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  width: 200px;
                  height: 100%;
                  transition: width .5s ease;
                  border-radius: 0px 15px 15px 0px;
                  opacity: .85;
                  .package-title-text{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 14px;
                    padding: 12px 10px;
                    color: #F2F5FA;
                    max-width: 150px;
                  }
                }
                .services-list{
                  width: 100%;
                  display: grid;
                  justify-content: center;
                  grid-gap: 7.5px;
                  grid-template-columns: repeat(2, 200px);
                  grid-template-rows: repeat(3, 20px);
                  .service{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 14px;
                    color: #39435B;
                    position: relative;
                    .mark{
                      width: 15px;
                      height: 15px;
                      position: absolute;
                      &.tick{
                        left: -22px;
                        top: 0;
                        content: '';
                        width: 12.5px;
                        height: 7px;
                        border-left: 2px solid #6FE8C8;;
                        border-bottom: 2px solid #6FE8C8;;
                        -webkit-transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        -ms-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                      }
                      &.cross{
                        left: -22px;
                        &::after{
                          content: '';
                          position: absolute;
                          left: 6px;
                          bottom: 0;
                          height: 16px;
                          width: 2px;
                          background: #E46161;
                          transform: rotate(-55deg);
                        }
                        &::before{
                          content: '';
                          left: 6px;
                          bottom: 0;
                          position: absolute;
                          height: 16px;
                          width: 2px;
                          background: #E46161;
                          transform: rotate(55deg);
                        }
                      }
                    }
                  }
                }
                &.base {
                  .package-title{
                    background: linear-gradient(270deg, #523F79 0%, #807BE4 100%);
                  }
                  .services-list .service:nth-child(even) {
                    color: #6E7C83;
                  }
                }
                &.expert {
                  .package-title{
                    // sorry, in maket wasn't background for expert and prime
                    background: silver;
                  }
                  .services-list .service:last-child{
                    color: #6E7C83;
                  }
                }
                &.premium {
                  .package-title{
                    background: linear-gradient(90deg, #D9AE2C 0%, #DCC341 98.28%);
                  }
                  .services-list .service:nth-child(even){
                    background: linear-gradient(90deg, #D9AE2C 0%, #DCC341 98.28%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                  }
                }
                &.expert .package-title .package-title-text,
                &.premium .package-title .package-title-text{
                  background: #523F79;
                }
                &.active-package {
                  border: 3px solid #807BE4;
                  /* if you see whitespace between .active-package > .package-title and
                  .active-package border it is browser's bug. in fact there is no whitespace*/
                  & .package-title{
                    width: 230px;
                    opacity: 1;
                  }
                }
              }
            }
            .discounts{
              label{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 300;
                font-size: 19px;
                line-height: 22px;
                letter-spacing: 0.01em;
                color: #39435B;
                position: relative;
                cursor: pointer;
                padding: 7px 0 0 40px;
                input[type=checkbox]{
                  &:checked, &:not(:checked){
                    position: absolute;
                    left: -9999999px;
                  }
                }
                &::before{
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 30px;
                  height: 30px;
                  border: 1px solid #6E7C83;
                  background: #fff;
                  transition: all .5s ease;
                }
                &::after{
                  content: '';
                  position: absolute;
                  left: 7px;
                  top: 7px;
                  width: 15.5px;
                  height: 10px;
                  border-left: 2px solid #6FE8C8;;
                  border-bottom: 2px solid #6FE8C8;;
                  transform: rotate(-45deg);
                  opacity: 0;
                  transition: all .5s ease;
                }
                &.checked{
                  &::after{
                    opacity: 1;
                  }
                  &::before{
                    border: 1px solid #6FE8C8
                  }
                }
              }
              .discounts-list{
                margin-top: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .discount{
                  cursor: pointer;
                  width: 242px;
                  height: 90px;
                  box-shadow: 0px 2px 10px rgba(109, 135, 154, 0.27);
                  display: flex;
                  box-sizing: border-box;
                  justify-content: space-around;
                  align-items: center;
                  transition: all .1s ease;
                  .discount-content{
                    width: 130px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .discount-value{
                      font-family: Montserrat;
                      font-style: normal;
                      font-weight: 700;
                      font-size: 28px;
                      line-height: 28px;
                      color: #E46161;
                      transition: all .3s ease;
                    }
                    p{
                      font-family: 'Gilroy';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 14px;
                      color: #39435B;
                    }
                  }
                  &.active-discount {
                    border: 2px solid #807BE4;
                    .discount-value{
                      color: #807BE4;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .calculator-output {
        width: 290px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .order-info{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .indicators{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 218px;
            border: 1px solid #39435B;
            .indicator{
              width: 250px;
              display: flex;
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 300;
              font-size: 19px;
              line-height: 22px;
              color: #0B1838;
              .space{
                width: 100%;
                height: 16px;
                margin: 0 5px;
                border-bottom: 1px dashed #6E7C83;
              }
              &.disable-indicator{
                color: #6E7C83;
                .indicator-value{
                  color: #6E7C83;
                }
              }
            }
            &.indicator + &.indicator{
              margin-bottom: 10px;
            }
            .total{
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 500;
              font-size: 19px;
              line-height: 22px;
              color: #0B1838;
              letter-spacing: 0.01em;
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 250px;
              margin-top: 50px;
              .indicator-value{
                b{
                  color: #807BE4;
                }
              }
            }
            .indicator-value{
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 14px;
              color: #0B1838;
              b{
                font-weight: 500;
                font-size: 20px;
                padding-right: 6px;
              }
            }
          }
          .submit-translate-wrap{
              width: 290px;
            .submit-translate{
              position: relative;
              cursor: pointer;
              width: 100%;
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
              &.disable-submit{
                opacity: .8;
                &:hover{
                  opacity: 1;
                  &::after{
                    opacity: 1;
                  }
                }
              }
              &::after{
                content: 'Заполните все поля !';
                width: 100%;
                height: 100%;
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
                position: absolute;
                top:0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                transition: all .2s ease;
              }
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
        .calculator-control{
          width: 100%;
          .control-buttons{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            > button{
              width: 70px;
              height: 70px;
              box-sizing: border-box;
              background: #807BE4;
              border: 0;
              transition: all .3s ease;
              cursor: pointer;
              &.disabled-control-button{
                background: transparent;
                border: 3px solid #BCC9CE;
                svg path{
                  stroke: #BCC9CE;
                }
              }
            }
          }
          .steps-nav{
            margin-top: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .step-indicator-wrap{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              height: 100px;
              .step-indicator{
                position: relative;
                width: 60px;
                height: 60px;
                border: 1px solid #6FE8C8;
                box-sizing: border-box;
                border-radius: 50%;
                &::after{
                  content: '';
                  position: absolute;
                  width: 34px;
                  height: 34px;
                  border-radius: 50%;
                  background: transparent;
                  top: 12px;
                  left: 12px;
                  box-sizing: border-box;
                  border: 1px solid #6FE8C8;
                  transition: all .3s ease;
                }
                &::before{
                  content: '';
                  position: absolute;
                  width: 47px;
                  height: 47px;
                  border-radius: 50%;
                  background: rgba(111, 232, 200, 40%);
                  top: 5.5px;
                  left: 5.5px;
                  box-sizing: border-box;
                  opacity: 0;
                  transition: all .3s ease;
                }
              }
              .step-indicator-number{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 22px;
                color: #6E7C83;
              }
              &.active-step-bar, &#alwaysActiveStepBar{
                .step-indicator{
                  &::after{
                    background: #6FE8C8;
                  }
                  &::before{
                    opacity: 1;
                  }
                }
              }
            }
            hr{
              width: 145px;
              height: 1px;
              background: #6FE8C8;
              border: none;
              margin: 0 0 29px 0;
            }
          }
        }
      }
    }
  }
}
</style>
