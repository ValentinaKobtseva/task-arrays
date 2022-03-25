/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = [];
    //arr = Array.from(data);
    data = data.split(',');
    for (let i = 0; i < data.length; i++) {
        arr[i] = +data[i];
    }
    arr.sort(function func(a, b) {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });
    data = arr.join(',');
    return data;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let resArr = data.filter(function func(n) {
        return n < 100;
    });
    return resArr;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let thirdArr = [];
    for (let i = 0; i < 5; i++) {
        thirdArr.push(array1[i]);
        thirdArr.push(array2[i]);
    }
    return thirdArr;
}
