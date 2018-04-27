import { ItodoItem } from '../interfaces/index';

export function createDateString(date: Date): string {
    return new Date().toLocaleDateString().replace(/\//g, '-');
}

export function removeItems(allArray: ItodoItem[], partArray: string[]): ItodoItem[] {
    return allArray.filter((item) => {
        return partArray.indexOf(item.title) < 0;
    });
}

export function isInArray(array: ItodoItem[], text: string): boolean {
    let result = false;
    array.forEach((item) => {
        if (item.title === text) {
            result = true;
        }
    });
    return result;
}
