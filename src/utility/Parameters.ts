/**
 * Parameters<Type>
 * 함수타입 Type의 매개변수에 사용된 타입에서 튜플 타입을 생성
 */

declare function f1(arg: { a: number; b: string }): void;

type ParametersT0 = Parameters<() => string>; // 파라미터 없음

type ParametersT1 = Parameters<(s: string) => void>; // s: string
type ParametersT2 = Parameters<<T>(arg: T) => T>; // Generic은 unknown

type ParametersT3 = Parameters<typeof f1>; // arg: {a, b}
type ParametersT4 = Parameters<any>; // any -> unknown 처리

type ParametersT5 = Parameters<never>;

// type ParametersT6 = Parameters<string>; // 함수의 파라미터가 아님
// type ParametersT7 = Parameters<Function>; // 일반 Function은 안됨
