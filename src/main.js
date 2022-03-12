import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Pigdice from './Pigdice.js';

let pigDice = new PigDice();

// function for dispaly the score
function dispalyScore(){
    $("#player-1score").text(pigDice.player1);
    $("#player-2score").text(pigDice.player2);
}
