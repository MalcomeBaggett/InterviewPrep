const array = [2,1,2,2,2,1,5];
const toMove = [2];

const moveToEnd = (array, toMove) => {
    let left = 0;
	let right = array.length-1;
	while(left < right){
		while(left < right && array[right] === toMove){
			right--;
		}
		if(array[left] === toMove){
			let temp = array[right];
			array[right] = array[left];
			array[left] = temp;
		}
		left++;
	}
	return array;
}