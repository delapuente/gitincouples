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

So  Bob is asking you for reviewing a pull request. Perfect, navigate to:
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

_Some real collaboration time: ask Bob for teach you how to make a pull request!_

_After, teach Bob how to review and accept the pull request_
