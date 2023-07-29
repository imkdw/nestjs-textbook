/**
 * Required<Type>
 * Type 집합의 모든 프로퍼티를 필수로 설정한 타입을 생성
 * Partial의 반대
 */
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 }; // a, b,가 둘다 필수로 존재해야함
