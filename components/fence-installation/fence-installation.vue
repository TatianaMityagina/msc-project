<template>
  <section class="fence-installation">
    <div class="fence-installation__container">
      <h2 class="fence-installation__title">Установка Барьерных&nbsp;ограждений</h2>

      <div class="fence-installation__content">
        <p>
          Ответственный процесс, недочеты которого могут стоить
          жизни участникам дорожного движения. От добросовестности монтажа не в
          последнюю очередь зависит то, насколько барьерное ограждение сможет выполнять
          свое прямое назначение — уменьшить последствия удара автомобиля и избежать опрокидывания в кювет.
        </p>
        <p>
          <b>Монтаж в сжатые сроки</b> — то, с чем мы сталкиваемся регулярно. Наличие
          собственного современного оборудования позволяет соблюсти срочность установки
          конструкций, не жертвуя, при этом, качеством и гарантиями. Нередко установка
          ограждений требует применения и узкоспециализированного оборудования, например, для монтажа в скальных
          породах.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FenceInstallation'
}
</script>

<style lang="scss" scoped>
.fence-installation {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 290px 40px;
  background: $main-bg-color;
}

.fence-installation__container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.fence-installation__title {
  margin-bottom: 30px;

  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
}

.fence-installation__content {
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    max-width: 560px;

    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
  }
}

@include desktop {
  .fence-installation {
    padding: 200px 40px;
  }
}

@include tablet-large {
  .fence-installation__container {
    max-width: 688px;
  }

  .fence-installation__title {
    font-size: 24px;
    line-height: 29px;
  }

  .fence-installation__content {
    flex-direction: column;
    justify-content: flex-start;

    p {
      max-width: 100%;
      margin-bottom: 20px;

      font-size: 14px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@include mobile {
  .fence-installation {
    padding: 100px 15px 80px;
  }

  .fence-installation__title {
    margin-bottom: 16px;

    font-size: 18px;
    line-height: 22px;
  }

  .fence-installation__content {
    p {
      margin-bottom: 15px;
      font-size: 13px;
    }
  }
}

</style>
