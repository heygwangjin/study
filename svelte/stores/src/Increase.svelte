<script>
  import { onDestroy } from "svelte";
  import { count } from "./store.js";

  let disabled = false;

  function increase() {
    count.update((n) => {
      return n + 1;
    });
  }

  const unsub = count.subscribe((v) => {
    disabled = v >= 100 ? true : false;
  });

  onDestroy(unsub);
</script>

<button disabled="{disabled}" on:click="{increase}">count 증가</button>
