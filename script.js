const btnStart = document.getElementById('buttonStart');
const txtStart = document.querySelector('#buttonStart > span');
const events = ['pointerdown', 'pointerup', 'mouseover', 'mouseout'];

const btnKey = document.getElementById('buttonKey');
const containKey = document.getElementById('containerKey');
const iconKey = document.getElementById('iconKey');


// Design start & key button
events.forEach((event) => {
  btnStart.addEventListener(event, (e) => changeColorBtn(e, btnStart, txtStart));
  btnKey.addEventListener(event, (e) => changeColorBtn(e, btnKey, containKey, iconKey));
});



function changeColorBtn(event, elem, txt, icon){
  if(event.type === 'pointerdown'){
    elem.style.transitionDuration = '0.05s';
    elem.style.borderColor = '#999999 white white #999999';
    elem.style.transform = 'translate(0, 0)';
    elem.style.boxShadow = '0 0 0 0';
    txt.style.transform = 'translate(2px, 2px)';
  }else if(event.type === 'pointerup'){
    elem.style.borderColor = 'white #999999 #999999 white';
    elem.style.transform = 'translate(-2px, -2px)';
    elem.style.boxShadow = '3px 3px 13px 0 #ffffff9e';
    txt.style.transform = 'translate(0, 0)';
  }else if(event.type === 'mouseover'){
    elem.style.borderColor = 'white #999999 #999999 white';
    elem.style.boxShadow = '3px 3px 13px 0 #ffffff9e';
    elem.style.transform = 'translate(-2px, -2px)';
    icon ? icon.style.background = 'center/cover url(icon/arcadeBlack.png)': null;
  }else if(event.type === 'mouseout'){
    elem.style.transitionDuration = '0.5s';
    elem.style.borderColor = 'white';
    elem.style.boxShadow = '0 0 0 0';
    elem.style.transform = 'translate(0, 0)';
    txt.style.transform = 'translate(0, 0)';
    icon ? icon.style.background = 'center/cover url(icon/arcadeWhite.png)': null;
  }
}


