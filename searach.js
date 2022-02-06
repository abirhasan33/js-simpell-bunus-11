const products = [
    {name: 'iphone 14', price: '70000'},
    {name: 'samsung galax 10', price: '60000'},
    {name: 'dell leptep', price: '50000'},
    {name: 'lenovo yogo', price: '50000'},
    {name: 'asuges 14', price: '35000'},
    {name: 'snart watch samsung', price: '70000'},
    {name: 'apple watch', price: '20000'},
    {name: 'pulus one phone', price: '27000'}
];

function semrchProducts(products, seatchText){
    const reujal = [];
    for( const prodect of products){
        if(products.name.includes(seatchText)){ 
            reujal.push(products);
         }
    }
    return reujal;
}

const mathch = semrchProducts(products, 'watch');
console.log(mathch);