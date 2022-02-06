const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung galax 10', price: 60000},
    {name: 'dell leptep', price: 50000},
    {name: 'lenovo yogo', price: 50000},
    {name: 'asuges 14', price: 35000},
    {name: 'snart watch samsung', price: 40000},
    {name: 'apple watch', price: 20000},
    {name: 'pulus one phone', price: 27000}
];

// for(const product of products){
//     if(products.price<5000){
//         break;
//     }
//     console.log(products);
// }

for(const produse of products){
    if(produse.price < 10000){
        continue;
    }
    console.log(produse);
}

console.log('after the loop')