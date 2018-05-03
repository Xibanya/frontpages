# frontpages
Compare front pages of various online news sources!  Check it out!  http://xibanya.github.io/frontpages

## How to use it
Click the buttons near the top of the screen to see a 1200x1200 screenshot of the front page of the named news source taken within the last hour.  Click the image or click the button again to dismiss.  Copy and paste the link generated at the bottom of the page to share the currently displayed combination of images.

## How it works
capture.sh is run locally as a scheduled windows task once an hour at about 30 minutes past.  The script first deletes any images in the root directory with the names of the images shown in html, then uses [pageres cli](https://github.com/sindresorhus/pageres-cli) to update the screenshots, and then it pushes the changes to the repo.

## How to suggest changes
Make a pull request here, shoot me an email at manuelamalasanya@gmail.com, or contact me on Twitter [@ManuelaXibanya](http://twitter.com/manuelaxibanya)
