const arr = [3,5,-4,8,11,1,-1,6];
const target = 10;
const twoNumberSum = (array, targetSum)=>{
    let map = {}
    for(let val of array){
        map[val] = val
    }
    for(let i =0; i <= array.length-1;i++){
        let diff = targetSum - array[i];
        if(map[diff] && diff != array[i]){
            return [array[i], map[diff]]
        }
    }
    return []
    }