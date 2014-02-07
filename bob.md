Bob
===

You are Bob, a software developer and an open source contributor. You are eager
to help others with their code and make interesting contributions to open source
projects.

_Wait Alice for requesting your collaboration..._

1. Fork Alice's repository
--------------------------

Enter https://github.com/alice/marsroverkata, log in and click on the _Fork_ button
near the top-right corner. 

**Note**: replace `alice` with your mate's username.

If you belong to an organization you will be asked wich organization you want for this
project to be forked to. If not, the fork process starts immediately.

Now you have a remote copy of Alice's repository!

2. Clone the repository
-----------------------

Locate a place in your filesystem to put the remote code. It is not necessary to create
the specific folder for the kata, just choose a place for your projects.

Now open a terminal inside there and clone the repository:

```bash
$ git clone https://github.com/bob/marsroverkata.git
```

**Note**: remember to change `bob` by your username.

Enter the new folder named after the repository:

```bash
$ cd marsroverkata
```

As we cloned from a repository, an automatically added remote called `origin` is already
set. To see it:

```bash
$ git remote -v
```

Remember the `-v` or git won't show the URLs.

To prevent git for asking our user again and again it is better to include the username
in the remote URL. So set the remote url by typing:

```bash
$ git remote set-url origin https://bob@github.com/bob/marsroverkata.git
```

As you're contributing to another's project, let's add another remote for it.

```bash
$ git remote add upstream https://bob@github.com/alice/marsroverkata.git
```

**Note**: here you must replace `bob` by your username and `alice` by your mate's username.

_Wait for Alice to update her repository..._

3. Update your local repository
-------------------------------

Alice is requesting your help for improving her code. You first need to get that code. You
set a remote for Alice's repository named `upstream`. Use it to pull the changes into your
local repository.

```bash
$ git pull upstream master
```

You will see a brief of the changes and you can see the differences between your current
updated version and the former one by showing asking for a _diff_ with `ORIG_HEAD`.

```bash
$ git diff --name-status ORIG_HEAD
```

The `A` in the report stands for **Added**. If you want see all the differences, type:

```bash
$ git diff ORIG_HEAD
```

4. Spliting source code
-----------------------

First thing you notice when looking at Alice code is that all the source code is in the same
place so you decide to split the source into three files:

 * `grid.js` with the Grid object.
 * `rover.js` with the Rover object.
 * `test.js` with the Test code.

To do this, you're going to create a dedicated branch for this end:

```bash
$ git checkout -b split-sources
```

Double-check you are in the new branch by typing:

```bash
$ git status
```

Now you can create the three files and redistribute the code. If you're not sure about what to do,
decompress the [already split sources](https://github.com/lodr/gitincouples/raw/master/kata/splitsource.zip)
into your working tree and replace when asked. 

If splitting manually, don't forget to adjust the HTML by replacing the reference to `kata.js` script
by the three new files. The `test.js` script **must be the last**.

5. Commiting your changes
-------------------------

Now you've (almost) finished with the split, you want to ask Alice for reviewing your code and merge into
master if she agrees with the the modifications. Take a break: step by step!

First you need to stage your changes. The `stage` state is the hall before commit. When files are
staged they are added to the index but nothing more. Your changes won't be effective until you 
commit them. To check the current state of your working tree, type:

```bash
$ git status
```

You will see there are new untracked files and the `index.html` has been altered. Pay attention to
git explanations saying how to revert the changes you made to the files. Start by adding the new files
with:

```bash
$ git add "*.js"
```

With that `*.js` pattern you're saying you want add all the files ending in `.js`. Check the status:

```bash
$ git status
```

Now you see the new files are staged, under `Changes to be committed:` but the index remains unstaged.

Add it by typing:

```bash
$ git add index.html
```

You can add individual files by providing the complete path instead of a pattern.

Befor committing, notice you don't need the `kata.js` file anymore. You can get rid of the file by
simply deleting it. After deleting, check the status again:

```bash
$ git status
```

You will see another unstaged modification: the deletion! But you can not use `git add` as there is
nothing to add. You should use:

```bash
$ git rm kata.js
```

Check the status now to discover a weird thing: git shows there has been a rename from `kata.js` to
`rover.js`:

```bash
renamed:    kata.js -> rover.js
```

Don't worry, this is becasue most of the code in `kata.js` has ended inside `rover.js` so git thinks
you're rewritting the file and renaming it.

Now all your code is ready to be commited, do it:

```bash
$ git commit -m'Source is now split in three files'
```

Finally, publish the changes in your public repository:

```bash
$ git push origin split-sources
```

See? The first parameter after `push` is your repository and the second one is the branch name
**for your remote repository**. You always pushes the branch where you currently are. Normally
local and remote names coincide.

See your branch online navigating to: https://github.com/bob/marsroverkata/tree/split-sources

6. Asking for review
--------------------

In the online branch view, you'll see a green button just before the branch switcher. Click on it
to start filinf a pull request.

Click on _Create pull request_ and use the next screen to add a description or review your changes
if you want. Finally, send the PR by clicking on _Send pull request_. Once sent, you have the 
opportunity of setting the asignee for this PR at the right of the code.

_Choose Alice and ask her for the review!_

7. Update your `master` branch
------------------------------

Now Alice has accepted your changes, go to your local repository ensure in which branch you're by
showing local branches:

```bash
$ git branch
```

The current branch is marked with an asterisc (`*`). Change to the `master` branch:

```bash
$ git checkout master
```

With `checkout` you can switch from branch to branch. Before, when creating the branch for splitting
the source, you provided the `-b` option to say git you were switching to a **new branch**.

When switching to `master` you will read:

```
Your branch is ahead of 'origin/master' by 1 commit.
```

This is because you are a contributo of the `upstream` repository and you are using your own remote
repository to hold feature branches only. Nothing is keeping your master synchronized with the official
repository. This taks depends on you.

Let's synchronize but before, update your master with the latest changes. You should never start a feature
without updating your master branch before.

```bash
$ git pull upstream master
```

I remind you can see a summary of differences with:

```bash
$ git diff --name-status ORIG_HEAD
```

Now push all the changes to your remote repository.

```bash
$ git push origin master
```

Notice you are working with `upstream` and `origin`.

The first one is the _official_ repository where you're contirbuting. You never push to `upstream`,
only use it to get the latest `master` updates.

The second one is the _remote_ repository you own and use to develop new features. Push to origin
whenever you want.

_Now wait Alice for asking you how to teach he about making a pull request. You will be her reviewer
and Alice will teach you how to review the code and merge. Remember you are mergin to Alice's repository
so you need to navigato to https://github.com/alice/marsroverkata/pulls in order to see the pending
pull requests. Once merged, continue reading._

8. Update your `master` branch (again)
--------------------------------------

And get used to it because this is the regular cycle:
 
 1. Pull from `upstream`
 2. Brach for a new feature
 3. Push ot `origin`
 4. Continue developing until the feature is ready
 5. Make a PR and ask for review
 6. Address the issues if any; if not, go to 8
 7. Update the PR and go to 5
 8. Get your PR merged
 9. Go to 1

So, switch to the `master` branch:

```bash
$ git checkout master
```

And update:

```bash
$ git pull upstream master
```

9. Avoiding repetition when turning
-----------------------------------

_Please, ignore Alice until you complete this step._

Now you realize that `rover.js` contains a lot of repetition and you want to propose some changes
to Alice. So you will make a new branch called `avoiding-repetition`. Come on! Go on...

```bash
$ git checkout -b avoiding-repetition
```

See at the contents of `rover.js`, members `turnRight` and `turnLeft` can be refactored to a better
approach. Replace both by:

```javascript
  turnRight: function () {
    this.turn('right');
  },
  turnLeft: function () {
    this.turn('left')
  },
  turn: function (direction) {
    var currentIndex = this.orientations.indexOf(this.orientation);
    var newIndex = currentIndex + (direction === 'right' ? 1 : -1);
    if (newIndex < 0) {
      newIndex = this.orientations.length + newIndex;
    }
    this.orientation = this.orientations[newIndex];
  },
  orientations: 'nesw'
```

And, of course, check the tests continue passing!

So now stage and commit your changes:

```bash
$ git add js/rover.js
$ git commit -m'Avodiing some repetition'
```

Mmmm, may your comment is too short. You could provide a better explanation about what are you doing.
To fix a commit comment, type:

```bash
$ git --amend -m'Avoiding some repetition by refactoring turnRight and turnLeft'
```

The key is the `--amend` parameter. It allows you to change the commit message. Please, **never** amend
an already published commit. **Published history is sacred!**

So, now, publish your code and prepare a PR.

_Ask Alice to review your code and wait for Alice because Alice will be requesting your review as well.
Indeed, if you have received her request, Attend it now! Please don't merge her code. You can suggest
a good improvement._

10. Commenting on a PR
----------------------

While reviewing the code of Alice you notice two things:

 1. Both of you had the same idea and you're editing the same file. Don't panic and keep reviewing.
 2. The Alice refactor is ok but she is accesing `this.position[0]` and `this.position[1]` repeatedly
which can harm performance.

So leave a comment in the code asking her for trying to minimize the access.

_Wait for Alice modifications. Once you have it, merge her PR. Then Alice will start to review your
code, wait for her to finish._

11. Update your `master` branch!
--------------------------------

You have realized you don't need to change your branch a bit because git has guessed how to merge your
changes. This does not always happend but it's good when it does!

Please, update your `master` branch again. No clues this time.


