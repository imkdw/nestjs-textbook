/**
 * Exclude<Type, ExcludeUnion>
 * ExcludeUnion에 할당할 수 있는 모든 유니온 멤버를 Type에서 제외하고 타입을 생성
 */

type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;
