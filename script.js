// Element finder
const categoryBtns = document.querySelectorAll('.category-btn');
let activeBtn = document.querySelector('.active-cat');

const swapActiveBtn = function(e) {
    e.preventDefault();
    const clicked = e.target;
    activeBtn.classList.toggle('active-cat');
    activeBtn = this; 
    this.classList.add('active-cat');
}

categoryBtns.forEach((btn) =>
btn.addEventListener('click', swapActiveBtn)
)