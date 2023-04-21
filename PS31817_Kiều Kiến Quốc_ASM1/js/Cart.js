var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 5000,
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
  // onmouseover
  function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "550px";
    }
    
    function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "450px";
    }
  // Time
  var countDownDate = new Date("April 15,2023 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance %(1000 *60 *60*24))/(1000*60*60));
    var minutes = Math.floor((distance %(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if(distance < 0){
      clearInterval(x);
      document.getElementById("days").innerHTML = 00;
      document.getElementById("hours").innerHTML = 00;
      document.getElementById("minutes").innerHTML = 00;
      document.getElementById("seconds").innerHTML = 00;
    }

  }, 1000);