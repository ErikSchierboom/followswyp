export const memoize = <T>(func: () => T): (() => T) => {
  let cache = undefined;
  return () => {
    cache = cache || func();
    return cache;
  };
};
