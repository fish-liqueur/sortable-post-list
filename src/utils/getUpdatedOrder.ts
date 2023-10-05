import {Direction} from '@/types'

export default function getUpdatedOrder(
    index: number,
    originalIndex: number,
    direction: Direction,
    postOrder: number[]
): number[] {
    const newPostOrder = [...postOrder];
    if (direction === Direction.Up) {
        const el = newPostOrder[index - 1];
        newPostOrder[index - 1] = originalIndex;
        newPostOrder[index] = el;
    } else {
        const el = newPostOrder[index + 1];
        newPostOrder[index + 1] = originalIndex;
        newPostOrder[index] = el;
    }
    return newPostOrder;
}
