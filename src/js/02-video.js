import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const vimeo = document.getElementById('vimeo-player');
const player = new Player(vimeo);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
const parsedData = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(parsedData);

player
  .setCurrentTime(parsedData)
  .then(function (seconds) {})
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
