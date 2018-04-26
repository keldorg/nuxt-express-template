<template>
    <div class="language">
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="path('en', $route.fullPath)">{{ $t('ENGLISH') }}</nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'es'" :to="path('es', $route.fullPath)">{{ $t('SPANISH') }}</nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'eu'" :to="path('eu', $route.fullPath)">{{ $t('BASQUE') }}</nuxt-link>
    </div>
</template>

<script>
  export default {
    methods: {
      path (lang, url) {
        let regex = '^/[a-z]{2}(?:/|$)'
        let mat = url.match(regex)
        if (mat) {
          return url.replace(mat[0], '/' + lang + '/')
        } else {
          return (lang === 'en' ? url : '/' + lang + url)
        }
      }
    }
  }
</script>

<style scoped>
    .language {
        margin: 20px 20px 0 20px;
    }
    a {
        color: #39aebe;
        border-right: 1px solid white;
        padding: 0 5px;
    }
    a:hover, a:focus, a:visited {
        color: #2f8fbe;
    }
</style>
