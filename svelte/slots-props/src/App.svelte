<script>
  import Hoverable from "./Hoverable.svelte";
</script>

<!-- isFocused 은 binding과 동시에 선언 -->
<Hoverable>
  <h2 slot="user" let:hovered="{isFocused}" class:hovered="{isFocused}">
    홍길동{#if isFocused}님 반갑습니다!!{/if}
  </h2>
</Hoverable>

<Hoverable>
  <!-- let:hovered={hovered}와 동일 -->
  <h2 slot="user" let:hovered class:hovered>
    김광진{#if hovered}님 오랜만이어요!!{/if}
  </h2>
</Hoverable>

<style>
  .hovered {
    font-style: italic;
    color: brown;
  }
</style>
