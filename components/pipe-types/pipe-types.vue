<template>
  <section class="pipe-types">
    <div class="pipe-types__container">
      <h2 class="pipe-types__title">Виды Спиральновитых труб по типу покрытия:</h2>
      <ul class="pipe-types__list">
        <li class="pipe-types__list-item">
          <h3>Z</h3>
          <p>Оцинкованные с двух сторон</p>
        </li>
        <li class="pipe-types__list-item">
          <h3>1 HDPE</h3>
          <p>Одностороннее покрытие</p>
        </li>
        <li class="pipe-types__list-item">
          <h3>HDPE</h3>
          <p>Двустороннее покрытие</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "PipeTypes"
  }
</script>

<style lang="scss" scoped>
  .pipe-types {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 200px 40px;
  }

  .pipe-types__container {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
  }

  .pipe-types__title {
    margin-bottom: 60px;

    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: rgba(0, 0, 0, 0.8);
  }

  .pipe-types__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .pipe-types__list-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 414px;
    height: 194px;

    background: $main-bg-color;
    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08), 
      0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;

    h3 {
      margin-bottom: 20px;

      font-weight: bold;
      font-size: 42px;
      line-height: 140%;
      text-align: center;
      color: $font-color-orange;
    }

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
      text-align: center;
    }
  } 

  @include desktop-small {
    .pipe-types__list-item {
      width: 390px;
    }
  }

  @include tablet-large {
    .pipe-types__container {
      max-width: 688px;
    }

    .pipe-types__title {
      margin-bottom:65px;

      font-size: 24px;
      line-height: 29px
    }

    .pipe-types__list-item {
      width: 222px;
      height: 159px;
      padding: 20px;

      h3 {
        margin-bottom: 10px;
        font-size: 32px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @include mobile {
    .pipe-types {
      padding: 100px 15px;
    }

    .pipe-types__container {
      max-width: 100%;
      align-items: center;
    }

    .pipe-types__title {
      margin-bottom: 50px;
      max-width: 290px;

      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }

    .pipe-types__list {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .pipe-types__list-item {
      width: 100%;
      padding: 20px;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      &:nth-child(1) {
        p {
          max-width: 230px;
        }
      }
    }
  }
</style>