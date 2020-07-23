function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++){
        let currentElement = array[i]
        if(currentElement < min){
            min = array[i];
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min

}

function selectionSort(array){
    let newMin;
    let sort = [];
    while (array.length != 0){
        newMin = findMinAndRemove(array)
        sort.push(newMin)
    }
    return sort

}
