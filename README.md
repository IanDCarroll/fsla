# __The FullStack LA Local Meetup Map Page__
<a href="https://iandcarroll.github.io/fsla/">Click here to check it out!</a>

### What is it good for?

This is a hub for information about LA Meetups so that people can see what's up, learn and get involved. It's also a place where organizers might collaborate, but that's *waaay* in the future. Right now, it's a map.

### How are we doing it?

We will be scrumming this project as best we can in a voluntary open-source way. __Scrum__ is an __Agile__ framework, one of a series of dove-tailing practices derrived from on-the-job experience in development to make the creation process collaborative, organized, iterative, changeable, and overall fun. Another important Agile methodology we use is __Extreme Programming.__

- <a href="http://agilemanifesto.org/">This is the Agile Manifesto</a> If you do nothing else, take a look a this.
- <a href=http://developingian.com/scrum-explained-in-300-seconds-or-less/>Scrum explained</a> in 300 seconds or less
- <a href="http://developingian.com/scrum-for-oss-meetup-contributors/">Here is a blog post</a> introducing scrum, and how it works in our context.
- <a href="https://www.scrumalliance.org/why-scrum/core-scrum-values-roles">These are the Scrum Values</a>
- <a href="http://www.scrumguides.org/">This is the Scrum Guide</a>
- Optional: For more context, <a href="https://37signals.com/rework">Check out this book at your local public library</a>
- Optional: This book gives a more <a href="http://www.barnesandnoble.com/w/learning-agile-andrew-stellman/1124330550?ean=9781449331924"> detailed overview of Agile </a> after that.

Inside the Scrum framework, we will be using __Pair Programming__, a practice of Extreme Programming where there are two developers working together on a single issue with a single computer. Pair Programming is great fun, produces results faster than two individual developers working on two seperate issues, and is a high-powered way to learn more about software development.

<a href="http://developingian.com/pairing-on-a-map-page/">Here is a blog article</a> explaining the story of the meetup map page's development, and an experience of pair programming so you can get a taste of what it is like if you are new to it.

<a href="https://www.topbug.net/blog/2016/08/27/optimization-for-mobile-a-pair-programming-story-at-fullstackla/">Here is another blog</a> by <a href="https://github.com/xuhdev">__@xuhdev__</a> on the project's second pairing.

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

<a href="https://github.com/IanDCarroll/fsla/labels/User%20Story">Please View the issues</a> for stories to work on. As a pair, pick an issue you both want to work on, comment (both of you) and assign yourselves the task.

If you want to propose an improvement, identify a bug, or otherwise suggest something to improve, please <a href="https://github.com/IanDCarroll/fsla/issues/new">open up a new issue.</a>

- Found a typo? <a href="https://github.com/IanDCarroll/fsla/issues/28">Report it!</a>
- Confused by these instructions? <a href="https://github.com/IanDCarroll/fsla/issues/36">Report it!</a>

Here is a handy overview of <a href="https://guides.github.com/features/issues/">GitHub issues and how to work them.</a>

We also need to populate the product backlog, and identify high value stories to work on next sprint. Open up an issue with potential ideas for where we can go next.

***

## Getting Setup:

Follow these simple steps to get this page running locally, make improvements, and hand us back the awesomeness.

### Learning the Command Line:

The Command Line, or Terminal is where a lot of the action of web development happens, and it's how you make git work. Becomming familiar enough with it to move around is a _major_ benefit to a developer.

To find it on your system, go to your start bar, launcher, or apps tray and search for "Terminal" or "Command Line" It should be a scary black box icon. When you click it, it brings up a scary black window with only white text. It is not scary, it is your window to freedom beyond the bars of the graphical user interface (GUI). Everything you can do with a GUI you can do with the terminal. And also, quite a bit more... (If you are worried you might break something, don't. You don't have the skill yet.)

Type and enter these commands and see what happens: 1.`ls` 2.`cd Desktop` 3.`ls` 4.`cd ..` 5.`ls` 

Then play around a little. If you get lost, just type `cd` and hit enter.

After that, check out <a href="https://www.codecademy.com/learn/learn-the-command-line">this codecademy course</a> on the command line.

Once you've gotten about half-way through that, "No more training do you require. Already know you, that which you need." Proceed to getting set up with git and GitHub.

If you have any questions about how to do something in the command line, go to google and search it. For example, suppose you forget how to make a new folder with the command line, start by searching `terminal make a new folder`. It won't give you a perfect answer immediately. You will have to be calm, aware and patient with yourself. And you must remember to _read what you look at!_ Googling is a skill in and of itself. But you can find out a lot this way. 

"For my ally is the google search, and a powerful ally it is!" -Some wise old puppet

### Getting setup with git and Github:

GitHub is a place where open source developers can share their code and contribute to each other's projects. It's particularly good at this because it's set up to keep the code neat and managed though _Version Control_. Which means that if someone makes a mistake or add a change that breaks the code, you can roll back the change. And if anyone wants to fix a bug or add something, they can ask permission to do so with a _pull request_, and the owner of the project can accept and _merge_ the pull request or reject it. GitHub's _issues_ tab allows for developers to ask questions, flag bugs, organize work on new features, assign tasks, and more. Projects on GitHub are kept in _repositories_, AKA _repos_, under user or group profiles. The full feature list of git and GitHub are deep and interesting, but we'll start with the handful of ones you'll be using 90% of the time.

git, on the other hand, is the code that runs locally on your computer. It interfaces with GitHub, but does version control on your computer. It's why you learned the command line if you didn't already know it. The command line is how you interface with git and get it to _clone_ a repository (kind of like a downloading music, but it isn't illegal) and _push_ your changes back to GitHub (kind of like uploading a cat video to facebook).

 1. <a href="https://github.com">Sign up for GitHub</a>, if you haven't already. It's free.
 2. <a href="https://help.github.com/articles/set-up-git/">Then follow these instruction</a> to set up git and link it to GitHub.
 
Remember to read. 

It sounds stupid, but I forget to read all the time. I skim and try to jump to the answer because I'm anxious to get it done. Don't. Read and observe. Take the time to let it soak in. 

If you find yourself skimming or glazing over what you are look at, sit back, close your eyes and take a breath. Your brain is being overloaded with information and shutting down. Open your eyes and read one small thing at a time. Don't try to take it all in at once. It can help to pair with someone on this, or just read it aloud.

If you're still having trouble, open up an issue! :smile: It might be that we're not explaining things well enough. Or it might be a real bug that needs to get fixed. You never know, but if you see something, say something! We can't fix what we don't know about. (And that counts as contributing to open source!)

### Forking this repository:

Forking is like copying the files from someone else's folder and pasting them into your own. This Allows you to work on them and make changes without making a mess to someone else's project. When it's time, you'll submit a pull request to have your changes merged back into the master project.

But for now, Click `Fork`.
![fork](https://cloud.githubusercontent.com/assets/14797009/17844601/eccbc01a-67ef-11e6-9f21-6af6c6f941e4.png)
That's it. Your done.

You'll find your forked version of the repo under your own profile with your name in front of it. That's what you'll be working with from now on.

<a href="https://help.github.com/articles/fork-a-repo/">GitHub's guide to forking</a> is a great place to learn a little more. 

### Cloning this repository from the command line:

Cloning is like forking your own repo. It makes a copy from the GitHub website to your local computer so that you can edit the files and _push_ the changes back to your repo on GitHub.

If you didn't see the general instructions as you scrolled down from the link above, Here's a step-by-step guide to cloning this repo:

 1. In the browser, make sure you're in _your own profile_. It should say `https://github.com/MY_USER_NAME/fsla` __not__ `https://github.com/IanDCarroll/fsla` (Replace `MY_USER_NAME` with your github user name.)
 2. Click `Clone or download`; then Click the `Clipboard Button` ![clone](https://cloud.githubusercontent.com/assets/14797009/17844777/dea7572c-67f1-11e6-9ecd-a28f7a211b1d.png)
 3. Open up your Command Line.
 4. `$ cd` and hit `<ENTER>` to make sure you're in your home directory.
 5. `$ git clone `, but don't hit `<ENTER>` yet.
  1. Right-mouse-click, then click `paste` from the drop-down menu. (Make sure there's a space between `clone` and the next thing.) It should look like `$ git clone https://github.com/MY_USER_NAME/fsla.git`.
  2. Now hit `<ENTER>`.
 6. `$ ls` and hit `<ENTER>`. There should be a new directory called `fsla` there.
 7. `$ cd fsla` and hit `<ENTER>` to get into the new directory.
 8. Congratulations! You're now working with a local clone of a forked repository!

Having trouble? 
 - Did you follow the directions _to the letter?_ 
 - Still having trouble? 
 - Open up an issue! :smile: We're here to help you help us!

### Using a python simpleHTTPserver:

A python simple HTTP server is a quick way of hosting pages like the fsla map page. It is our way of an important step in web development:
__Get the App running Locally on your computer.__

Doing this allows you to inspect the code in a production-like environment, experiment and find solutions without messing with the app that users are using.

Could you just open the index.html in Chrome or your favoire browser? Yes. But using Python's Simple Server has some benefits. suppose you want to see what the page looks like on a mobile device? You can do that with the simple server.

 1. First check to make sure your computer has python installed:

  `$ python --version`
  
   You should see something like `Python 2.7.12` the version number isn't important. Just that it doesn't return a error and say something like `I don't know what you talkin' 'bout.` 
   
   If you don't have it, you'll need to google "Install Python" and find out how to get python on your computer.

 2. If python is installed:

  Make sure you're in the fsla directory, then use this command:
  
  `$ python -m SimpleHTTPServer 8000`
  
  It should say `Serving HTTP on 0.0.0.0 port 8000 ...`

 3. Go to Chrome or your browser of choice and enter:

  `http://localhost:8000/`
  
  You should now see the fsla map page.

Don't see it? Getting an error? 
 1. Check your spelling. 
 2. Check again that you followed the instructions to the letter. 
 3. Google for answers. 
 4. Check out <a href ="https://docs.python.org/2/library/simplehttpserver.html#module-SimpleHTTPServer">the docs</a> (Remember to read. Don't let your eyes glaze-over.)
 5. Open up an issue :smile:

To see the page on mobile, go into your computer's settings and find it's IP Address. It might be something like `192.168.0.1`.

Type `http://` *plus* the IP Address into your mobile device's web browser *plus* the port number (:8000/). It should look something like `https://192.168.0.1:8000/` But with *YOUR_IP_ADDRESS*.

You should now be seeing what the site looks like on mobile!

### Learning Chrome DevTools:

Being able to inspect, debug and make changes in the browser with active code is a big advantage. 

We're using Chrome, but if you already know the tools of another browser, that's cool too.
<a href="http://discover-devtools.codeschool.com/">This course</a> teaches the basics of DevTools. Go through at least the first 3 or 4 courses.

### Getting setup with Atom:

There are a plethora of code editors out there. If you don't already have a favorite, try Atom. It's Free, Open Source, and intuitive for beginners.

- <a href="https://atom.io/">Atom's website</a>
- <a href="http://flight-manual.atom.io/getting-started/sections/installing-atom/">Instructions for installing Atom</a>

Questions? Confusions? Try googling! You're probably not the only one whose had your issue.

Still stymied? Open up an Issue! :smile:

### Committing and pushing your improvements back to GitHub

In between this step and the last one is where the magic happens. Hopefully you worked on an issue, or found a bug, or made an improvement of some kind. You've saved that locally. Now you're ready to hand that off to the project and get mad props and respect for being an awesome person who makes quality contributions to open source projects!

You will need to first push your changes to your fork of the project.
 1. From the command line, make sure you're in the fsla directory.
 2. `$ git status` This will generate a list of changed files and deleted files. Any files added will be in a separate section. You will have to add them to the project with `$ git add MY_NEW_FILE`. Otherwise they will not be pushed to your repository.
 3. `$ git commit -a` There are other ways to do this, but this is my favorite and its simple. Hitting enter will pull up your default editor. Type a short message in present tense with the verb in front, like `fix annoying bug` or `add awesome new feature`. Save and exit.
 4. `$ git push origin master` at this point, you will be prompted with your github username and password unless you've set that up to be handled automatically. Type them in and there you have it!
 
Congratulations! You've pushed a useful contribution to GitHub!

### Making a pull request to get your changes merged into the master repository

The last step is getting the improvement from your repo to the project master. That's done with a pull request on GitHub.

In the browser, and on _your repo_, click `New pull request`
![1newpullrequest](https://cloud.githubusercontent.com/assets/14797009/17948116/4a565298-6a04-11e6-9f03-774142fd3977.png)

That will take you to this screen. Just like adding a commit message to a push, you're going to add a short title to your pull request. It's good manners to include a description of the changes, any links to issues, etc, along with a screenshot. 

You can accomplish screenshots by dragging the picture from your files into the text box. GitHub will upload your screenshot to the cloud and put in the appropriate markdown syntax so that it will display. 

Then click `Create pull request`
![2openpull](https://cloud.githubusercontent.com/assets/14797009/17948117/4be54254-6a04-11e6-9d28-b57533c3e1d1.png)

Congratulations! you've made a pull request! But there are still a few more things you can do before it gets inspected and (hopefully) merged by the project owner.
![3theopenrequest](https://cloud.githubusercontent.com/assets/14797009/17948121/4dc03ee4-6a04-11e6-950f-a5d62c548383.png)

If you scroll down, you can see the individual commits that are part of the pull request. The numbers on the end are the SHA (Pronounced "shah"), git's unique code for version control of every committed change. You can click on them and add comments to specific lines you'd like the dev team to pay attention to. 
![4pullcommits](https://cloud.githubusercontent.com/assets/14797009/17948123/502e84ce-6a04-11e6-9d1f-66da619f3902.png)

You can also have conversations about those solutions, issues or other alternatives, just like you do in `Issues`, but at a greater degree of granularity.
![5linecomment](https://cloud.githubusercontent.com/assets/14797009/17948124/5248b626-6a04-11e6-8492-ac182e0fc272.png)

Finally, if all goes well, the project owner will accept your pull request. When you see this screen, you may rejoice!
![6merged](https://cloud.githubusercontent.com/assets/14797009/17948129/55028af4-6a04-11e6-824b-3557996d98bd.png)

If you've been following along, congratulations on making a contribution to OSS using The Command Line, git, GitHub, Version Control, Python SimpleHTTPServer, Atom, DevTools, Scrum, and Pair Programming! (Quite a list!) Go out and celebrate at the local pharmacy with nachos and a cherry phosphate! You've earned it! :sparkles::thumbsup::sparkles:

***
### The Scrum Team:

- <a href="https://github.com/machikoyasuda">@machikoyasuda</a> - Product Owner
- <a href="https://github.com/IanDCarroll">@IanDCarroll</a> - Development Team, ScrumMaster, Doccumentarian, Editorial Writer
- <a href="https://github.com/thebearingedge">@thebearingedge</a> - Development Team
- <a href="https://github.com/caseytherocket">@caseytherocket</a> - Development Team
- <a href="https://github.com/benjaminma">@benjaminma</a> - Development Team
- <a href="https://github.com/xuhdev">@xuhdev</a> - Development Team, Blogger
- <a href="https://github.com/leighphan">@leighphan</a> - Development Team
- <a href ="https://github.com/dzhonapp">@dzhonapp</a> - Development Team
- <a href ="https://github.com/oraz23">@oraz23</a> - Development Team

