<script>
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";
  import { count } from "./store";

  console.log(get(count)); // 특정 시점에만 스토어 값에 접근할 때 사용하면 시스템 자원을 아낄 수 있다.

  let disabledD = false;
  let disabledI = false;

  const unsub = count.subscribe((v) => {
    disabledI = v >= 100 ? true : false;
    disabledD = v <= 1 ? true : false;
  });

  onDestroy(unsub);
</script>

<main>
  <section>
    <h1>카운트는 {$count}입니다</h1>
    <input type="range" bind:value="{$count}" step="1" min="1" max="100" />
  </section>
  <section>
    <button disabled="{disabledD}" on:click="{count.decrement}"
      >카운트 감소</button
    >
    <button disabled="{disabledI}" on:click="{count.increment}"
      >카운트 증가</button
    >
  </section>
</main>
