const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);

const  getCategoriesList= itemRef.forEach(elem => {
    let titleName= elem.querySelector('h2').textContent;
    let totalElem= elem.querySelector('ul').children.length;
    console.log(`Категория: ${titleName}`);
    console.log(`Количество элементов: ${totalElem}`);
});
