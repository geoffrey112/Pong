const btnStart = document.getElementsByClassName('buttonStart')[0];
const txtStart = document.querySelector('.buttonStart > span');
const events = ['pointerdown', 'pointerup', 'mouseover', 'mouseout', 'click'];

const btnKey = document.getElementsByClassName('buttonKey')[0];
const containKey = document.getElementById('containerKey');
const iconKey = document.getElementById('iconKey');


// Design start & key button
events.forEach((event) => {
  btnStart.addEventListener(event, (e) => changeColorBtn(e, btnStart, txtStart));
  btnKey.addEventListener(event, function(e){
    changeColorBtn(e, btnKey, containKey, iconKey);
    openKeyButton(e);
  });
});


function changeColorBtn(event, elem, txt, icon){
  // Condition pour key: Si key est fermé
  if(event.type === 'pointerdown'){
    elem.classList.remove('buttonHover', 'buttonSlow');
    elem.classList.add('buttonDown', 'buttonFast');
    txt.style.transform = 'translate(2px, 2px)';
  }else if(event.type === 'pointerup'){
    elem.classList.remove('buttonDown');
    elem.classList.add('buttonHover');
    txt.style.transform = 'translate(0, 0)';
  }else if(event.type === 'mouseover'){
    elem.classList.add('buttonHover', 'buttonSlow');
    elem.classList.remove('buttonFast');
    icon ? icon.style.background = 'center/cover url(icon/arcadeBlack.png)': null;
  }else if(event.type === 'mouseout'){
    elem.classList.remove('buttonHover', 'buttonDown', 'buttonFast');
    elem.classList.add('buttonSlow');
    txt.style.transform = 'translate(0, 0)';
    icon ? icon.style.background = 'center/cover url(icon/arcadeWhite.png)': null;
  }else if(event.type === 'click'){
    // Condition pour start game: Si les inputs ne sont pas vide
    elem.classList.remove('buttonHover');
    txt.style.display = 'none';
  }
}


function openKeyButton(event){
  if(event.type === "click"){
    
  }

}






