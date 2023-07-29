/**
 * Partial<Type>
 * Type 집합의 모든 프로퍼티를 선택적(optional)으로 타입을 생성
 */
interface Todo {
  title: string;
  desc: string;
}

const updateTodo = (todo: Todo, fieldsToUpload: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpload };
};

const PartialTodo1 = {
  title: "title 1",
  desc: "desc 1",
};

const PartialTodo2 = updateTodo(PartialTodo1, {
  desc: "desc update",
});

export function partial() {}
