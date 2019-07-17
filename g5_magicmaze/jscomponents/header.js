
class Header(){
  constructor(togglePlayer, ){
    this.pawns = [];
    this.greenpawn =;
  }

  function createPlayer(){
    var newPlayer = new Player;

  }
  function togglesPlayer(){

  }

  function timer(){
    var timer = new Timer();
    timer.start({ countdown: true, startValues: { seconds: 180 } });
    $('#countdownExample .values').html(timer.getTimeValues().toString());
    timer.addEventListener('secondsUpdated', function (e) {
      $('#countdownExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('targetAchieved', function (e) {
      $('#countdownExample .values').html('KABOOM!!');
    });
  }

  function getToTheExits(){

  }
}
