<template>
  <section id="contacts" class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <div class="contacts__content">
        <dl>
          <dt>Номер телефона</dt>
          <dd class="contacts__default"><a href="tel:+79189808083" rel="noopener" target="_blank">+7 (918) 980-80-83</a>
          </dd>
          <dd><a href="tel:+79649071277" rel="noopener" target="_blank">+7 (964) 907-12-77</a></dd>

          <dt>Email</dt>
          <dd><a href="mailto:msk-18@list.ru" rel="noopener" target="_blank">msk-18@list.ru</a></dd>

          <dt>Адрес офиса:</dt>
          <dd>г. Краснодар, <br> ул. Маяковского 123, оф. 3,5</dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 115px 40px 80px;

  background-image: url("../../assets/img/contacts/contacts-bg@1x.webp"), url("../../assets/img/contacts/contacts-bg@1x.jpg");
  background-color: $bg-color-dark;
  background-size: cover;
  background-repeat: no-repeat;

  @include retina {
    background-image: url("../../assets/img/contacts/contacts-bg@2x.webp"), url("../../assets/img/contacts/contacts-bg@2x.jpg");
  }
}

.contacts__container {
  display: flex;
  max-width: 1280px;
  width: 100%;
}

.contacts__title {
  padding-top: 7px;
  margin-right: 345px;

  font-weight: 600;
  font-size: 42px;
  line-height: 140%;
  color: $font-color-white;
}

.contacts__content {
  dt {
    margin-bottom: 10px;

    font-size: 16px;
    line-height: 20px;
    color: $font-color-white;
  }

  dd {
    margin-bottom: 40px;

    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    text-decoration: none;
    color: $font-color-white;

    a {
      text-decoration: none;
      color: $font-color-white;
    }
  }
}

.contacts__content .contacts__default {
  margin-bottom: 3px;
}

@include desktop-small {
  .contacts {
    background-position: center;
  }

  .contacts__container {
    justify-content: space-between;
  }

  .contacts__title {
    margin: 0;
    font-size: 34px;
  }

  .contacts__content {
    padding-right: 100px;

    dt {
      margin-bottom: 13px;
      font-size: 14px;
    }
  }
}

@include tablet-large {
  .contacts {
    padding: 120px 40px 80px;

    background-image: url("../../assets/img/contacts/contacts-bg-1024@1x.webp"), url("../../assets/img/contacts/contacts-bg-1024@1x.jpg");

    @include retina {
      background-image: url("../../assets/img/contacts/contacts-bg-1024@2x.webp"), url("../../assets/img/contacts/contacts-bg-1024@2x.jpg");
    }
  }

  .contacts__container {
    justify-content: flex-start;
    flex-direction: column;
    max-width: 708px;
  }

  .contacts__title {
    margin-bottom: 80px;
  }

  .contacts__content {
    padding: 0;
  }
}

@include tablet {
  .contacts {
    padding: 120px 40px 80px;
  }
}

@include mobile {
  .contacts {
    padding: 80px 15px 40px;

    background-image: url("../../assets/img/contacts/contacts-bg-320@1x.webp"), url("../../assets/img/contacts/contacts-bg-320@1x.jpg");

    @include retina {
      background-image: url("../../assets/img/contacts/contacts-bg-320@2x.webp"), url("../../assets/img/contacts/contacts-bg-320@2x.jpg");
    }
  }

  .contacts__container {
    max-width: 100%;
  }

  .contacts__title {
    margin-bottom: 60px;
    font-size: 24px;
  }

  .contacts__content {
    dt {
      margin-bottom: 8px;

      font-size: 12px;
      line-height: 15px;
    }

    dd {
      font-size: 18px;
      line-height: 130%;
    }
  }
}

</style>
