window.onload = function () {

  function setBackgroundColor() {
    let backgroundElement = document.body

    let button = document.querySelector("#background-color")
    button.addEventListener('click', function (e) {
      if (e.target.localName === 'button') {
        backgroundElement.style.backgroundColor = e.target.innerText
        localStorage.setItem("backgroundColor", e.target.innerText)
        console.log(e)
      }
    })
  }

  updateBackground();
  setBackgroundColor();

  function updateBackground() {

    document.body.style.backgroundColor = localStorage.getItem("backgroundColor")
  }




}

