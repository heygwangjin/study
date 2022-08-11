<script>
    // svelte 컴포넌트 임포트, 라이프사이클 함수 4종 꺼내기
    import { tick, onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    
    let txt;
    let x = 0;

    onMount(() => {
        txt = document.getElementById("text01");
        txt.focus();
        console.log("Child onMount 호출됨");
        //onDestroy 같은 동작
        return () => { console.log("Child가 파괴되었습니다."); }
    });

    onDestroy(() => {
        console.log("Child onDestroy 호출됨");
    })

    beforeUpdate(() => {
        console.log("Child beforeUpdate 호출됨", x);
        if (txt) console.log("before :: ", txt.value); // DOM update 이전 값
    })

    afterUpdate(() => {
        console.log("Child afterUpdate 호출됨", x);
        console.log("after :: ", txt.value); // DOM update 이후 값
    })
</script>

<h1>Child</h1>
<input type="text" id="text01" bind:value={x}/>
<button on:click={async () => {
    x += 1;
    await tick(); // DOM 업데이트를 기다린다.
    console.log("* x값: " + x); // 스크립트 블록의 x 값
    console.log("* DOM: " + document.getElementById("text01").value); // DOM의 x 값
}}>
add
</button>