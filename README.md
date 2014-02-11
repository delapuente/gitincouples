Git in Couples
==============

Git in couples is an introductory and practical exercise for using Git
and GitHub. It is intended to be done in couples where one of you performs
as __Alice__, the owner of a repository and the other as __Bob__, a
collaborator.

Through the exercise, Alice and Bob will evolve a basic JavaScript version
of the [Mars Rover Kata](http://craftsmanship.sv.cmu.edu/katas/mars-rover-kata)
to a more sophisticated implementation.

Prerequisites
-------------

You must have [git](http://git-scm.com/downloads) installed on your system and
it must be properly configured to be used from a command line or terminal.

In addition, you should know a little bit about Git, here you have some interesting
lectures:
 * [Git - The Simple Guide](http://rogerdudler.github.io/git-guide/)
 * [Git tutorial by Atlassian](https://www.atlassian.com/git/tutorial)
 * [Git workflows by Atlassian](https://www.atlassian.com/git/workflows)

How to follow the exercise
--------------------------

Once in couples, one of you assumes the role of Alice and the other one is Bob.
Alice should follow the text in
[`alice.md`](https://github.com/lodr/gitincouples/blob/master/alice.md)
while Bob should follow the text in
[`bob.md`](https://github.com/lodr/gitincouples/blob/master/bob.md).

Alice and Bob have fake GitHub accounts:
 * https://github.com/alice
 * https://github.com/bob

You must replace `alice` or `bob` with your username accordingly to the role
you're performing.

From time to time, the text reads _Wait Alice..._ or _Tell Bob..._. Obviously
interactions with Git and GitHub are not synchronous at all and that is the
interesting part of a SCM, of course, but for the sake of better learning, we
will keep this way.

Once finished, delete both repositories from Alice and Bob and the local ones
and start over switching your roles.

Recommendations
---------------

It is possible I made mistakes writing the exercise or you made something worng or simply, something goes
wrong during the exercise. Don't panic and try to apply some of these solutions:

 * You need to interrupt your work and attend other things in another branch. Use the stash:

```bash
$ git stash
```

This saves your current modifications on the top of the stash stack.

```bash
$ git stash apply
```

This applies the last changes saved in the stash stack.

 * You have messed up your working tree **but not commited** and want to discard all your changes.

```bash
$ git checkout .
```

 * You want to undo a commit already published.

The safe answer is you can not but you can revert the changes you made with the last commit.
Locate the commit hash for what you want to revert and do:

```bash
$ git revert <hash>
```

 * You want the commits from the remote repository discarding yours.

```bash
$ git pull <remote> <branch>
$ git reset --hard <remote>/<branch>
```

Replace `<remote>` and `<branch>` accordingly.

Remember you always have reflog. Type:

```bash
$ git reflog
```

You can see a list of recent changes, switches from one commit to another, from one branch to another...
Simply locate the moment you want to recover and do a checkout there using the HASH or the alias (first
or second column).

You have more FAQ and tricks in the [FAQ file](https://github.com/lodr/gitincouples/blob/master/faq.md).

The workflow
------------

The workflow proposed in Git in Couples is the
[Forking Workflow](https://www.atlassian.com/git/workflows#!workflow-forking) and
Alice's repository is the official one. Alice and Bob will integrate their changes
by the use of [pull requests](https://help.github.com/articles/using-pull-requests).

The Mars Rover Kata
-------------------

FYI, here is the kata formulation:

 * Develop an api that moves a rover around on a grid.
 * You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
 * The rover receives a character array of commands.
 * Implement commands that move the rover forward/backward (f,b).
 * Implement commands that turn the rover left/right (l,r).
 * Implement wrapping from one edge of the grid to another. (planets are spheres after all)
 * Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.

Example: The rover is on a 100x100 grid at location (0, 0) and facing NORTH.
The rover is given the commands "ffrff" and should end up at (2, 2)
