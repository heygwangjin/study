<script>
  let pStyle = "active";
  let active = true;
  let isAdmin = true;
</script>

active: <input type="checkbox" bind:checked="{active}" /> &nbsp; isAdmin:
<input type="checkbox" bind:checked="{isAdmin}" />

<main>
  <p class="active">클래스 속성으로 적용하기</p>
  <p class="{pStyle}">클래스 속성값과 변수 바인딩</p>
  <p class="{active ? 'active' : ''}">연산 반환값 적용</p>
  <p class:active>class 지시자 사용</p>
  <p class:active class:isAdmin>다중 class 지시자 사용</p>
</main>

<style>
  .active {
    color: orangered;
    font-style: italic;
  }
  .isAdmin {
    font-weight: 700;
  }
</style>
