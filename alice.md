Alice
=====

You are Alice, a software developer, and you wrote a version of the Mars Rover
Kata. Now you want to publish your software and you have choosen Git and GitHub
for that end.

1. Create your GitHub repository
--------------------------------

Enter https://github.com, log in and click on the plus mark on the top-right
corner to create a `New repository`.

In the next screen provide a name for the repository such as `marsroverkata`
and a description such as `Git in Couples exercise`. Make sure  the option
_Initialize this repository with a README_ is **unchecked** and click on the
_Create repository_ button.

You will be provided with the instructions for setting your repository. Keep this
screen in the browser and move to a terminal. You will return in a couple of
minutes.

2. Initialize your Git repository
---------------------------------

Create a folder on your system and open a terminal inside this location. Name
the folder as your repository (not mandatory but convenient), i.e. `marsroverkata`.

We will call this folder _the working tree_.

Add a `README.md` file and put this content inside:

```
The Mars Rover Kata: an implementation by Alice.
```

So, now, initialize your local repository:

```bash
$ git init
```

Add a reference to your GitHub remote repository

```bash
$ git remote add origin https://alice@github.com/alice/marsroverkata.git
```

**Note**: replace `alice` with your GitHub's username.


Mark the readme to be tracked:

```bash
$ git add README.md
```

Commit your changes:

```bash
$ git commit -m'Here is the first commit!'
```

Push your changes to the server

```bash
$ git push origin master
```

_Ask Bob for collaboration..._

3. Publish your initial code
----------------------------

[Download your initial code](https://github.com/lodr/gitincouples/raw/master/kata/initialkata.zip)
in a zip and decompress the contents into your working tree. Now check the git status by typing:

```bash
$ git status
```

You will see the new added files under `Untracked files:`

You can each one individually or all using a pattern. This is the most general pattern and will add
all the files not yet tracked.

```bash
$ git add .
```

Check what is the state of your files now your have added them:

```bash
$ git status
```

You will see they are under `Changes to be commited:`. Between parenthesis, git tells you how
to restore them to its former state: `unstage`.

The `stage` state is the entrance hall for a file before it is commited and stored by your local
repository. Now you have your files in this state, let's commit them:

```bash
$ git commit -m'My initial code'
```

The message for the commit is mandatory. If not provided, git will open your system's text editor.
If you left the message empty, the commit is aborted. Providing `-m` we can write the message along
the command.

Finally, push your changes to the remote repository.

```bash
$ git push origin master
```

_Ask Bob for the first improvement..._


4. Review the code
------------------

So Bob is asking you for reviewing a pull request. A pull request is a mechanism offered by GitHub
that allows a developer to review code from collaborators online, make comments and finally merge
into the target branch without using git. So navigate to:
https://github.com/alice/marsroverkata/pulls to see the list of open PR. Click on the first (and solely)
one and start reviewing the code!

See some tips at https://help.github.com/articles/using-pull-requests#reviewing-the-pull-request

Trust me now when I say you there is nothing bad with this code if Bob followed the exercise ;)

So just click on _Merge pull request_. You will be given the chance of adding a comment and cancel the
operation but now, simply click on _Confirm merge_ to finish.

Now the changes are in the `master` branch.

_Tell Bob you merged his changes and continue reading!_


5. Update your local repository
-------------------------------

In your local repository, ensure you're in the `master` branch with `git status`. Then update the
local repository with:

```bash
$ git pull origin master
```

You can see a summary of the changes with:

```bash
$ git diff --name-status ORIG_HEAD
```

You will see files added (`A`), deleted (`D`) and modified (`M`).

Time for another modification.

6. Move to directories
----------------------

Despite you closed the PR, you realize it could be a better organization to move the source code
to another place, say a `js` folder. Create it now. Notice that moving and object is like deleting
from its current location and adding a new one in the new path. To avoid these deletions / additions,
git has its own move command:

```bash
$ git mv *.js js/
```

This way you are moving all your JavaScript files to their new location. Check the status of the working
tree with:

```bash
$ git status
```

Pay attention to the current branc: it's `master`!! You should never modify master directly!

Instead, use a branch, ask for review and merge if all looks well.

But worry not, your `master` branch is tracked by git so it is very hard to loose something. Just pay
attention to the git status messages and you'll realize you can undo all your changes.

Moreover, you can simply pick and move your changes to a new branch by typing:

```bash
$ git checkout -b moving-sources
```

To _check out_ is to change from one branch to another. When specifying `-b` option, you are saying
the following branch will be a new one.

If you want a list of all branches, use:

```bash
$ git branch -a
```

Without `-a` it only shows the local branches.

Now your changes are in the new branch. Well, all is ok. If you use `git status` you will see three
renames, git treats a movement as a rename. There is nothing special here, it is the Linux way!

Before finishing, use a source editor to fix the paths for your JS scripts in the `index.html` file.
The final content of the file should be:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mars Rover Kata</title>
    <script src="js/grid.js" type="text/javascript"></script>
    <script src="js/rover.js" type="text/javascript"></script>
    <script src="js/tests.js" type="text/javascript"></script>
  </head>
  <body>
  </body>
</html>
```

Check with `git status` for the current state of your changes and stage the modified `index.html`.

```bash
$ git add index.html
```

Finally, commit the changes:

```bash
$ git commit -m'Sources moved to a better emplacement'
```

And publish the code into a new branch:

```bash
$ git push origin moving-sources
```

Now you need to make a PR to yourself. It can sound strange but it is quite convenient that
another programmer rather than you review your code before merging. You can make a PR from
one of your branches (`moving-sources`) to another (`master`) but you can not assign this 
PR to Bob unless he is an official repository collaborator so grant permissions to him by
[adding a collaborator](https://help.github.com/articles/how-do-i-add-a-collaborator).

_Now ask Bob for teach you about making a pull request and then you will teach him about the review
process. Once merged, continue reading._

7. Avoiding repetition when moving
----------------------------------

_Please, ignore Bob for reviewing code until you end this part._

Admit, you never liked how your `moveForward()` and `moveBackward()` functions look. Let's do some refactor.

Start by updating you master branch. Then swictch to a new one.

```bash
$ git checkout master
$ git pull origin master
$ git checkout -b avoiding-repetition
```

Maybe your branch name is not very accurate. Let's rename the branch to somethig more specific:

```bash
$ git branch -m refactoring-moving-forward-and-backward
```

You can consider `-m` as _moving_. 

Open `rover.js` and replace `moveForward` and `moveBackward` by the following code:

```javascript
  moveForward: function () {
    this.advance('forward');
  },
  moveBackward: function () {
    this.advance('backward');
  },
  advance: function (direction) {
    direction = (direction === 'forward') ? 1 : -1;
    var formerPosition = [
      this.position[0],
      this.position[1]
    ];
    var increment = this.increments[this.orientation];
    this.position = [
      (this.position[0] + increment[0] * direction) % Grid.sizeX,
      (this.position[1] + increment[1] * direction) % Grid.sizeY
    ];
    if (this.position[0] < 0) {
      this.position[0] = Grid.sizeX + this.position[0];
    }
    if (this.position[1] < 0) {
      this.position[1] = Grid.sizeY + this.position[1];
    }
    if (Grid.thereIsObstacle(this.position[0], this.position[1])) {
      this.position = formerPosition;
    }
  },
  increments: {
    n: [0, 1],
    e: [1, 0],
    s: [0, -1],
    w: [-1, 0]
  },
```

Now, prepare a PR. Remember yoou must stage, commit and publish your changes before asking for
review!

```bash
$ git add js/rover.js
$ git commit -m'Refactoring moveForward and mmoveBackward'
$ git push origin refactoring-moving-forward-and-backward
```

_Ask for Bob review. He has some comments for you._

8. Pushing changes to already published branches
------------------------------------------------

Publish new changes to an already published branch is not a mistery. Review the comments in the PR to
see how Bob has detected a lot of accesses to `this.position[x]`. Let's reduce theses accesses. Ensure
you are in your refactor branch:

```bash
$ git checkout refactoring-moving-forward-and-backward
```

Now open `rover.js` and replace the `advance` member by:

```javascript
  advance: function (direction) {
    direction = (direction === 'forward') ? 1 : -1;
    var X = this.position[0], Y = this.position[1];

    var increment = this.increments[this.orientation];
    X = (X + increment[0] * direction) % Grid.sizeX;
    Y = (Y + increment[1] * direction) % Grid.sizeY;
    if (X < 0) {
      X += Grid.sizeX;
    }
    if (Y < 0) {
      Y += Grid.sizeY;
    }
    if (!Grid.thereIsObstacle(X, Y)) {
      this.position = [X, Y];
    }
  },
```

And finally publish your changes again. The PR will be automatically because it is linked to your branch.

_Tell Bob you made his modifications and start reviewing his PR but please, don't merge it yet. Wait for
yours to be merged **first**._

9. Review Bob changes
---------------------

Review Bob changes. You will notice he was modifying the same file as you. Try to refresh by pressing F5
and you will notice GitHub keeps saying that the PR can be automatically merged. This is because the merge
algorithms of git are smart enough to realize you both have changed different parts of the file and know
how to merge them.

Good news but before merging why not try Bob's code. It is not mandatory, but until now you were relying
on Bob's word when saying the tests are passing. You are two and probably you're friends but Bob could be
a complete unknown.

Let's check if tests are actually passing.

First you need to add a remote to refer to Bob's remote repository:

```bash
$ git remote add bob https://alice@github.com/bob/marsroverkata.git
```

Now you need to fetch the branches in Bob:

```
$ git remote update bob
```

Now you need to create a branch tracking `avoiding-repetition`in `bob` remote. You create a branch typing:

```bash
$ git branch --track avoiding-repetition bob/avoiding-repetition
``` 

It is very important to notice the first name is the name you give to **your** local branch to test Bob's
branch. It could be named with any other name such as `testing-bob` but we choosed to keep the same name.
The second parameter with the `--track` options tells git that the new branch is following Bob's branch so
you can say if you're out of date with respect to the remote repository and make `git pull` to update.

Now change to that branch and test the code by opening `index.html` and a JS console and checking the three
results are `true`.

```bash
$ git checkout avoiding-repetition
```

Once checked, accept the PR and update your `master` branch!

10. A little bit more complicated refactor
------------------------------------------

_Please, ignore Bob until you complete this step._

Looking at the tests, you noticed your current implementation only allows one rover and one grid so you
could refactor the modules into classes to generate instances of rovers and grids. Create a new feature
branch for this named `refactor-into-classes`.

```bash
$ git checkout -b refactor-into-classes
```

Now you can download the [refactored sources](https://github.com/lodr/gitincouples/raw/master/kata/classes.zip)
and decompress into your working tree overwriting the `js` folder.

Don't forget to commit your changes and prepare a PR.

_Ask Bob to review and merge your code. If Bob ask you for reviewing another PR, do it but get your code
merged first._

11. Review Bob's code
---------------------

Bobs code is ok. Trust me. If you do'nt believe me, return to step 9 and try his code. The proble is
you touch the same file and introduced some radical changes so git does not know how to automatically
merge the code.

_Alice, ask Bob for rebasing his code, please. Wait for him and once rebased, merge the code._

12. Some history
----------------

Lot of things has happend since you published your code. Did you remember. No? Type:

```bash
$ git log
```

You can scroll the log down or up with `j` and `k` and exit with `q`. You can search by typing `/` followed
with the string you can search, then press `enter` and `n` to go to the next appearance and `shift + n` to 
go to the previous one.

Pay attention to each log entry:

```
commit 46d731893ac8d2c2194e1c8b53ac4d52baebd642
Author: Bob <bob@unoyunodiez.com>
Date:   Thu Feb 6 20:47:46 2014 +0100

    Source is now split into three files
```

First line is the commit hash / id. This hash identifies the state of the working tree and its
contents along the internet. Notice this does not mean you can extract the current contents of
the repository from the identifier. It only means that anyone with the same id it's guaranteed
to have the same code.

The second is the author and the third is the date. Then it comes the commit message.

The commit hash is its name. Copy one of them (distinct to the first one) and observe the differences
between your current code and it:

```bash
$ git diff 34a651fa625406da790b475668a56cf414e63444
```

The difference view shows what to do to the specified commit to convert it to the current state.

You can revisit your history by checking out the specified commit. Don't worry, nothing is lost.

```bash
$ git checkout 34a651fa625406da790b475668a56cf414e63444
```

When you check out to a commit it is said you're in a detached HEAD. You can start a feature branch
from here to start development. Pay attention to the message git igves tou you when you check out
a detached HEAD.

To go back to master, simply check it out.

```bash
$ git checkout master
```

You have a **log** of all **ref**erence changes in:

```bash
$ git reflog
```

Inside this view you have the same controls as in the log.

This view identify each `HEAD` state being the first one, your current state. Take into account that
`reflog` only shows HEAD changing commands. I.e: a `git log` command does not change the `HEAD` so
it is not shown.

```
c4d382b HEAD@{0}: checkout: moving from 34a651fa625406da790b475668a56cf414e63444 to master
34a651f HEAD@{1}: checkout: moving from master to 34a651fa625406da790b475668a56cf414e63444
c4d382b HEAD@{2}: pull origin master: Fast-forward
d1565a0 HEAD@{3}: checkout: moving from refactor-into-classes to master
38c3095 HEAD@{4}: commit: Moving to classes
```

Here first column is the short hash for a commit. The second one is the alias and the third is the
command description.

If you're interested on the complete hash for a state (`c4d382b` or `HEAD@{4}`), exit the reflog and write:
 
```bash
$ git rev-parse c4d382b
```

So if you made a mesh changing from one branch to another, visit the reflog! Please, don't trust in the
commit alias since, as you change the `HEAD` again, all the alias will be pushed forward one slot and
`HEAD@{0}` will become `HEAD@{1}`, `HEAD@{1}` become `HEAD@{2}` ... The last command is the new
`HEAD@{0}`.

_Congratulations, you finished `Git In Couples`!_

---

So you've finished the exercise. It could be great if you now delete your local repository (by simply
removing the folder) and [the remote one in GitHub](https://help.github.com/articles/deleting-a-repository)
and switch roles with Alice. Don't stop visiting
[FAQ and Tricks](https://github.com/lodr/gitincouples/edit/master/faq.md) to find additional help!
