<template>
  <section class="central-content" :style="{'background-color': contentOptions.color}">
    <p class="central-content__text">{{ contentOptions.text }}</p>
  </section>
</template>

<script>
  export default {
    name: 'CentralContent',
    props: {
      contentOptions: {
        type: Object,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .central-content {
    display: flex;
    justify-content: center;
    padding: 120px 40px;
    width: 100%;

    background-color: $bg-color-orange;
  }

  .central-content__text {
    max-width: 1084px;

    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: $font-color-white;
  }

  @include tablet-large {
    .central-content__text {
      max-width: 505px;
      font-size: 16px;
    }
  }

  @include mobile {
    .central-content {
      padding: 100px 15px;
    }
    
    .central-content__text {
      max-width: 100%;
      font-size: 13px;
    }
  }
</style>