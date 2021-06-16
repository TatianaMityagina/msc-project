<template>
  <section class="about-service">
    <div class="about-service__container">
      <div class="about-service__content">
        <h2 class="about-service__title">{{ aboutService.title }}</h2>
        <p class="about-service__text">{{ aboutService.text1 }}</p>
        <p v-show="aboutService.text2 != ''" class="about-service__text">{{ aboutService.text2 }}</p>
      </div>
    </div>
    <img :src="require(`../../assets/img/about-service/${aboutService.src}`)" :srcset="require(`../../assets/img/about-service/${aboutService.srcset}`)"
         alt="Photo fence" class="about-service__image" height="628"
         width="900">
  </section>
</template>

<script>
export default {
  name: 'ScreenPanel',
  props: {
    aboutService: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.about-service {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  min-height: 628px;
}

.about-service__container {
  max-width: 1280px;
  width: 100%;
}

.about-service__image {
  position: absolute;
  top: 0;
  right: 0;
}

.about-service__content {
  display: flex;
  flex-direction: column;
  max-width: 520px;
}

.about-service__title {
  margin-bottom: 30px;

  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
}

.about-service__text {
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 160%;

  &:last-child {
    margin-bottom: 0;
  }
}

@include desktop {
  .about-service__image {
    width: 44vw;
    object-fit: cover;
  }
}

@include desktop-small {
  .about-service {
    min-height: 580px;
  }

  .about-service__image {
    width: 38.2vw;
    height: 580px;
  }
}

@include tablet-large {
  .about-service {
    flex-direction: column;
    min-height: auto;
    padding: 0;
  }

  .about-service__container {
    padding: 60px 40px 80px;
    order: 2;
  }

  .about-service__image {
    position: unset;

    order: 1;
    width: 100%;
    min-height: 500px;
  }

  .about-service__title {
    margin-bottom: 20px;

    font-size: 24px;
    line-height: 29px;
  }

  .about-service__text {
    margin-bottom: 15px;
    font-size: 14px;
  }
}

@include mobile {
  .about-service__container {
    padding: 40px 15px 60px;
  }

  .about-service__image {
    min-height: auto;
    height: auto;
  }

  .about-service__title {
    margin-bottom: 16px;

    font-size: 18px;
    line-height: 22px;
  }

  .about-service__text {
    font-size: 13px;
  }
}

</style>
