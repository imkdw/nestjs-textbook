export const map = <T, V>(array: T[], func: (t: T) => V): Array<V> => {
  const result: Array<V> = [];

  for (const value of array) {
    result.push(func(value));
  }

  return result;
};
