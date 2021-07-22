<template>
    <div class="link">
      <router-link to="/a"> {{$t('search')+$t('rechargeRecord')}}</router-link>
      <router-link to="/b"> {{$t('search')+$t('transactionRecord')}}</router-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
