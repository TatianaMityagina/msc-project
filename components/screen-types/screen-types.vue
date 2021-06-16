<template>
  <section class="screen-types">
    <div class="screen-types__container">
      <div class="screen-types__top-wrapper">
        <h3 class="screen-types__title">Варианты исполнения экранов:</h3>
        <div class="screen-types__top-list">
          <figure class="screen-types__top-item">
            <img alt="Photo screen" height="160" src="../../assets/img/screen-types/photo-1.webp" width="240">
            <p>Сплошные <br>(Непрозрачные)</p>
          </figure>

          <figure class="screen-types__top-item">
            <img alt="Photo screen" height="160" src="../../assets/img/screen-types/photo-2.webp" width="240">
            <p>Комбинированные со светопрозрачными элементами</p>
          </figure>
        </div>
      </div>
      <div class="screen-types__bottom-wrapper">
        <h3 class="screen-types__title">Варианты исполнения экранов:</h3>
        <div class="screen-types__bottom-list">
          <figure class="screen-types__bottom-item">
            <img alt="Photo screen" height="332" src="../../assets/img/screen-types/photo-3.png" width="130">
            <p>Сплошной</p>
          </figure>

          <figure class="screen-types__bottom-item">
            <img alt="Photo screen" height="332" src="../../assets/img/screen-types/photo-4.png" width="130">
            <p>Фигурный с одним наклоном 12°</p>
          </figure>

          <figure class="screen-types__bottom-item">
            <img alt="Photo screen" height="332" src="../../assets/img/screen-types/photo-5.png" width="130">
            <p>Фигурный с двумя наклонами 12°</p>
          </figure>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ScreenTypes'
}
</script>

<style lang="scss" scoped>
.screen-types {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px 200px;
}

.screen-types__container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.screen-types__title {
  margin-bottom: 60px;

  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
}

.screen-types__top-wrapper {
  margin-bottom: 120px;
}

.screen-types__top-list {
  display: flex;
  justify-content: space-between;
}

.screen-types__top-item {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 630px;
  height: 180px;

  background: $main-bg-color;
  box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
  0px 20px 30px -12px rgba(32, 75, 69, 0.08);
  border-radius: 12px;

  img {
    margin-right: 30px;
    border-radius: 6px;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
  }
}

.screen-types__bottom-list {
  display: flex;
  justify-content: space-between;
}

.screen-types__bottom-item {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 414px;
  height: 352px;

  background: $main-bg-color;
  box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
  0px 20px 30px -12px rgba(32, 75, 69, 0.08);
  border-radius: 12px;

  img {
    margin-right: 30px;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
  }
}

@include desktop-small {
  .screen-types__top-item {
    width: 590px;
  }

  .screen-types__bottom-item {
    width: 387px;
  }
}

@include tablet-large {
  .screen-types {
    padding: 120px 40px 150px;
  }

  .screen-types__container {
    max-width: 688px;
  }

  .screen-types__title {
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }

  .screen-types__top-wrapper .screen-types__title {
    margin-bottom: 40px;
  }

  .screen-types__top-item {
    flex-direction: column;
    width: 334px;
    height: 299px;

    img {
      width: 314px;
      height: 160px;
      margin: 0 0 24px 0;
    }

    p {
      max-width: 302px;
      text-align: center
    }
  }

  .screen-types__bottom-wrapper .screen-types__title {
    margin-bottom: 72px;
  }

  .screen-types__bottom-item {
    flex-direction: column;
    width: 223px;
    height: 494px;

    img {
      width: 203px;
      height: 332px;
      margin: 0 0 24px 0;
    }

    p {
      max-width: 302px;
      text-align: center
    }
  }
}

@include mobile {
  .screen-types {
    padding: 100px 15px 120px;
  }

  .screen-types .screen-types__title {
    margin-bottom: 40px;

    font-size: 18px;
    line-height: 22px;
  }

  .screen-types__top-wrapper {
    margin-bottom: 100px;
  }

  .screen-types__top-list,
  .screen-types__bottom-list {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .screen-types__top-item {
    margin-bottom: 10px;
    width: 100%;
    height: 262px;

    &:nth-child(2) {
      height: 284px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    p {
      max-width: 256px;

      font-size: 16px;
      line-height: 140%;
    }
  }

  .screen-types__bottom-item {
    flex-direction: row;
    margin-bottom: 10px;
    width: 100%;
    height: 166px;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      margin: 0 16px 0 0;
      width: 78px;
      height: 146px;
    }

    p {
      font-size: 15px;
      line-height: 140%;
    }
  }
}
</style>