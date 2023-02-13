<script setup lang="ts">
import { darkTheme } from "naive-ui";
import { onErrorCaptured } from "vue";
import { useRouter } from "vue-router";
import darkConfig from "@/assets/style/theme/dark.json";

onErrorCaptured(() => {
  const { push } = useRouter();
  push({ path: "/" }).finally(window.location.reload);
});
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="darkConfig">
    <n-notification-provider>
      <n-loading-bar-provider>
        <n-message-provider>
          <div id="app">
            <router-view v-slot="{ Component }">
              <transition appear mode="out-in" name="view">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </n-message-provider>
      </n-loading-bar-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  min-width: auto;
  min-height: 100vh;
  flex-direction: column;
  background-color: #151e28;
}
</style>
