// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });


// using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


var menuIcon = document.querySelector('.fa');
var navbar = document.querySelector('.menu');
menuIcon.addEventListener('click', function(){
navbar.classList.add('shownav');
menuIcon.style.display = "none";

console.log(navbar);
})

function closenav(){
  navbar.classList.remove('shownav');
  menuIcon.style.display = "block"
}