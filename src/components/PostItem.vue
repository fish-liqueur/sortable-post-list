<script setup lang="ts">
import { computed } from "vue";
import { type Post, Direction } from '@/types'
import ChevronIcon from "@/components/ChevronIcon.vue";

const props = defineProps<{
    post: Post;
    index: number;
    originalIndex: number;
    listLength: number;
}>();

const hasUpButton = computed(() => props.index !== 0);
const hasDownButton = computed(() => props.index !== props.listLength - 1);

/* emits and handlers */
const emits = defineEmits<{
    (e: "move-up", index: number, originalIndex: number, direction: Direction): void;
    (e: "move-down", index: number, originalIndex: number, direction: Direction): void;
}>();
const moveUp = () => {
    emits("move-up", props.index, props.originalIndex, Direction.Up);
};
const moveDown = () => {
    emits("move-down", props.index, props.originalIndex, Direction.Down);
};

</script>

<template>
    <div class="flex gap-8 h-20 bg-white border border-gray-200 rounded-md shadow px-4">
        <div v-if="post" class="flex flex-wrap flex-grow content-center text-neutral-700">
            {{ `Post ${post.id}` }}
        </div>
        <div v-else class="flex flex-wrap flex-grow content-center">
            <div class="animate-pulse flex">
                <div class="grid gap-4 w-10">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-evenly">
            <div v-if="hasUpButton">
                <button
                    @click="moveUp"
                    class="flex justify-center items-center w-6 h-6 rounded-full bg-white hover:bg-indigo-200 active:bg-indigo-200 transition duration-200 ease-in"
                >
                    <ChevronIcon class="w-3 text-violet" up />
                </button>
            </div>
            <div v-if="hasDownButton">
                <button
                    @click="moveDown"
                    class="flex justify-center items-center w-6 h-6 rounded-full bg-white hover:bg-indigo-200 active:bg-indigo-200 transition duration-200 ease-in"
                >
                    <ChevronIcon class-name="w-3 text-violet" />
                </button>
            </div>
        </div>

    </div>
</template>
