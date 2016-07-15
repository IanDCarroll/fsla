#GIT Cheatsheet

An easy to navigate reference for all your Command Line needs!

##Command Line

| Command 			|	Use 										|
|-------------------|-----------------------------------------------|
| `pwd`				| 	print working directory						|
| `cd`				|	change directory 							|
| `cd ..` 			| 	go back one directory 						|
| `cd - `			| 	go back to previous working directory 		|
| `ls`/`dir`		|	list (files in directory) (mac/windows)		|
| `mkdir`			| 	makes a new directory						|
| `rm`				|	remove file 								|
| `rmdir`			|	remove directory							|
| Tab				|	completing arguments 						|
| CTRL-P/CMMD-P		|	recalls the previous command  (up arrow) 	|
| CTRL-R/CMMD-R 	|	search command history 						|
| CTRL-W/CMMD-W 	|	deletes the last word						|
| CTRL-U/CMMD-U 	|	deletes the whole line 						|
| CTRL-L/CMMD-L		|	clear screen 								|
| `q`				| 	quits any help or manual printing & starts a new command prompt 	|

##Git

| Command 						|	Use 										|
|-------------------------------|-----------------------------------------------|
| `git help` (command name)		| will look up the command for you, define & give you examples of its uses 	 |
| `git init`					| transforms directory into repository			|
| `git config --global user.name "John Doe"`	| logging into github step one	|
| `git config --global user.email johndoe@example.com` | logging into github step two	|
| `git status` 					| check current state of repo (staged, unstaged, tracked, untracked, deleted files)	|
| `git add filename.filetype`	| adds a file to the staging area				|
| `git add --all`				| adds all files that are tracked & untracked to the staging area 	|
| `git add -A`					| same as `git add --all`						|
| `git add -p`					| adds the file & displays all the changes made to the file since the last commit. Changes must be approved for the staging in hunks.	|
| `git add '*.filetype'`		| adds all files of the filetype specified to the staging area (* = wildcard)	|
| `git commit -m "message"`		| commits staged files to the repo				|
| `git commit -a -m "message"`	| add changes from all tracked files in one line/step (doesn't add new untracked files)	|
| `git commit --amend -m "new message"` | add file in staging to the last commit. new message will override old message. |
| `git log`						| journal of past changes that have been committed	|
| `git log --summary`			| provides more information in your log			|
| `git remote -v`				| show remote repos 							|
| `git clone url.git`			| Clone a repo onto your computer, have your own working directory		|
| `git remote add origin https://github.com/username/reponame.git`		| stages a local repo to github server. (needs a name & url from github) No commit necessary for this staging.	|
| `git remote add upstream url.git`		| add a remote source for your forked repo. this allows you to `git pull upstream master` in order to sync with changes made to the original repo. 		|
| `git push origin master`		| push tells github which repo to put the commits in (in this case the master branch)	|
| `git push -u origin master` 	| `-u` will make git remember the parameters you entered so that next time you can just type in `git push`.	|
| `git pull origin master`		| update your working directory to match the changes in the GitHub repo	|
| `git pull --all`				| pull all the changes on all the remote branches 						|
| `git diff`					| check what's different from your last commit	|
| `git diff HEAD`				| diff of your most recent commit	|
| `git diff --staged`			| see changes you just staged	|
| `git reset filename.filetype`	| unstage files	|
| `git reset --soft HEAD^`		| resets last commit into staging so that you can make changes and re-commit, after HEAD add a carrot(^) to set how far back it changes ^last, ^^2 ago, ^^^3ago... |
| `git branch`					| see branches available in local repo		|
| `git branch -a`				| see local branches & remote branches				|
| `git checkout -- filename.filetype`	| change files back to how they were at the last commit by using `git checkout -- targetfile`. gets rid of all changes since the last commit for filename.filetype	|
| `git branch newbranchname`	| creates a new branch	|
| `git checkout newbranchname`	| switches over to the specified branch	|
| `git checkout -b newbranchname` 		| creates and switches over to a new branch	|
| `git checkout -b branchname branchsource/branchname`	| switch over to a preexisting remote branch & create a local version of it (see `git branch -a`)		|
| `git merge branchname`			| will merge the changes of "branchname" into the current branch you are operating in. (Remember to do this you must be in the branch you want to add the changes to i.e. master) |
| `git branch -d branchname` 	| deletes the branch 			|
| `git rm filename.filetype`	| removes files from disk and stages removal of files in repo (then you commit your removal changes) 	|
| `git rm -r foldername`		| removes folder & all the files within	|
| `git commit -am "message"`	| auto removes files that you have deleted from the folder with your current commit	|
| `git blame filename.filetype`	| outputs the author of every line within the file 			|


##Resources

[Get Git Got Presentation](http://slides.com/patriciarealini/get-git-got#/)

###Walkthroughs
* [Try Git](https://try.github.io/)
* [Git Immersion](http://gitimmersion.com/)
* [Roger Dudler's Git Guide](http://rogerdudler.github.io/git-guide/)
* [Think Like a Git](http://think-like-a-git.net/)
* [A Visual Git Guide](http://marklodato.github.io/visual-git-guide/index-en.html)
* [Git Tower](http://www.git-tower.com/learn/)
* [Git & The Terminal](https://18f.gsa.gov/2015/03/03/how-to-use-github-and-the-terminal-a-guide/)

###Self Directed
* [Pro Git](http://git-scm.com/book/en/v2)
* [Git Reference](http://gitref.org/)
* [First Aid Git](http://firstaidgit.io/#/)
* [Understanding GitHub](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1#awesm=~oGqRd1nOhtuidI%3F_escaped_fragment_=)
* [Git Youtube Videos](https://www.youtube.com/playlist?list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH)
* [Git Dev Docs](http://devdocs.io/git/git)
* [Git Cheat Sheet](http://overapi.com/git/)
* [How to Undo in Git](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)



