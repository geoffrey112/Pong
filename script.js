const btnStart = document.getElementsByClassName('buttonStart')[0];
const txtStart = document.querySelector('.buttonStart > span');
const events = ['pointerdown', 'pointerup', 'mouseover', 'mouseout', 'click'];
// let isGameStart = false;

const btnKey = document.getElementsByClassName('buttonKey')[0];
const containKey = document.getElementById('containerKey');
const iconKey = document.getElementById('iconKey');
let isKeyOpen = false;
let isKeyMoving = false;

const inputJ1 = document.getElementsByName('j1')[0];
const inputJ2 = document.getElementsByName('j2')[0];


// Design startButton & keyButton
events.forEach((event) => {
  btnStart.addEventListener(event, function(e){
    changeColorBtn(e, btnStart, txtStart);
  });
  
  btnKey.addEventListener(event, function(e){
    changeColorBtn(e, btnKey, containKey, iconKey);
  });
});

// Open / Close KeyButton
btnKey.addEventListener('click', openKeyBtn);

document.addEventListener('click', function(e){
  closeKeyBtn(e);
});

// Disable more than 2 spaces
inputJ1.addEventListener('input', statusSpace);
inputJ2.addEventListener('input', statusSpace);

// Start Game
btnStart.addEventListener('click', function(){
  checkInput();
});



function changeColorBtn(event, elem, txt, icon){

  if(isKeyOpen === false && isKeyMoving === false){
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
      containKey.classList.remove('containKeyIn');
    }else if(event.type === 'mouseout'){
      elem.classList.remove('buttonHover', 'buttonDown', 'buttonFast');
      elem.classList.add('buttonSlow');
      txt.style.transform = 'translate(0, 0)';
      icon ? icon.style.background = 'center/cover url(icon/arcadeWhite.png)': null;
      containKey.classList.remove('containKeyIn');
    }else if(event.type === 'click'){
      icon ? icon.style.background = 'center/cover url(icon/arcadeWhite.png)': null;
    }

  }

}


function openKeyBtn(){

  if(isKeyOpen === false){
    const containCardKey = document.createElement('div');
    const cardKey1 = document.createElement('div');
    const cardKey2 = document.createElement('div');
    const titleJ1 = document.createElement('h2');
    const titleJ2 = document.createElement('h2');
    const keyZ = document.createElement('div');
    const keyS = document.createElement('div');
    const keyUp = document.createElement('div');
    const keyDown = document.createElement('div');
  
  
    btnKey.classList.remove('buttonHover', 'buttonFast');
    setTimeout(() => { containKey.classList.add('containKeyOut'); }, 10); // Short delay to work
  
    btnKey.classList.remove('closeKey');
    btnKey.classList.add('openKey');
    containCardKey.classList.add('containCardKey');
    setTimeout(() => { containCardKey.classList.add('cardKeyIn'); }, 10); // Short delay to work
    cardKey1.classList.add('cardKey1');
    cardKey2.classList.add('cardKey2');
    titleJ1.classList.add('titleKeyJ1');
    titleJ2.classList.add('titleKeyJ2');
    keyZ.classList.add('keyZ', 'margeKeyZ');
    keyS.classList.add('keyS', 'margeKeyS');
    keyUp.classList.add('keyUp');
    keyDown.classList.add('keyDown');
    titleJ1.textContent = "J1";
    titleJ2.textContent = "J2";
    keyZ.textContent = "Z";
    keyS.textContent = "S";
    keyUp.textContent = "↑";
    keyDown.textContent = "↓";
    btnKey.append(containCardKey);
    containCardKey.append(cardKey1, cardKey2);
    cardKey1.append(titleJ1, keyZ, keyS);
    cardKey2.append(titleJ2, keyUp, keyDown);
    isKeyOpen = true;
    isKeyMoving = true;
  }

}


function closeKeyBtn(event){

  const containCardKey = document.getElementsByClassName('containCardKey')[0];

  if(isKeyOpen === true){
    if(!event.target.closest('div.buttonKey')){
      containCardKey.classList.add('cardKeyOut');
      containKey.classList.replace('containKeyOut', 'containKeyIn');
      isKeyMoving = true;

      setTimeout(() => {
        containCardKey.remove();
        btnKey.classList.replace('openKey', 'closeKey');
      },500);
      setTimeout(() => {
        btnKey.classList.remove('closeKey');
        isKeyMoving = false;
      }, 1500);

      isKeyOpen = false;

    }
  }

}


function statusSpace(event){

  const findSpace = /\s{2}/g;

  if(findSpace.test(event.target.value)){
    event.target.value = event.target.value.replace(findSpace, ' ');
  }
}


function checkInput(){

  const errorMsg = document.getElementById('errorMsg');

  const animErrorMsg = () => {
    errorMsg.animate([
      {transform: 'rotateZ(5deg)'},
      {transform: 'rotateZ(-5deg)'},
      {transform: 'rotateZ(0deg)'}
    ], {
      duration: 200,
      easing: 'ease-in-out'
    });
  }


  if((inputJ1.value === '' || inputJ1.value === ' ') && (inputJ2.value === '' || inputJ2.value === ' ')){
    errorMsg.textContent = "Enter player 1 & 2";
    animErrorMsg();
  }else if(inputJ1.value === '' || inputJ1.value === ' '){
    errorMsg.textContent = "Enter player 1";
    animErrorMsg();
  }else if(inputJ2.value === '' || inputJ2.value === ' '){
    errorMsg.textContent = "Enter player 2";
    animErrorMsg();
  }else if(inputJ1.value !== '' || inputJ1.value !== ' ' && inputJ2.value !== '' || inputJ2.value !== ' '){
    errorMsg.textContent = "";
  }
  
};



