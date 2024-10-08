const header = document.querySelector('header');
const navLink = document.querySelectorAll('header nav li a');
const allProducts = document.querySelector('.all__products');

// fixed nav
window.addEventListener('scroll', (e) => {
  if (scrollY > 0) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed') 
  }
})

// add body contant 
data.map(el => {
  const html = `
  <div>
    <img src="${el.img}" alt="${el.projctName}">
    <div>

      <div class="name__prise">
        <p><strong>${el.projctName}</strong></p>
        <p><b>${el.prise}</b></p>
      </div>

      <div class="footer__of__card" >
        
        <a id="${el.id}" class="add-to-card" >
          <p>Add to card</p>
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
      </div>

    </div>
  </div>
  `
  allProducts.insertAdjacentHTML('beforeend', html)

})

// counter in shoping icon 
const shopCounter = document.querySelector('.shopping__icon span')
const addToCard = document.querySelectorAll('.add-to-card');

let conuter = 0;

let projecAdded = JSON.parse(localStorage.getItem('ecommersItems')) || [];

function updateConuter() {
  // conuter++
  const conuter = projecAdded.map(el => el.items).reduce((c, n) => c+n, 0)
  shopCounter.innerHTML = conuter
}

updateConuter()

function checkIfWeHaveThisId(itemId) {
  const itemsObject = projecAdded.find(el=> el.id === itemId)
  
  if(itemsObject === undefined) {
    projecAdded.push({id: itemId, items: 1})
  } else {
    itemsObject.items++;
  }
  localStorage.setItem('ecommersItems', JSON.stringify(projecAdded))
  // checkIfWeHaveLocStor()
}


addToCard.forEach((el) => {
  el.addEventListener('click', (e)=> {
    if (e.target.tagName === 'I') {
      const itemId = e.target.parentElement.id;
      checkIfWeHaveThisId(itemId)

    } else {
      const itemId = e.target.id
      checkIfWeHaveThisId(itemId)
    }

    console.log(projecAdded)
    updateConuter()
  })
})
