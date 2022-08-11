<script>
  import { setContext } from "svelte";
  import Apple from "./Apple.svelte";
  setContext("discount", 10);
</script>

<h3>과일 매장</h3>
<Apple />
