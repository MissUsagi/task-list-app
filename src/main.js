import { createApp } from 'vue'
import App from './App.vue'
import BaseHeader from './components/ui/BaseHeader.vue';
import BaseContainer from './components/ui/BaseContainer.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);
app.component("base-header", BaseHeader);
app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.mount('#app')
