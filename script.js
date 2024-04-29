const scroll = new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth:true,
    // lerp:0.08
})


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  

    document.querySelector(".black-to-top i").addEventListener("click",() =>{
      scroll.scrollTo(0)
    })
  

  