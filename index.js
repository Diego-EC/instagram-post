const UNMARKED = "unmarked";
const MARKED = "marked";

window.onload = function() {
    console.log("window.onload");
};

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var btnLike = document.querySelector("#buttonLikeText");
    btnLike.addEventListener('click', () => changeLikeStatus() );
    var btnBookmark = document.querySelector("#buttonBookmarkText");
    btnBookmark.addEventListener('click', () => changeBookmarkStatus() );
    var btnMenu = document.querySelector("#buttonVerticalMenuText");
    btnMenu.addEventListener('click', () => openCloseMenu() );
});

function changeLikeStatus(){
    console.log("changeLikeStatus");
    event.preventDefault(); /*prevent it from submitting a form; it was refreshing the entire web and did not retain the button color.*/ 

    // podemos hacer algo como let div = document.getElementById()
    // y luego usar div.classList y div.value etc etc

    let buttonObject = document.getElementById("buttonLikeObject");
    let buttonText = document.getElementById("buttonLikeText");
    if(buttonObject.value === UNMARKED){
        buttonText.classList.add("fas");
        buttonText.classList.remove('far');
        buttonText.style.color = 'red';
        buttonObject.value = MARKED;
    }else{
        buttonText.classList.add("far");
        buttonText.classList.remove('fas');
        buttonText.style.color = 'black';
        buttonObject.value = UNMARKED;
    }
}

function changeBookmarkStatus(){
    console.log("changeBookmarkStatus");
    event.preventDefault(); /*prevent it from submitting a form; it was refreshing the entire web and did not retain the button color.*/ 

    let buttonObject = document.getElementById("buttonBookmarkObject");
    let buttonText = document.getElementById("buttonBookmarkText");
    if(buttonObject.value === UNMARKED){
        buttonText.classList.add("fas");
        buttonText.classList.remove('far');
        buttonObject.value = MARKED;
    }else{
        buttonText.classList.add("far");
        buttonText.classList.remove('fas');
        buttonObject.value = UNMARKED;
    }
}

function openCloseMenu(){
    console.log("openCloseMenu");
    event.preventDefault(); /*prevent it from submitting a form; it was refreshing the entire web and did not retain the button color.*/ 
        
    let menuDisplay = document.getElementById("verticalMenu");
    let buttonValue = document.getElementById("buttonVerticalMenuObject");
    if(buttonValue.value === UNMARKED){
        buttonValue.value = MARKED;
        menuDisplay.style.display = "block";
    }else{
        buttonValue.value = UNMARKED;
        menuDisplay.style.display = "none";
    }
}