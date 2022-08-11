<script>
  // choice, list 는 CustomSelect 컴포넌트의 props로 외부 컴포넌트에서 사용할 때 props의 존재를 알린다.
  export let choice = "";

  export let list = [
    {
      code: "apple",
      desc: "사과",
    },
    {
      code: "kiwi",
      desc: "키위",
    },
    {
      code: "mango",
      desc: "망고",
    },
    {
      code: "strawberry",
      desc: "딸기",
    },
  ];
</script>

<style>
</style>

<select bind:value="{choice}">
  <option value=""> 선택하세요 </option>
  {#each list as item}
    <option value="{item.code}">{item.desc}</option>
  {/each}
</select>
