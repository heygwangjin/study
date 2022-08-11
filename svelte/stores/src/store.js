// 스토어 패키지 임포트
import { derived, readable, writable } from "svelte/store";

// count 변수 writable로 적용하고 10으로 설정
export const count = writable(10);

console.log("스토어", count);

export const time = readable(new Date(), function start(set) {
  // set 함수를 호출하면 스토어를 업데이트 가능
  console.log("구독이 시작되었습니다");
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    // 모든 구독이 종료될 때 호출
    console.log("모든 구독이 종료되었습니다.");
    clearInterval(interval);
  };
});

export const power = derived(count, ($count) => $count * $count);

const start = new Date();
export const elapsed = derived(time, ($time, set) => {
  set(Math.round(($time - start) / 1000));
  return () => {};
});
