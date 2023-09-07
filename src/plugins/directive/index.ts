import { App } from "vue";
import { emitter } from "@/plugins/mitt";

const mouseHover = {
  mounted(el: Element) {
    el.addEventListener("mouseenter", () => {
      emitter.emit("hover");
    });

    el.addEventListener("mouseleave", () => {
      emitter.emit("unhover");
    });
  },
};

const install = (app: App) => {
  app.directive("mouse-hover", mouseHover);
};

export default install;
