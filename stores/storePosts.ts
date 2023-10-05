import {defineStore} from 'pinia'
import {type Action, Direction, type Post} from '@/types'
import initOrder from "@/utils/initOrder";
import createHistoryText from "@/utils/createHistoryText";
import getUpdatedOrder from "@/utils/getUpdatedOrder";

const postCount = 5;
export interface RootState {
    posts: Post[];
    order: number[];
    history: Action[];
}

export const useStorePosts = defineStore({
    id: "posts",
    state: () => ({
        posts: [],
        order: [],
        history: [],
    } as RootState),
    actions: {
        async init():void {
            this.order = initOrder(postCount);
            const posts = await this.fetchPosts();
            this.posts = posts.slice(0, postCount);
        },
        async fetchPosts(): Promise<Post[]> {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                return await response.json();
            } catch (error) {
                console.error(error);
            }
        },
        handlePostMove(index: number, originalIndex: number, direction: Direction):void {
            const text = createHistoryText(index, originalIndex, direction);
            this.addHistoryItem(text, this.order, new Date().valueOf());
            this.order = getUpdatedOrder(index, originalIndex, direction, this.order);
        },
        addHistoryItem(text: string, order: number[], id: string): void {
            this.history.push({ text, order: [...order], id } as Action);
        },
        timeTravel(order: number[], index: number): void {
            this.order = order;
            this.history = this.history.splice(0, index);
        }
    },
});
