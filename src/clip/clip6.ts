function getPrice(name: string) {
  switch (name) {
    case "tomato":
      return 7000;
    case "orange":
      return 15000;
    case "apple":
      return 10000;
  }
}

const isExpensive = (price: number | undefined) => {
  if (!price) return false;

  return price > 10000;
};

const isExpensivePrice = (name: string): boolean => isExpensive(getPrice(name));

export const compose =
  <A, B, C>(g: (y: B) => C, f: (s: A) => B) =>
  (x: A) => {
    return g(f(x));
  };
