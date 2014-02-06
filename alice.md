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

_Ask Bob for collaboration_


