const swiper = new Swiper('.slider-main-block', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },
});

const tabNavItems =document.querySelectorAll('.tabs-deals__button');
const tabItems =document.querySelectorAll('.item-tabs');

document.addEventListener("click", function (e) {
	const targetElement=e.target;
	if(targetElement.closest('.tabs-deals__button')){
	}
});