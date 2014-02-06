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

And add a reference to your GitHub remote repository:

```bash
$ git remote add origin https://bob@github.com/bob/marsroverkata.git
```

As you're contributing to another's project, let's add another remote for it.

```bash
$ git remote add upstream https://bob@github.com/alice/marsroverkata.git
```

**Note**: here you must replace `bob` by your username and `alice` by your mate's username.

_Wait for Alice to update her repository..._

