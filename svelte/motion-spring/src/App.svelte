<script>
  import { spring } from "svelte/motion";

  let coords = spring(
    { x: 50, y: 50 }, // 반환할 스토어에 저장할 초깃값
    {
      stiffness: 0.1, // (따라오는 속도): 느림 0 <-> 1 빠름
      damping: 0.4, // (멀어지는 거리): 넓음 0 <-> 1 좁음
      precision: 0.1, // (튕겨지는 횟수): 많음 0 <-> 1 적음
    }
  );

  // 원의 r 값과 바인딩할 스토어 생성
  let size = spring(10);

  coords.subscribe((v) => console.log(v.x, v.y));
</script>

<svg
  on:mousemove="{(e) => coords.set({ x: e.clientX, y: e.clientY })}"
  on:mousedown="{() => size.set(30)}"
  on:mouseup="{() => size.set(10)}"
>
  <circle cx="{$coords.x}" cy="{$coords.y}" r="{$size}"></circle>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    margin: -8px;
  }
  circle {
    fill: #e2831e;
  }
</style>
