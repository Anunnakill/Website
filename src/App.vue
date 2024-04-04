<script setup lang="ts">
import { darkTheme } from "naive-ui";
import darkConfig from "@/assets/style/theme/dark.json";
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
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 100svh;
  flex-direction: column;
  background-color: #090b11;
}
</style>
