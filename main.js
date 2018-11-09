// modal script
/* 
1. Login, SignUp 버튼을 클릭하면 모달창이 뜬다.
2. login 을 클릭하면 '로그인하세요', SignUP을 클릭하면 '가입하세요'
3. modal 의 검은배경을 클릭하면 modal이 사라진다.
*/

let modal_title = document.querySelector('.modal-title');
let modal = document.querySelector('.modal-area');
let modal_btn = document.querySelectorAll('.modal-btn');

// modal open
modal_btn.forEach(modals => {
    modals.addEventListener('click', () => {
        modal.style.display = 'block';
        modal_title.innerHTML = modals.title;
    })
});

// modal close
modal.addEventListener('click', e => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});



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




