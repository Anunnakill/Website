<script setup lang="ts"></script>

<template>
  <div id="index">
    <router-view v-slot="{ Component }">
      <transition appear mode="out-in" name="view">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
#index {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
