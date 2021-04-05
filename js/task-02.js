
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ulList = document.querySelector('#ingredients');
  const newList = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
      });
  ulList.append(...newList);
  

  



