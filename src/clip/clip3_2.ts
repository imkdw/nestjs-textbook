export let totalPrice = 0;

export function addTomato() {
  totalPrice += 1000;
}

export function addOrange() {
  totalPrice += 2000;
}

export function addApple() {
  totalPrice += 3000;
}

export function list1() {
  // 토마토 오렌지 사과 1상자씩 구매
  addTomato();
  addOrange();
  addApple();
}

export function list2() {
  // 토마토 2상자
  addTomato();
  addTomato();
}

export function list3() {
  // 오랜지 100상자
  for (let i = 0; i < 100; i++) {
    addOrange();
  }
}

export function getPrice() {
  console.log(totalPrice);
}

export default function clip3_2() {
  list1();
  list2();
  list3();
  getPrice();
}
