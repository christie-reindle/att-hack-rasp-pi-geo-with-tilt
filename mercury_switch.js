var wpi = require('wiring-pi');

var MPin = 0;

function main() {
	if (wpi.wiringPiSetup() === -1) {
		console.log("setup wiringPi failed!");
		return;
	}
	wpi.pinMode(MPin, wpi.INPUT);

	while(1) {
		if (wpi.digitalRead(MPin) === 0) {
			if (wpi.digitalRead(MPin)) {
				console.log("Mercury Tilt!\n");
			}
		} else if (wpi.digitalRead(MPin) === 1) {
			if (wpi.digitalRead(MPin) === 1) {
				while(!wpi.digitalRead(MPin));
			}
		}
	}
	return;
}

main();
