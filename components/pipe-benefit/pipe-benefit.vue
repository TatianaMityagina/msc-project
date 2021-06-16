<template>
  <section class="pipe-benefit">
    <div class="pipe-benefit__container">
      <h2 class="pipe-benefit__title">Преимущества СГМТ</h2>

      <div class="pipe-benefit__content">
        <div class="pipe-benefit__text-wrapper">
          <p>
            Основной выигрыш для строителей дает простой монтаж без привлечения тяжелой габаритной
            техники. За счет этого достоинства применение технологии снижает затраты, ускоряет введение
            объекта в строй. Сроки строительства уменьшаются в разы в сравнении с сооружением бетонных
            конструкций. При этом достаточно перекрыть половину дорожного полотна. Работы выполняются
            круглый год, в том числе в зимний период. Благодаря современным покрытиям гофрированная
            металлическая труба эффективно защищена от механических повреждений, истирания, коррозии
            на всех этапах производства, перевозки, монтажа, эксплуатации.
          </p>
          <p>
            Полимерное покрытие за счет изоляционных свойств обеспечивает высокую электрическую
            стойкость материала. Показатель этой величины намного выше значений блуждающих токов,
            которые наблюдаются на электрифицированных ж/д путях.
          </p>
          <p>
            Одновременно с сооружением водопропускного канала за счет укрепления дорожной насыпи
            повышается прочность дороги. Экономия особенно заметна при сравнении данной технологии с
            возведением переходного моста. Тоннель можно смонтировать даже после сооружения насыпи, тогда
            как строительство моста в подобном случае становится не возможным.
          </p>
        </div>

        <ul class="pipe-benefit__content-list">
          <li class="pipe-benefit__list-item">Адаптивность благодаря большому разнообразию видов поперечного сечения
          </li>
          <li class="pipe-benefit__list-item">Транспортабельность. На эту характеристику оказывают влияние параметры
            труб: малый вес
          </li>
          <li class="pipe-benefit__list-item">
            Технология строительства водопропускных сооружений отличается
            высокой скоростью и простотой проведения работ
          </li>
          <li class="pipe-benefit__list-item">Прочность, гибкость конструкций</li>
          <li class="pipe-benefit__list-item">Долговечность. При грамотном монтаже срок службы достигает 80-90 лет</li>
          <li class="pipe-benefit__list-item">Низкая стоимость</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PipeBenefit'
}
</script>

<style lang="scss" scoped>
.pipe-benefit {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;

  background: $main-bg-color;
}

.pipe-benefit__container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.pipe-benefit__title {
  margin-bottom: 30px;

  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
}

.pipe-benefit__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.pipe-benefit__text-wrapper {
  max-width: 560px;

  p {
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 16px;
    line-height: 160%;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.pipe-benefit__content-list {
  display: flex;
  flex-direction: column;
  max-width: 560px;
}

.pipe-benefit__list-item {
  position: relative;

  padding-left: 25px;
  margin-bottom: 20px;

  font-weight: 600;
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

@include tablet-large {
  .pipe-benefit {
    padding: 100px 40px;
  }

  .pipe-benefit__title {
    margin-bottom: 35px;

    font-size: 24px;
    line-height: 29px;
  }

  .pipe-benefit__content {
    flex-direction: column;
    justify-content: flex-start;
  }

  .pipe-benefit__text-wrapper {
    max-width: 100%;
    margin-bottom: 30px;

    p {
      margin-bottom: 15px;
      font-size: 14px;
    }
  }

  .pipe-benefit__content-list {
    max-width: 100%;
  }

  .pipe-benefit__list-item {
    padding-left: 20px;
    margin-bottom: 18px;
  }
}

@include mobile {
  .pipe-benefit {
    padding: 100px 15px;
  }

  .pipe-benefit__title {
    margin-bottom: 16px;

    font-size: 18px;
    line-height: 22px;
  }

  .pipe-benefit__text-wrapper {
    margin-bottom: 24px;

    p {
      font-size: 11px;
    }
  }

  .pipe-benefit__list-item {
    margin-bottom: 10px;
    font-size: 13px;

    &::before {
      top: 6px;
    }
  }
}

</style>
