class Paddle{
  constructor(posX, posY, moveY, id){
    this.posX = posX;
    this.posY = posY;
    this.moveY = moveY;
    this.id = id;
    this.paddle = document.createElement('div');
  }

  init(){
    this.updatePosition();
    this.draw();
  }

  updatePosition(){

    if(this.id === 'paddleJ2'){
      this.posX = btnStart.clientWidth - 80;
    }

    this.posY = btnStart.clientHeight / 2 - this.moveY;

    this.paddle.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }
  
  draw(){
    this.paddle.classList.add('paddle');
    btnStart.append(this.paddle);
    window.addEventListener('resize', this.updatePosition.bind(this));
    
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
    this.moveJ1Y = 100;
    this.moveJ2Y = 0;
    this.keyZ = false;
    this.keyS = false;
    this.keyUp = false;
    this.keyDown = false;
    // this.ball = new Ball();
    this.paddleJ1 = new Paddle(80, btnStart.clientHeight / 2, this.moveJ1Y, 'paddleJ1');
    this.paddleJ2 = new Paddle(btnStart.clientWidth - 80, btnStart.clientHeight / 2 - this.moveJ2Y, null, 'paddleJ2');
    this.init();
  }

  init(){
    this.paddleJ1.init();
    this.paddleJ2.init();
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
          this.gameLoop();
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

   
    
    if(this.keyZ){
      // this.moveJ1Y = ++this.moveJ1Y;
      // this.paddleJ1.posY = btnStart.clientHeight / 2 - this.moveJ1Y;
      // console.log(this.paddleJ1.posY);
      
      
    }

    if(this.keyS){
      this.moveJ1Y = ++this.moveJ1Y;
      console.log(this.moveJ1Y);
    }

    if(this.keyUp){
      // this.moveJ1Y = --this.moveJ2Y;
      console.log(this.moveJ2Y);
    }
    
    if(this.keyDown){
      // this.moveJ1Y = ++this.moveJ2Y;
      console.log(this.moveJ2Y);
    }

  }
  
  gameLoop(){
    this.move();
    this.paddleJ1.updatePosition();
    // this.paddleJ2.updatePosition();

    window.requestAnimationFrame(this.gameLoop.bind(this));
  }


}
