<script lang="ts">
  import type { Todo } from "$lib/api/v1";

  export let todo: Todo | null = null;
  export let action: string | null = null;
</script>

<form method="POST" {action}>
  <input type="hidden" name="id" value={todo?.id} />
  <div class="grid gap-4">
    <label class="grid gap-2">
      Title
      <input
        class="border border-black p-2"
        name="title"
        type="text"
        autocomplete="off"
        required
        value={todo?.title}
      />
    </label>
    <label class="grid gap-2">
      Content
      <textarea
        class="border border-black p-2"
        name="content"
        autocomplete="off"
        required
        value={todo?.content}
      ></textarea>
    </label>

    <button class="p-2 bg-black text-white w-40 ml-auto" type="submit"
      >Save</button
    >
  </div>
</form>
