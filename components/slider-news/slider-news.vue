<template>
  <section class="slider-news">
    <h2 class="visually-hidden">Слайдер с новостями</h2>
    <div class="slider-news__container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in sliderItem" :key="item.id">
          <h3> {{ item.title }} </h3>
          <p> {{ item.text }} </p>
          <nuxt-link class="swiper-slide__btn" :to="item.path">
            <span>Читать дальше</span>
            <svg width="18" height="12" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="#A3A3A3" stroke-width="2"/>
              <path d="M7 1L13 7L7 13" stroke="#A3A3A3" stroke-width="2"/>
              <path d="M13 1L19 7L13 13" stroke="#A3A3A3" stroke-width="2"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <button class="slider-news__button slider-news__button--next" type="button" v-show="showButton">
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L12 12L1 23" stroke="white" stroke-width="2"/>
      </svg>
    </button>
    <button class="slider-news__button slider-news__button--prev" type="button" v-show="showButton">
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L2 12L13 23" stroke="white" stroke-width="2"/>
      </svg>
    </button>

    <nuxt-link class="slider-news__btn-more" to="/news" v-show="showButton">смотреть все новости</nuxt-link>
  </section>
</template>

<script>
  import Swiper from 'swiper/js/swiper.esm.bundle'
  import 'swiper/css/swiper.min.css'
  import newsContent from '../../static/mock/newsContent.json'

  export default {
    name: 'SliderNews',
     props: {
      showButton: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {
        swiper: null,
        sliderItem: newsContent
      }
    },
    mounted() {
      this.initSwiper()
    },
    methods: {
      initSwiper() {
        this.swiper = new Swiper('.slider-news__container', {
          grabCursor: true,
          slidesPerView: 3,
          slidesPerGroup: 1,
          navigation: {
            nextEl: '.slider-news__button--next',
            prevEl: '.slider-news__button--prev'
          },
          breakpoints: {
            320: {
              slidesPerView: 'auto',
              loop: true
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider-news {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .slider-news__container {
    display: flex;
    justify-content: center;
    max-width: 1163px;
    overflow: hidden;
    margin-bottom: 40px;

    background-color: transparent;
  }

  .slider-news__container .swiper-wrapper {
    width: 100%;
  }

  .slider-news__container .swiper-slide {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    padding: 30px;
    max-width: 380px;
    height: 220px;

    background: $main-bg-color;
    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
    0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;

    &:last-child {
      margin-right: 0;
    }

    h3 {
      margin-bottom: 15px;

      font-weight: 600;
      font-size: 19px;
      line-height: 120%;
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      max-width: 315px;
      margin-bottom: 20px;

      font-size: 14px;
      line-height: 140%;
    }
  }

  .swiper-slide__btn {
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: $font-color-gray;
    text-decoration: none;

    transition: $style-change-duration;

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

  .slider-news__button {
    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 220px;


    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;

    &--next {
      right: 0;
    }

    &--prev {
      left: 0;
    }
  }

  .slider-news__btn-more {
    position: relative;

    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    color: $font-color-white;
    text-transform: uppercase;
    text-decoration: none;
    transition: $style-change-duration;

    &::after {
      position: absolute;
      content: "";
      bottom: 2px;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: $main-bg-color;
      transition: $style-change-duration;
    }

    &:hover {
      color: $font-color-orange;
      transition: $style-change-duration;

      &::after {
        background-color: $bg-color-orange;
        transition: $style-change-duration;
      }
    }
  }

  //ARTICLE SLIDER
  .page-main__border .slider-news {
    padding: 0;
  }

  .page-main__border .slider-news__container {
    max-width: 1282px;
    margin-bottom: 0;
  }

  .page-main__border .swiper-slide {
    min-width: 417px;
    height: 220px;
    margin-right: 15px;
  }

  @include desktop-small {
    .slider-news__container {
      max-width: 1084px;
    }

    .slider-news__container .swiper-slide {
      padding: 24px;
      max-width: 354px;
      height: 194px;

      h3 {
        font-size: 17px;
      }

      p {
        max-width: 295px;
        margin-bottom: auto;

        font-size: 12px;
      }
    }

    .slider-news__button {
      height: 194px;
    }

    .swiper-slide__btn {
      font-size: 15px;
    }

    //ARTICLE SLIDER
    .page-main__border .slider-news__container {
      max-width: 1200px;
    }

    .page-main__border .swiper-slide {
      min-width: 390px;
      height: 194px;
    }
  }

  @include tablet-large {
    .slider-news {
      align-items: flex-start;
    }

    .slider-news__container {
      max-width: 100%;
    }

    .slider-news__button {
      display: none;
    }

    .swiper-slide__btn {
      span {
        color: $font-color-orange;
      }

      svg > path {
        stroke: $font-color-orange;
      }
    }

    .slider-news__container .swiper-slide {
      max-width: 340px;

      p {
        max-width: 280px;
      }
    }

    .slider-news__btn-more {
      margin: 0 auto;
      font-size: 15px;
    }

    //ARTICLE SLIDER
    .page-main__border .swiper-slide {
      min-width: 340px;
    }
  }

  @include tablet {
    .slider-news__container .swiper-slide {
      max-width: 359px;
      min-width: 359px;

      p {
        max-width: 300px;
      }
    }
  }

  @include mobile {
    .slider-news {
      padding: 80px 0 20px 15px;
      background-color: $bg-color-light-gray;
    }

    .slider-news__container .swiper-slide {
      padding: 24px 16px;
      max-width: 270px;
      min-width: 270px;
      height: 202px;;

      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }

      p {
        -webkit-line-clamp: 5;
        max-width: 100%;

        font-size: 14px;
      }
    }

    .slider-news__btn-more {
      color: $font-color-gray;

      &::after {
        background-color: $font-color-gray;
      }
    }
  }
</style>
