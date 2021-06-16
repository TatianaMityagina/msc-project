<template>
  <section class="benefits">
    <div class="benefits__container">
      <h2 class="benefits__title">Почему мы?</h2>
      <div class="benefits__list">
        <div class="benefits__item benefits__item--first">
          <img alt="Icon material" height="62" src="../../assets/img/benefits/icon-material.svg" width="62"/>
          <h3>Качественный материал</h3>
          <p>
            Работаем только с проверенными производителями
            металлоконструкций и крепежа
          </p>
        </div>

        <div class="benefits__item benefits__item--second">
          <img alt="Icon truck" height="49" src="../../assets/img/benefits/icon-truck.svg" width="82"/>
          <h3>Высокая мобильность</h3>
          <p>
            Доставляем металлоконструкции до объекта благодаря нашим
            проверенными и надежными транспортными компаниями
          </p>
        </div>

        <div class="benefits__item benefits__item--third">
          <img alt="Icon quality" height="64" src="../../assets/img/benefits/icon-quality.svg" width="47"/>
          <h3>Гарантия качества</h3>
          <p>
            Штатные монтажные бригады, высокое качество
            выполняемых работ в соответствии с ГОСТ и ТУ
          </p>
        </div>

        <div class="benefits__item benefits__item--fourth">
          <img alt="Icon detail" height="72" src="../../assets/img/benefits/icon-detail.svg" width="63"/>
          <h3>Внимание к деталям</h3>
          <p>
            Полное сопровождение и контроль работ на всех этапах позволяют
            нам сдавать качественно выполненные объекты точно в срок
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>

<style lang="scss" scoped>
.benefits {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 230px 40px;
}

.benefits__container {
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
}

.benefits__title {
  padding-top: 52px;

  font-weight: 600;
  font-size: 42px;
  line-height: 140%;
}

.benefits__list {
  max-width: 740px;
  display: flex;
  flex-wrap: wrap;
}

.benefits__item {
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-right: 80px;
  margin-bottom: 60px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  img {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 20px;

    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
  }

  p {
    font-size: 14px;
    line-height: 160%;
    opacity: 0.9;
  }
}

.benefits__item--third {
  padding-top: 10px;
  margin-bottom: 0;

  img {
    margin-bottom: 23px;
  }
}

.benefits__item--fourth {
  margin-bottom: 0;
}

@include desktop {
  .benefits {
    padding: 120px 40px;
  }
}

@include desktop-small {
  .benefits__container {
    flex-direction: column;
    justify-content: flex-start;
    max-width: 770px;
  }

  .benefits__title {
    margin-bottom: 80px;
    padding: 0;

    font-size: 34px;
  }

  .benefits__list {
    justify-content: space-between;
    max-width: 100%;
  }

  .benefits__item {
    margin-right: 0;

    h3 {
      font-size: 20px;
    }
  }
}

@include tablet-large {
  .benefits__container {
    max-width: 708px;
  }
}

@include tablet {
  .benefits {
    padding: 170px 40px;
  }

  .benefits__container {
    max-width: 688px;
  }
}

@include mobile {
  .benefits {
    padding: 80px 15px;
  }

  .benefits__container {
    align-items: center;
  }

  .benefits__title {
    margin-bottom: 60px;

    font-size: 24px;
    text-align: center;
  }

  .benefits__list {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .benefits__list .benefits__item {
    width: 100%;
    align-items: center;
    margin-bottom: 60px;

    h3 {
      margin-bottom: 8px;
      font-size: 18px;
    }

    p {
      font-size: 12px;
      text-align: center;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .benefits__item--third {
    padding: 0;
  }
}

</style>