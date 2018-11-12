
// check
function checkEmail() {
    let email = document.querySelector('.input-email');
    let pw = document.querySelector('.pw-input');
    let warning = document.querySelector('.rex')
    if(email.value == '' || pw.value == '') {
        warning.innerHTML = '<span style="color:red;"> 입력하세요</span>';
        return false;
    } else {
        return true;
    }
}

// card info
let product_name = document.querySelectorAll('.card-title');
let product_img = document.querySelectorAll('.card-img-top');
let product_price = document.querySelectorAll('.card-price');
let product_txt = document.querySelectorAll('.card-text');

let products = [
    {
        id: 1,
        price: 500,
        img: 'img/img2.jpg',
        title: 'Blossom Dress',
        text: "Do you like some random yellow stuff? Here's one for you."
    },
    {
        id: 2,
        price: 300,
        img: 'img/img1.jpg',
        title: 'Springfield Shirt',
        text: "Stole it from my dad."
    },
    {
        id: 3,
        price: 0,
        img: 'img/img3.jpg',
        title: 'Black Monastery',
        text: "The best beer comes from the monastery."
    }
];

    for(let i = 0; i < products.length; i++) {
        product_name[i].innerHTML = `${products[i].title}`;
        product_img[i].src = `${products[i].img}`;
        product_price[i].innerHTML = `$ ${products[i].price}`;
        product_txt[i].innerHTML = `${products[i].text}`;
    };


    // Local Storage 로 선택한 상품정보 보내기
    let i = 1
          let add = document.querySelector('#add');
          add.addEventListener('click', function() {
            var data = {
              quantity : document.querySelector('#quantity').value,
              size: document.querySelector('#size').value,
              price: 199,
              color : document.querySelector('#color').value
            }
            var productData = JSON.stringify(data);
            localStorage.setItem(`product ${i}`, productData);

            i += 1;
          })


