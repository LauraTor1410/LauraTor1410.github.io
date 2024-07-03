import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {addIcons, OhVueIcon} from 'oh-vue-icons'

import {PiEevee, MdPets, FaTasks, HiSolidMenu, BiGit, MdEmailOutlined, FaPhoneAlt, CoLinkedin} from 'oh-vue-icons/icons'

addIcons(PiEevee, MdPets, FaTasks, HiSolidMenu, BiGit, MdEmailOutlined, FaPhoneAlt, CoLinkedin)

const app = createApp(App)

app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
