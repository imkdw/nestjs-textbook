/**
 * Pick<Type, Keys>
 * Type에서 Keys의 프로퍼티 집합을 선택해서 타입을 생성
 */
interface PickTodo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<PickTodo, "title" | "description">;

const todo: TodoPreview = {
  title: "Clean room",
  description: "desc",
};

todo;
