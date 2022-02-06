// //  4! 4*3*2*1

// let factoiale = 1;
// for( let i = 0; i>= 1; i--){
//     factoiale = factoiale * i;
// }
// console.log(factoiale);

function factoriale(i){
    if(i==1){
        return 1;
    }
    return i * factoriale(--i);
}

console.log(factoriale(4));


// i * factoriale(--i)
// i * factoriale(3)
// i * 3 * factoriale(2)
// i * 3 * 2 * factoriale(1)
// i * 3 * 2 * 1
// 24 ans ?