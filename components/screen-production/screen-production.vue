<template>
  <section class="screen-production">
    <picture class="screen-production__image">
      <source media="(max-width: 1279px)" srcset="../../assets/img/screen-production/screen-production-1920.webp">
      <source media="(max-width: 1919px)" srcset="../../assets/img/screen-production/screen-production-1360.webp">
      <img alt="Photo screen" height="900" src="../../assets/img/screen-production/screen-production-1920.webp"
           width="960">
    </picture>

    <div class="screen-production__content-wrapper">
      <h2 class="screen-production__content-title">
        Для изготовления наружных слоев панелей используют прокат
        холоднокатаный горячеоцинкованный толщиной 0,5 – 0,7 мм.
      </h2>
      <p class="screen-production__content-text">
        Допускается применение стали тонколистовой
        с декоративным и защитным полимерным покрытием
        с качеством поверхности, соответствующей требованиям
        нормативных документов по EN 10326 и EN 10327.
      </p>
      <p class="screen-production__content-text">
        Допускается использование проката тонколистового коррозионностойкого,
        соответствующего требованиям ГОСТ 5582-75 (сталь нержавеющая),
        а также ГОСТ 4784-97 (алюминий и алюминиевые сплавы) или требованиям
        иных нормативных документов, аналогичных требованиям ГОСТ 5582-75, ГОСТ 4784-97.

      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScreenProduction'
}
</script>

<style lang="scss" scoped>
.screen-production {
  display: flex;
  align-items: center;
  max-width: 1920px;
  width: 100%;

  background: $main-bg-color;
}

.screen-production__image {
  margin-right: 160px;
}

.screen-production__content-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 480px;

}

.screen-production__content-title {
  margin-bottom: 30px;

  font-weight: 600;
  font-size: 22px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.8);
}

.screen-production__content-text {
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 160%;

  &:last-child {
    margin-bottom: 0;
  }
}

@include desktop {
  .screen-production__image {
    margin-right: 120px;

    img {
      width: 44vw;
      height: 720px;
    }
  }
}

@include desktop-small {
  .screen-production__image {
    margin-right: 100px;

    img {
      width: 46.8vw;
      height: 640px;
    }
  }
}

@include tablet-large {
  .screen-production {
    flex-direction: column;
    align-items: flex-start;
  }

  .screen-production__image {
    margin: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .screen-production__content-wrapper {
    padding: 60px 40px 100px;
    max-width: 100%;
  }

  .screen-production__content-title {
    margin-bottom: 20px;
    font-size: 20px;
  }

  .screen-production__content-text {
    margin-bottom: 10px;
    font-size: 14px;
  }
}

@include tablet {
  .screen-production__image {
    img {
      height: 497px;
    }
  }
}

@include mobile {
  .screen-production__image {
    img {
      height: auto;
    }
  }

  .screen-production__content-wrapper {
    padding: 40px 15px 60px;
  }

  .screen-production__content-title {
    font-size: 18px;
  }

  .screen-production__content-text {
    font-size: 13px;
  }
}
</style>
