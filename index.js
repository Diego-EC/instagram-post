window.onload = function() {
    console.log("window.onload");
};

var btnLike = document.querySelector("#buttonLikeText");
btnLike.addEventListener('click', () => buttonLike_OnClick() );
var btnBookmark = document.querySelector("#buttonBookmarkText");
btnBookmark.addEventListener('click', () => buttonBookmark_OnClick() );

function buttonLike_OnClick(){
    event.preventDefault(); /*prevent it from submitting a form; it was refreshing the entire web and did not retain the button color.*/ 
    console.log("buttonLike_OnClick");

    let buttonValue = document.getElementById("buttonLikeObject").value;
    if(buttonValue === 'unmarked'){
        document.getElementById("buttonLikeText").classList.add("fas");
        document.getElementById("buttonLikeText").classList.remove('far');
        document.getElementById("buttonLikeText").style.color = 'red';
        document.getElementById("buttonLikeObject").value = 'marked';
    }else{
        document.getElementById("buttonLikeText").classList.add("far");
        document.getElementById("buttonLikeText").classList.remove('fas');
        document.getElementById("buttonLikeText").style.color = 'black';
        document.getElementById("buttonLikeObject").value = 'unmarked';
    }
}

function buttonBookmark_OnClick(){
    event.preventDefault(); /*prevent it from submitting a form; it was refreshing the entire web and did not retain the button color.*/ 
    console.log("buttonBookmark_OnClick");

    let buttonValue = document.getElementById("buttonBookmarkObject").value;
    if(buttonValue === 'unmarked'){
        document.getElementById("buttonBookmarkText").classList.add("fas");
        document.getElementById("buttonBookmarkText").classList.remove('far');
        document.getElementById("buttonBookmarkObject").value = 'marked';
    }else{
        document.getElementById("buttonBookmarkText").classList.add("far");
        document.getElementById("buttonBookmarkText").classList.remove('fas');
        document.getElementById("buttonBookmarkObject").value = 'unmarked';
    }
}