Git In Couples: FAQ and Tricks
==============================

This FAQ takes the [Git Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html)
as reference providing examples of usage for each command:

## STASH

Use the stash as a clipboard, use `git stash` and `git apply` as copy/paste.

### I need to do something in another place but I don't want to commit yet. What can I do?

```bash
$ git stash
```

Or:

```bash
$ git stash save "A reminder"
```

You can stash as many changes as you want, the will be placed at the stash
stack you can see with:

```bash
$ git stash list
```

Now you can switch to the other branch.

### I need to restore preivously stashed changes:

```bash
$ git stash apply
```

Or:

```bash
$ git stash apply <stash>
```

Or, in case you want to remove it from the list:

```bash
$ git stash pop
```

You can see stashes with:

```bash
$ git stash list
```

### I don't remember what I changed in a stash:

```bash
$ git stash show <stash>
```

### I don't want a specific stash anymore:

```bash
$ git stash drop <stash>
```

### I would prefer clear the stash:

```bash
$ git stash clear
```

Warning: this makes stashed changes **impossible to recover**.

### I made changes in an incorrect branch and want them in a new branch

```bash
$ git stash
$ git stash branch <name for new branch>
```

The latest command can be used to create a new branch from a stash. The branch
is created starting from the commit from which the stash was created, then the
stash is applied. I.e.:

```bash
$ git stash branch <name for new branch> <stash>
```

## WORKSPACE

### I want to see current status:

```bash
$ git status
```

**Trick**: install a [prompt function to display the current branch and status](https://www.google.es/search?q=show+git++in+prompt)
directly in your terminal.

### I've modified some files and I want to see the differences with my former version:

```bash
$ git diff
```

### I've staged some files and I want to see the differences with my former version:

```bash
$ git diff HEAD
```

### I want to stage a file:

```bash
$ git add <some file>
```

### I want to delete a file:

```bash
$ git rm <file or pattern>
```

### I want git to untrack:

```bash
$ git rm --cached <file>
```

### I want to move a file:

```bash
$ git mv <file path> <other folder path>
```

### I want to rename a file:

The same as moving a file but providing a new name in addition to the new
location.

### I want to commit some files:

```bash
$ git add <one file> <another file> ...
$ git commit -m"<commit message>"
```

### I want to commit all the files changed:

```bash
$ git commit -am"<commit message>"
```

Notice you are providing `-a` option which performs a `git add` for each file
you modified. This is unsafe and not recommended when doing lot of changes. It
is better to commit related set of changes by staging, then commit.

### I want to switch to another branch:

```bash
$ git checkout <branch name>
```

### I want to create a new branch:

```bash
$ git checkout -b <new branch name>
```

### How to merge another branch:

```bash
$ git merge <commit or branch name>
```

### I want my local changes applied at the top of another branch:

```bash
$ git rebase <the other branch>
```

### I want to merge only a specific commit:

Technically, you can not import a commit from other branch but you can import
the changes introduced by that commit. The resultant new commit will be
different to the original one but it will introduce the same changeset:

```bash
$ git cherry-pick <commit>
```

### I want to undone a commit:

You can not remove a commit without introducing some risk in your history but
you can revert the changes introduced by some commit:

```bash
$ git revert <commit>
```

This add a new commit to the history anulling the provided one.

### How to get a copy of an entire repository?

By clonning it:

```bash
$ git clone <repository>
```

You can clone local repositories as well! Just provide its path.

### How can I merge a remote branch to my local branch?

```bash
$ git pull <remote> <refspec>
```

This is actually a shortcut for:

```bash
$ git fetch <remote> <refspec>
$ git merge FETCH_HEAD
```

### I want to mimic the history from a remote discarding mine:

```bash
$ git remote update <remote>
$ git reset --hard <remote>/<branch>
```

### How to remove all untracked files and folders in my working tree?

First, run dry, I mean, making nothing just showing waht to do with:

```bash
$ git clean -nd
```

Now you can do:

```bash
$ git clean -fd
```

If you want to keep the folders don't use `-d` option.

## INDEX

### I staged some files I don't want in my next commit:

```bash
$ git reset HEAD <files>
```

### I want to undo the last commit:

You have three options. The first returns you to the staged state just after
commiting:

```bash
$ git reset --soft HEAD^
```

The second returns you to the previous state, before staging any file even:

```bash
$ git reset HEAD^
```

The last recovers the previous state of your files:

```bash
$ git reset --hard HEAD^
```

### The command git diff is empty!

Probably although you have not commited anything, you've staged your changes.

```bash
$ git diff --cached
```

### I want to visualize the differences between the staged changes and a commit:

```bash
$ git diff --cached <commit>
```

### I want to commit staged changes:

```bash
$ git commit -m'<commit message>'
```

Pay attention you are not using the `-a` option because you want to commit
only previously added changes. This is the safest way to commit.

### I made a mistake with the commit message!

Don't panic, just make:

```bash
$ git commit --amend -m"<ammended commit message>"
```

## LOCAL REPOSITORY

### How about to review the history of changes

```bash
$ git log
```

### How to show the diffs between two commits?

```bash
$ git diff <commit1> <commit2>
```

Notice this performs commit1 - commit2 or what to do with commit2 to convert it
into commit1.

### How to show local branches only?

```bash
$ git branch
```

### How to show all branches?

```bash
$ git branch -a
```

### How can I create a new branch following a remote branch?

```bash
$ git branch --track <new branch> <remote>/<branch>
```

### How to only get the changes from a remote **without merging**?

```bash
$ git fetch <remote> <refspec>
```

You could think `git pull` is the symmetric for `git push` but actually it is
`git fetch`. The changes from the branch are now incorporated to the local
index.

### How to publish my history to a remote?

```bash
$ git push <remote> <branch>
```

### How to publish my history to a branch in a remote with a different name?

```bash
$ git push <remote> <local branch name>:<remote branch name>
```

### How to force the remote branch to be the same as my local history?

```bash
$ git push -f <remote> <branch>
```

This is discouraged unless you're the only one working on that branch.

## UPSTREAM REPOSITORY

### How to show remote branches only?

```bash
$ git branch -r
```

### How to delete a remote repository?

```bash
$ git <remote> :<branch>
```
