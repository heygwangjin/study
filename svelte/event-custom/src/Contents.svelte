<script>
  import { createEventDispatcher } from "svelte";
  import SearchButton from "./SearchButton.svelte";

  const dispatch = createEventDispatcher();

  function forward(event) {
    //이벤트명, 데이터 모두 SearchButton과 같은 형태로 넘김
    dispatch("searchClicked", event.detail);
  }
</script>

<h2>Contents</h2>
<!-- SearchButton 커스텀 이벤트 searchClicked의 이벤트 처리를 forward 함수로 연결 -->
<SearchButton on:searchClicked="{forward}" />
