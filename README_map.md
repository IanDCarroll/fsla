![alt text](https://raw.githubusercontent.com/maptimeLA/git_your_map_here/master/images/gityourmaps.jpg "Cover")

# Git your map right here! on github!

An intro to make a simple map, host it locally, and use git terminal to update one’s repo. Help young Regen (photographed above) learn to make a map!

###Presentations:
[Simple map presentation](http://maptimela.github.io/git_your_map_here/index_slide.html)

[Get Git Got presentation](http://slides.com/patriciarealini/get-git-got#/)

### Check out the map:

Map: http://maptimela.github.io/git_your_map_here/
Data Source: [City of LA](https://data.lacity.org/A-Well-Run-City/Neighborhood-Council-Office-Location-Map/nnrh-gpbn) - Neighborhood Council Office Location Map (Updated May 30, 2014)

The data was converted from Socrata’s `json` type to `geoJSON` with [socrata-geojson](https://github.com/mvexel/socrata-geojson)

### Steps:
0. Open the Terminal/Powershell app and a web browser. Get a GitHub account and fork the repository.
1. Move into that specific folder: `cd git_your_map_here` (Pro tip: Remember to use tab completion - click tab and then enter) and click Enter
2. Run a local server by typing into Terminal/Powershell: `python -m SimpleHTTPServer 8000` and click Enter. This runs the Leaflet-powered map with marker and boundary data from two `.geojson` files in the `\data\` folder. 
3. Open your browser (Chrome, Firefox preferred) and open `http://localhost:8000`
4. To open on your phone, find your IP address and open `http://[YOUR-IP-ADDRESS]:8000/` in your phone’s mobile browser
5. To see what is pushed up to the `gh-pages` branch, open `http://maptimela.github.io/git_your_map_here/`
6. Stand up with your laptop and say “Git your map right here!”


### Other steps to consider
* Geocoding with [QGIS](http://www.qgis.org/en/site/) (an open-source GUI GIS app) or command line geoprocessing tools


### Tools needed (We will have these files ready to distribute during the meetup)
* [Python](https://www.python.org/), Please download version 2.7. If you have issues, have no fear, we will help you the day of.
* Install Git! http://git-scm.com/download
* Text Editor. [Sublime Text](http://www.sublimetext.com/) is awesome & free! [Atom](http://atom.io/) is free too.
* [QGIS](http://www.qgis.org/en/site/), an open source Geographic Information System
