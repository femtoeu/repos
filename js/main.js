var resultWrapper = document.querySelector(".spin-result-wrapper"),
    wheel = document.querySelector(".wheel-img");
function spin() {
    wheel.classList.contains("rotated")
        ? (resultWrapper.style.display = "block")
        : (wheel.classList.add("super-rotation"),
          setTimeout(function () {
              $(".spin-wrapper").slideUp(), $(".order_block").slideDown();
          }, 6500),
          wheel.classList.add("rotated"));
}

