class Paddle{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  position(){

  }

  draw(){
    const paddle = document.createElement('div');

    paddle.classList.add('paddle');
    paddle.style.transform = `translate(${this.x}px, ${this.y}px)`;
    
    btnStart.append(paddle);
  }

}




// class Ball{
//   constructor(){

//   }


// }


// class Game{
//   constructor(){

//   }


// }

