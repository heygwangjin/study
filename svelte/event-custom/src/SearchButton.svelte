<script>
  // svelte를 임포트하고 createEventDispatcher 함수를 꺼낸다.
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let searchText = "";

  function searchEventHandler() {
    // 커스텀 이벤트 searchClicked 발생
    dispatch("searchClicked", {
      text: searchText, // 커스텀 이벤트에 데이터를 실어 보내기
    });
    console.log("클릭 이벤트 발생");
    searchText = "";
  }
</script>

<input type="text" bind:value="{searchText}" />

<button on:click="{searchEventHandler}"> Search </button>
