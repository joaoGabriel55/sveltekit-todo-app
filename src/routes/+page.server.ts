import { createTodo, getTodos, deleteTodo } from "$lib/api/v1";

export async function load() {
  return {
    todos: await getTodos(),
  };
}

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await createTodo(title, content);
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");

    if (!id) return;

    deleteTodo(id as string);
  },
};
