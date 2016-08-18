# __The FullStack LA Local Meetup Map Page__

### What is it good for?

This is a hub for information about LA Meetups so that people can see what's up, learn and get involved. It's also a place where organizers might collaborate, but that's *waaay* in the future. Right now, it's a map.

### How are we doing it?

We will be scrumming this project. __Scrum__ is an __Agile__ framework, one of a series of dove-tailing practices derrived from on-the-job experience in development to make the creation process collaborative, organized, iterative, changeable, and overall fun. Another important Agile methodology we use is __Extreme Programming.__

- Blog post introducing Scrum to come... watch this space.

Inside the Scrum framework, we will be using __Pair Programming__, a practice of Extreme Programming where there are two developers working together on a single issue with a single computer. Pair Programming is great fun, produces results faster than two individual developers working on two seperate issues, and is a high-powered way to learn more about software development.

<a href="http://developingian.com/pairing-on-a-map-page/">Here is a blog article</a> explaining the story of the meetup map page's development, and an experience of pair programming so you can get a taste of what it is like if you are new to it.

### How's it put together?

The page is HTML, CSS, and JavaScript. For the front-end, this triad of languages is what you need to have a page. Sure, you can have a page with just HTML, but it's boring and ugly.
- __HTML__ - The Bones
- __CSS__ - The Skin
- __JavaScript__ - The Muscle

The JavaScript is imbedded in index.html along with some map-specific CSS.
It is forked from a GitHub repo: <a href="https://github.com/maptimeLA/git_your_map_here">MaptimeLA</a>

The index.html file also carries links to the style.css and any other resources, such as map tiles, and geoJSON data for pointing out the locations of the meetups.

__GeoJSON__ is just a JSON file with lattitude and longitude values. 
__JSON__ is a data format that is created out of JavaScript Objects; associated key:value pairs from which our JavaScript map program (embedded in the index.html file) gets data to display on our page. Our geoJSON file is found in the data folder.

### What needs to be done next?

Please View the issues for stories to work on.
If you want to propose an improvement, identify a bug, or otherwise suggest something to improve, please open up a new issue.
Or for the complete Product Backlog <a href+"https://www.pivotaltracker.com/n/projects/1787469">check out our Pivotal Tracker</a>

We also need to populate the product backlog, and identify high value stories to work on next sprint.

### Getting Setup (For the new):

Follow these simple steps to get this page running locally, make improvements, and hand us back the awesomeness.

#### Learning the command Line:

The Command Line, or Terminal is where a lot of the action of web development happens, and it's how you make git work. Becomming familiar enough with it to move around is a _major_ benefit to a developer.

To find it on your system, go to your start bar, launcher, or apps tray and search for "Terminal" or "Command Line" It should be a scary black box icon. When you click it, it brings up a scary black window with only white text. It is not scary, it is your window to freedom beyond the bars of the graphical user interface (GUI). Everything you can do with a GUI you can do with the terminal. And also, qhite a bit more... (If you are worried you might break something, don't. You don't have the skill yet.)

Type and enter these commands and see what happens: 1.`ls` 2.`cd Desktop` 3.`ls` 4.`cd ..` 5.`ls` 

Then play around a little. If you get lost, just type `cd` and hit enter.

After that, check out <a href="https://www.codecademy.com/learn/learn-the-command-line">this codecademy course</a> on the command line.

Once you've gotten about half-way through that, "No more training do you require. Already know you, that which you need." Proceed to getting set up with git and GitHub.

If you have any questions about how to do something in the command line, go to google and search it. For example, suppose you forget how to make a new folder with the command line, start by searching `terminal make a new folder`. It won't give you a perfect answer immediately. You will have to be calm, aware and patient with yourself. And you must remember to _read what you look at!_. Googling is a skill in and of itself. But you can find out a lot this way. 

"For my ally is the google search, and a powerful ally it is!" -Some wise old puppet

#### Getting setup with git and Github:

#### Forking this repository:

#### Cloning this repository from the command line:

#### Getting setup with the Atom code editor:

#### Using a python simpleHTTPserver:

#### Committing and pushing your improvements back to GitHub

#### Making a pull request to get your changes merged into the master repository

***
### The Scrum Team:

- @machikoyasuda - Product Owner
- @IanDCarroll - Development Team, ScrumMaster, Doccumentarian, Editorial Writer
- @thebearingedge - Development Team
- @caseytherocket - Development Team
