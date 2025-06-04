# chellesimone

This repository displays the current moon phase using a bit of JavaScript.

## Setup

Simply open `index.html` in any modern web browser. No build steps are necessary.

## How it works

`moon.js` calculates the moon's age by comparing the current date to a known new
moon that occurred on **January 6, 2000**. The age modulo the length of a lunar
month (~29.53 days) is used to determine the phase. The script also calculates
when the next new moon and full moon occur and displays these dates on the
page.
