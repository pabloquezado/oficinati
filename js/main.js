window.addEventListener("load", () => {
  registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('js/serviceworker.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
