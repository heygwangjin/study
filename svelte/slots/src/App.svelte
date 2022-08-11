<script>
  import Card from "./Card.svelte";
  let user = "김광진";
</script>

<Card>
  <h2 slot="user">
    {user}
  </h2>
  <!-- <span slot="email">heygwangjin@gmail.com</span> -->
  <span slot="mobile">010-4248-6811</span>
  <span slot="company">(주) 인썸니아</span>
  <span slot="rank">인턴</span>
</Card>

<input type="text" bind:value="{user}" />
