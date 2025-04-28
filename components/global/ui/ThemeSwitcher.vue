<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';

const colorMode = useColorMode();

function toggleTheme() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <button class="ui-button button-theme" @click="toggleTheme">
        {{ $colorMode.value === 'dark' ? '🌙' : '☀️' }}
    </button>
</template>

<style lang="scss" scoped>
.button-theme {
    background: transparent;
}
</style>
