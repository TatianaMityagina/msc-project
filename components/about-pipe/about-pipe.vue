<template>
   <section class="about-pipe" :style="{'background-color': aboutPipe.color}">
     <div class="about-pipe__container">
        <h2 class="about-pipe__title">{{ aboutPipe.title }}</h2>

        <div class="about-pipe__content">
          <p> {{ aboutPipe.text1 }} </p>
          <p> {{ aboutPipe.text2 }} </p>
        </div>
     </div>
   </section>
</template>

<script>
  export default {
    name: 'AboutPipe',
    props: {
      aboutPipe: {
        type: Object,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-pipe {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 290px 40px;

    background: $main-bg-color;
  }

  .about-pipe__container {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
  }

  .about-pipe__title {
    margin-bottom: 30px;

    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: rgba(0, 0, 0, 0.8);
  }

  .about-pipe__content {
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
    .about-pipe {
      padding: 200px 40px;
    }
  }

  @include tablet-large {
    .about-pipe__title {
      font-size: 24px;
      line-height: 29px;
    }

    .about-pipe__content {
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
    .about-pipe {
      padding: 100px 15px 80px;
    }

    .about-pipe__title {
      margin-bottom: 16px;

      font-size: 18px;
      line-height: 22px;
    }

    .about-pipe__content {
      p {
        margin-bottom: 15px;
        font-size: 13px;
      }
    }
  }

</style>
