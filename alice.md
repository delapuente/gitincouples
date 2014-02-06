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


