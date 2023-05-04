export const throttle = (callbackFn, limit) => {
  let wait = false;
  console.log("THROTTLE");

  return () => {
    if (!wait) {
      callbackFn.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};
