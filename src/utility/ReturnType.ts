/**
 * ReturnType<Type>
 * 함수 Type의 반환 타입으로 구성된 타입을 생성함
 */

type ReturnTypeT0 = ReturnType<() => string>;
type ReturnTypeT1 = ReturnType<(s: string) => void>;
type ReturnTypeT2 = ReturnType<<T>() => T>; // generic -> unknown
type ReturnTypeT3 = ReturnType<<T extends U, U extends number[]>() => T>;
