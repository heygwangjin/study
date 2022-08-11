<script>
  let count = 0;
  const search = (event) => {
    console.log(event.target);
    count += 1;
  };
</script>

<button on:click="{search}">
  Search ({count})
</button>

<!-- 인라인으로 이벤트 처리하기 -->
<button
  on:click="{(event) => {
    console.log(event.target);
    count = count + 1;
  }}"
>
  Search Inline ({count})
</button>

<!-- 이벤트 제한자 사용하기 -->
<button on:click|once="{search}">
  Search Once ({count})
</button>
