document.addEventListener('DOMContentLoaded', function () {
  const background = document.getElementById('background');
  const house1 = document.getElementById('house1');
  const house2 = document.getElementById('house2');
  const house3 = document.getElementById('house3');
  const back = document.getElementById('back');
  let previous = background.getAttribute('src');
  let location = 0;
  const nextText = document.getElementById('nextText');

  house1.addEventListener('click', function() {
    previous = background.getAttribute('src');
    background.setAttribute('src', './img/er.png');
    location = 1;
    hideOrShowHouses('hide');
    textAnimation(location);
  });

  house2.addEventListener('click', function() {
    location = 2;
    textAnimation(location);
  });

  house3.addEventListener('click', function() {
    location = 3;
    textAnimation(location);
  });

  back.addEventListener('click', function() {
    background.setAttribute('src', previous);
    hideOrShowHouses('show');
  });

  function hideOrShowHouses(option) {
    const houses = [house1, house2, house3];
    houses.forEach(house => {
      if (option === 'hide') {
        house.classList.add('hidden');
      } else if (option === 'show') {
        house.classList.remove('hidden');
      }
    });
  }

  let jsonData;
  fetch('./text.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      console.log(jsonData);
    })
    .catch(error => {
      console.log('Error fetching JSON:', error);
    });

  function textAnimation(currentLocation) {
    if (jsonData) {
      const text = jsonData[`char${currentLocation}`][`${location}`].split('');
      const displayedText = document.getElementById('displayedText');
      displayedText.textContent = ''; // Clear previous text
      let i = 0;
      const timer = setInterval(function () {
        if (i < text.length) {
          displayedText.textContent += text[i];
          console.log(text[i]);
          i++;
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
