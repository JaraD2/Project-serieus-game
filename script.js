document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("background");
  const house1 = document.getElementById("house1");
  const house2 = document.getElementById("house2");
  const house3 = document.getElementById("house3");
  const back = document.getElementById("back");
  const next = document.getElementById("next");
  const displayedText = document.getElementById("displayedText");
  const text = document.getElementById("text");
  const character = document.getElementsByClassName("character")[0];
  const characterImg = document.getElementById("character-image");

  let previous = background.getAttribute("src");
  let location = 0;
  var i = 1;

  house1.addEventListener("click", function () {
    background.setAttribute("src", "./img/er.png");
    location = 1;
    i = 1;
    character.style.display = "grid";
    characterImg.setAttribute("src", `./img/character/char${location}.png`);
    hideOrShowHouses("hide");
    textAnimation(location);
  });

  house2.addEventListener("click", function () {
    background.setAttribute("src", "./img/er.png");
    location = 2;
    i = 1;
    character.style.display = "grid";
    characterImg.setAttribute("src", `./img/character/char${location}.png`);
    hideOrShowHouses("hide");
    textAnimation(location);
  });

  house3.addEventListener("click", function () {
    background.setAttribute("src", "./img/er.png");
    location = 3;
    i = 1;
    character.style.display = "grid";
    characterImg.setAttribute("src", `./img/character/char${location}.png`);
    hideOrShowHouses("hide");
    textAnimation(location);
  });
  house4.addEventListener("click", function () {
    background.setAttribute("src", "./img/er.png");
    location = 4;
    i = 1;
    character.style.display = "grid";
    characterImg.setAttribute("src", `./img/character/char${location}.png`);
    hideOrShowHouses("hide");
    textAnimation(location);
  });

  back.addEventListener("click", function () {
    background.setAttribute("src", previous);
    hideOrShowHouses("show");
    displayedText.textContent = "";
    if (location == 0) {
      back.setAttribute("href", "./index.html");
    }
    location = 0;
    character.style.display = "none";
  });

  function hideOrShowHouses(option) {
    const houses = [house1, house2, house3, house4, house5];
    houses.forEach((house) => {
      if (option === "hide") {
        house.classList.add("hidden");
      } else if (option === "show") {
        house.classList.remove("hidden");
      }
    });
  }

  // Declare a variable to store the JSON data so it can be used outside of the fetch function
  let jsonData;
  // Fetch the JSON data from the specified file ("text.json")
  fetch("./text.json")
    // If the fetch is successful, convert the response to JSON
    .then((response) => response.json())
    // If the conversion to JSON is successful, call the function
    .then((data) => {
      // Assign the JSON data to the jsonData variable
      jsonData = data;
      // Log the jsonData to the console (for debugging purposes)
      console.log(jsonData);
    })
    // If there's an error during the fetch, log the error message to the console
    .catch((error) => {
      console.log("Error fetching JSON:", error);
    });

  next.addEventListener("click", function () {
    i++;
    textAnimation(location);
  });

  function textAnimation(currentLocation) {
    // check how many items are in the given character's array
    // if the current index is greater than the number of items in the object, then stop
    // otherwise, continue
    text.style.display = "grid";
    console.log(i);
    const characterData = jsonData[`char${currentLocation}`];
    const characterKeys = Object.keys(characterData);
    const totalItems = characterKeys.length;
    if (i <= totalItems) {
      const text = characterData[i].split(""); // splits the text at every character
      displayedText.textContent = ""; // Clear previous text
      let j = 0;
      var timer = setInterval(function () {
        if (j < text.length) {
          displayedText.textContent += text[j];
          j++;
        } else {
          clearInterval(timer);
        }
      }, 25);
    } else {
      i = 1;
      console.log("End of character's text");
      text.style.display = "none";
    }
  }

  // possible special effects
  function specialEffects(element, effect) {
    element.classList.toggle(effect);
    setTimeout(function () {
      element.classList.toggle(effect);
    }, 1000);
  }
});
