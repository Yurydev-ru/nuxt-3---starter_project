<script lang="ts" setup>

</script>

<template>
    <div class="app-wrapper">
        <AppHeader />
        <main class="app-main">
            <NuxtPage />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.app-main {
    background: green;
    padding: 50px 0;
    flex: 1;
    overflow-y: auto;
}
</style>
