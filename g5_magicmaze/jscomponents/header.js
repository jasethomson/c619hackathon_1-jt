
class Header {
  constructor(togglePlayer){
    this.pawns = [];
    this.greenpawn;
  }


  // function timer(){
  //   var timer = new Timer();
  //   timer.start({ countdown: true, startValues: { seconds: 180 } });
  //   $('#countdownExample .values').html(timer.getTimeValues().toString());
  //   timer.addEventListener('secondsUpdated', function (e) {
  //     $('#countdownExample .values').html(timer.getTimeValues().toString());
  //   });
  //   timer.addEventListener('targetAchieved', function (e) {
  //     $('#countdownExample .values').html('KABOOM!!');
  //   });
  // }


}


// class Timer {
//   constructor(){
//     this.counter = 3;
//     this.timer = this.test;
//     this.test = this.test.bind(this);
//     this.alertMessage = this.alertMessage.bind(this);
//   }

// alertMessage() {
//   $("#timer").text(this.counter + " seconds left hello mike");
//   this.counter -= 1;
//   if (this.counter === 0) {
//     // clearInterval(this.timer);
//     $("#timer").text("Did you win?");
//   } else {
//     this.test();
//   }
// }

// test() {
//   setTimeout(this.alertMessage, 1000);
// }

// }
