productsList = [
  {
    id: 1,
    name: 'Xiaomi Redmi 5A 16GB Ram 2GB (Vàng)',
    image: 'f4033880f14ef60b58089ee23057563f.jpg',
    price: '1.990.000 ₫'
  },
  {
    id: 2,
    name: 'IPHONE 7 PLUS 128GB QUỐC TẾ - Hàng Nhập Khẩu',
    image: 'iphone-7-plus-128gb-quoc-te-hang-nhap-khau-6393-90036973-c10affdf48783a070cc6e403094776c0-catalog_233.jpg',
    price: '14.700.000 ₫'
  },
  {
    id: 3,
    name: 'ĐTDĐ Goly G206 Gold',
    image: 'dtdd-goly-g206-gold-2054-6217786-116c895e4182249457cc52ed3857a547-catalog_233.jpg',
    price: '299.000 ₫'
  },
  {
    id: 4,
    name: 'Lumia 520',
    image: '4417171d5ce2317271ed603a3aee6d5f.jpg',
    price: '690.000 ₫'
  },
  {
    id: 5,
    name: 'Apple iPhone X 64GB (Xám) - Hàng nhập khẩu',
    image: 'apple-iphone-x-64gb-xam-hang-nhap-khau-5857-21352591-24a734b0049638a4773e10e207afb9ea-catalog_233.jpg',
    price: '25.591.000 ₫'
  },
  {
    id: 6,
    name: 'Philips E220 2Sim (Đen)',
    image: 'philips-e220-2sim-den-2634-0458022-e4428de96890d813309b568e59671275-catalog_233.jpg',
    price: '500.000 ₫'
  },
  {
    id: 7,
    name: 'Điện thoại người già Masstel Fami C',
    image: 'dien-thoai-nguoi-gia-masstel-fami-c-6105-33139553-13f508736dd7cd8df0ca9bc9f0622f45-catalog_233.jpg',
    price: '368.500 ₫'
  },
  {
    id: 8,
    name: 'oppo f1s(2017) hàng nhập khẩu',
    image: 'oppo-f1s2017-nha-phan-phoi-chinh-thuc-8292-3775506-3be9b9129ab420b458b1d6ca76073c9b-catalog_233.jpg',
    price: '5.990.000 ₫'
  },
  {
    id: 9,
    name: 'Máy Nokia 3310 tặng kèm sim 10 số ',
    image: 'may-nokia-3310-tang-kem-sim-10-so-5397-33581034-362e86ab1af3e97b31b9fc72e2b13ade.jpg',
    price: '290.000 ₫'
  },
  {
    id: 10,
    name: 'Huawei nova 2i 64GB 4GB RAM 2 SIM (Xanh) - Hãng phân phối chính thức',
    image: 'huawei-nova-2i-64gb-4gb-ram-2-sim-xanh-hang-phan-phoi-chinh-thuc-7466-93389542-4b1b37c2ea4116cdc0b65c174b1208e9-catalog_233.jpg',
    price: '5.291.000 ₫'
  }
]

const lengthProductList = productsList.length;
let arrSelectProduct = [];
let arrCart = [];
let cartItem = {};
let lengthArrCart;
localStorage.setItem('cartList',JSON.stringify(arrCart));
function loadProduct() {
  arrCart = JSON.parse(localStorage.getItem('cartList'));
  totalCart = arrCart.length;
  for (let i = 0; i < lengthProductList; i++) {
    var idProduct = productsList[i].id;
    var nameProduct = productsList[i].name;
    var imageProduct = productsList[i].image;
    var priceProduct = productsList[i].price;
    $('.list-product').append('<li class="item-product clearfix">'+
                                '<div class="border-on">' +
                                  '<h2 class="title">'+nameProduct+'</h2>'+
                                  '<div class="info-product">'+
                                    '<img src="images/'+ imageProduct +'" alt="">'+
                                    '<span>'+priceProduct +'</span>'+
                                  '</div>'+
                                  '<button id="'+ idProduct+'" onclick="add_product(this.id)" class="addToCart">Mua</button>'+
                                '</div>'+
                              '</li>');
    for(let j=0;j < totalCart; j++){
      if(idProduct === arrCart[j]['id']) {
        $('#'+idProduct).attr('disabled',true);
      }
    }
  }
}
loadProduct();


function add_product(id){
  $('#'+id).attr('disabled',true);
  arrSelectProduct = JSON.parse(localStorage.getItem('cartList'));
  cartItem = productsList[id-1];
  arrSelectProduct.push(cartItem);
  localStorage.setItem('cartList', JSON.stringify(arrSelectProduct));
  var lengthSelectProduct = arrSelectProduct.length;
  $('#numberCart').text(lengthSelectProduct);
}

function initNumberCart(){
  if(localStorage.getItem('cartList') !== null) {
    arrCart = JSON.parse(localStorage.getItem('cartList'));
  } else {
    arrCart = [];
  }
  lengthArrCart = parseInt(arrCart.length);
  $('#numberCart').text(lengthArrCart);
}
initNumberCart();

function initCart() {
  if(localStorage.getItem('cartList') !== null) {
    arrCart = JSON.parse(localStorage.getItem('cartList'));
  } else {
    arrCart = [];
  }
  lengthArrCart = parseInt(arrCart.length);
  for (let i = 0; i < lengthArrCart; i++) {
    var idProduct = arrCart[i].id;
    var nameProduct = arrCart[i].name;
    var imageProduct = arrCart[i].image;
    var priceProduct = arrCart[i].price;

    $('.body_list').append('<tr>'+
                            '<td>'+ idProduct +'</td>'+
                            '<td>'+ nameProduct +'</td>'+
                            '<td><img src="images/'+ imageProduct +'" alt=""></td>'+
                            '<td>'+ priceProduct+'</td>'+
                            '<td><input id="'+idProduct+'" onclick="delProduct(this.id)" value="Delete" type="submit"></td>'+
                          '</tr>');
  }
}

initCart();

function delProduct(id) {
  if(confirm('Do you want to delete product '+ id)) {
    let newCart = [];
    cartLength = arrCart.length;
    for (let i = 0; i < cartLength; i++) {
      if(parseInt(arrCart[i]['id']) !== parseInt(id)) {
        newCart.push(arrCart[i]);
      } 
    }
    arrCart = newCart;
    localStorage.setItem('cartList',JSON.stringify(newCart));
    $('.body_list').text('');
    initCart();
  }
}