document.addEventListener("DOMContentLoaded", function () {
  var btn1 = document.getElementById("buy-course-btn");
  var btn2 = document.getElementById("buy-course-btn-blue");
  var modal1 = document.getElementById("modal");
  var modal2 = document.getElementById("modal-blue");
  var closeBtns = document.querySelectorAll(".close");

  if (btn1 && modal1) {
    btn1.onclick = function() {
      modal1.style.display = "flex";
      modal1.style.justifyContent = "center";
      modal1.style.alignItems = "center";
    };
  }

  if (btn2 && modal2) {
    btn2.onclick = function() {
      modal2.style.display = "flex";
      modal2.style.justifyContent = "center";
      modal2.style.alignItems = "center";
    };
  }

  if (closeBtns && closeBtns.length) {
    closeBtns.forEach(function(closeBtn) {
      closeBtn.onclick = function() {
        var modal = closeBtn.closest(".modal");
        if (modal) {
          modal.style.display = "none";
          // якщо у модалці є чекбокси для меню — скидаємо їх
          modal.querySelectorAll(".check-close").forEach(function(ch){ ch.checked = false; });
        }
      }
    });
  }

  window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
      event.target.querySelectorAll(".check-close").forEach(function(ch){ ch.checked = false; });
    }
  };
});
