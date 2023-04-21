        // auto play
		var swiper = new Swiper(".mySwiper", {
			autoplay: {
			  delay: 3000,
			  disableOnInteraction: false,
			},
		  
			
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
		  });
		  
		  
		  // check loi
		  
		  let check = document.getElementById("shopping-cart")
		  
		  
		  // ======================================showroom
		  let img_hover = document.querySelector('.hover_image img');
		  let img_slider = document.querySelector('.wrapper_slider img');
		  let load_image = new Image();
		  let link_img ='img/showroom1.png';
		  let btn_first = document.querySelectorAll('button');
		  img_hover.addEventListener('mouseenter', () => {
		  img_hover.setAttribute('src', link_img);
		  });
		  img_hover.addEventListener('mouseleave', () => {
		  img_hover.setAttribute('src', 'img/showroom.png');
		  });
		  // 
		  // Giỏ hàng
		  // đóng
		  function closeCart() {
			  const cart = document.querySelector('.producstOnCart');
			  cart.classList.toggle('hide');
			  document.querySelector('body').classList.toggle('stopScrolling')
		  }
		  // mở
		  const openShopCart = document.querySelector('.shoppingCartButton');
		  openShopCart.addEventListener('click', () => {
			  console.log("snkdsadsadas");
			  const cart = document.querySelector('.producstOnCart');
			  cart.classList.toggle('hide');
			  document.querySelector('body').classList.toggle('stopScrolling');
		  });
		  
		  // Lấy giá trị lưu vào mảng localStorage
		  const closeShopCart = document.querySelector('#closeButton');
		  const overlay = document.querySelector('.overlay');
		  closeShopCart.addEventListener('click', closeCart);
		  overlay.addEventListener('click', closeCart);
		  let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
		  if(!productsInCart){
			  productsInCart = [];
		  }
		  const parentElement = document.querySelector('#buyItems');
		  const cartSumPrice = document.querySelector('#sum-prices');
		  const products = document.querySelectorAll('.product-under');
		  
		  // cộng giá
		  const countTheSumPrice = function () { // 4
			  let sum = 0;
			  productsInCart.forEach(item => {
				  sum += item.price;
			  });
			  return sum;
		  }
		  // update sản phẩm vào tạo biến trong cart
		  const updateShoppingCartHTML = function () {  // 3
			  localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
			  if (productsInCart.length > 0) {
				  let result = productsInCart.map(product => {
					  return `
						  <li class="buyItem">
							  <img src="${product.image}">
							  <div>
								  <h5>${product.name}</h5>
								  <h6>$${product.price}</h6>
								  <div>
									  <button class="button-minus" data-id=${product.id}>-</button>
									  <span class="countOfProduct">${product.count}</span>
									  <button class="button-plus" data-id=${product.id}>+</button>
								  </div>
							  </div>
						  </li>`
				  });
				  parentElement.innerHTML = result.join('');
				  document.querySelector('.checkout').classList.remove('hidden');
				  cartSumPrice.innerHTML = '$' + countTheSumPrice();
		  
			  }
		  
		  // ngược lại kh có giả hàng rỗng
			  else {
				  document.querySelector('.checkout').classList.add('hidden');
				  parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
				  cartSumPrice.innerHTML = '';
			  }
		  }
		  
		  function updateProductsInCart(product) { // 2
			  for (let i = 0; i < productsInCart.length; i++) {
				  if (productsInCart[i].id == product.id) {
					  productsInCart[i].count += 1;
					  
					  productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
					  return;
				  }
			  }
			  productsInCart.push(product);
		  }
		  // lấy giá trị
		  products.forEach(item => {   // 1
			  item.addEventListener('click', (e) => {
				  if (e.target.classList.contains('addToCart')) {
					  const productID = e.target.dataset.productId;
					  const productName = item.querySelector('.productName').innerHTML;
					  const productPrice = item.querySelector('.priceValue').innerHTML;
					  const productImage = item.querySelector('img').src;
					  let product = {
						  name: productName,
						  image: productImage,
						  id: productID,
						  count: 1,
						  price: +productPrice,
						  basePrice: +productPrice,
					  }
					  updateProductsInCart(product);
					  updateShoppingCartHTML();
				  }
			  });
		  });
		  // +- s61 lượng
		  parentElement.addEventListener('click', (e) => { // Last
			  const isPlusButton = e.target.classList.contains('button-plus');
			  const isMinusButton = e.target.classList.contains('button-minus');
			  if (isPlusButton || isMinusButton) {
				  for (let i = 0; i < productsInCart.length; i++) {
					  if (productsInCart[i].id == e.target.dataset.id) {
						  if (isPlusButton) {
							  productsInCart[i].count += 1
						  }
						  else if (isMinusButton) {
							  productsInCart[i].count -= 1
						  }
						  productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
		  
					  }
					  if (productsInCart[i].count <= 0) {
						  productsInCart.splice(i, 1);
					  }
				  }
				  updateShoppingCartHTML();
			  }
		  });
		  updateShoppingCartHTML();
		  let btn = document.getElementsByClassName("addToCart");
		  for(let bt of btn) {
			  bt.addEventListener("click",()=> {
				  swal({
					  title: "Good job!",
					  text: "You clicked the button!",
					  icon: "success",
					});
			  })
		  }
		  // click video card
			  var iconClose = document.getElementById("iconClose")
			  var light = document.getElementById("light")
			  var fade = document.getElementById("fade")
			  var vCard = document.getElementById("vCard")
			  var imgClose = document.querySelectorAll("#KKQ")
		  
		  
			  fade.addEventListener("click",close)
			  for (let index = 0; index < imgClose.length; index++) {
				const element = imgClose[index];
				element.addEventListener("click",()=>{
				  vCard.src = element.parentElement.parentElement.children[0].src.replace("png","mp4"); 
				  openVideo()
				})
			  }
			  
			  function openVideo(){
				light.style.display = "block"
				fade.style.display = "block"
				vCard.load()
				vCard.play()
			  }
		  
		  
			  iconClose.addEventListener("click" ,close)
			  function close(){
				light.style.display = "none"
				fade.style.display = "none"
				vCard.pause()
			  }
			  // đóng bằng Esc
			  window.addEventListener("keydown",closeEsc);
			  function closeEsc(event){
				if(event.key == "Escape"){
				  close()
				}
			  }
			  // intro
			  function fadeOut(){
				  TweenMax.to(".myIntro",1,{
					  y:-100,
					  opacity:0
				  });
				  TweenMax.to(".screen",2,{
					  y:-400,
					  opacity:0,
					  ease:Power2.easeInOut,
					  delay:2
				  });
				  TweenMax.to(".overlay1",2,{
					  delay:2.6,
					  top:"-110%",
					  ease:Expo.easeInOut
				  });
				  TweenMax.to(".overlay-2",2,{
					  delay:3,
					  top:"-110%",
					  eease:Expo.easeInOut
				  });
				  
			  }
		  
			  $(document).ready(function(){
				  $("#myIntro").click(() => {
					  $(".overlay-2").hide();
				  })
			  });