<script setup lang="ts">
import { type Action } from '@/types'
import { useStorePosts} from "../../stores/storePosts"

const storePosts = useStorePosts();

const props = defineProps<{
    action: Action;
    index: number;
}>();
</script>

<template>
    <div class="flex flex-wrap align-baseline p-4">
        <div class="flex-grow py-2">{{ action.text }}</div>
        <button
            @click="storePosts.timeTravel(props.action.order, props.index)"
            class="bg-timeTravelGreen py-2 px-4 rounded-md hover:bg-timeTravelGreen/50 active:shadow-md transition duration-200 ease-in-out"
        >
            Time travel
        </button>
    </div>
</template>
