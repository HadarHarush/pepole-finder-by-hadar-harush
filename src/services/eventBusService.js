function on(eventName, listener) {
  console.log("on:", eventName);
  const callListener = ({ detail }) => {
    listener(detail);
  };

  window.addEventListener(eventName, callListener);

  return () => {
    window.removeEventListener(eventName, callListener);
  };
}

function emit(eventName, data) {
  window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
}

export const eventBusService = { on, emit };

// @ts-ignore
window.myBus = eventBusService;
