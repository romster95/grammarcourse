var acc = document.getElementsByClassName("question-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activated");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } 
    else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}