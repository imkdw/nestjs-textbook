/**
 * NonNullable<Type>
 * Type에서 null과 undefined를 제외하고 타입을 생성
 */

type NonNullableT0 = NonNullable<string | number | undefined>;

type NonNullableT1 = NonNullable<string[] | null | undefined>;
