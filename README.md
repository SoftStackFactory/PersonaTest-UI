This is the first iteration of [PersonaTest] for SoftStackFactory's Summer 2017 
Cohort. (https://www.softstackfactory.com)

## Skeleton UI

*First we have to scaffold the entire app*. The shared files for this project are found in the [SoftStackFactory GitHub](https://github.com/softstackfactory/PersonaTest-UI).

We are using git-flow to manage this project. (https://github.com/nvie/gitflow)

### Basic Work Flow:
<div align="center">
<h2>STEP 1</h2>
</div>

---
Before starting any work, ALWAYS pull from origin develop
```bash
$ git pull origin develop
```
Explanation of Command:
    The above command will pull down the most recent changes from our remote 
develop branch. If there is a merge conflict during this process, the pulled 
changes should be accepted over your local changes. Once you handle the merge
conflict in the file you will need commit those changes. This will commit those 
changes to your local repository. 

##### Once your develop branch is up to date and ONLY then you proceed to step 2.

---
<div align="center">
<h2>STEP 2</h2>
</div>

---                     
Create a new branch with the below command. All work should be done in your
freature branch.  The name of the feature should be relative to the work you are 
doing. We should be able to look at the branch name and have a relative idea as
to what the branch work relates to.
E.g.: If I am making a component for the test results chart.

```bash
$ git flow feature start test-results-chart
```
---

<div align="center">
<h2>STEP 3</h2>
</div>

---
    Once you have a branch you are free to create your page or component. 
During this process try to be clear in your naming process. We should be able 
to easily understand what the component is or does. The <> are not included in
the below commands.

```bash
$ ionic g page <name-of-page>
$ ionic g component <name-of-component">
```
---

<div align="center">
<h2>STEP 4</h2>
</div>

---
    Commit often, do not wait hours to make commit. Even just simple one or 2 lines
of code make commits. Commits should tell a story and make it easier for you to 
to revert changes. Relying on undo or ctrl-z - command-z to revert changes is a 
bad habit. There are times when it is fine but you can run into a lot of 
problems.   Commit messages should be clear and descriptive as well.

```bash
$ git add .
$ git commit -m "Added Login Button"
```
---

<div align="center">
<h2>STEP 5</h2>
</div>

---
    Once you you are happy with your work or maybe you just want to share it 
with someone on the team. You run the below command without <> around your 
feature name. You can continue to work on your feature and just run this 
command again to update thebranch.

```
$ git flow feature publish <name-of-feature>
```

##### Explanation of command:
    The publish command above pushes the branch up to the remote repository and
and also tracks it. Tracking means your local branch and the remote branch are
linked so that if changes are pushed to the remote branch your local branch 
will know it is not up to date. Just because your local branch and remote branch
have the same name doesn't not mean your local branch is tracking the remote 
branch. 

<div align="center">
<h2>STEP 6</h2>
</div>

---
    Then, go to the GitHub Page 
(https://github.com/softstackfactory/PersonaTest-UI). 
Make a pull request against the develop branch with your feature branch. 
During this time you can go back to [Step 1](https://github.com/SoftStackFactory/PersonaTest-UI/tree/feature/readme-layout#step-1) while you wait for the approval.
Remember to pull before starting.
```bash
$ git pull origin develop
```

##### Explanation For Pull Request:
    This will notify whoever is in charge of the repository that they need to
review the work and merge the feature/branch work if the work is approved.  

             
<div align="center">
<h2>FINAL STEP 7</h2>
</div>

---
   **_DO NOT PROCEED TO THIS STEP IF YOUR PULLREQUEST HAS NOT FINISHED!!!_**

The following command is critical to only do once your work has been integrated
into the remote develop branch. At this time you should have a feature/branch that has
been approved and pulled into the remote develop branch. Once that is complete
enter the folllowing:
```bash
$ git flow feature finish <name-of-feature>
```
##### Explanation for feature finish:
    This command will merge your local feature/<feature-name> branch into 
your local develop branch and delete the remote feature/<feature-name> branch
.     
Once you've done that, check for any changes:
Rinse, and repeat!


Command git commands:

```bash
$ git branch
```
   Lists local branches

```bash 
$ git checkout <branch-name>
```
   Used to switch between branches.
  
```bash
$ git branch -u <remote-name>/<branch-name>
```
    This above command will track the the remote branch. Run this command while 
on the local branch that you wish to track the remote branch.
   For example if your local develop branch is not tracking the remote develop
   branch the command would look like this. Origin is the name of our remote.
```bash
phortonssf:~/workspace/PersonaTest-UI (develop) $ git branch -u origin/develop
```
    In the above command notice that (develop) is the name of the local branch
you are currently on. So after this command our local develop branch and 
origin/develop branch are linked. Any changes pushed to the origin branch can
be checked now by using git status.

```bash
$ git status
```
    Checks to see if your local branch is up to date with the tracked remote
branch.

---

