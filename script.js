class Pong{
  constructor(){
    this.body = document.getElementById('changeStateButKey');
    this.contentInput = document.getElementById('contentInput');
    this.inputJ1 = document.getElementById('j1');
    this.inputJ2 = document.getElementById('j2');
    this.buttonStart = document.getElementById('buttonStart');
    this.isStartPointDown = false;
    this.startGameStatus = false;
    this.gameBoardHeight;
    this.gameBoardWidth;
    this.scoreJ1 = '0';
    this.scoreJ2 = '0';
    this.goalJ1 = false;
    this.goalJ2 = false;

    this.buttonKey = {
      button: document.getElementById('buttonKey'),
      mainTxt: document.querySelector('#buttonKey > span'),
      iconArcade: document.getElementById('iconArcade'),
      contentJ1: document.createElement('div'),
      contentJ2: document.createElement('div'),
      titleJ1: document.createElement('p'),
      titleJ2: document.createElement('p'),
      keyZ: document.createElement('div'),
      keyS: document.createElement('div'),
      keyUp: document.createElement('div'),
      keyDown: document.createElement('div'),
      isClick: false,
      isPointerDown: false,
      mouseEnter: function(){
        if(this.isClick === false){
          this.button.style.transitionDuration = '0s';
          this.button.style.border = '8px outset white';
          this.button.style.backgroundColor = 'white';
          this.iconArcade.style.transitionDelay = '0s';
          this.iconArcade.style.transitionDuration = '0s';
          this.iconArcade.style.background = "center/cover url('icon/arcadeBlack.png')";
          this.mainTxt.style.fontWeight = 'bold';
          this.mainTxt.style.transitionDelay = '0s';
          this.mainTxt.style.transitionDuration = '0s';
          this.mainTxt.style.color = 'black';
        }
      },
      mouseLeave: function(){
        if(this.isClick === false){
          this.button.style.border = '8px outset white';
          this.button.style.backgroundColor = ' black';
          this.button.style.fontWeight = 'initial';
          this.iconArcade.style.transitionDelay = '0s';
          this.iconArcade.style.transitionDuration = '0s';
          this.iconArcade.style.background = "center/cover url('icon/arcadeWhite.png')";
          this.mainTxt.style.color = 'white';
          this.mainTxt.style.fontWeight = 'initial';
        }
      },
      open: function(){
        if(this.isClick === false){
          this.button.style.border = '8px outset white';
          this.button.style.transitionDuration = '0.4s';
          this.button.style.backgroundColor = 'black';
          this.button.style.cursor = 'default';
          this.mainTxt.style.transitionDuration = '0.4s';
          this.mainTxt.style.visibility = 'hidden';
          this.mainTxt.style.opacity = 0;
          this.iconArcade.style.transitionDuration = '0.4s';
          this.iconArcade.style.visibility = 'hidden';
          this.iconArcade.style.opacity = 0;
          this.isClick = true;
  
          this.button.prepend(this.contentJ1);
          this.button.append(this.contentJ2);
    
          setTimeout(() => {
            this.button.style.transitionDuration = '1s';
            this.button.style.width = '400px';
            this.button.style.height = '300px';
            this.contentJ1.style.height = '250px';
            this.contentJ1.style.width = '150px';
            this.contentJ2.style.height = '250px';
            this.contentJ2.style.width = '150px';
          }, 200);
  
          setTimeout(() => {
            this.contentJ1.style.opacity = 1;
            this.contentJ1.style.visibility = 'visible';
            this.contentJ1.style.animationName = 'animKey';
            this.contentJ1.style.animationDuration = '1s';
            this.contentJ1.style.marginTop = '30px';
            this.contentJ1.prepend(this.titleJ1);
            this.contentJ1.append(this.keyZ);
            this.contentJ1.append(this.keyS);
  
            this.contentJ2.style.opacity = 1;
            this.contentJ2.style.visibility = 'visible';
            this.contentJ2.style.animationName = 'animKey';
            this.contentJ2.style.animationDuration = '1s';
            this.contentJ2.style.marginTop = '30px';
            this.contentJ2.prepend(this.titleJ2);
            this.contentJ2.append(this.keyUp);
            this.contentJ2.append(this.keyDown);
          }, 600);
  
          setTimeout(() => {
            this.keyZ.style.display = 'block';
            this.keyS.style.display = 'block';
            this.keyUp.style.display = 'block';
            this.keyDown.style.display = 'block';
          },800);
        }  
      },
      close: function(){
        if(this.isClick === true){
          this.contentJ1.style.opacity = 0;
          this.contentJ1.style.visibility = 'hidden';
          this.contentJ2.style.opacity = 0;
          this.contentJ2.style.visibility = 'hidden';
          
          setTimeout(() => {
            this.button.style.width = '95px';
            this.button.style.height = '55px';
            this.button.style.cursor = 'pointer';
            this.mainTxt.style.visibility = 'visible';
            this.mainTxt.style.color = 'white';
            this.mainTxt.style.fontWeight = 'initial';
            this.mainTxt.style.transitionDelay = '0.8s';
            this.mainTxt.style.visibility = 'visible';
            this.mainTxt.style.opacity = 1;
            this.iconArcade.style.background = "center/cover url('icon/arcadeWhite.png')";
            this.iconArcade.style.visibility = 'visible';
            this.iconArcade.style.opacity = 1;
            this.iconArcade.style.transitionDelay = '0.8s';
            this.contentJ1.style.opacity = 0;
            this.contentJ1.style.visibility = 'hidden';
            this.contentJ1.style.width = '90px';
            this.contentJ1.style.height = '0';
            this.contentJ1.style.animationName = '';
            this.contentJ2.style.opacity = 0;
            this.contentJ2.style.visibility = 'hidden';
            this.contentJ2.style.width = '90px';
            this.contentJ2.style.height = '0';
            this.contentJ2.style.animationName = '';
            this.keyZ.style.display = 'none';
            this.keyS.style.display = 'none';
            this.keyUp.style.display = 'none';
            this.keyDown.style.display = 'none';
            this.titleJ1.remove();
            this.keyZ.remove();
            this.keyS.remove();
            this.titleJ2.remove();
            this.keyUp.remove();
            this.keyDown.remove();
            this.isClick = false;
          }, 400);
        }
      }
    };

    this.plateJ1 = {
      elem: document.createElement('div'), // Absolute
      id: 'plateJ1',
      opacity: 1,
      visibility: 'visible',
      speed: 10,
      Y: 150,
      X: 80,
      yH: function(){
        const borderBottom = this.Y + this.elem.offsetHeight;
        return borderBottom;
      },
      yMiddle: function(){
        const middleOfPlate = this.Y + this.elem.offsetHeight / 2; 
        return middleOfPlate;
      },
      xW: function(){
        const plateWidth = this.X + this.elem.offsetWidth;
        return plateWidth; 
      }
    };

    this.plateJ2 = {
      elem: document.createElement('div'), // Absolute
      id: 'plateJ2',
      opacity: 1,
      visibility: 'visible',
      speed: 10,
      Y: 400,
      X: null,
      yH: function(){
        const borderBottom = this.Y + this.elem.offsetHeight;
        return borderBottom;
      },
      yMiddle: function(){
        const middleOfPlate = this.Y + this.elem.offsetHeight / 2;
        return middleOfPlate;
      },
      xW: function(){
        const plateWidth = this.X + this.elem.offsetWidth;
        return plateWidth; 
      }
    };

    this.ball = {
      elem: document.createElement('div'), // Absolute
      id: 'ball',
      X: 500, // 500 default (1400)
      Y: 200, // 200 default (700)
      speedX: 8, // 8
      speedY: 8,
      xMiddle: function(){
        const middleOfBall = this.X + this.elem.offsetWidth / 2;
        return middleOfBall;
      },

      yMiddle: function(){
        const middleOfBall = this.Y + this.elem.offsetHeight / 2;
        return middleOfBall;
      },

      xW: function(){
        const ballWidth = this.X + this.elem.offsetWidth;
        return ballWidth;
      },

      yH: function(){
        const ballHeight = this.Y + this.elem.offsetHeight;
        return ballHeight;
      },

      interval: null
    };
  }

  // Resp
  // Bug Button Key
  // Add Score
  // Check requestAnimation (better than setInterval)

  init(){
    this.animTitle();
    this.animInputPlayer();
    this.animButtonStart();
    this.keyButton();
    this.errorMsgInput();
    this.tabButton();
    sessionStorage.setItem('cookieAnim', true);
  }

  animTitle(){
    const title = document.querySelector('h1');

    if(sessionStorage.getItem('cookieAnim') === null){
      title.style.animationName = 'animTitle';
    }
  }

  animInputPlayer(){
    
    if(sessionStorage.getItem('cookieAnim') === null){
      this.contentInput.style.animationName = 'animPlayerBox';
      setTimeout(() => {
        this.contentInput.style.visibility = 'visible';
        this.contentInput.style.opacity = 1;
      }, 2000); 
    }else{
      this.contentInput.style.animationDelay = '0';
      this.contentInput.style.visibility = 'visible';
      this.contentInput.style.opacity = 1;
    }
  }

  animButtonStart(){

    const txtButton = document.querySelector('#buttonStart>span');

    if(sessionStorage.getItem('cookieAnim') === null){
      setTimeout(() => { 
        this.buttonStart.style.animationName = 'animButtonStart';
        this.buttonStart.style.visibility = 'visible';
        this.buttonStart.style.opacity = 1;
      }, 2500);
    }else{
      this.buttonStart.style.visibility = 'visible';
      this.buttonStart.style.opacity = 1;
    }

    this.buttonStart.style.animationDuration = '2s';
    this.buttonStart.style.bottom = '40px';

      
    this.buttonStart.addEventListener('pointerdown', () => {
      if(this.startGameStatus === false){
        this.buttonStart.style.backgroundColor = 'white';
        this.buttonStart.style.color = 'black';
        this.buttonStart.style.borderTop = '8px solid #999999';
        this.buttonStart.style.borderLeft = '8px solid #999999';
        this.buttonStart.style.borderBottom = '8px solid white';
        this.buttonStart.style.borderRight = '8px solid white';
        this.buttonStart.style.fontSize = '38px';
        txtButton.style.marginLeft = '4px';
        this.isStartPointDown = true;
      }
    });

    this.buttonStart.addEventListener('mouseenter', () => {
      if(this.startGameStatus === false){
        this.buttonStart.style.color = 'black';
        this.buttonStart.style.backgroundColor = 'white';
        this.buttonStart.style.borderRight = '8px solid #999999';
        this.buttonStart.style.borderBottom = '8px solid #999999';
        this.buttonStart.style.cursor = 'pointer';
      }
    });

    this.buttonStart.addEventListener('mouseleave', () => {
      if(this.startGameStatus === false){
        this.buttonStart.style.color = 'white';
        this.buttonStart.style.backgroundColor = 'black';
        this.buttonStart.style.borderRight = '8px solid white';
        this.buttonStart.style.borderBottom = '8px solid white';
        this.buttonStart.style.borderLeft = '8px solid white';
        this.buttonStart.style.borderTop = '8px solid white';
        this.buttonStart.style.fontSize = '40px';
        this.isStartPointDown = false;
      }
    });

    this.buttonStart.addEventListener('click', () => {
      if(this.startGameStatus === false && this.inputJ1.value !== '' && this.inputJ2.value !== '' && this.inputJ1.value !== ' ' && this.inputJ2.value !== ' '){
        this.buttonStart.style.backgroundColor = 'black';
        this.buttonStart.style.borderTop = '8px solid white';
        this.buttonStart.style.borderLeft = '8px solid white';
        this.buttonStart.style.cursor = 'inherit';
        this.buttonStart.style.padding = 0;
        this.buttonStart.style.color = 'white';
        this.startGame();
      }else if(this.startGameStatus === false && (this.inputJ1.value === '' && this.inputJ2.value === '') || 
      (this.inputJ1.value === '' || this.inputJ2.value === '') || (this.inputJ1.value === ' ' && this.inputJ2.value === ' ') ||
      (this.inputJ1.value === ' ' || this.inputJ2.value === ' ')){
        this.buttonStart.style.borderRight = '8px solid #999999';
        this.buttonStart.style.borderBottom = '8px solid #999999';
        this.buttonStart.style.borderTop = '8px solid white';
        this.buttonStart.style.borderLeft = '8px solid white';
        this.buttonStart.style.fontSize = '40px';
        txtButton.style.marginLeft = '0';
      }
    });
  }

  keyButton(){

    this.buttonKey.contentJ1.classList.add('contentKeyJ1');
    this.buttonKey.contentJ2.classList.add('contentKeyJ2');
    this.buttonKey.titleJ1.classList.add('titleKeyJ1');
    this.buttonKey.titleJ1.innerText = 'J1';
    this.buttonKey.keyZ.classList.add('keyZ', 'margeLKeyZ');
    this.buttonKey.keyZ.innerText = 'Z';
    this.buttonKey.keyS.classList.add('keyS', 'margeRKeyS');
    this.buttonKey.keyS.innerText = 'S';

    this.buttonKey.titleJ2.classList.add('titleKeyJ2');
    this.buttonKey.titleJ2.innerText = 'J2';
    this.buttonKey.keyUp.classList.add('keyUp');
    this.buttonKey.keyUp.innerText = '↑';
    this.buttonKey.keyDown.classList.add('keyDown');
    this.buttonKey.keyDown.innerText = '↓';

    // Display button
    if(sessionStorage.getItem('cookieAnim') === null){
      setTimeout(() => {
        this.buttonKey.button.style.transitionDuration = '1s';
        this.buttonKey.button.style.opacity = 1;
        this.buttonKey.button.style.visibility = 'visible';
        this.buttonKey.button.style.color = 'white';
      },4000);
    }else{
      this.buttonKey.button.style.visibility = 'visible';
      this.buttonKey.button.style.opacity = 1;
    }
    
    // Change design button
    this.buttonKey.button.addEventListener('mouseenter', () => {
      this.buttonKey.mouseEnter();
    });

    this.buttonKey.button.addEventListener('mouseleave', () => {
      this.buttonKey.mouseLeave();
    });

    this.buttonKey.button.addEventListener('pointerdown', () => {
      if(this.buttonKey.isClick === false){
        this.buttonKey.button.style.border = '8px inset white';
        this.buttonKey.isPointerDown = true;
      }
    });

    this.buttonKey.button.addEventListener('click', () => {
      this.buttonKey.open();
    });

    this.body.addEventListener('click', () => {
      this.buttonKey.close();
      this.buttonKey.isPointerDown = false;
    });

  }

  errorMsgInput(){

    let errorMsg = document.createElement('p');
    errorMsg.id = 'errorMsg';

    const displayErrorMsg = (txt) =>{
      if(errorMsg.innerHTML === ''){
        this.buttonStart.after(errorMsg);
      }
      errorMsg.innerHTML = txt;
      errorMsg.animate([
        { transform: 'rotateZ(5deg)'},
        { transform: 'rotateZ(-5deg)'},
        { transform: 'rotateZ(0deg)'}
      ], {
        duration: 200,
        easing: 'ease-in-out'
      });
    }
    
    this.buttonStart.addEventListener('click', () => {      
      if((this.inputJ1.value === '' && this.inputJ2.value === '') || (this.inputJ1.value === ' ' && this.inputJ2.value === ' ') || 
      (this.inputJ1.value === ' ' && this.inputJ2.value === '') || (this.inputJ1.value === '' && this.inputJ2.value === ' ')){
        displayErrorMsg('Enter username: J1 - J2');
      }else if((this.inputJ1.value === '' || this.inputJ1.value === ' ')){
        displayErrorMsg('Enter username: J1');
      }else if((this.inputJ2.value === '' || this.inputJ2.value === ' ')){
        displayErrorMsg('Enter username: J2');
      }else if(this.inputJ1.value !== '' && this.inputJ2.value !== ''){
        errorMsg.remove();
      }
    });
  }

  tabButton(){

    const txtButton = document.querySelector('#buttonStart>span');

    this.buttonStart.addEventListener('focusin', () => {
        if(this.startGameStatus === false && this.isStartPointDown === false){
          this.buttonStart.style.color = 'black';
          this.buttonStart.style.backgroundColor = 'white';
          this.buttonStart.style.borderRight = '8px solid #999999';
          this.buttonStart.style.borderBottom = '8px solid #999999';
          this.buttonStart.style.cursor = 'pointer';
        }
    });

    this.buttonStart.addEventListener('focusout', () => {
      this.buttonStart.style.color = 'white';
      this.buttonStart.style.backgroundColor = 'black';
      this.buttonStart.style.borderRight = '8px solid white';
      this.buttonStart.style.borderBottom = '8px solid white';
      this.buttonStart.style.borderLeft = '8px solid white';
      this.buttonStart.style.borderTop = '8px solid white';
      this.buttonStart.style.fontSize = '40px';
    });

    // this.buttonStart.addEventListener('keydown', (e) => {
    //   if(e.key === 'Enter'){
    //     if(this.startGameStatus === false && this.inputJ1.value !== '' && this.inputJ2.value !== '' && this.inputJ1.value !== ' ' && this.inputJ2.value !== ' '){
    //       this.buttonStart.style.backgroundColor = 'black';
    //       this.buttonStart.style.borderTop = '8px solid white';
    //       this.buttonStart.style.borderLeft = '8px solid white';
    //       this.buttonStart.style.cursor = 'inherit';
    //       this.buttonStart.style.padding = 0;
    //       this.buttonStart.style.color = 'white';
    //       this.startGame();
    //     }else if(this.startGameStatus === false && (this.inputJ1.value === '' && this.inputJ2.value === '') || 
    //     (this.inputJ1.value === '' || this.inputJ2.value === '') || (this.inputJ1.value === ' ' && this.inputJ2.value === ' ') ||
    //     (this.inputJ1.value === ' ' || this.inputJ2.value === ' ')){
    //       this.buttonStart.style.borderRight = '8px solid #999999';
    //       this.buttonStart.style.borderBottom = '8px solid #999999';
    //       this.buttonStart.style.borderTop = '8px solid white';
    //       this.buttonStart.style.borderLeft = '8px solid white';
    //       this.buttonStart.style.fontSize = '40px';
    //       txtButton.style.marginLeft = '0';
    //     }
    //   }
    // });

    this.buttonKey.button.addEventListener('focusin', () => {
      if(this.buttonKey.isPointerDown === false){
        this.buttonKey.mouseEnter();
      }
    });

    this.buttonKey.button.addEventListener('focusout', () => {
      this.buttonKey.mouseLeave();
    });

    // this.buttonKey.button.addEventListener('keydown', (e) => {
    //   if(e.key === 'Enter'){
    //     this.buttonKey.open();
    //   }
    // });

    // Click body, close button (check buttonKey)
    // body.addEventListener('click', () => {
    //   if(isClickButKey === true){
    //     contentKeyJ1.style.opacity = 0;
    //     contentKeyJ1.style.visibility = 'hidden';
    //     contentKeyJ2.style.opacity = 0;
    //     contentKeyJ2.style.visibility = 'hidden';
        
    //     setTimeout(() => {
    //       this.buttonKey.style.width = '95px';
    //       this.buttonKey.style.height = '55px';
    //       this.buttonKey.style.cursor = 'pointer';
    //       txtButton.style.visibility = 'visible';
    //       txtButton.style.color = 'white';
    //       txtButton.style.fontWeight = 'initial';
    //       txtButton.style.transitionDelay = '0.8s';
    //       txtButton.style.visibility = 'visible';
    //       txtButton.style.opacity = 1;
    //       iconArcade.style.background = "center/cover url('icon/arcadeWhite.png')";
    //       iconArcade.style.visibility = 'visible';
    //       iconArcade.style.opacity = 1;
    //       iconArcade.style.transitionDelay = '0.8s';
    //       contentKeyJ1.style.opacity = 0;
    //       contentKeyJ1.style.visibility = 'hidden';
    //       contentKeyJ1.style.width = '90px';
    //       contentKeyJ1.style.height = '0';
    //       contentKeyJ1.style.animationName = '';
    //       contentKeyJ2.style.opacity = 0;
    //       contentKeyJ2.style.visibility = 'hidden';
    //       contentKeyJ2.style.width = '90px';
    //       contentKeyJ2.style.height = '0';
    //       contentKeyJ2.style.animationName = '';
    //       keyZ.style.display = 'none';
    //       keyS.style.display = 'none';
    //       keyUp.style.display = 'none';
    //       keyDown.style.display = 'none';
    //       titleKeyJ1.remove();
    //       keyZ.remove();
    //       keyS.remove();
    //       titleKeyJ2.remove();
    //       keyUp.remove();
    //       keyDown.remove();
    //       isClickButKey = false;
    //     }, 400);
    //   }
    // });


  }

  startGame(){

    const title = document.querySelector('h1');
    const contentNameScore = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const elemScoreJ1 = document.createElement('span');
    const elemScoreJ2 = document.createElement('span');
    const middleLine = document.createElement('div'); // absolute

    document.querySelector('#buttonStart > span').remove();
    middleLine.id = 'middleLine';
    this.buttonStart.prepend(middleLine);

    p1.id = 'nameJ1';
    p2.id = 'nameJ2';
    p1.innerText = `${this.inputJ1.value}: `;
    p2.innerText = `${this.inputJ2.value}: `;
    elemScoreJ1.id = 'scoreJ1';
    elemScoreJ2.id = 'scoreJ2';
    elemScoreJ1.innerText = `${this.scoreJ1}`;
    elemScoreJ2.innerText = `${this.scoreJ2}`;
    contentNameScore.id = 'contentNameScore';

    this.plateJ1.elem.id = this.plateJ1.id;
    this.plateJ2.elem.id = this.plateJ2.id;

    this.ball.elem.id = this.ball.id;
    this.ball.elem.style.transitionDuration = '0s';
    this.ball.elem.style.transform = `translate(${this.ball.X}px,${this.ball.Y}px)`;
    this.startGameStatus = true;

    // Zoom buttonStart, enlarge size line, add score
    setTimeout(() => {
      this.buttonStart.style.animationName = 'boardZoomStart';

      middleLine.style.transitionDuration = '1.9s';
      middleLine.style.borderLeft = '6px dashed white';

      p1.append(elemScoreJ1);
      p2.append(elemScoreJ2);
      contentNameScore.prepend(p1);
      contentNameScore.append(p2);
      this.buttonStart.prepend(contentNameScore);

    },1000);

    // Remove main screen, display score
    setTimeout(() =>{
      title.remove();
      this.contentInput.remove();
      this.buttonKey.button.remove();

      this.buttonStart.style.top = '0';
      contentNameScore.style.opacity = 0.8;
      this.buttonStart.append(this.plateJ1.elem);
      this.buttonStart.append(this.plateJ2.elem);
      this.buttonStart.append(this.ball.elem);
    },2700);

    // Display plate J1-J2, display ball, exec player-ball-responsive
    setTimeout(() => {
      this.plateJ1.elem.style.opacity = this.plateJ1.opacity;
      this.plateJ1.elem.style.visibility = this.plateJ1.visibility;
      this.plateJ2.elem.style.opacity = this.plateJ2.opacity;
      this.plateJ2.elem.style.visibility = this.plateJ2.visibility;
      this.ball.elem.style.opacity = 1;
      this.buttonStart.style.borderLeft = '0';
      this.buttonStart.style.borderRight = '0';

      // this.countdown();
      this.movePlayers() // (remove after test)
      this.collision()    // (remove after test)
      this.responsive(); // (remove after test)
    }, 3050);
  }

  // countdown(){
  //   const timer = document.createElement('div');
  //   let count = 3;
  //   let interval;

  //   timer.id = 'timerCountdown';
  //   this.buttonStart.append(timer);
    
  //   interval = setInterval(() => {
  //     if(count > 0){
  //       timer.innerText = count;
  //       --count;
  //     }else{
  //       clearInterval(interval);
  //       timer.remove();
  //       this.movePlayers();
  //       this.collision();
  //       this.responsive();
  //     }
  //   }, 1000);
  // }

  responsive(){

    window.addEventListener('resize', () => {
      this.gameBoardHeight = this.buttonStart.clientHeight;
      this.gameBoardWidth = this.buttonStart.clientWidth;

      // Responsive ball when goal (J2)
      if(this.goalJ2 === true){
        this.ball.X = this.gameBoardWidth - this.ball.elem.offsetWidth;
      }
    });

  }

  movePlayers(){

    const body = document.body;
    this.gameBoardHeight = this.buttonStart.clientHeight;
    this.gameBoardWidth = this.buttonStart.clientWidth;
    
    let stateKeyUpJ1 = false;
    let stateKeyDownJ1 = false;
    let remainingSpaceBottomJ1; // Space between plate and border
    let remainingSpaceTopJ1;
    this.plateJ1.elem.style.transitionDuration = '0s';

    let stateKeyUpJ2 = false;
    let stateKeyDownJ2 = false;
    let remainingSpaceTopJ2;
    let remainingSpaceBottomJ2;
    this.plateJ2.elem.style.transitionDuration = '0s';

    body.addEventListener('keydown', (e) => {
      // Player 1
      if(e.key === 'z'){
        stateKeyUpJ1 = true;
      }else if(e.key === 's'){
        stateKeyDownJ1 = true;
      }

      // Player 2
      if(e.key === 'ArrowUp'){
        stateKeyUpJ2 = true;
      }else if(e.key === 'ArrowDown'){
        stateKeyDownJ2 = true;
      }
      
    });

    body.addEventListener('keyup', (e) => {
      if(e.key === 'z'){
        stateKeyUpJ1 = false;
      }else if(e.key === 's'){
        stateKeyDownJ1 = false;
      }

      if(e.key === 'ArrowUp'){
        stateKeyUpJ2 = false;
      }else if(e.key === 'ArrowDown'){
        stateKeyDownJ2 = false;
      }

    });


    setInterval(() => { 
      if(stateKeyUpJ1 === true && remainingSpaceTopJ1 <= this.plateJ1.speed){
        this.plateJ1.Y -= remainingSpaceTopJ1;
        remainingSpaceTopJ1 = 0;
      }else if(stateKeyUpJ1 === true && this.plateJ1.Y > 0){
        this.plateJ1.Y -= this.plateJ1.speed;
        remainingSpaceTopJ1 = Math.abs(0 - this.plateJ1.Y);
        remainingSpaceBottomJ1 = Math.abs(this.plateJ1.yH() - this.gameBoardHeight);
      }else if(stateKeyDownJ1 === true && remainingSpaceBottomJ1 < this.plateJ1.speed){
        this.plateJ1.Y += remainingSpaceBottomJ1;
        remainingSpaceBottomJ1 = 0;
      }else if(stateKeyDownJ1 === true && this.plateJ1.yH() < this.gameBoardHeight){
        this.plateJ1.Y += this.plateJ1.speed;
        remainingSpaceBottomJ1 = Math.abs(this.plateJ1.yH() - this.gameBoardHeight);
        remainingSpaceTopJ1 = Math.abs(0 - this.plateJ1.Y);
      }

      if(stateKeyUpJ2 === true && remainingSpaceTopJ2 <= this.plateJ2.speed){
        this.plateJ2.Y -= remainingSpaceTopJ2;
        remainingSpaceTopJ2 = 0;
      }else if(stateKeyUpJ2 === true && this.plateJ2.Y > 0){
        this.plateJ2.Y -= this.plateJ2.speed;
        remainingSpaceTopJ2 = Math.abs(0 - this.plateJ2.Y);
        remainingSpaceBottomJ2 = Math.abs(this.plateJ2.yH() - this.gameBoardHeight);
      }else if(stateKeyDownJ2 === true && remainingSpaceBottomJ2 < this.plateJ2.speed){
        this.plateJ2.Y += remainingSpaceBottomJ2;
        remainingSpaceBottomJ2 = 0;
      }else if(stateKeyDownJ2 === true && this.plateJ2.yH() < this.gameBoardHeight){
        this.plateJ2.Y += this.plateJ2.speed;
        remainingSpaceBottomJ2 = Math.abs(this.plateJ2.yH() - this.gameBoardHeight);
        remainingSpaceTopJ2 = Math.abs(0 - this.plateJ2.Y);
      }

      this.plateJ2.X = this.gameBoardWidth - 95;
      this.plateJ1.elem.style.transform = `translateX(${this.plateJ1.X}px) translateY(${this.plateJ1.Y}px)`;
      this.plateJ2.elem.style.transform = `translateX(${this.plateJ2.X}px) translateY(${this.plateJ2.Y}px)`;

    },20);
    
  }
  
  collision(){

    // let centerPlateJ2 = this.plateJ2.Y + (this.plateJ2.height / 2);
    // switch(this.ball){} // With centerPlate (divide plate & hit ball on plate with speed - / +)
    
    let goal = false;

    this.ball.interval = setInterval(() => {

      if(this.ball.X > 0 && this.ball.xW() < this.gameBoardWidth && goal === false){

        // Collision ball with border (top - bottom)
        if(this.ball.yH() >= this.gameBoardHeight){
          this.ball.speedY = -8;
        }else if(this.ball.Y <= 0){
          this.ball.speedY = 8;
        }

        // Collision ball with plate J1 - J2 
        if(this.ball.xMiddle() >= this.plateJ2.X && this.ball.xMiddle() <= this.plateJ2.xW() && this.ball.yH() >= this.plateJ2.Y && this.ball.yH() <= this.plateJ2.yMiddle()){ // Top J2
          this.ball.speedY = -8;
        }else if(this.ball.xMiddle() >= this.plateJ2.X && this.ball.xMiddle() <= this.plateJ2.xW() && this.ball.Y <= this.plateJ2.yH() && this.ball.Y >= this.plateJ2.yMiddle()){ // Bottom J2
          this.ball.speedY = 8;
        }else if(this.ball.xW() >= this.plateJ2.X && this.ball.xW() <= this.plateJ2.xW() && (this.ball.yH() - 10) >= this.plateJ2.Y && (this.ball.Y + 10) <= this.plateJ2.yH()){ // Front J2
          this.ball.speedX = -8;
        }else if(this.ball.xMiddle() >= this.plateJ1.X && this.ball.xMiddle() <= this.plateJ1.xW() && this.ball.yH() >= this.plateJ1.Y && this.ball.yH() <= this.plateJ1.yMiddle()){ // Top J1
          this.ball.speedY = -8;
        }else if(this.ball.xMiddle() >= this.plateJ1.X && this.ball.xMiddle() <= this.plateJ1.xW() && this.ball.Y <= this.plateJ1.yH() && this.ball.Y >= this.plateJ1.yMiddle()){ // Bottom J1
          this.ball.speedY = 8;
        }else if(this.ball.X <= this.plateJ1.xW() && this.ball.X >= this.plateJ1.X && (this.ball.yH() - 10) >= this.plateJ1.Y && (this.ball.Y + 10) <= this.plateJ1.yH()){ // Front J1
          this.ball.speedX = 8;
        }
        
        this.ball.X += this.ball.speedX;
        this.ball.Y += this.ball.speedY;

      }else{ // Goal
        goal = true;

        if(this.ball.X <= 0){
          this.goalJ1 = true;
        }

        if(this.ball.xW() >= this.gameBoardWidth){
          this.goalJ2 = true;
        }

      }

      this.ball.elem.style.transform = `translate(${this.ball.X}px, ${this.ball.Y}px)`;

    }, 20);



  }

}


let pong = new Pong();
pong.init();


