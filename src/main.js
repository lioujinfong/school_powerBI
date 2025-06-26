import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faCamera } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
//語系
import { createI18n } from 'vue-i18n'
import zhISP from './locales/isp/zh.json'
import enISP from './locales/isp/en.json'
import zhSEP from './locales/sep/zh.json'
import enSEP from './locales/sep/en.json'
import zhStore from './locales/store/zh.json'
import enStore from './locales/store/en.json'

library.add(faHome, faCamera); // 添加需要的圖標

const app = createApp(App)

//語系
const savedLocale = localStorage.getItem('lang') || 'zh'
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    zh: { 
      ...zhISP, 
      ...zhSEP,
      ...zhStore
    },
    en: { 
      ...enISP, 
      ...enSEP,
      ...enStore 
    }
  }
})  

app.use(router).component('font-awesome-icon', FontAwesomeIcon);
app.use(i18n)
app.mount('#app')





