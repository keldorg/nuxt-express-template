export const state = () => ({
  locales: ['en', 'es', 'eu'],
  locale: 'en',
  users: []
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_USERS (state, data) {
    state.users = data
  }
}
