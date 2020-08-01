window.onload = function() {
    console.log("window.onload");
    //document.getElementById("excuse").innerHTML = "LOL";
};

var btnLike = document.querySelector("#buttonLikeText");
btnLike.addEventListener('click', () => buttonLike_OnClick() );

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