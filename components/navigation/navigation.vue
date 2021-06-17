<template>
  <section class="navigation">
    <div class="navigation__container">
      <h2>Ознакомтесь с услугами подробнее</h2>
      <ul class="navigation__list">
        <li v-for="item in navigationList" :key="item.id">
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Navigation',
  props: {
    navigationList: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>;

@include desktop-small {
}

@include tablet-large {
}

@include mobile {
}
</style>
