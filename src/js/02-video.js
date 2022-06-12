import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const player = new Player(iframe);
let time = localStorage.getItem('LOCALSTORAGE_KEY')
player
   .setCurrentTime(Number(time))
   .then(function (seconds) {
      // seconds = the actual time that the player seeked to
   })
   .catch(function (error) {
      switch (error.name) {
         case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

         default:
            // some other error occurred
            break;
      }
   });
player.on('timeupdate', throttle(getSecondTime, 1000));

function getSecondTime(data) {
   localStorage.setItem('LOCALSTORAGE_KEY', data.seconds);
}
