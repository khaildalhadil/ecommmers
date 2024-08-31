const shopCounter = document.querySelector('.shopping__icon span')
const gridItems = document.querySelector('.carts')
const pay = document.querySelector('.pay')

let projecAdded = JSON.parse(localStorage.getItem('ecommersItems')) || []

function updateConuter() {
  // conuter++
  const conuter = projecAdded.map(el => el.items).reduce((c, n) => c+n, 0)
  shopCounter.innerHTML = conuter
}

updateConuter()

const displayItems = () => {
  projecAdded.map((el) => {
    let {id, items} = el
    let search = data.find((item) => item.id === id);
    let html = `
    <div class="row_cart">
      <div class="content__img" >
        <img src="${search.img}" style="height: 150px;">
      </div>

      <div class="name_span" >
        <p>${search.projctName}</p>
        <span>small</span>
      </div>

      <div class="amount" >
        <p>Amount: </p>
        <div class="how_many_time">
          <a onclick="increm(${id})" class="test">+</a>
          <p id=${id} >${items}</p>
          <a onclick="decrem(${id})">-</a>
        </div>
        <button>Remove</button>
      </div>

      <div class="prise">
        <p><strong>${search.price * items} ﷼ </strong></p>
      </div>

    </div>
    `

    gridItems.insertAdjacentHTML('beforeend', html)
  })
}

displayItems()

// addItem + 
function increm(idItem) {
  console.log(idItem)
  // const addItem = document.querySelectorAll('.addItem')
  // console.log(addItem)
  // addItem.forEach(el => {
  //   const pId = e.target.nextElementSibling.id
  //   el.addEventListener('click', (e)=> {
  //     const updateProjec = projecAdded.map(item => item.id === e.target.nextElementSibling.id? {id: item.id, items: item.items += 1}: item)
  //     localStorage.setItem('ecommersItems', JSON.stringify(updateProjec))
  //   })
  // })
  // update(pId)
  // updateConuter()
}


function decrem(idItem) {
  console.log(idItem)
//   // const subItem = document.querySelectorAll('.subtractItem')
//   // console.log(subItem)
//   // subItem.forEach(el => {
//   //   el.addEventListener('click', (e)=> {
//   //     const pId =e.target.previousElementSibling.id
//   //     const updateProjec = projecAdded.map(item => item.id === e.target.previousElementSibling.id? {id: item.id, items: item.items -= 1}: item)
//   //     localStorage.setItem('ecommersItems', JSON.stringify(updateProjec));
//   //   })
//   // })
//   // update(pId)
//   // updateConuter()
}
  

// function update(pId) {
//   console.log(pId)
// }

function addPayElement() {
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