<script>
  import "../app.css";

  let { children } = $props();
</script>

<h1 class="text-3xl font-bold">TODO</h1>
<main class="py-8">
  {@render children()}
</main>
