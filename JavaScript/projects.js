const shopCounter = document.querySelector('.shopping__icon span')
const gridItems = document.querySelector('.carts')

let projecAdded = JSON.parse(localStorage.getItem('ecommersItems'));

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

console.log(projecAdded)
function updateConuter() {
    // conuter++
    const conuter = projecAdded.map(el => el.items).reduce((c, n) => c+n, 0)
    shopCounter.innerHTML = conuter
  }
  
updateConuter()

projecAdded.map((el) => {
    let items = data.find((item) => item.id === el.id)
    console.log(items)
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
        <div class="how_many_time" >
            <button onclick="" >+</button>
            <p>${el.items}</p>
            <button onclick="" >-</button>
        </div>
        <button>Remove</button>
      </div>

      <div class="prise">
        <p><strong>${items.prise}</strong></p>
      </div>

    </div>
    `
    gridItems.insertAdjacentHTML('beforeend', html)
})
