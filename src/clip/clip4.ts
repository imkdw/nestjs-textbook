const priceOfFruit = {
  tomato: 7000,
  orange: 15000,
  apple: 10000,
};

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

const isEvenFn = (str: string) => str.length % 2 === 0;

export function clip4() {
  console.log(isEvenFn("asd"));
  console.log(isEvenFn("asds"));
}
