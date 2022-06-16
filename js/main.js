const tabsButtons = document.querySelector('.tabs__controls');
const tabsContent = document.querySelector('.tabs__content');

const changeButtonClass = el => {
  const buttonsArray = tabsButtons.children;

  for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].classList.remove('active');
  };

  el.classList.add('active');
};

tabsButtons.addEventListener('click', e => {
  const currTab = e.target.dataset.btn;
  const itemsArray = tabsContent.children;
  
  changeButtonClass(e.target);

  for(let i = 0; i < itemsArray.length; i++) {
    itemsArray[i].classList.remove('active');
    if(itemsArray[i].dataset.content == currTab) {
      itemsArray[i].classList.add('active');
    };
  };
});