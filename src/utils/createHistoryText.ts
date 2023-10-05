import {Direction} from '@/types'

export default function createHistoryText(
    index: number,
    originalIndex: number,
    direction: Direction
): string {
    return `Moved post ${originalIndex + 1} from index ${index} to ${direction === Direction.Up ? index - 1 : index + 1 }`;
}
