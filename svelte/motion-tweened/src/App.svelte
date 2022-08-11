<script>
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";

  const progress = tweened(0, {
    duration: 1000,
  });

  const progress2 = tweened(0, {
    duration: 1000,
    easing: cubicIn,
  });

  progress.subscribe((v) => console.log(v));
</script>

<progress value="{$progress}"></progress>
<progress value="{$progress2}"></progress>
<button
  on:click="{() => {
    $progress = 0;
    $progress2 = 0;
  }}">0%</button
>
<button
  on:click="{() => {
    progress.set(0.5);
    progress2.set(0.5);
  }}">50%</button
>
<button
  on:click="{() => {
    progress.set(1);
    progress2.set(1);
  }}">100%</button
>

<style>
  progress {
    width: 100%;
  }
</style>
