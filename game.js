class Paddle{
  constructor(moveY, id){
    this.posX;
    this.posY;
    this.moveY = moveY;
    this.id = id;
    this.paddle = document.createElement('div');
  }

  init(){
    this.draw();
    this.updatePosition();
  }

  draw(){
    this.paddle.classList.add('paddle');
    btnStart.append(this.paddle);
  }

  updatePosition(){
    if(this.id === 'paddleJ1'){
      this.posX = 80;
    }

    if(this.id === 'paddleJ2'){
      this.posX = btnStart.clientWidth - 80;
    }

    this.posY = btnStart.clientHeight / 2 - this.moveY;

    this.paddle.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }
}


// class Ball{
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//     this.ball = document.createElement('div');
//   }

//   updatePosition(){
//     this.ball.style.transform = `translate(${this.x}px, ${this.y}px)`;
//   }

//   draw(){
//     this.ball.classList.add('ball');
//     btnStart.append(this.ball);
//     this.updatePosition();
//     window.addEventListener('resize', this.updatePosition.bind(this));
//   }
  
// }


class Game{
  constructor(){
    this.keyZ = false;
    this.keyS = false;
    this.keyUp = false;
    this.keyDown = false;
    // this.ball = new Ball();
    this.paddleJ1 = new Paddle(100, 'paddleJ1');
    this.paddleJ2 = new Paddle(0, 'paddleJ2');
    this.requestAnimation;
    this.init();
  }

  init(){
    this.paddleJ1.init();
    this.paddleJ2.init();
    this.gameLoop();
    this.startCountdown();
    // this.ball.draw();
  }

  startCountdown(){
    let txtCount = document.createElement('span');
    let countDown = 3;
    let interval;

    setTimeout(() => {
      txtCount.classList.add('countDown');
      txtCount.textContent = countDown;
      btnStart.append(txtCount);

      interval = setInterval(() => {
        if(countDown > 1){
          countDown--;
          txtCount.textContent = countDown;
        }else{
          txtCount.remove();
          clearInterval(interval);
          this.key();
        }
      }, 1000);
    }, 2000);
  }

  key(){
    document.addEventListener('keydown', (event) => {
      // Player 1
      if(event.key === 'z' || event.code === 'KeyW'){
        this.keyZ = true;
      }
      if(event.key === 's' || event.code === 'KeyS'){
        this.keyS = true;
      }
      // Player 2
      if(event.key === 'ArrowUp' || event.code === 'ArrowUp'){
        this.keyUp = true;
      }
      if(event.key === 'ArrowDown' || event.code === 'ArrowDown'){
        this.keyDown = true;
      }
    });

    document.addEventListener('keyup', (event) => {
      if(event.key === 'z' || event.code === 'KeyW'){
        this.keyZ = false;
      }
      if(event.key === 's' || event.code === 'KeyS'){
        this.keyS = false;
      }
      if(event.key === 'ArrowUp' || event.code === 'ArrowUp'){
        this.keyUp = false;
      }
      if(event.key === 'ArrowDown' || event.code === 'ArrowDown'){
        this.keyDown = false;
      }
    });
  }

  move(){
    const speed = 5;

    if(this.keyZ){
      this.paddleJ1.moveY += speed;
    }
    
    if(this.keyS){
      this.paddleJ1.moveY -= speed;
    }

    if(this.keyUp){
      this.paddleJ2.moveY += speed;
    }
    
    if(this.keyDown){
      this.paddleJ2.moveY -= speed;
    }
  }
  
  gameLoop(){
    this.move();
    this.paddleJ1.updatePosition();
    this.paddleJ2.updatePosition();
    
    this.requestAnimation = window.requestAnimationFrame(this.gameLoop.bind(this));
  } 


}
