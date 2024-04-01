import { createApp } from "vue";

import "./assets/styles/index.css";
import App from "./App.vue";

createApp(App).mount("#app");
/**
 * 响应式适配，大屏应用
 * 动态设置html font-size，使用rem
 * em，vw/vh
 */
(function (doc, win) {
  const fn = () => {
    const docEl = doc.documentElement, //html标签
      clienWidth = docEl.clientWidth; //视口宽度
    if (!clienWidth) return;
    //设计稿件 1920px
    docEl.style.fontSize = 100 * (clienWidth / 1920) + "px";
  };
  //非浏览器环境 SSR
  if (!doc.addEventListener) return;
  win.addEventListener("resize", fn);
  //html下载完成后就立即执行，不用等到css，script执行
  doc.addEventListener("DOMContentLoaded", fn);
})(document, window);
