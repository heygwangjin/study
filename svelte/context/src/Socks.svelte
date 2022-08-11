<script>
  import { getContext } from "svelte";
  let rate = getContext("discount");
</script>

<p>오늘 양말은 {rate}% 세일합니다.</p>
