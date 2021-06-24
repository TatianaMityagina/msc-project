<template>
  <main class="page-main">
    <Intro/>
    <Services/>
    <Benefits/>
    <OrderForm/>
    <Contacts/>
  </main>
</template>

<script>
import Intro from '../components/intro/intro'
import Services from '../components/services-section/services'
import Benefits from '../components/benefits/benefits'
import Contacts from '../components/contacts/contacts'
import OrderForm from '~/components/odrder-form/order-form'

export default {
  components: {
    OrderForm,
    Intro,
    Services,
    Benefits,
    Contacts
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 64px;
}
</style>
