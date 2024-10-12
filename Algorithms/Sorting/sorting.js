export function bubbleSort(array) {
    const swaps = [];
    do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1].height > array[i].height) {
                swapped = true;
                swaps.push([i-1,i]);
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
    } while (swapped);

    return swaps;
}

export function selectionSort(array) {
    const swaps = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j].height < array[minIndex].height) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            swaps.push([i, minIndex]); 
        }
    }
    return swaps; 
}

export function insertionSort(array) {
    const swaps = [];
    for (let i = 0; i < array.length;i++) {
        let key = arr[i];
        j = i - 1;
        while (j>= 0 && arr[j] > key) {
            swaps.push([i, j+1]);
            arr[j+1] = arr[j];
            j-= 1;
        }
        arr[j+1] = key;
    }
    return swaps;
}




function quickSort(array) {

}