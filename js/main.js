
$(document).ready(function () {
	$('.js-accordion-btn').click(function(event) {
		if ($('.js-block').hasClass('one')) {
			$('.js-accordion-btn').not($(this)).removeClass('active')
			$('.js-accordion-content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300)
	})
})
const multiDefault = () => {
    const elements = document.querySelectorAll('.js-select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        position: 'auto',
      });
    })
}
multiDefault();
// //? Swiper иницилизация и первоначальные настройки ---------------------------------->>>>
if (document.querySelectorAll('.slider-init').length > 0) {
    const mySwiper = new Swiper('.slider-init', {
        autoplay: {
			delay: 5000,
			speed: 1000,
		},
		loop: true,
        observer: true,
        spaceBetween: 10,
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            520: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.slider-arrow-next',
            prevEl: '.slider-arrow-prev',
          },
    });
}
// //? Burger Menu and Link ------------------------------------------------>>>>>>
const body = document.querySelector('body'),
  menuButton = document.querySelector('.burger'),
  menu = document.querySelector('.header__bottom');
  
function closeBurger() {
    menuButton.classList.remove('active');
    menu.classList.remove('active');
    body.style.overflow = '';
}
function openBurger() {
    menuButton.classList.add('active');
    menu.classList.add('active');
    body.style.overflow = 'hidden';
}

if (document.querySelectorAll('.burger').length > 0) {
    menuButton.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            closeBurger();
        } else if (!this.classList.contains('active')) {
             openBurger();
        }
  });
}
//? Burger Menu and Link END ------------------------------------------------>>>>>>
const menuLink = document.querySelectorAll('.menu__list-link');
  menuLink.forEach((el) =>  {
    el.addEventListener('click', (e) => {
      
    if (el.getAttribute("href") === "#") {
      e.preventDefault();
    } else {
      closeBurger();
       }
    })
})

// //????? Modal window -------------------------------------------->>>>>>>
;(function() {
    var body = document.querySelector('body');
        var closestItemByClass = function(item, className) {
            var node = item;
            while(node) {
                if (node.classList.contains(className)) {
                    return node;
                }
                node = node.parentElement;
            }
            return null;
        };
        var closestAttr = function(item, attr) {
            var node = item;
            while(node) {
                var attrValue = node.getAttribute(attr);
                if (attrValue) {
                    return attrValue;
                }
                node = node.parentElement;
            }
            return null;
        };
  
  
    //! Открытие попапа
    var showPopup = function (target) {
        target.classList.add('active');
    }
  
    //! Закрытие попапа
    var closePopup = function (target) {
        target.classList.remove('active');
    }
   
    body.addEventListener('click', function (e) {
        var target = e.target;
        var popupClass =  closestAttr(target, 'data-popup');
        if (popupClass === null) {
            return;
        }
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);
  
        if (popup) {
            showPopup(popup);
            body.style.overflow = 'hidden'
        } 
    })
    
    //! Закрытие по ESQ
    body.addEventListener('keydown', function (e) {
       if (e.keyCode !==27) {
           return;
       }
       var popup = document.querySelector('.popup.active')
       if (popup)  {
           closePopup(popup);
           body.style.overflow = '';
         
       }
    })
    
    //! Закрытие вне contenta (по крестики и по области)
    body.addEventListener('click', function (e) {
       var target = e.target;
       if (target.classList.contains('popup__btn-close') || target.classList.contains('popup__inner')) {
            var  popup  = closestItemByClass(target, 'popup');
            closePopup(popup);
            body.style.overflow = '';
       }
     })
  }) ();
//   //????? Modal window END -------------------------------------------->>>>>>>
