import { onMounted, onUnmounted } from "vue";
/**
 * 窗口缩放
 * @param handlerFn 回调函数
 * @param immediate 立即执行
 */
export function useResize(handlerFn: () => void, immediate: boolean = true) {
  const handler = () => {
    handlerFn();
  };
  onMounted(() => {
    window.addEventListener("resize", handler);
    immediate && handler();
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handler);
  });
}
