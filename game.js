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
    this.updatePosition();
    btnStart.append(this.paddle);
    
    window.addEventListener('resize', this.updatePosition.bind(this));
  }

}


class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.ball = document.createElement('div');
  }

  updatePosition(){
    this.ball.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  draw(){
    this.ball.classList.add('ball');
    this.updatePosition();
    btnStart.append(this.ball);

    window.addEventListener('resize', this.updatePosition.bind(this));
  }
  
}


class Game{
  constructor(){
    this.paddleJ1 = new Paddle(80, 150);
    this.paddleJ2 = new Paddle(btnStart.clientWidth - 80, 550, 'paddleJ2');
    // this.ball = new Ball();
    this.init();
  }

  init(){
    this.addElements(); // TEST (ici startCountdown)
  }

  addElements(){
    this.paddleJ1.draw();
    this.paddleJ2.draw();
    // this.ball.draw();
  }

  key(){

  }

  startCountdown(){

  }

  gameLoop(){

  }


}

