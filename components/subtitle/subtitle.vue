<template>
  <div class="subtitle">
    <div class="subtitle__container">
      <nuxt-link :to="subtitles.href || ''" class="subtitle__link">
        <svg class="news-info__header-icon" fill="none" height="13" viewBox="0 0 17 13" width="17"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M17 6.5H2M2 6.5L7 1M2 6.5L7 12" stroke="black" stroke-opacity="0.3" stroke-width="2"/>
        </svg>
        <span>Назад</span>
      </nuxt-link>
      <h1 class="subtitle__title"> {{ subtitles.title }} </h1>
      <p v-show="subtitles.text != ''" class="subtitle__text"> {{ subtitles.text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
    subtitles: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px;

  background-color: $main-bg-color;
}

.subtitle__container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.subtitle__link {
  width: 90px;
  margin-bottom: 40px;
  text-decoration: none;

  svg {
    margin-right: 8px;
    transition: $style-change-duration;
  }

  svg > path {
    transition: $style-change-duration;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.4);

    transition: $style-change-duration;
  }
}

.subtitle__link:hover {
  svg > path {
    stroke: $font-color-orange;
    stroke-opacity: 1;

    transition: $style-change-duration;
  }

  span {
    color: $font-color-orange;
    transition: $style-change-duration;
  }
}

.subtitle__title {
  font-weight: 600;
  font-size: 42px;
  line-height: 140%;
}

.subtitle__text {
  max-width: 560px;
  padding-top: 30px;

  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

@include desktop {
  .subtitle {
    padding: 30px 40px;
  }

  .subtitle__link {
    margin-bottom: 10px;
  }

  .subtitle__text {
    padding-top: 20px;
  }
}

@include tablet {
  .subtitle {
    padding: 20px 40px;
  }

  .subtitle__link {
    span {
      font-size: 15px;
      line-height: 18px;
    }
  }

  .subtitle__title {
    font-size: 34px;
    line-height: 140%;
  }
}

@include mobile {
  .subtitle {
    padding: 15px;
  }

  .subtitle__link {
    margin-bottom: 8px;

    span {
      font-size: 15px;
      line-height: 18px;
    }
  }

  .subtitle__title {
    font-size: 24px;
    line-height: 140%;
  }

  .subtitle__text {
    padding-top: 15px;
    font-size: 11px;
  }
}
</style>
