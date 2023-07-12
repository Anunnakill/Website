import { App } from "vue";
import Mitt from "@/plugins/mitt";

const mouseHover = {
  mounted(el: Element) {
    el.addEventListener("mouseenter", () => {
      Mitt.emit("hover");
    });

    el.addEventListener("mouseleave", () => {
      Mitt.emit("unhover");
    });
  },
};

const install = (app: App) => {
  app.directive("mouse-hover", mouseHover);
};

export default install;
