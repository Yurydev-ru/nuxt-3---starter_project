<script lang="ts" setup>
const colorMode = useColorMode();

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
    <button class="ui-button button-theme" @click="toggleTheme">
        {{ colorMode.value === 'dark' ? '🌙' : '☀️' }}
    </button>
</template>

<style lang="scss" scoped>
.button-theme {
    background: transparent;
}
</style>
