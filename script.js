document.addEventListener('DOMContentLoaded', function () {
  const background = document.getElementById('background');
  const house1 = document.getElementById('house1');
  const house2 = document.getElementById('house2');
  const house3 = document.getElementById('house3');
  const houses = [house1, house2, house3];
  const back = document.getElementById('back');
  var previous = background.getAttribute('src');

  house1.addEventListener('click', function() {
      console.log('house1');
      previous = background.getAttribute('src');
      console.log(previous);
      background.setAttribute('src', './img/er.png');
      hideOrShowHouses('hide');
  });
  house2.addEventListener('click', function() {
      console.log('house2');
  });
  house3.addEventListener('click', function() {
      console.log('house3');
  });

  back.addEventListener('click', function() {
      console.log('back');
      background.setAttribute('src', previous);
      hideOrShowHouses('show');
  });



  function hideOrShowHouses(option) {
    if (option === 'hide') {
      for (let i = 0; i < houses.length; i++) {
        houses[i].classList.add('hidden');
        console.log('hidden');
        console.log(houses[i]);
      }
    } else if (option === 'show') {
      for (let i = 0; i < houses.length; i++) {
        houses[i].classList.remove('hidden');
        console.log('show');
      }
    }}
});







  
    // function specialEffectsSwitch(i) {
    //   switch (i) {
    //     case 1:
    //       console.log('case 1');
    //       break;
    //     case 2:
    //       console.log('case 2');
    //       specialEffects(body, 'shake');
    //       break;
    //     case 3:
    //       console.log('case 3');
    //       break;
    //     case 4:
    //       console.log('case 4');
    //       break;
    //     default:
    //       console.log('default');
    //   }
    // }
  
  
    function textAnimation(currentImage) {
      const text = jsonData[currentImage].text.split('');
      console.log(text);
      console.log(text.length);
      var running = false;
      let i = 0;
      const timer = setInterval(function () {
        if (i < text.length) {
          displayedText.textContent += text[i];
          i++;
        }
        
      }, 75);
    }
  
    
    function specialEffects(element, effect) {
      element.classList.toggle(effect);
      setTimeout(function () {
        element.classList.toggle(effect);
      }, 1000);
    }
  