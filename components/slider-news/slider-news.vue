<template>
  <section class="slider-news">
    <h2 class="visually-hidden">Слайдер с новостями</h2>
    <div class="slider-news__container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in sliderItem" :key="item.id">
          <h3> {{ item.title }} </h3>
          <p> {{ item.text }} </p>
          <a class="swiper-slide__btn" href="">
            <span>Читать дальше</span>
            <svg width="18" height="12" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="#A3A3A3" stroke-width="2"/>
              <path d="M7 1L13 7L7 13" stroke="#A3A3A3" stroke-width="2"/>
              <path d="M13 1L19 7L13 13" stroke="#A3A3A3" stroke-width="2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button class="slider-news__button slider-news__button--next" type="button">
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L12 12L1 23" stroke="white" stroke-width="2"/>
      </svg>
    </button>
    <button class="slider-news__button slider-news__button--prev" type="button">
      <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L2 12L13 23" stroke="white" stroke-width="2"/>
      </svg>
    </button>

    <a class="slider-news__byn-more" href="">смотреть все новости</a>
  </section>
</template>

<script>
  import Swiper from 'swiper/js/swiper.esm.bundle'
  import 'swiper/css/swiper.min.css'
  
  export default {
    name: 'SliderNews',
    data() {
      return {
        swiper: null,
        sliderItem: [
          {
            id: 0,
            title: 'Новость №1',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
          },
          {
            id: 1,
            title: 'Новость №2',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
          },
          {
            id: 2,
            title: 'Новость №3',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
          },
          {
            id: 3,
            title: 'Новость №4',
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
          }
        ]
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

  .slider-news__byn-more {
    position: relative;

    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    color: $font-color-white;
    text-transform: uppercase;
    text-decoration: none;

    &::after {
      position: absolute;
      content: "";
      bottom: 2px;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: $main-bg-color;
    }
  }
</style>