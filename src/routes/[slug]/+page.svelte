<script lang="ts">
  import Form from "$lib/components/Form.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<Form todo={data} />
