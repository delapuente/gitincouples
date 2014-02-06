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

First thing you notice when
