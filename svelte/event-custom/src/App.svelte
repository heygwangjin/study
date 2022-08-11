<script>
  import SimpleButton from "./SimpleButton.svelte"; // 돔 이벤트 포워딩 컴포넌트
  import SearchButton from "./SearchButton.svelte";
  import Contents from "./Contents.svelte";

  let searchText = "";
  const customSearch = (event) => {
    searchText = event.detail.text; // 하위 컴포넌트에서 실은 데이터를 꺼내서 searchText로 저장
  };

  const simple = (event) => {
    alert("simple~!");
  };
</script>

<!-- 하위 컴포넌트의 커스텀 이벤트 다루기 -->
<p>
  <!-- 커스텀 이벤트 searchClicked의 이벤트 처리를 customSearch 함수로 연결 -->
  <SearchButton on:searchClicked="{customSearch}" />
  <!-- 하위 컴포넌트에서 받은 데이터를 출력 -->
  <br />{searchText === ""
    ? "검색어를 입력 후 Search 버튼을 클릭하세요"
    : "검색어: " + searchText}
</p>

<!-- 이벤트 포워딩 -->
<p>
  <Contents on:searchClicked="{customSearch}" />
  <br /><br />{searchText === ""
    ? "검색어를 입력 후 Search 버튼을 클릭하세요"
    : "검색어" + searchText}
</p>

<!-- 돔 이벤트 포워딩 -->
<p>
  <SimpleButton on:click="{simple}" />
</p>
