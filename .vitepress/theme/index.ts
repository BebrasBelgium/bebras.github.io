import DefaultTheme from 'vitepress/theme'
import HomePage from './HomePage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('homepage', HomePage)
  }
}
