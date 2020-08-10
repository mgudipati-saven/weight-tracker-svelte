import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Weight Tracker',
  },
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

export default app
