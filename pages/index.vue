<script lang="ts" setup>
interface HomeData {
  title: string
  description: string
}

const { data: home } = await useAsyncData<HomeData>(async () => {
  const result = await queryCollection('content').path('/').first()
  if (!result) {
    throw new Error('No data found')
  }
  return result as HomeData
})

useSeoMeta({
  title: 'home.value?.title',
  description: 'home.value?.description'
});

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi labore ea ullam laboriosam expedita hic!
    Veritatis, at nostrum minima commodi libero doloribus beatae accusamus in eaque harum cumque, necessitatibus,
    nesciunt soluta inventore id sapiente et. Eveniet odio laudantium quam laborum illo architecto deserunt aliquid
    repudiandae harum natus, fuga similique asperiores.
  </p>
</template>

<style lang="scss" scoped></style>
