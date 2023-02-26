
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( matrix === undefined || matrix.length === 0){
       return [] ;
    }
    let x = [];
    for (let i = 0; i < matrix.length; i++){
        if(i % 2 === 0){
            x.push(...matrix[i]);
        }else {
            let z = matrix[i];
            for(let k = 0; k < z.length/2;k++){
                let y = z[k];
                z[k] = z[z.length-1-k];
                z[z.length-1-k] = y;
            }
            x.push(...z);
        }
          }
    return x;
}
