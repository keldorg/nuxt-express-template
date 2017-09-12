<template>
  <div>
    <translate></translate>
    <section class="container">
      <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
      <h1 class="title">
        {{ $t('USERS') }}
      </h1>
      <ul class="users">
        <li v-for="(user, index) in this.$store.state.users" :key="index" class="user">
          <nuxt-link :to="path('/show/' + index)">
            {{ user.name }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Translate from '~/components/Translate.vue'

export default {
  components: {
    Translate
  },
  async fetch ({ store }) {
    let { data } = await axios.get('/api/users')
    store.commit('SET_USERS', data)
  },
  methods: {
    path (url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
    }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
  text-transform: uppercase;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
