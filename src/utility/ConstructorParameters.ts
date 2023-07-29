/**
 * ConstructorParameters<Type>
 * 생성자 함수의 타입의 타입에서 튜플 또는 배열 타입을 생성
 * 모든 매개변수 타입을 가지는 튜플타입을 생성 -> Type이 함수가 아닌경우는 never로 생성
 */

type ConstructorParametersT0 = ConstructorParameters<ErrorConstructor>;

type ConstructorParametersT1 = ConstructorParameters<FunctionConstructor>;

type ConstructorParametersT2 = ConstructorParameters<RegExpConstructor>;

type ConstructorParametersT3 = ConstructorParameters<any>;

// type ConstructorParametersT4 = ConstructorParameters<Function>; // 일반 함수는 불가능
