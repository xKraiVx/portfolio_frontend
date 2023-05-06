export const throttle = (callbackFn, limit) => {
  let wait = false;

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
