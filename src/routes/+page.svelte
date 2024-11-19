<script lang="ts">
  import Form from "$lib/components/Form.svelte";
  import TodoItem from "$lib/components/TodoItem.svelte";

  let { data } = $props();

  let todos = $state(data.todos);
</script>

<div class="grid gap-4">
  <Form action="?/create" />

  <hr />

  <ul class="grid gap-4">
    {#each todos as todo}
      <TodoItem {todo} />
    {/each}
  </ul>
</div>
