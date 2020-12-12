const matrix = [[1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]];

const spiralTraverse = (matrix)=>{
    let arr = [];
    let sR = 0;
    let eR = matrix.length-1;
    let sC = 0
    let eC = matrix[0].length-1;

    while(sR <= eR && sR <= eC){
        // traverse right
        for(let col = sC; col <= eC; col++){
            arr.push(matrix[sR][col]);
            // console.log(matrix[sR][col])
        }
        // traverse down
        for(let col = sR+1; col <= eR; col++){
            arr.push(matrix[col][eC]);
        }
        // traverse left
        for(let col = eC-1; col >= sC; col--){
            if(sR === eR) break;
            arr.push(matrix[eR][col]);
        }
        // traverse up
        for (let col = eR -1; col > sR; col--){
            if(eC == sC) break;
            arr.push(matrix[col][sC])
        }

        sR++;
        eR--;
        sC++;
        eC--;
    }
    return arr;
};

spiralTraverse(matrix);