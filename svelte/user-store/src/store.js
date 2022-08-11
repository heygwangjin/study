import { writable } from "svelte/store";

// 사용자 정의 스토어 만드는 함수
function createCount() {
  const cnt = writable(1);

  return {
    subscribe: cnt.subscribe,
    set: cnt.set,
    update: cnt.update,
    increment: () => cnt.update((n) => n + 1),
    decrement: () => cnt.update((n) => n - 1),
    reset: () => cnt.set(1),
  };
}

export const count = createCount();
