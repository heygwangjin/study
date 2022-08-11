<script>
  let flag = false;
</script>

<div
  on:mouseenter="{() => (flag = true)}"
  on:mouseleave="{() => (flag = false)}"
>
  <slot name="user" hovered="{flag}" />
</div>
