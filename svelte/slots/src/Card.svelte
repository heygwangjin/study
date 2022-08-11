<div class="card">
  <slot name="user" />
  <p>전화번호: <slot name="mobile" /></p>
  {#if $$slots.email}
    <p>이메일: <slot name="email" /></p>
  {/if}
  <p>회사: <slot name="company" /></p>
  <p>직급: <slot name="rank" /></p>
</div>

<style>
  .card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    padding: 1em;
    margin: 0 0 1em 0;
  }
</style>
