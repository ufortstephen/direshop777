//Declaering icon variable
let search_icon = document.getElementById('search_icon');
let cancel_search_button = document.getElementById('cancel_search_display')

//Declearing collaspible nav
let mobileNav = document.getElementById('collapsibleNavId')
let links = document.querySelectorAll('.links')
console.log(links);

//Carousel Modal Button
let modatOpenButton = document.getElementById('carousel__modal')


let modalBtn = document.getElementById('modal__btn')
modalBtn.onclick = function() {
    modatOpenButton.classList.toggle('d-none')
}

// arousel Modal Close
let carouselModalCloseBtn = document.getElementById('carousel__btn__close')
carouselModalCloseBtn.onclick = function() {
    modatOpenButton.classList.toggle('d-none')

}




//Creating and aray and pushing search display togglers to it
let search_togglers = []
search_togglers.push(search_icon)
search_togglers.push(cancel_search_button)





//Search display function
search_togglers.forEach((toggler) => {
    toggler.onclick = function() {
        let search_display = document.getElementById('search__display');
        search_display.classList.toggle('d-none')
            // search_display.classList.add('slideOutUp')
        mobileNav.classList.toggle('d-none')

    }

});