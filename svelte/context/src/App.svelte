<script>
  import { setContext } from "svelte";
  import Clothes from "./Clothes.svelte";
  import Fruits from "./Fruits.svelte";
  setContext("CEO", "김광진");
</script>

<Fruits />
<Clothes />
