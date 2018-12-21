Alice
=====

You are Alice, a software developer, and you wrote a version of the Mars Rover
Kata. Now you want to publish your software and you have choosen Git and GitHub
for that end.

## 1. Create your GitHub repository

Enter https://github.com, log in-and click on the plus mark on the top-right
corner to create a `New repository`.

In the next screen provide a name for the repository such as `marsroverkata`
and a description such as `Git in Couples exercise`. Make sure  the option
_Initialize this repository with a README_ is **unchecked** and click on the
_Create repository_ button.

You will be provided with the instructions for setting your repository. Keep this
screen in the browser and move to a terminal. You will return in a couple of
minutes.

## 2. Initialize your Git repository

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

_Wait here and ask Bob to start at section 1._

## 3. Publish your initial code

[Download your initial code](https://github.com/delapuente/gitincouples/raw/master/kata/initialkata.zip)
in a zip and decompress the contents into your working tree. Now check the git status by typing:

```bash
$ git status
```

You will see the new added files under `Untracked files:`

You can add each one individually or all using a pattern. This is the most general pattern and will add
all the files not yet tracked.

```bash
$ git add .
```

Check what is the state of your files now your have added all of them:

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

Along this course, Bob's guide will talk about two remote repositories: `upstream` and `origin` but
your guide will only talk about `origin`. This is because you are the author of the project and
your `origin` is actually Bob's `upstream`.

_Wait here and ask Bob to continue at section 3._


## 4. Review the code

So you've found a new PR from your first collaborator. A pull request is a common
mechanism that allows a developer to review code from collaborators online, make
comments and finally merge into the target branch without using Git. So navigate to:
https://github.com/alice/marsroverkata/pulls to see the list of open PR. Click on the first (and solely)
one and start reviewing the code!

See some tips at
https://github.com/features/code-review

There is nothing bad with this code if Bob followed the exercise so just click on _Merge pull request_.
You will be given the chance of adding a comment and cancel the operation but now, simply click on _Confirm merge_ to finish.

Now the changes are in the **remote** `master` branch.

## 5. Update your local repository

The changes are now integrated in the official codebase but your local repository is
out of sync. You need to fix that. This could be done in just one step but, under the hoods, Git
is performing two. Let's see them separately to understand what's happening.

Ensure you're in the `master` branch by doing `git status`. If not the case, change the branch to
`master`.

Now you need to get a local copy of the changes in the remote repository. Do this by issuing the
following command:

```bash
$ git fetch origin master
```

This will put the remote changes in a special branch called `origin/master` but not yet in
your local `master`.

You can inspect the changes doing:

```bash
$ git diff HEAD origin/master
```

This commands means "show me what I should do to my current branch (`HEAD`) to transform it into
`origin/master`" and you could not be doing it if you've opted for the single-step version of this
procedure. The `-` prefixed lines mean "remove" while the `+` prefixed lines mean "add".

You can do also:

```bash
$ git diff origin/master
```

Although that means "show me what I should do to `origin/master` to transform it into my current
branch". I.e. you can interpret the `-` prefixed lines as "what is missing in your current branch"
and `+` prefixed lines as "what you have instead".

The second and last step is to merge those changes into your local `master`. Do it by typing:

```bash
$ git merge origin/master
```

Now your local repository is up-to-date again! It's time for another modification.

## 6. Move to directories

Despite you closed the PR, you realize it could be a better organization to move the source code
to another place, say a `js` folder. Create it now. Notice that moving and object is like deleting
from its current location and adding a new one in the new path. To avoid these deletions / additions,
Git has its own "move" command:

```bash
$ git mv *.js js/
```

This way you are moving all your JavaScript files to their new location. Check the status of the working
tree with:

```bash
$ git status
```

Pay attention to the current branch: it's `master`!! You should never modify master directly!

Instead, use a branch, ask for review and merge if everything looks well.

But worry not, your `master` branch is tracked by Git so it is very hard to lose something. Just pay
attention to the git status messages and you'll realize you can undo all your changes.

Don't do it though. Usually, you can simply pick and move your changes to a new branch by typing:

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

Now your changes are in the new branch. Well, everything is OK again. If you use `git status` you
will see three renames, Git treats a movement as a rename. There is nothing special here, it is the
Linux way!

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
$ git commit -m'Sources moved to a better location'
```

Well, what follows is considered a **bad practice**: we are going to push to master, directly. Let
me tell you something: having an active open source community is not the common scenario. Usually,
your projects will be very local and you and very few people (usually, only you) will be the
solely maintainers of the project. Let's be pragmatic: you're not changing code, just doing
some house-keeping regarding the structure of your project and manual testing seems to be working
so we are bypassing the PR cycle in this case.

First make sure there is nothing to commit with `git status`. Now change to master:

```bash
$ git checkout master
```

Ensure you have the latest changes by repeating the two steps you learned in the previous section
or using the one-step version showed here:

```bash
$ git pull upstream master
```

Now merge your working branch locally:

```bash
$ git merge moving-sources
```

Accepts the commit message and push to the remote `master` branch:

```bash
$ git push origin master
```

## 7. Avoiding repetition when moving 

Admit it, you never liked how your `moveForward` and `moveBackward` functions looked. Let's do
some refactor.

```bash
$ git checkout -b avoiding-repetition
```

This branch name is not very accurate. Rename the branch to somethig more specific:

```bash
$ git branch -m refactoring-moving-forward-and-backward
```

The `-m` option stands for _moving_. 

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

Now, prepare a PR. Remember you must stage, commit and push your changes before asking for
review!

```bash
$ git add js/rover.js
$ git commit -m'Refactoring moveForward and moveBackward'
$ git push origin refactoring-moving-forward-and-backward
```

Create a PR, _wait here and ask Bob for continuing at section 7_.

## 8. Pushing changes to already published branches

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

And finally push your changes again. The PR will be automatically updated because it is linked to
your branch.

_Wait here and ask Bob to continue at section 9._

## 9. Review Bob changes

Review Bob changes. You will notice he was modifying the same file as you. Try to refresh by pressing F5
and you will notice GitHub keeps saying that the PR can be automatically merged. This is because the merge
algorithms of Git are smart enough to realize you both have changed different parts of the file and know
how to merge them.

All set but, before merging, why not trying Bob's code. It is not mandatory, but until now you were relying
on Bob's word when saying the tests are passing. Let's check if tests are actually passing.

First you need to add a remote to refer to Bob's remote repository:

```bash
$ git remote add bob https://alice@github.com/bob/marsroverkata.git
```

**Note**: remember to change 'bob' with your mate username.

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
The second parameter with the `--track` options tells Git that the new branch is following Bob's branch so
you can say if you're out of date with respect to the remote repository and make `git pull` to update.

Now change to that branch and test the code by opening `index.html` and a JS console and checking the three
results are `true`.

```bash
$ git checkout avoiding-repetition
```

Once checked, accept the PR and update your `master` branch!

## 10. A little bit more complicated refactor

Looking at the tests, you noticed your current implementation only allows one rover and one grid so you
could refactor the modules into classes to generate instances of rovers and grids. Create a new feature
branch for this named `refactor-into-classes`.

```bash
$ git checkout -b refactor-into-classes
```

Now you can download the [refactored sources](https://github.com/lodr/gitincouples/raw/master/kata/classes.zip)
and decompress into your working tree overwriting the `js` folder.

Don't forget to commit your changes and prepare a PR.

## 11.  Review Bob's code

Bobs code is OK. Trust me. If you do'nt believe me, return to step 9 and try his code. The problem is
you touched the same file and introduced some radical changes so Git does not know how to automatically
merge the code.

_While reviewing the code, ask Bob for "rebasing his code" and continue at section 11._

1.  Some history
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
