/**
 * Extract<Type, Union>
 * Union에 할당할 수 있는 모든 유니온 멤버를 Type에서 가져와서 타입을 생성
 */

// a만 겹침
type ExtractT0 = Extract<"a" | "b" | "c", "a" | "f">;

// 겹치는게 없음
type ExtractT1 = Extract<string | number | (() => void), Function>;
