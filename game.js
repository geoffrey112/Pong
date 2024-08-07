class Paddle{
  constructor(x, y, id){
    this.x = x;
    this.y = y;
    this.id = id;
    this.paddle = document.createElement('div');
  }

  updatePosition(){

    if(this.id === 'paddleJ2'){
      this.x = btnStart.clientWidth - 80;
    }    

    this.paddle.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
  
  draw(){
    this.paddle.classList.add('paddle');
    btnStart.append(this.paddle);
    this.updatePosition();
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
    this.paddleJ1 = new Paddle(80, 150);
    this.paddleJ2 = new Paddle(btnStart.clientWidth - 80, 550, 'paddleJ2');
    // this.ball = new Ball();
    this.init();
  }

  init(){
    this.addElements();
    this.startCountdown();
  }

  addElements(){
    this.paddleJ1.draw();
    this.paddleJ2.draw();
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
    let keyZ = false;
    let keyS = false;
    let keyUp = false;
    let keyDown = false;

    document.addEventListener('keydown', (event) => {
      if(event.key === 'z' || event.code === 'KeyW'){
        keyZ = true;
        // setInterval(() => {
        //   console.log(keyZ);
        // },20);

        // window.requestAnimationFrame();
      }
      if(event.key === 's' || event.code === 'KeyS'){
        keyS = true;
      }
      if(event.key === 'ArrowUp' || event.code === 'ArrowUp'){
        keyUp = true;
      }
      if(event.key === 'ArrowDown' || event.code === 'ArrowDown'){
        keyDown = true;
      }
    });

    document.addEventListener('keyup', (event) => {
      if(event.key === 'z' || event.code === 'KeyW'){
        keyZ = false;
      }
      if(event.key === 's' || event.code === 'KeyS'){
        keyS = false;
      }
      if(event.key === 'ArrowUp' || event.code === 'ArrowUp'){
        keyUp = false;
      }
      if(event.key === 'ArrowDown' || event.code === 'ArrowDown'){
        keyDown = false;
      }
    });
  }

  gameLoop(){

  }


}

