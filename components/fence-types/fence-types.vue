<template>
  <section class="fence-types">
    <div class="fence-types__container">
      <h2 class="fence-types__title">Виды барьерных ограждений</h2>
      <figure class="fence-types__item">
        <img alt="Photo fence type" class="fence-types__item-image"
             height="260" src="../../assets/img/fence-types/fence-types@1x.webp"
             srcset="../../assets/img/fence-types/fence-types@2x.webp 2x"
             width="260">
        <div class="fence-types__item-content">
          <div class="fence-types__content">
            <h3>Дорожные односторонние (11ДО)</h3>
            <p>
              Ограждение 11ДО преимущественно устанавливают на участках дороги, где есть
              вероятность опасного съезда транспортных средств. Оградительная конструкция
              барьерного ограждения очерчивает границу дороги и предохраняет дорожное
              полотно от попадания габаритных предметов. В связи с этим барьерные ограждения
              11ДО являются обязательным дорожным сооружением на больших трассах. При
              производстве 11ДО учитываются все требования к функционалу оградительных
              конструкций этого типа: прочность, надёжность, динамический прогиб и высокая
              удерживающая способность.
            </p>
          </div>

          <div class="fence-types__content">
            <h3>Мостовые односторонние (11МО)</h3>
            <p>
              В дорожном строительстве используют для оборудования автомобильных мостов,
              путепроводов и эстакад. Они устанавливаются вдоль земляного полотна трассы.
              Именно такое качественное ограждение повышает гарантию безопасного движения
              по проезжей части, предохраняет водителей от рисков, связанных с попаданием
              посторонних предметов на дорожное полотно.
            </p>
          </div>
        </div>
      </figure>

      <figure class="fence-types__item">
        <img alt="Photo fence type" class="fence-types__item-image"
             height="260" src="../../assets/img/fence-types/fence-types-2@1x.webp"
             srcset="../../assets/img/fence-types/fence-types-2@2x.webp 2x"
             width="260">
        <div class="fence-types__item-content">
          <div class="fence-types__content">
            <h3>Дорожные двухсторонние (11ДД)</h3>
            <p>
              Двустороннее 11ДД дорожное барьерное ограждение используется на автодорогах с
              большим количеством дорожных полос. Такие барьерные ограждения, как правило,
              служат для дополнительного разделения полос и обеспечения безопасности
              движения.
            </p>
          </div>

          <div class="fence-types__content">
            <h3>Мостовые двухсторонние (11МД)</h3>
            <p>
              Устанавливаются на автомобильных мостах и путепроводах, которые имеют более
              четырех полос для движения автотранспорта, по оси разделительной полосы.
              Мостовые ограждения повышают безопасность участков автодороги и создают
              комфорт для движения водителей.
            </p>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FenceTypes'
}
</script>

<style lang="scss" scoped>
.fence-types {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 120px 40px;
}

.fence-types__container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.fence-types__title {
  margin-bottom: 60px;

  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
}

.fence-types__item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 30px 30px 10px;
  margin-bottom: 20px;

  background: $main-bg-color;
  box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08), 0px 20px 30px -12px rgba(32, 75, 69, 0.08);
  border-radius: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}

.fence-types__item-image {
  margin-right: 30px;
}

.fence-types__item-content {
  display: flex;
  flex-direction: column;
}

.fence-types__content {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 15px;

    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: rgba(0, 0, 0, 0.8);
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    opacity: 0.9;
  }
}

@include tablet-large {
  .fence-types {
    padding: 120px 40px 100px;
  }

  .fence-types__title {
    font-size: 24px;
    line-height: 29px;
  }

  .fence-types__content {
    margin-bottom: 20px;

    h3 {
      margin-bottom: 10px;

      font-size: 20px;
      line-height: 24px;
    }

    p {
      font-size: 12px;
    }
  }
}

@include mobile {
  .fence-types {
    padding: 120px 0 30px;
  }

  .fence-types__title {
    padding: 0 15px;
    margin-bottom: 70px;

    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

  .fence-types__item {
    flex-direction: column;
    padding: 10px 15px 30px 15px;
  }

  .fence-types__item-image {
    margin-bottom: 20px;
    width: 158px;
    height: 158px;
  }

  .fence-types__content {
    h3 {
      margin-bottom: 14px;

      font-size: 16px;
      line-height: 20px;
    }

    p {
      font-size: 11px;
    }
  }
}
</style>
