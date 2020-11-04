<template>
  <section class="pipe-application">
    <div class="pipe-application__container">
      <div class="pipe-application__content">
        <h2 class="pipe-application__title">Области применения продукции «SPIREL»</h2>
        <ul class="pipe-application__content-list">
          <li class="pipe-application__list-item">
            Спиральновитые гофрированные металлические трубы 
            нашли применение не только при устройстве водопропускных 
            сооружений под насыпями автомобильных дорог
          </li>
          <li class="pipe-application__list-item">
            Изделия задействуют для организации ливнестоков, смотровых колодцев, стояков
          </li>
          <li class="pipe-application__list-item">
            Из секций монтируют резервуары и закрытые дренажи
          </li>
          <li class="pipe-application__list-item">
            Спиральновитыми блоками изолируют конвейеры
          </li>
          <li class="pipe-application__list-item">
            Трубы используют как коллекторы различного назначения, бункеры, корпуса силосов
          </li>
          <li class="pipe-application__list-item">
            Из изделий получаются практичная несъёмная опалубка
          </li>
        </ul>

        <h3 class="pipe-application__subtitle">Системы также успешно применяют в других видах гражданского строительства:</h3>

        <ul class="pipe-application__content-list">
          <li class="pipe-application__list-item">Для организации подземных переходов</li>
          <li class="pipe-application__list-item">При возведении гидротехнических строений</li>
          <li class="pipe-application__list-item">Для обустройства экологических коридоров</li>
          <li class="pipe-application__list-item">Для укрепления эксплуатирующихся длительное время инженерных сооружений</li>
        </ul>
      </div>
    </div>
    <img class="pipe-application__image" src="../../assets/img/pipe-application/pipe-application@1x.webp" srcset="../../assets/img/pipe-application/pipe-application@2x.webp" width="960" height="950" alt="Photo pipe application">
  </section>
</template>

<script>
  export default {
    name: 'PipeApplication'
  }
</script>

<style lang="scss" scoped>
  .pipe-application {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 40px;
    min-height: 950px;

    background: $main-bg-color;
  }

  .pipe-application__container {
    max-width: 1280px;
    width: 100%;
  }

  .pipe-application__image {
    position: absolute;
    top: 0;
    right: 0;
  }

  .pipe-application__content {
    display: flex;
    flex-direction: column;
    max-width: 535px;
  }

  .pipe-application__title {
    margin-bottom: 30px;
    max-width: 400px;

    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    color: rgba(0, 0, 0, 0.8);
  }

  .pipe-application__subtitle {
    margin-bottom: 30px;
    padding-top: 77px;

    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    color: rgba(0, 0, 0, 0.8);
  }

  .pipe-application__content-list {
    display: flex;
    flex-direction: column;
  }

  .pipe-application__list-item {
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
    .pipe-application {
      min-height: 910px;
    }

    .pipe-application__image {
      width: 44vw;
      height: 910px;
      object-fit: cover;
    }
  }

  @include tablet-large {
    .pipe-application {
      flex-direction: column;
      min-height: auto;
      padding: 0;
    }

    .pipe-application__container {
      padding: 60px 40px 80px;
      order: 2;
    }

    .pipe-application__content {
      max-width: 100%;
    }

    .pipe-application__image {
      position: unset;

      order: 1;
      width: 100%;
      height: 500px;
    }

    .pipe-application__title {
      max-width: 100%;

      font-size: 25px;
    }

    .pipe-application__subtitle {
      padding-top: 40px;

      max-width: 455px;
      font-size: 16px;
    }

    .pipe-application__content-list {
      max-width: 100%;
    }

    .pipe-application__list-item {
      padding-left: 20px;

      font-size: 14px;
      line-height: 160%;
    }
  }

  @include mobile {
    .pipe-application__container {
      padding: 40px 15px 60px;
    }

    .pipe-application__image {
      min-height: auto;
      height: auto;
      max-height: 240px;
    }

    .pipe-application__title {
      margin-bottom: 16px;

      font-size: 18px;
      line-height: 22px;
    }

    .pipe-application__subtitle {
      padding-top: 30px;
      margin-bottom: 20px;

      max-width: 288px;
      font-size: 15px;
    }

    .pipe-application__list-item {
      font-size: 13px;
    }
  }

</style>
