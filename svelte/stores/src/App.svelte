<script>
  import { count, elapsed, power } from "./store.js";
  import Increase from "./Increase.svelte";
  import Decrease from "./Decrease.svelte";
  import Time from "./Time.svelte";
  // let rangeValue = 50;

  // // 구독
  // const unsubscribe = count.subscribe((v) => {
  //   rangeValue = v;
  //   console.log("변경 감지!", v);
  // });

  // // 구독 종료
  // onDestroy(unsubscribe);

  // // 스토어 값 변경 (rangeValue 값 변경 시 count도 업데이트)
  // $: count.set(rangeValue);
  let flag1 = false;
  let flag2 = false;
</script>

<main>
  <section>
    <h2>count는 {$count}입니다.</h2>
    <input type="range" bind:value="{$count}" step="1" min="1" max="100" />
  </section>
  <section>
    <Decrease />
    <Increase />
  </section>

  <section>
    <br />
    <input type="checkbox" bind:checked="{flag1}" /> 시간 표시1
    {#if flag1}
      <Time />
    {/if}
    <br />
    <input type="checkbox" bind:checked="{flag2}" /> 시간 표시2
    {#if flag2}
      <Time />
    {/if}
  </section>

  <h1>{$count}^2 = {$power}입니다.</h1>
  <h1>접속 후 {$elapsed}초가 지났습니다.</h1>
</main>
