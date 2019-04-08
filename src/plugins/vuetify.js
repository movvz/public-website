import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.lightBlue.base,
    secondary: colors.orange.base,
    primaryLight: colors.shades.white,
    primaryDark: colors.grey.darken4,
    secondaryLight: colors.grey.lighten1,
    secondaryDark: colors.grey.darken2,
    warning: colors.red.base
  }
})
