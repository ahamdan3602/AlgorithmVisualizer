export class SortingAlgo {
    constructor ({swapBars}) {
        this.swapBars = swapBars;
    }


    bubbleSort(array) {
        const swaps = []
        for (let i = 0; i < array.length; i++) {
          // Last i elements are already in place
          for (let j = 0; j < array.length - i - 1; j++) {
            // Checking if the item at present iteration is greather than the next iteration
            if (array[j] > array[j + 1]) {
              // If the condition is true, swap them
              let temp = array[j]
              array[j] = array[j + 1]
              array[j + 1] = temp
              swaps.push({ firstPostion: j, lastPosition: j + 1 })
            };
          };
        };
        return swaps
      }
      selectionSort(array) {
        const swaps = []
        let min
        for (let i = 0; i < array.length - 1; i++) {
          min = i
          for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
              min = j
            }
          }
          let temp = array[min]
          array[min] = array[i]
          array[i] = temp
          swaps.push({ firstPostion: min, lastPosition: i })
        }
    
        return swaps
      }
    
    }