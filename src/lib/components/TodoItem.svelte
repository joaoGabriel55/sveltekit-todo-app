<script lang="ts">
  import type { Todo } from "$lib/api/v1";

  export let todo: Todo;
</script>

<li class="flex justify-between">
  <div>
    <h2 class="font-semibold">{todo.title}</h2>
    <p>{todo.content}</p>
  </div>
  <div class="grid gap-2 grid-cols-2">
    <a href={`/${todo.id}`}>
      <button class="h-full w-full p-2 border-2 border-black">Edit</button>
    </a>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={todo.id} />
      <button
        class="h-full p-2 border-2 border-red-500 text-red-500"
        aria-label="delete">Delete</button
      >
    </form>
  </div>
</li>
