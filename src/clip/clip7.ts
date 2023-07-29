const idNumber = (n: number) => n;
const idString = (s: string) => s;
const idBoolean = (b: boolean) => b;

// Generic을 활용한 함수
const id = <T>(x: T) => x;

function id2<T>(x: T) {
  return x;
}
