<template>
  <section class="screen-panel">
    <div class="screen-panel__container">
      <div class="screen-panel__content">
        <h2 class="screen-panel__title">Акустическая панель</h2>
        <p class="screen-panel__text">Панели классифицируются:</p>

        <dl class="screen-panel__list">
          <dt>По назначению:</dt>
          <dd>Стеновые (фасадные)</dd>
          <dd>Кровельные</dd>
        </dl>

        <dl class="screen-panel__list">
          <dt>
            По виду поверхности профилированного
            металлического листа:
          </dt>
          <dd>Перфорированный</dd>
          <dd>Неперфорированный</dd>
        </dl>

        <dl class="screen-panel__list">
          <dt>По виду наполнителя: </dt>
          <dd>Минеральная вата базальтовая на синтетическом связующем</dd>
          <dd>Полистирол вспененный ударопрочный</dd>
        </dl>
      </div>

      <img class="screen-panel__image" src="../../assets/img/screen-panel/screen-panel@1x.png" srcset="../../assets/img/screen-panel/screen-panel@2x.png" width="800" height="530" alt="Photo structure">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ScreenPanel'
  }
</script>

<style lang="scss" scoped>
  .screen-panel {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 190px 40px 200px;

    background: linear-gradient(102.74deg, #3F3F3F -0.57%, #2B2B2B 100%), #3F3F3F;
  }

  .screen-panel__container {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
  }

  .screen-panel__content {
    display: flex;
    flex-direction: column;
    max-width: 325px;
  }

  .screen-panel__title {
    margin-bottom: 40px;

    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
    color: $font-color-white;
  }

  .screen-panel__text {
    margin-bottom: 25px;

    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: $font-color-white;
  }

  .screen-panel__list {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }

    dt {
      margin-bottom: 9px;

      font-weight: 600;
      font-size: 14px;
      line-height: 160%;
      color: $font-color-white;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .screen-panel__list dd {
    position: relative;

    margin-bottom: 5px;
    padding-left: 19px;

    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    color: rgba(255, 255, 255, 0.8);

    &::before {
      position: absolute;
      content: "";
      top: 5px;
      left: 0;

      width: 10px;
      height: 10px;

      background-color: $bg-color-orange;
      border-radius: 100%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .screen-panel__image {
    margin-top: 10px;
  }

  @include desktop {
    .screen-panel {
      padding: 92px 40px 114px;
    }

    .screen-panel__content {
      padding-left: 80px;
      max-width: 405px;
    }

    .screen-panel__image {
      width: 720px;
    }
  }

  @include tablet-large {
    .screen-panel {
      padding: 100px 40px 120px;
    }

    .screen-panel__container {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      max-width: 688px;
    }

    .screen-panel__content {
      align-items: center;
      padding-left: 0;
      max-width: 395px;
      margin-bottom: 60px;
    }

    .screen-panel__title {
      margin-bottom: 10px;

      font-size: 34px;
      line-height: 41px;
    }

    .screen-panel__list {
      display: flex;
      flex-direction: column;
      align-items: center;

      dt {
        text-align: center;
      }

      dd {
        max-width: 290px;
        padding-left: 0;

        text-align: center;

        &::before {
          position: unset;
        }
      }
    }

    .screen-panel__image {
      margin: 0;
      width: 100%;
      height: auto;
    }
  }

  @include mobile {
    .screen-panel {
      padding: 60px 15px;
    }

    .screen-panel__content {
      max-width: 100%;
      margin-bottom: 48px;
    }

    .screen-panel__title {
      font-size: 24px;
      line-height: 29px;
    }

    .screen-panel__text {
      font-size: 16px;
      line-height: 140%;
    }

    .screen-panel__list {
      dt {
        margin-bottom: 12px;
        font-size: 13px;
      }

      dd {
        font-size: 13px;
      }
    }
  }

</style>
