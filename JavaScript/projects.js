const shopCounter = document.querySelector('.shopping__icon span')
const gridItems = document.querySelector('.carts')
const pay = document.querySelector('.pay')

const data = [
    {
      id: 'project-1',
      img: '../Images/pro1.jpg',
      projctName: "bottle",
      prise: 14,
      stars: 4
    },
    {
      id: 'project-2',
      img: '../Images/pro2.jpg',
      projctName: "Classic white",
      prise: 88,
      stars: 4
    },
    {
      id: 'project-3',
      img: '../Images/pro3.jpg',
      projctName: "glasses",
      prise: 18,
      stars: 4
    },
    {
      id: 'project-4',
      img: '../Images/pro4.jpg',
      projctName: "spider man",
      prise: 4,
      stars: 4
    },
  ]

let projecAdded = JSON.parse(localStorage.getItem('ecommersItems')) || []

function updateConuter() {
    // conuter++
    const conuter = projecAdded.map(el => el.items).reduce((c, n) => c+n, 0)
    shopCounter.innerHTML = conuter
  }
  
updateConuter()

const displayItems = () => {

  projecAdded.map((el) => {
    let items = data.find((item) => item.id === el.id)
    
    let html = 
    `
    <div class="row_cart">

      <div class="content__img" >
        <img src="${items.img}" style="height: 150px;">
      </div>

      <div class="name_span" >
        <p>${items.projctName}</p>
        <span>small</span>
      </div>

      <div class="amount" >
        <p>Amount: </p>
        <div class="how_many_time" id="${items.id}" >
            <a class="addItem" >+</a>
            <p>${el.items}</p>
            <a  class="subItem" >-</a>
        </div>
        <button>Remove</button>
      </div>

      <div class="prise">
        <p><strong>${items.prise * el.items} ﷼ </strong></p>
      </div>

    </div>
    `

    gridItems.insertAdjacentHTML('beforeend', html)
  })
}

displayItems()

// addItem + 
function increment() {

  const addItem = document.querySelectorAll('.addItem');
  
  addItem.forEach(el => {
    el.addEventListener('click', (e)=> {
      const updateProjec = projecAdded.map(item => item.id === e.target.parentElement.id? {id: item.id, items: item.items += 1}: item)
      localStorage.setItem('ecommersItems', JSON.stringify(updateProjec));
    })
  })
  update()
}

increment()

function decrement() {

  const subItem = document.querySelectorAll('.subItem');
  
  subItem.forEach(el => {
    el.addEventListener('click', (e)=> {
      const updateProjec = projecAdded.map(item => item.id === e.target.parentElement.id? {id: item.id, items: item.items -= 1}: item)
      localStorage.setItem('ecommersItems', JSON.stringify(updateProjec));
    })
  })
  update()
}

decrement()

function update() {
  projecAdded = JSON.parse(localStorage.getItem('ecommersItems'));
  console.log(projecAdded)
  return projecAdded
}



// projecAdded = JSON.parse(localStorage.getItem('ecommersItems'))

// function decrement(id) {
//   console.log(id)
//   // const item = projecAdded.find((item) => id === item.id)
//   // console.log(item)
// }

function addPayElement() {
  // const subtotal = 
  const payElement =
      `
      <div class="top">
        <div>
          <p>sub total</p>
          <p>${3}</p>
        </div>
        <div>
          <p>shipping</p>
          <p>5 ريال</p>
        </div>
        <div>
          <p>Tax</p>
          <p>${3}</p>
        </div>
        <div>
          <p>Order Total</p>
          <p>${3}</p>
        </div>
      </div>
      <button>Place Order</button>
      `
    pay.insertAdjacentHTML('beforeend', payElement)
}

addPayElement()