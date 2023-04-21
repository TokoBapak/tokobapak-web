import { createSignal } from "solid-js";
import styles from "./counter.module.scss";

export function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class={styles.increment} onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
