<template>
  <section class="pipe-structure">
    <picture class="pipe-structure__image">
      <source media="(max-width: 1279px)" srcset="../../assets/img/pipe-structure/pipe-structure-1920@1x.webp 1x, ../../assets/img/pipe-structure/pipe-structure-1920@1x.webp 2x">
      <source media="(max-width: 1919px)" srcset="../../assets/img/pipe-structure/pipe-structure-1360@1x.webp 1x, ../../assets/img/pipe-structure/pipe-structure-1360@1x.webp 2x">
      <img src="../../assets/img/pipe-structure/pipe-structure-1920@1x.webp" srcset="../../assets/img/pipe-structure/pipe-structure-1920@2x.webp 2x" width="960" height="900" alt="Photo pipe">
    </picture>

    <div class="pipe-structure__content-wrapper">
      <h2 class="pipe-structure__content-title">Характеристики металлических водопропускных труб «МСК»:</h2>
      <ul class="pipe-structure__content-list">
        <li class="pipe-structure__list-item">
          Материал изделий – оцинкованная сталь марок <span class="orange">S250-280GD</span>, Ст. 250 <span class="orange">толщиной 1,5-3,5 мм.</span>
        </li>
        <li class="pipe-structure__list-item">
          Защитное покрытие: горячее цинкование;
          полимерная обмазка перед засыпкой грунтом;
          пленка <span class="orange">HDPE / Trenchcoat</span>, нанесенная в заводских
          условиях.
        </li>
        <li class="pipe-structure__list-item">
          Профиль и размеры гофра варьируются в зависимости от диаметра гофрированной
          водопропускной трубы. Для изделий диаметром <span class="orange">500-1100</span> и <span class="orange">1000-3600 мм</span>
          используют стандартные профили - <span class="orange">68×13</span>  и <span class="orange">125×26 мм.</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PipeStructure'
  }
</script>

<style lang="scss" scoped>
  .pipe-structure {
    display: flex;
    align-items: center;
    max-width: 1920px;
    width: 100%;

    background: $main-bg-color;
  }

  .pipe-structure__image {
    margin-right: 122px;
  }

  .pipe-structure__content-title {
    margin-bottom: 30px;
    max-width: 495px;

    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    color: rgba(0, 0, 0, 0.8);
  }

  .pipe-structure__content-list {
    display: flex;
    flex-direction: column;
    max-width: 455px;
  }

  .pipe-structure__list-item {
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
  
  .pipe-structure__list-item .orange {
    color: $font-color-orange;
    font-weight: 600;
  }

  @include desktop {
    .pipe-structure__image img {
      width: 44vw;
      height: 720px;
    }
  }

  @include desktop-small {
    .pipe-structure__image {
      margin-right: 100px;

      img {
        width: 46.8vw;
        height: 640px;
      }
    }
  }

  @include tablet-large {
    .pipe-structure {
      flex-direction: column;
      align-items: flex-start;
    }

    .pipe-structure__image {
      margin: 0;
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .pipe-structure__content-wrapper {
      padding: 60px 40px 100px;
    }

    .pipe-structure__content-title {
      margin-bottom: 20px;

      font-size: 24px;
      line-height: 29px;
    }

    .pipe-structure__content-list {
      max-width: 100%;
    }

    .pipe-structure__list-item {
      padding-left: 20px;

      font-size: 14px;
      line-height: 160%;
    }
  }

  @include tablet {
    .pipe-structure__image {
      img {
        height: auto;
        max-height: 495px;
      }
    }
  }

  @include mobile {
    .pipe-structure__content-wrapper {
      padding: 40px 15px 60px;
    }

    .pipe-structure__image {
      img {
        max-height: 260px;
      }
    }

    .pipe-structure__content-title {
      margin-bottom: 16px;

      font-size: 18px;
      line-height: 22px;
    }

    .pipe-structure__list-item {
      font-size: 13px;
    }
  }
</style>
