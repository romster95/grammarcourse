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

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.header-content input');
  var overlay = document.querySelector('.overlay');

  menuToggle.addEventListener('change', function() {
      if (this.checked) {
          document.body.style.overflow = 'hidden'; 
          overlay.style.display = 'block';
      } else {
          document.body.style.overflow = '';
          overlay.style.display = 'none';
      }
  });

  overlay.addEventListener('click', function() {
      menuToggle.checked = false;
      document.body.style.overflow = '';
      overlay.style.display = 'none';
  });
});

if (window.innerWidth <= 960) {
  document.getElementById('last-article-text').start = 3;
  document.getElementById('third-article-text').start = 4;
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.my-button');

  buttons.forEach(function (button) {
      button.addEventListener('touchstart', function () {
          this.classList.add('active');
      });

      button.addEventListener('touchend', function () {
          this.classList.remove('active');
      });
  });
});