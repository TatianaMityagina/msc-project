<template>
  <section class="screen-structure">
    <picture class="screen-structure__image">
      <source media="(max-width: 1279px)" srcset="../../assets/img/screen-structure/screen-768.webp">
      <source media="(max-width: 1919px)" srcset="../../assets/img/screen-structure/screen-1280.webp">
      <img src="../../assets/img/screen-structure/screen-1920.webp" width="960" height="800" alt="Photo screen"> 
    </picture>

    <div class="screen-structure__content-wrapper">
      <h2 class="screen-structure__content-title">Из чего состоят экраны?</h2>
      <p class="screen-structure__content-text">
        Экран представляет собой единичный модуль, в состав которого, в зависимости от комплектации включены:
      </p>
      <ul class="screen-structure__content-list">
        <li class="screen-structure__list-item">Панели звукопоглощающие перфорированные;</li>
        <li class="screen-structure__list-item">Панели звукоотражающие неперфорированные;</li>
        <li class="screen-structure__list-item">Панели звукоотражающие светопрозрачные;</li>
        <li class="screen-structure__list-item">Стойки вертикальные;</li>
        <li class="screen-structure__list-item">Профиль опорный горизонтальный.</li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ScreenStructure'
  }
</script>

<style lang="scss" scoped>
  .screen-structure {
    display: flex;
    align-items: center;
    max-width: 1920px;
    width: 100%;

    background: $main-bg-color;
  }

  .screen-structure__image {
    margin-right: 122px;
  }

  .screen-structure__content-title {
    margin-bottom: 30px;

    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: rgba(0, 0, 0, 0.8);
  }

  .screen-structure__content-text {
    margin-bottom: 20px;
    max-width: 490px;

    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
  }

  .screen-structure__content-list {
    display: flex;
    flex-direction: column;
  }

  .screen-structure__list-item {
    position: relative;

    padding-left: 25px;
    margin-bottom: 10px;

    font-weight: 500;
    font-size: 16px;
    line-height: 160%;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      position: absolute;
      content: "";
      top: 8px;
      left: 0;

      width: 10px;
      height: 10px;

      background-color: $bg-color-orange;
      border-radius: 100%;
    }
  }

  @include desktop {
    .screen-structure__image img {
      width: 44vw;
      height: 720px;
    }
  }

  @include desktop-small {
    .screen-structure__image {
      margin-right: 100px;

      img {
        width: 46.8vw;
        height: 640px;
      }
    }
  }

  @include tablet-large {
    .screen-structure {
      flex-direction: column;
      align-items: flex-start;
    }

    .screen-structure__image {
      margin: 0;
      
      img {
        width: 100%;
        height: auto;
      }
    }

    .screen-structure__content-wrapper {
      padding: 60px 40px 100px;
    }

    .screen-structure__content-title {
      margin-bottom: 20px;

      font-size: 24px;
      line-height: 29px;
    }

    .screen-structure__list-item {
      padding-left: 20px;

      font-size: 14px;
      line-height: 160%;
    }

    .screen-structure__content-text {
      max-width: 435px;

      font-size: 14px;
      line-height: 160%;
    }
  }

  @include mobile {
    .screen-structure__content-wrapper {
      padding: 40px 15px 60px;
    }

    .screen-structure__content-title {
      margin-bottom: 16px;

      font-size: 18px;
      line-height: 22px;
    }

    .screen-structure__content-text {
      margin-bottom: 10px;
      font-size: 13px;
    }

    .screen-structure__list-item {
      font-size: 13px;
    }
  }
</style>