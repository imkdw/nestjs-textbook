/**
 * InstanceType<Type>
 * Type의 생성자 함수의 인스턴스 타입으로 구성된 타입을 생성
 */

class InstanceTypeClass {
  x = 0;
  y = 0;
}

type InstanceTypeT1 = InstanceType<typeof InstanceTypeClass>;

function instanceType(params: InstanceTypeT1) {
  console.log(params.x, params.y);
}
