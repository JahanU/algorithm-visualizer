
export class MergeSort {

    private temp: number[] = [];

    constructor() { }
    /**
     * Starts the soring process.
     *
     * @method sort
     * @param {Array} arry The array to be sorted.
     */
    public sort(arry: number[]): void {
        if (arry !== undefined) {
            this.mergeSort(arry, this.temp, 0, arry.length - 1);
        }
    }

    /**
     * Recursively sorts and calls merge.
     *
     * @method mergeSort
     * @param {Array} arr The array to be sorted.
     * @param {Array} temp The temporary array.
     * @param {Number} left The left index of the array.
     * @param {Number} right The right index of the array.
     */
    public mergeSort(arr: number[], temp: number[], left: number, right: number): void {
        if (left < right) {
            let center: number = Math.floor((left + right) / 2);
            this.mergeSort(arr, temp, left, center);
            this.mergeSort(arr, temp, center + 1, right);
            this.merge(arr, temp, left, center + 1, right);
        }
    }

    /**
     * This method contains the logic to implement the merge step.
     *
     * @method merge
     * @param {Array} arr The array to be sorted.
     * @param {Array} temp The temporary array.
     * @param {Number} left The left index of the array.
     * @param {Number} right The right index of the array. 
     * @param {Number} rightEnd The right most index of the array.     */
    public merge(arr: number[], temp: number[], left: number, right: number, rightEnd: number): void {

        let leftEnd: number = right - 1;
        let k: number = left;
        let num: number = rightEnd - left + 1;

        while (left <= leftEnd && right <= rightEnd) {
            if (arr[left] <= arr[right]) {
                temp[k++] = arr[left++];
            } else {
                temp[k++] = arr[right++]
            }
        }

        while (left <= leftEnd) {
            temp[k++] = arr[left++];
        }

        while (right <= rightEnd) {
            temp[k++] = arr[right++];
        }

        for (let i: number = 0; i < temp.length; i++, rightEnd--) {
            arr[rightEnd] = temp[rightEnd];
        }

    }



}