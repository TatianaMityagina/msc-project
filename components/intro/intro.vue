<template>
  <section class="intro">
    <div class="intro__container">
      <div class="intro__slogan-wrapper">
        <h1 class="intro__slogan">Комплексный подход к благоустройству дорожной инфраструктуры</h1>
        <a class="btn btn--orange" href="">
          <span>перейти к услугам</span>

          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 -2.62268e-07L7 13M7 13L13 7M7 13L1 7" stroke="white" stroke-width="2"/>
          </svg>
        </a>
      </div>

      <SliderNews />
    </div>
  </section>
</template>

<script>
  import SliderNews from '../slider-news/slider-news'
  export default {
    name: 'Intro',
    components: {
      SliderNews
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    display: flex;
    justify-content: center;
    padding: 135px 40px 40px 40px;
    width: 100%;

    background-image: url("../../assets/img/intro/intro-bg@1x.webp"), url("../../assets/img/intro/intro-bg@1x.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    @include retina {
      background-image: url("../../assets/img/intro/intro-bg@2x.webp"), url("../../assets/img/intro/intro-bg@2x.jpg");
    }
  }

  .intro__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    width: 100%
  }

  .intro__slogan-wrapper {
    width: 100%;
    padding-left: 60px;
    margin-bottom: 138px;
  }

  .intro__slogan {
    margin-bottom: 100px;
    max-width: 750px;

    font-weight: 600;
    font-size: 42px;
    line-height: 140%;
    color: $font-color-white;
  }
</style>