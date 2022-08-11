<script>
  import { getContext, hasContext } from "svelte";
  let rate = getContext("discount");
  if (!hasContext("discount")) {
    rate = 0;
  }
</script>

<p>오늘 사과는 {rate}% 세일합니다.</p>
