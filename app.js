
var lights = document.querySelector('#lights > div'),
counter = 0,
timers = [5000, 2000, 7000];

var start = setTimeout(()=>{
  traffic();
}, 5000)

window.onload(start);

function traffic(){
  for (i=0 ; i < lights.length; i++){
    lights[i].classList.remove('on')
  }
  lights[counter].classList.add('on');
  setTimeout(traffic, timers[counter]);
  counter++;
  if (counter === 3){
    counter = 3
  }
}
