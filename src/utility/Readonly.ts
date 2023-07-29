/**
 * Readonly<Type>
 * Type 집합의 모든 프로퍼티가 읽기전용으로 설정한 타입을 생성.
 * 모든 타입은 재할당이 불가능함
 */
interface Todo {
  title: string;
}

// const asd: Readonly<Todo> = {
//   title: "Delete inactive users",
// };

// todo.title = "Hello"; // read-only 프로퍼티 이므로 재할당이 불가능
