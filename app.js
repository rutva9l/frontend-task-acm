const comments = document.querySelectorAll(".comment");
const fade = document.querySelectorAll(".fade");
const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".card");
const inputs = document.querySelectorAll(".commentInput");
const commentSubmit = document.querySelectorAll(".Submit")
const content1 = document.querySelectorAll(".content1");
const displayComment = document.querySelectorAll(".displayComment");
const heading = document.querySelectorAll(".heading");
const commentText = document.querySelectorAll(".commentText");
const commentProfile = document.querySelectorAll(".commentProfile");

window.onload = function () {
    assignIds(); //to identify which card the comment is meant for
}

function assignIds() {
    for (var i = 0; i < 4; ++i) {
        comments[i].id = i; //to identify which card the comment is meant for
    }
}

function takeComment() {
    let evt = window.event;
    let Target = evt.target;
    let num = Target.id; //to identify which card the comment is meant for
    comments[num].style.display = "none";

    //displaying the comment input box
    inputs[num].style.display = "block";
    commentSubmit[num].style.display = "block";

    //displaying the comment itself on clicking submit
    commentSubmit[num].addEventListener("click", function () {
        console.log(inputs[num].value);
        inputs[num].style.display = "none";
        commentSubmit[num].style.display = "none";
        commentText[num].innerHTML = inputs[num].value;
        content1[num].style.display = "block";
        cards[num].style.paddingBottom = "60px";
    })
}

cardContainer.addEventListener("click", function (e) {
    let Target = e.target;

    //revealing text on click
    if (Target.classList[0] = "fade") {
        let num1 = Target.classList[1];
        fade[num1].classList.toggle("fadeOut");
    }
})
