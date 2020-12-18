const arr = [5,1,4,2];

const arrayOfProducts = (arr)=>{
    var temp = 1,
    product = [];
    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }
    return product
}