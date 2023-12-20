document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("background");
  const house1 = document.getElementById("house1");
  const house2 = document.getElementById("house2");
  const house3 = document.getElementById("house3");
  const back = document.getElementById("back");
  let previous = background.getAttribute("src");
  let location = 0;
  const next = document.getElementById("next");
  const displayedText = document.getElementById("displayedText");
  const text = document.getElementById("text");

  house1.addEventListener("click", function () {
    previous = background.getAttribute("src");
    background.setAttribute("src", "./img/er.png");
    location = 1;
    i = 1;
    hideOrShowHouses("hide");
    textAnimation(location);
  });

  house2.addEventListener("click", function () {
    location = 2;
    i = 1;
    textAnimation(location);
  });

  house3.addEventListener("click", function () {
    location = 3;
    i = 1;
    textAnimation(location);
  });

  back.addEventListener("click", function () {
    background.setAttribute("src", previous);
    hideOrShowHouses("show");
    displayedText.textContent = "";
    if (location == 0) {
      back.setAttribute("href", "./index.html");

    } else {
    }
    location = 0;
  });

  function hideOrShowHouses(option) {
    const houses = [house1, house2, house3];
    houses.forEach((house) => {
      if (option === "hide") {
        house.classList.add("hidden");
      } else if (option === "show") {
        house.classList.remove("hidden");
      }
    });
  }

  let jsonData;
  fetch("./text.json")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
      console.log(jsonData);
    })
    .catch((error) => {
      console.log("Error fetching JSON:", error);
    });

  var i = 1;
  next.addEventListener("click", function () {
    console.log(jsonData[`char${location}`][`${i}`]);
    i++;
    if (i == 3) {
      // needs to be the number of text lines +1
      // if all text lines would be equal to 3, then this would be 4
      console.log("end of text");
      text.style.display = "none";
    }
    textAnimation(location);
  });
  function textAnimation(currentLocation) {
    console.log(jsonData);
    if (jsonData) {
      const text = jsonData[`char${currentLocation}`][`${i}`].split("");
      displayedText.textContent = ""; // Clear previous text
      let j = 0;
      var timer = setInterval(function () {
        if (j < text.length) {
          displayedText.textContent += text[j];
          j++;
        } else {
          clearInterval(timer);
        }
      }, 75);
    }
  }
  function specialEffects(element, effect) {
    element.classList.toggle(effect);
    setTimeout(function () {
      element.classList.toggle(effect);
    }, 1000);
  }
});
