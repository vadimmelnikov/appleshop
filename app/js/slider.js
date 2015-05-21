// $(document).ready(function(){

// 	$('.contr-a__slider').on('click', function(e){

// 		e.preventDefault();

// 		var 
// 		   $this = $(this),
// 		   container = $this.closest('.slider'),
// 		   list = container.find('.list-ul-item-content__slider'),
// 		   items = container.find('.list_item-content__slide'),
// 		   activeSlide = items.filter('.active'),
// 		   nextSlide = activeSlide.next(),
// 		   prevSlide = activeSlide.prev(),
// 		   firstSlide = items.first(),
// 		   lastSlide = items.last(),
// 		   sliderOffset = container.offset().left,
// 		   reqPos = 0;



// 		if ($(this). hasClass('contr-a__slider-left')) {
			
			
// 			if (nextSlide.length){
// 				findRegPos(nextSlide);
// 			    removeActiveClass(nextSlide);

// 			}
// 			else
// 			{
// 				findRegPos(firstSlide);
// 				removeActiveClass(firstSlide);
// 			}

// 		} else {

// 			if (prevSlide.length){
// 				findRegPos(prevSlide);
// 			    removeActiveClass(prevSlide);

// 			}
// 			else
// 			{
// 				findRegPos(lastSlide);
// 				removeActiveClass(lastSlide);
// 			}
// 		}

// 		list.css('left', '-=' + reqPos + 'px');
// 		function removeActiveClass (reqSLide){
// 			reqSLide.addClass('active').siblings().removeClass('active');
// 		}

// 		function findRegPos (slide){
// 			reqPos = slide.offset().left - sliderOffset;

// 		}

// 	});
	
// });
$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 75,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10,
    pager: false,
    nextText: '',
    prevText: ''
  });
});



