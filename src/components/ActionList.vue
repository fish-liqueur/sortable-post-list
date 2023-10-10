<script setup lang="ts">
import ActionItem from './ActionItem.vue'
import { useStorePosts} from "../../stores/storePosts"
import {computed} from "vue"

const storePosts = useStorePosts();
const historyList = computed(() => storePosts.history);
</script>

<template>
    <div class="bg-white border border-gray-200 rounded-md shadow">
        <h2 class="text-lg font-medium tracking-wide text-neutral-600 p-4">List of actions committed</h2>
        <div v-if="historyList.length" class="flex flex-col-reverse divide-y divide-y-reverse border border-gray-200 rounded-md">
            <transition-group name="slide">
                <ActionItem
                    v-for="(historyItem, index) in historyList"
                    :key="historyItem.id"
                    :action="historyItem"
                    :index="index"
                />
            </transition-group>
        </div>
        <p v-else class="text-neutral-400 font-light text-center p-4">
            Your sorting history will be displayed here
        </p>
    </div>
</template>
