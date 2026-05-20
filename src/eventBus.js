const eventBus = {
  emit(event, data) {
    window.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  on(event, callback) {
    window.addEventListener(event, (e) => callback(e.detail));
  },
  off(event, callback) {
    window.removeEventListener(event, callback);
  },
};

export default eventBus;
