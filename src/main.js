import { createApp } from 'vue';
//file di partenza stili progetto
// Import our custom CSS
import './style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
//file di partenza Vue
import App from './App.vue';

// font awesome

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */

import { faStar } from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faStar, faStarEmpty, faMagnifyingGlass);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
