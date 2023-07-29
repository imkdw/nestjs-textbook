/**
 * Omit<Type, Keys>
 * Type에서 모든 프로퍼티를 선택하고 Keys에서 제거한 타입을 생성한다.
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OmitTodoPreview = Omit<Todo, "description">;

const omitTodo: OmitTodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
