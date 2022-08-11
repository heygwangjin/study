<script>
  import CustomSelect from "./CustomSelect.svelte";
  import Counter from "./lib/Counter.svelte";

  //개발자 A
  //개발자 B
  let fruit = "apple";
  //개발자 C
  let color = "yellow";
  let colorList = [
    {
      code: "red",
      desc: "빨강",
    },
    {
      code: "yellow",
      desc: "노랑",
    },
    {
      code: "green",
      desc: "초록",
    },
    {
      code: "orange",
      desc: "주황",
    },
  ];

  let param = {
    choice: "yellow",
    list: [
      {
        code: "red",
        desc: "빨강",
      },
      {
        code: "yellow",
        desc: "노랑",
      },
      {
        code: "green",
        desc: "초록",
      },
      {
        code: "orange",
        desc: "주황",
      },
    ],
  };
</script>

<main>
  <!-- 개발자 A의 HTML 코드 -->
  <li>개발자 A: <CustomSelect /></li>
  <!-- 개발자 B의 HTML 코드 -->
  <li>개발자 B: <CustomSelect bind:choice="{fruit}" /> - {fruit} 선택됨</li>
  <!-- 개발자 C의 HTML 코드 -->
  <li>
    개발자 C: <CustomSelect list="{colorList}" bind:choice="{color}" /> - {color}
    선택됨
  </li>
  <li>
    spread: <CustomSelect {...param} /> - {param.chocie} 선택됨
  </li>
</main>
