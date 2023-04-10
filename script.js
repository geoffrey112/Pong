class Pong{
  constructor(){
    this.startGameStatus = false;
    this.contentInput = document.getElementById('contentInput');
    this.buttonStart = document.getElementById('buttonStart');
    this.inputJ1 = document.getElementById('j1');
    this.inputJ2 = document.getElementById('j2');
    this.buttonKey = document.getElementById('buttonKey');
    this.gameBoardHeight;
    this.gameBoardWidth;
    this.scoreJ1 = '0';
    this.scoreJ2 = '0';

    this.plateJ1 = {
      elem: document.createElement('div'), // Absolute
      id: 'plateJ1',
      width:15,
      height:150,
      opacity: 1,
      visibility: 'visible',
      Y: 150,
      borderBottom: function(){
        let borderBottom = this.Y + this.elem.offsetHeight; 
        return borderBottom;
      }
    };

    this.plateJ2 = {
      elem: document.createElement('div'), // Absolute
      id: 'plateJ2',
      width:15,
      height:150,
      opacity: 1,
      visibility: 'visible',
      Y: 400,
      borderBottom: function(){
        let borderBottom = this.Y + this.elem.offsetHeight;
        return borderBottom;
      }
    };

    this.ball = {
      elem: document.createElement('div'), // Absolute
      id: 'ball',
      X: 500,
      xW: function(){
        const ballWidth = this.X + this.elem.offsetWidth;
        return ballWidth;
      },
      Y: 200,
      interval: null
    };
  }

  // Resp
  // Bug Button Key
  // Add Score
  // Move ball
  // Collision
  // Check requestAnimation (better than setInterval)
  // Divide plate (increase / decrease speed)

  init(){
    this.animTitle();
    this.animInputPlayer();
    this.animButtonStart();
    this.keyButton();
    this.errorMsgInput();
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

    const txtButton = document.querySelector('#buttonKey > span');
    const iconArcade = document.getElementById('iconArcade');
    const body = document.getElementById('changeStateButKey');
    const contentKeyJ1 = document.createElement('div');
    const contentKeyJ2 = document.createElement('div');
    const titleKeyJ1 = document.createElement('p');
    const titleKeyJ2 = document.createElement('p');
    const keyZ = document.createElement('div');
    const keyS = document.createElement('div');
    const keyUp = document.createElement('div');
    const keyDown = document.createElement('div');
    let isClickButKey = false;

    contentKeyJ1.classList.add('contentKeyJ1');
    contentKeyJ2.classList.add('contentKeyJ2');
    titleKeyJ1.classList.add('titleKeyJ1');
    titleKeyJ1.innerText = 'J1';
    keyZ.classList.add('keyZ', 'margeLKeyZ');
    keyZ.innerText = 'Z';
    keyS.classList.add('keyS', 'margeRKeyS');
    keyS.innerText = 'S';

    titleKeyJ2.classList.add('titleKeyJ2');
    titleKeyJ2.innerText = 'J2';
    keyUp.classList.add('keyUp');
    keyUp.innerText = '↑';
    keyDown.classList.add('keyDown');
    keyDown.innerText = '↓';

    // Display button
    if(sessionStorage.getItem('cookieAnim') === null){
      setTimeout(() => {
        this.buttonKey.style.transitionDuration = '1s';
        this.buttonKey.style.opacity = 1;
        this.buttonKey.style.visibility = 'visible';
        this.buttonKey.style.color = 'white';
      },4000);
    }else{
      this.buttonKey.style.visibility = 'visible';
      this.buttonKey.style.opacity = 1;
    }
    
    // Change design button (hover)
    this.buttonKey.addEventListener('mouseenter', () => {
      if(isClickButKey === false){
        this.buttonKey.style.transitionDuration = '0s';
        this.buttonKey.style.border = '8px outset white';
        this.buttonKey.style.backgroundColor = 'white';
        iconArcade.style.transitionDelay = '0s';
        iconArcade.style.transitionDuration = '0s';
        iconArcade.style.background = "center/cover url('icon/arcadeBlack.png')";
        txtButton.style.fontWeight = 'bold';
        txtButton.style.transitionDelay = '0s';
        txtButton.style.transitionDuration = '0s';
        txtButton.style.color = 'black';
      }
    });

    this.buttonKey.addEventListener('mouseleave', () => {
      if(isClickButKey === false){
        this.buttonKey.style.border = '8px outset white';
        this.buttonKey.style.backgroundColor = ' black';
        this.buttonKey.style.fontWeight = 'initial';
        iconArcade.style.transitionDelay = '0s';
        iconArcade.style.transitionDuration = '0s';
        iconArcade.style.background = "center/cover url('icon/arcadeWhite.png')";
        txtButton.style.color = 'white';
        txtButton.style.fontWeight = 'initial';
      }
    });

    this.buttonKey.addEventListener('pointerdown', () => {
      if(isClickButKey === false){
        this.buttonKey.style.border = '8px inset white';
      }
    });

    // Open button
    this.buttonKey.addEventListener('click', () => {
      if(isClickButKey === false){
        this.buttonKey.style.border = '8px outset white';
        this.buttonKey.style.transitionDuration = '0.4s';
        this.buttonKey.style.backgroundColor = 'black';
        this.buttonKey.style.cursor = 'default';
        txtButton.style.transitionDuration = '0.4s';
        txtButton.style.visibility = 'hidden';
        txtButton.style.opacity = 0;
        iconArcade.style.transitionDuration = '0.4s';
        iconArcade.style.visibility = 'hidden';
        iconArcade.style.opacity = 0;
        isClickButKey = true;

        this.buttonKey.prepend(contentKeyJ1);
        this.buttonKey.append(contentKeyJ2);
  
        setTimeout(() => {
          this.buttonKey.style.transitionDuration = '1s';
          this.buttonKey.style.width = '400px';
          this.buttonKey.style.height = '300px';
          contentKeyJ1.style.height = '250px';
          contentKeyJ1.style.width = '150px';
          contentKeyJ2.style.height = '250px';
          contentKeyJ2.style.width = '150px';
        }, 200);

        setTimeout(() => {
          contentKeyJ1.style.opacity = 1;
          contentKeyJ1.style.visibility = 'visible';
          contentKeyJ1.style.animationName = 'animKey';
          contentKeyJ1.style.animationDuration = '1s';
          contentKeyJ1.style.marginTop = '30px';
          contentKeyJ1.prepend(titleKeyJ1);
          contentKeyJ1.append(keyZ);
          contentKeyJ1.append(keyS);

          contentKeyJ2.style.opacity = 1;
          contentKeyJ2.style.visibility = 'visible';
          contentKeyJ2.style.animationName = 'animKey';
          contentKeyJ2.style.animationDuration = '1s';
          contentKeyJ2.style.marginTop = '30px';
          contentKeyJ2.prepend(titleKeyJ2);
          contentKeyJ2.append(keyUp);
          contentKeyJ2.append(keyDown);
        }, 600);

        setTimeout(() => {
          keyZ.style.display = 'block';
          keyS.style.display = 'block';
          keyUp.style.display = 'block';
          keyDown.style.display = 'block';
        },800);
      }
    });

    // Close button
    body.addEventListener('click', () => {
      if(isClickButKey === true){
        contentKeyJ1.style.opacity = 0;
        contentKeyJ1.style.visibility = 'hidden';
        contentKeyJ2.style.opacity = 0;
        contentKeyJ2.style.visibility = 'hidden';
        
        setTimeout(() => {
          this.buttonKey.style.width = '95px';
          this.buttonKey.style.height = '55px';
          this.buttonKey.style.cursor = 'pointer';
          txtButton.style.visibility = 'visible';
          txtButton.style.color = 'white';
          txtButton.style.fontWeight = 'initial';
          txtButton.style.transitionDelay = '0.8s';
          txtButton.style.visibility = 'visible';
          txtButton.style.opacity = 1;
          iconArcade.style.background = "center/cover url('icon/arcadeWhite.png')";
          iconArcade.style.visibility = 'visible';
          iconArcade.style.opacity = 1;
          iconArcade.style.transitionDelay = '0.8s';
          contentKeyJ1.style.opacity = 0;
          contentKeyJ1.style.visibility = 'hidden';
          contentKeyJ1.style.width = '90px';
          contentKeyJ1.style.height = '0';
          contentKeyJ1.style.animationName = '';
          contentKeyJ2.style.opacity = 0;
          contentKeyJ2.style.visibility = 'hidden';
          contentKeyJ2.style.width = '90px';
          contentKeyJ2.style.height = '0';
          contentKeyJ2.style.animationName = '';
          keyZ.style.display = 'none';
          keyS.style.display = 'none';
          keyUp.style.display = 'none';
          keyDown.style.display = 'none';
          titleKeyJ1.remove();
          keyZ.remove();
          keyS.remove();
          titleKeyJ2.remove();
          keyUp.remove();
          keyDown.remove();
          isClickButKey = false;
        }, 400);
      }
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
    this.startGameStatus = true;


    // Zoom buttonStart, expand line, add score
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
      this.buttonKey.remove();

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
      // this.countdown();
      this.movePlayers() // (remove after test)
      this.moveBall()    // (remove after test)
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
  //       this.moveBall();
  //       this.responsive();
  //     }
  //   }, 1000);
  // }

  responsive(){

    window.addEventListener('resize', () => {
      this.gameBoardHeight = this.buttonStart.clientHeight;
      this.gameBoardWidth = this.buttonStart.clientWidth;

      // console.log(this.gameBoardHeight);
    });

  }

  movePlayers(){

    const body = document.body;
    this.gameBoardHeight = this.buttonStart.clientHeight;
    this.gameBoardWidth = this.buttonStart.clientWidth;
    
    let stateKeyUpJ1 = false;
    let stateKeyDownJ1 = false;
    this.plateJ1.elem.style.transitionDuration = '0s';

    let stateKeyUpJ2 = false;
    let stateKeyDownJ2 = false;
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
      if(stateKeyUpJ1 === true && this.plateJ1.Y > 0){
        this.plateJ1.Y -= 10;
      }else if(stateKeyDownJ1 === true && this.plateJ1.borderBottom() < this.gameBoardHeight){
        this.plateJ1.Y += 10;
      }

      if(stateKeyUpJ2 === true && this.plateJ2.Y > 0){
        this.plateJ2.Y -= 10;
      }else if(stateKeyDownJ2 === true && this.plateJ2.borderBottom() < this.gameBoardHeight){
        this.plateJ2.Y += 10;
      }

      this.plateJ1.elem.style.transform = `translateY(${this.plateJ1.Y}px)`;
      this.plateJ2.elem.style.transform = `translateY(${this.plateJ2.Y}px)`;

    },20);
    
  }

  moveBall(){
    
    let goal = false;
    this.ball.elem.style.transitionDuration = '0s';

    this.ball.interval = setInterval(() => {
      if(this.ball.X > 0 && this.ball.xW() < this.gameBoardWidth && goal === false){
        this.ball.X += 15;
        this.ball.Y += 8;
      }else{
        goal = true;
        this.ball.X = this.gameBoardWidth - this.ball.elem.offsetWidth;
      }

      this.ball.elem.style.transform = `translate(${this.ball.X}px,${this.ball.Y}px)`;
      
      this.collision();
      
    }, 20);

  }
  
  collision(){
    // Divide plate & hit ball on plate with speed - / + (save paint)
    // let centerPlate = this.plateJ2.height / 2; // 75
    
    // console.log(this.plateJ2.top);

  }

}


let pong = new Pong();
pong.init();


