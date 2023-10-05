<script setup lang="ts">
import PostList from './components/PostList.vue';
import ActionList from './components/ActionList.vue';
import { onMounted } from 'vue';
import { useStorePosts} from "../stores/storePosts";

/* store */
const storePosts = useStorePosts();

onMounted(() => {
    storePosts.init();
})
</script>

<template>
    <header class="absolute l-0 t-0 overflow-hidden w-full h-56 -z-10">
        <div class="header-backdrop h-full bg-violet"></div>
    </header>

    <main class="grid grid-cols-12 py-9">
        <section class="col-span-12 lg:col-start-2 lg:col-span-5 md:col-span-6 p-8">
            <h1 class="text-white text-lg font-medium tracking-wide pb-4">Sortable Post List</h1>
            <PostList />
        </section>
        <section class="col-span-12 lg:col-span-5 md:col-span-6 p-8">
            <ActionList />
        </section>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.header-backdrop {
    clip-path: polygon(0 0, 100% 0, 0 100%, 0 0);
}
</style>
