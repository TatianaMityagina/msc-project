<template>
  <header class="main-header">
    <div class="main-header__container">
      <svg class="main-header__logotype" width="98" height="29" viewBox="0 0 98 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 14.5C16.5 18.2864 13.2241 21.5 9 21.5C4.77593 21.5 1.5 18.2864 1.5 14.5C1.5 10.7136 4.77593 7.5 9 7.5C13.2241 7.5 16.5 10.7136 16.5 14.5Z" stroke="#3F3F3F" stroke-width="3"/>
        <path d="M14 23C18 23 21 19.3783 21 14.5C21 9.62169 18 6 14 6C20.9706 6 24 9.80558 24 14.5C24 19.1944 20.9706 23 14 23Z" fill="#3F3F3F"/>
        <path d="M20 23C24 23 27 19.3783 27 14.5C27 9.62169 24 6 20 6C26.9706 6 30 9.80558 30 14.5C30 19.1944 26.9706 23 20 23Z" fill="#3F3F3F"/>
        <path d="M57.784 23L57.76 11.864L52.24 21.08H50.848L45.328 12.008V23H42.376V6.2H44.944L51.592 17.312L58.168 6.2H60.712L60.76 23H57.784ZM73.1894 23.24C71.4934 23.24 69.9574 22.872 68.5814 22.136C67.2214 21.384 66.1494 20.352 65.3654 19.04C64.5974 17.728 64.2134 16.248 64.2134 14.6C64.2134 12.952 64.6054 11.472 65.3894 10.16C66.1734 8.848 67.2454 7.824 68.6054 7.088C69.9814 6.336 71.5174 5.96 73.2134 5.96C74.5894 5.96 75.8454 6.2 76.9814 6.68C78.1174 7.16 79.0774 7.856 79.8614 8.768L77.8454 10.664C76.6294 9.352 75.1334 8.696 73.3574 8.696C72.2054 8.696 71.1734 8.952 70.2614 9.464C69.3494 9.96 68.6374 10.656 68.1254 11.552C67.6134 12.448 67.3574 13.464 67.3574 14.6C67.3574 15.736 67.6134 16.752 68.1254 17.648C68.6374 18.544 69.3494 19.248 70.2614 19.76C71.1734 20.256 72.2054 20.504 73.3574 20.504C75.1334 20.504 76.6294 19.84 77.8454 18.512L79.8614 20.432C79.0774 21.344 78.1094 22.04 76.9574 22.52C75.8214 23 74.5654 23.24 73.1894 23.24ZM88.9503 15.92H85.8303V23H82.7583V6.2H85.8303V13.232H89.0463L93.8703 6.2H97.1823L91.4463 14.336L97.3983 23H93.8703L88.9503 15.92Z" fill="#3F3F3F"/>
      </svg>

      <Menu />

      <div class="main-header__phone-wrapper">
        <a class="main-header__phone" href="tel:+79189808083" target="_blank" rel="noopener">+7 (918) 980-80-83</a>
        <svg class="main-header__phone-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="26" height="26" rx="6" fill="#FF6231"/>
          <path d="M18.8947 15.2179C18.0417 15.2196 17.194 15.0847 16.3836 14.8185C16.0046 14.6862 15.5836 14.7753 15.2908 15.0499L13.7008 16.2495C11.9931 15.3921 10.6075 14.0068 9.74982 12.2993L10.9177 10.7475C11.2126 10.4524 11.318 10.0175 11.1911 9.62012C10.9239 8.80861 10.7883 7.9596 10.7895 7.10526C10.7895 6.49485 10.2946 6 9.68423 6H7.10526C6.49485 6 6 6.49485 6 7.10526C6.00812 14.2235 11.7765 19.9919 18.8947 20C19.5052 20 20 19.5052 20 18.8947V16.3232C20 15.7127 19.5052 15.2179 18.8947 15.2179Z" fill="white"/>
        </svg>
      </div>

      <div class="main-header__button-menu">
        <button class="main-header__button" type="button" v-if="!showButton"  @click="openMenu">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="2" fill="white"/>
            <rect y="6" width="16" height="2" fill="white"/>
            <rect y="12" width="16" height="2" fill="white"/>
          </svg>
        </button>

        <button class="main-header__button" type="button" v-else @click="closedMenu">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00015 5.58594L2.04996 0.635742L0.635742 2.04996L5.58594 7.00015L0.635893 11.9502L2.05011 13.3644L7.00015 8.41436L11.9495 13.3637L13.3637 11.9495L8.41436 7.00015L13.3638 2.0507L11.9496 0.636487L7.00015 5.58594Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  import Menu from './parts/menu'

  export default {
    name: 'Header',
    components: {
      Menu
    },
    data() {
      return {
        showButton: false
      }
    },
    mounted() {
      this.openMenu()
      this.closedMenu()
    },
    methods: {
      openMenu() {
        console.log(1213213)
        let menu = document.querySelector('.menu');
        menu.classList.remove('menu--open');
        this.showButton = true;
      },

      closedMenu() {
        let menu = document.querySelector('.menu');
        menu.classList.add('menu--open');
        this.showButton = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-header {
    position: fixed;
    z-index: 1;
    display: flex;
    
    justify-content: center;
    width: 100%;
    padding: 0 40px;
    height: 64px;

    background-color: $main-bg-color;
    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08), 
      0px 20px 30px -12px rgba(32, 75, 69, 0.08);
  }

  .main-header__container {
    display: flex;
    align-items: center;
    max-width: 1280px;
    width: 100%;
  }

  .main-header__logotype {
    margin-right: 142px;
  }

  .main-header__phone-wrapper {
    display: flex;
    align-items: center;
  }

  .main-header__phone {
    margin-right: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    color: $font-color-orange;
  }

  .main-header__button-menu {
    display: none;
  }

  .main-header__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    border: none;
    outline: none;
    background: $bg-color-dark;
    border-radius: 9px;
  }

  @include tablet-large {
    .main-header__container {
      position: relative;
    }

    .main-header__logotype {
      margin-right: auto;
    }

    .main-header__phone-wrapper {
      margin-right: 24px;
    }

    .main-header__phone-icon {
      width: 40px;
      height: 40px;
    }

    .main-header__button-menu {
      display: flex;
    }
  }

  @include mobile {
    .main-header {
      padding: 0;
    }

    .main-header__container {
      padding: 0 15px;
    }

    .main-header__phone-wrapper {
      margin-right: 16px;
    }

    .main-header__phone {
      display: none;
    }
  }
  
</style>
