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
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    justify-content: center;
    padding: 0 40px;
    width: 100%;
    margin-bottom: 60px;
  }

  .navigation__container {
    max-width: 1280px;
    width: 100%;

    h2 {
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
    }
  }

  .navigation__list {
    columns: 3;
    padding: 16px !important;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(32, 75, 69, 0.08),
    0 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;

    li {
      position: relative;
      padding: 5px 5px 5px 16px;

      &:hover {
        a {
          color: $font-color-orange;
          transition: $style-change-duration;
        }
      }

      &::before {
        position: absolute;
        content: "";
        top: 15px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: $bg-color-orange;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
    }
  }

  @include tablet-large {
    .navigation__container {
      h2 {
        font-size: 24px;
        line-height: 29px;
      }
    }
  }

  @include tablet {
    .navigation__list {
      columns: 2;
    }
  }

  @include mobile {
    .navigation {
      padding: 0 15px;
    }

    .navigation__container {
      h2 {
        font-size: 18px;
        line-height: 22px;
        text-align: center;
      }
    }

    .navigation__list {
      columns: 1;

      a {
        font-size: 14px;
      }
    }
  }
</style>
