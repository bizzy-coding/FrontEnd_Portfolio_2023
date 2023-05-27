const readMoreBtn = document.querySelector('a#read-more');
const hiddenText = document.querySelector('.about-hidden');
const readMore = document.querySelector('.more');
const readLess = document.querySelector('.less');


readMoreBtn.addEventListener('click' , function(e) {
    e.preventDefault();
    //if the text is visible
    if(hiddenText.classList.contains("show")){
        hiddenText.classList.remove("show");
        readLess.classList.add("hide");
        readLess.classList.remove("show");
        readMore.classList.remove("hide");
        
    } else { //if the text not is visible
    hiddenText.classList.add("show");
        readLess.classList.add("show");
        readLess.classList.remove("hide");
        readMore.classList.add("hide");
    }

});
