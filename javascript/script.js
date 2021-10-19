const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 250,
        amount: 0,
        get SUMMA() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 350,
        amount: 0,
        get SUMMA() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 350,
        amount: 0,
        get SUMMA() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
}


const plusOrminus = document.querySelectorAll('.main__product-btn')
plusOrminus.forEach(function (el) {
    el.addEventListener('click', function () {
        pOm(el)
    })
})

function pOm(element) {
    let parent = element.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let attr = element.getAttribute('data-symbol')
    let number = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')

    if (attr === '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (attr === '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
 
    number.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].SUMMA
    kcall.innerHTML = product[parentId].KCALL
}

const lvlTimer = document.querySelector('.header__timer-extra')
const productMain = document.querySelectorAll('.main__product-info')
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')

let timer = 50


function extraTimer() {
    
    let interval =
    
    
    
    setInterval(() => {

        lvlTimer.innerHTML++
        
        if (lvlTimer.innerHTML == 100) {
            clearInterval(interval)
        }
        
        else if (lvlTimer.innerHTML > 80) {
            clearInterval(interval)
            extraTimer(timer)
            timer = 150
        }
       
        else if (lvlTimer.innerHTML > 50) {
            clearInterval(interval)
            timer = 100
            extraTimer(timer)
        }
        else if (lvlTimer.innerHTML > 95) {
            clearInterval(interval)
            extraTimer(timer)
            timer = 1000
        }
      
        
    }, timer);
    
}
extraTimer()

productMain.forEach(function(el) {
    el.addEventListener('click', function (e) {
        productMain.forEach(function (el) {
            view.classList.remove('active')
        })
        view.querySelector('img').src = this.querySelector("img").src
        view.classList.add('active')
        
    }) 
})


viewClose.addEventListener('click', function (e) {
    productMain.forEach(function(el){
        view.classList.remove('active')
    })
})