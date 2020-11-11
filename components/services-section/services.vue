<template>
  <section class="services" id="services">
    <div class="services__container">
      <h2 class="services__title">Мы предлагаем</h2>
      <div class="services__items-wrapper">
        <div class="services__item" v-for="item in serviceItem" :key="item.id">
          <div class="services__image-wrapper">
            <img class="services__item-image" :src="item.src" :srcset="item.srcset" width="210" height="250" alt="Photo service">
          </div>
          <div class="services__item-content">
            <h3> {{ item.title }} </h3>
            <p> {{ item.text }} </p>
            <nuxt-link class="service__btn" :to="item.path">
              <span>Подробнее</span>
              <svg width="18" height="12" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#A3A3A3" stroke-width="2"/>
                <path d="M7 1L13 7L7 13" stroke="#A3A3A3" stroke-width="2"/>
                <path d="M13 1L19 7L13 13" stroke="#A3A3A3" stroke-width="2"/>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="services__item-steel">
        <span>Металлоконструкции</span>
      </div>
      <div class="services__item-install">
        <span>Монтаж барьерного ограждения</span>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Services",
    data() {
      return {
        swiper: null,
        serviceItem: [
          {
            id: 0,
            src: require('../../assets/img/services/fencing-img@1x.jpg'),
            srcset: require('../../assets/img/services/fencing-img@2x.jpg'),
            path: '/fence',
            title: 'Барьерное ограждение',
            text: 'Металлическое ограждение снижает риск непреднамеренного съезда и столкновения встречных автомашин при многополосном движении, а значит, сокращает аварийность в целом'
          },
          {
            id: 1,
            src: require('../../assets/img/services/screen-img@1x.jpg'),
            srcset: require('../../assets/img/services/screen-img@2x.jpg'),
            path: '/screen',
            title: 'Шумозащитные экраны',
            text: 'Мы	производим	шумозащитные экраны,	в состав	которых входят звукопоглощающие и звукоизолирующие (антивандальные) панели, светопрозрачные звукоизолирующие панели и металлоконструкции'
          },
          {
            id: 2,
            src: require('../../assets/img/services/pipe-img@1x.jpg'),
            srcset: require('../../assets/img/services/pipe-img@2x.jpg'),
            path: '/pipe',
            title: 'Трубы спиральновитые',
            text: 'Из спиралевитых труб возводят своеобразный тоннель под насыпями автомобильных дорог, по которому беспрепятственно проходит поток воды'
          },
          {
            id: 3,
            src: require('../../assets/img/services/steel-img@1x.jpg'),
            srcset: require('../../assets/img/services/steel-img@2x.jpg'),
            path: '/',
            title: 'Металлоконструкции',
            text: ''
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .services {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 120px 40px;

    background-color: $bg-color-light-gray;
  }

  .services__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    width: 100%;
  }

  .services__title {
    width: 100%;
    margin-bottom: 80px;

    font-weight: 600;
    font-size: 42px;
    line-height: 140%;
  }

  .services__items-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .services__item {
    display: flex;
    padding: 10px;
    margin-bottom: 20px;
    width: 630px;
    height: 270px;

    background: $main-bg-color;
    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08), 0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;
  }

  .services__image-wrapper {
    margin-right: 32px;
    overflow: hidden;
    min-width: 210px;

    border-radius: 6px;
    background-color: $bg-color-dark;
  }

  .services__item-content {
    display: flex;
    flex-direction: column;
    padding: 22px 22px 22px 0;

    h3 {
      margin-bottom: 24px;

      font-weight: 600;
      font-size: 22px;
      line-height: 120%;
    }

    p {
      margin-bottom: auto;

      font-size: 14px;
      line-height: 160%;
      opacity: 0.9;
    }
  }

  .service__btn {
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: $font-color-gray;
    text-decoration: none;

    span {
      margin-right: 10px;
    }

    &:hover {
      span {
        color: $font-color-orange;
        transition: $style-change-duration;
      }

      svg > path {
        stroke: $font-color-orange;
        transition: $style-change-duration;
      }
    }
  }

  .services__item-install,
  .services__item-steel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 86px;

    background: $main-bg-color;
    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08), 0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;

    span {
      font-weight: 600;
      font-size: 22px;
      line-height: 120%;
    }
  }

  .services__item-steel {
    display: none;
  }

  @include desktop-small {
    .services__container {
      max-width: 1200px;
    }

    .services__title {
      font-size: 34px;
    }

    .services__item {
      margin-bottom: 10px;
      width: 595px;
      height: 262px;
    }

    .services__item-image {
      height: 242px;
    }

    .services__item-content {
      padding: 14px 14px 14px 0;

      h3 {
        margin-bottom: 16px;
        font-size: 20px;
      }
    }

    .service__btn {
      font-size: 15px;
    }

    .services__item-install,
    .services__item-steel {
      height: 72px;

      span {
        font-size: 20px;
      }
    }
  }

  @include tablet-large {
    .services__container {
      max-width: 708px;
    }

    .services__item {
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        display: none;
      }
    }

    .services__item-steel {
      display: flex;
      margin-bottom: 20px;
    }

    .service__btn {
      span {
        color: $font-color-orange;
        transition: $style-change-duration;
      }

      svg > path {
        stroke: $font-color-orange;
        transition: $style-change-duration;
      }
    }
  }

  @include mobile {
    .services {
      padding: 100px 15px 120px 15px;
    }

    .services__title {
      margin-bottom: 50px;

      font-size: 24px;
      text-align: center;
    }

    .services__item {
      flex-direction: column;
      height: 476px;
      margin-bottom: 10px;
    }

    .services__image-wrapper {
      height: 224px;
      margin: 0;
    }

    .services__item-image {
      width: 100%;
      height: 224px;
      object-fit: cover;
    }

    .services__item-content {
      flex-grow: 1;
      padding: 24px 6px 14px 6px;

      h3 {
        font-size: 18px;
      }

      p {
        font-size: 12px;
      }
    }

    .services__item-install {
       span {
        max-width: 280px;

        font-size: 18px;
        text-align: center;
      }
    }

    .services__item-steel {
      margin-bottom: 10px;

      span {
        font-size: 18px;
        text-align: center;
      }
    }
  }

</style>
