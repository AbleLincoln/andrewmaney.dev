import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faVuejs,
  faReact,
  faNodeJs,
  faPhp,
  faWordpress,
  faGithub,
  faAngular,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faVuejs,
  faReact,
  faNodeJs,
  faPhp,
  faWordpress,
  faGithub,
  faArrowUpRightFromSquare,
  faAngular
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
