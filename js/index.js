const time = document.getElementById('time');
const buttonPlay = document.getElementById('button-play');
const buttonPause = document.getElementById('button-pause');
let interval;
let seconds = 0;
let secundarySeconds = 0;
let minutes = 0;

const activedTimer = () => {
	seconds++;
	if (seconds > 9) {
		seconds = 0;
		secundarySeconds++;
	}
	if (secundarySeconds > 5) {
		secundarySeconds = 0;
		minutes++;
	}
	time.innerHTML = `${minutes}:${secundarySeconds}${seconds}`;
};

buttonPlay.onclick = () => {
	interval = setInterval(activedTimer, 1000);
};
buttonPause.onclick = () => {
	clearInterval(interval);
};
/* addEventListener('keypress', (e) => {
	if (e.code === 'Space') {
		console.log(e.code === 'Space' ? "yes" : "no");
		clearInterval(interval);
	}
});
 */
