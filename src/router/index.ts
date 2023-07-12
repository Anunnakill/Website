import { useWallet } from "@/store";
import { terminalEntryFile } from "./routeTeleport";
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => terminalEntryFile(),
    meta: { check: false },
  },

  {
    name: "error",
    path: "/:path(.*)*",
    component: () => import("@/views/error.vue"),
    meta: { check: false },
  },
];

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior: () => ({
    behavior: "smooth",
    top: 0,
  }),

  routes,
});

router.beforeEach(({ meta: { check, home }, name, params }, from, next) => {
  if (check) {
    const { address } = useWallet().connect;
    if (address) return next();
    return next("/");
  }

  return next();
});

export default router;
