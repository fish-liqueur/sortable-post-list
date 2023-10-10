<script setup lang="ts">
import { computed } from "vue"
import PostItem from './PostItem.vue'
import { useStorePosts} from "../../stores/storePosts"

const storePosts = useStorePosts();
const postList = computed(() => storePosts.posts);
const postOrder = computed(() => storePosts.order);
</script>

<template>
    <div class="flex flex-col gap-4">
        <transition-group name="slide">
            <PostItem
                v-for="(orderItem, index) in postOrder"
                :key="orderItem"
                :post="postList[orderItem]"
                :index="index"
                :original-index="orderItem"
                :list-length="postOrder.length"
                @move-down="storePosts.handlePostMove"
                @move-up="storePosts.handlePostMove"
            />
        </transition-group>
    </div>
</template>
