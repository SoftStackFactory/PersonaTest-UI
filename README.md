This is the first iteration of [PersonaTest] for SoftStackFactory's Summer 2017 Cohort. (https://www.softstackfactory.com)

## Skeleton UI

*First we have to scaffold the entire app*. The shared files for this project are found in the [SoftStackFactory GitHub](https://github.com/softstackfactory/PersonaTest-UI).

We are using git-flow to manage this project. (https://github.com/nvie/gitflow)

### Basic Work Flow:

Take the name of the page you're working on `MyPersonaTestPage`, and that is the name of the feature to be used when using the `ionic g page` command below:

```bash
$ ionic g page MyPersonaTestPage
$ git flow feature start MyPersonaTestPage
```

Then, to publish it, cd into the base directory `PersonaTest` and run:

```bash
$ git add .
$ git commit -m "descriptive message of changes"
$ git flow feature publish MyPersonaTestPage
```

Then, go to the GitHub Page (https://github.com/softstackfactory/PersonaTest-UI) and make a pull request against the develop branch with your feature branch.

Once you've done that, check for any changes:
```bash
$ git pull origin develop
```

Rinse, and repeat!
