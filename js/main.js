let sliderButtonList = document.querySelectorAll('.slider-button-item');
let topSliderItem = document.querySelectorAll('.top-slider-item');

sliderButtonList.forEach(function(item,index){
    item.addEventListener('click',()=>{
        buttonNonActive();
        sliderItemNone()
        sliderButtonList[index].classList.add('active-slider-button-item');
        topSliderItem[index].classList.toggle('none')
    });
});

function buttonNonActive(){
    sliderButtonList.forEach(function(item,index){
        sliderButtonList[index].classList.remove('active-slider-button-item');
    });
}

function sliderItemNone(){
    topSliderItem.forEach(function(item,index){
        topSliderItem[index].classList.add('none');
    });    
}

/*------Slider------*/ 