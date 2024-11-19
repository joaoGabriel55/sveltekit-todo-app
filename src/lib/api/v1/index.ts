const BASE_URL = "http://localhost:8080";

export type Todo = {
  id: number;
  title: string;
  content: string;
};

export const getTodos: () => Promise<Todo[]> = async () => {
  const todos = await (await fetch(`${BASE_URL}/todos`)).json();

  return todos ?? [];
};

export const getTodo: (id: string) => Promise<Todo> = async (id: string) => {
  const todo = await (await fetch(`${BASE_URL}/todos/${id}`)).json();

  return todo;
};

export const createTodo = async (title: string, content: string) => {
  const todo = await (
    await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    })
  ).json();

  return todo;
};

export const deleteTodo = async (id: string) => {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
};

export const updateTodo = async (
  id: number,
  title: string,
  content: string
) => {
  await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
};
