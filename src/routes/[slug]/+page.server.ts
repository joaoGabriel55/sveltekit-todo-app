import { getTodo, updateTodo } from "$lib/api/v1";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const todo = await getTodo(params.slug);

  if (todo) return todo;

  error(404, "Not found");
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const id = formData.get("id") as unknown as number;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await updateTodo(id, title, content);

    redirect(302, "/");
  },
};
