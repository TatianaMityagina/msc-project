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

      <SliderNews v-bind:show-button="true"/>
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
    overflow: hidden;

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

  @include desktop-small {
    .intro {
      padding: 140px 40px 40px 40px;
    }

    .intro__slogan-wrapper {
      padding-left: 0;
      margin-bottom: 185px
    }

    .intro__slogan {
      max-width: 600px;
      margin-bottom: 80px;

      font-size: 34px;
    }
  }

  @include tablet-large {
    .intro {
      padding: 140px 0 40px 40px;

      background-image: url("../../assets/img/intro/intro-bg-1024@1x.webp"), url("../../assets/img/intro/intro-bg-1024@1x.jpg");

      @include retina {
        background-image: url("../../assets/img/intro/intro-bg-1024@2x.webp"), url("../../assets/img/intro/intro-bg-1024@2x.jpg");
      }
    }
  }

  @include mobile {
    .intro {
      padding: 80px 0 0 0;

      background-image: url("../../assets/img/intro/intro-bg-320@1x.webp"), url("../../assets/img/intro/intro-bg-320@1x.jpg");
      background-size: 100% auto;

      @include retina {
        background-image: url("../../assets/img/intro/intro-bg-320@2x.webp"), url("../../assets/img/intro/intro-bg-320@2x.jpg");
      }
    }

    .intro__slogan-wrapper {
      padding: 0 15px;
      margin-bottom: 85px;
    }

    .intro__slogan {
      max-width: 100%;
      margin-bottom: 165px;

      font-size: 24px;
      text-align: center;
    }
  }
</style>