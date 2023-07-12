# THE NX CHEATSHEET - NOTE LOTS OF THESE DON"T WORK- THIS LIST IS STILL INCOMPLETE AND REQUIRES SPECIAL #


## Workspace Management

- `npx create-nx-workspace@latest`: Creates a new NX workspace with the latest version.
- `nx generate @nrwl/react:application <app-name>`: Generates a new React application in your NX workspace.
- `nx generate @nrwl/react:library <library-name>`: Generates a new React library in your NX workspace.
- `nx g @nrwl/workspace:empty`: Generates an empty workspace. This can be useful when you want a clean slate to add your own apps and libraries.
- `nx generate @nrwl/angular:app <app-name>`: Generates a new Angular application in your NX workspace.

## Project Management

- `nx generate @nrwl/react:component <component-name> --project=<project-name>`: Generates a new React component in the specified project.
- `nx generate @nrwl/next:page --name=<page-name>`: Generates a new Next.js page.
- `nx generate @nrwl/angular:service <service-name> --project=<project-name>`: Generates a new Angular service in the specified project.
- `nx generate @nrwl/angular:feature <feature-name> --project=<project-name>`: Generates a new Angular feature in the specified project.
- `nx g @nrwl/web:lib data-access --directory=<directory-name>`: Generates a new library for web data-access in the specified directory.

## Building and Running

- `nx build`: Builds all the projects in your workspace.
- `nx build <project-name>`: Builds a specific project in your workspace.
- `nx serve <project-name>`: Serves a specific project from your workspace, typically this is used for local development.
- `nx test`: Runs tests for all projects in your workspace.
- `nx test <project-name>`: Runs tests for a specific project in your workspace.

## Dependency Graph

- `nx dep-graph`: Generates a dependency graph for your workspace, which can be useful for visualizing the dependencies between projects.
- `nx affected:dep-graph`: Generates a report on affected projects, based on changes made.
- `nx affected:apps`: Lists the applications that are affected by changes made.
- `nx affected:libs`: Lists the libraries that are affected by changes made.

## Storybook

- `nx storybook <library-name>`: Runs Storybook for a specific library, useful for developing and testing components in isolation.
- `nx build <library-name>-storybook`: Builds static Storybook files for a specific library, useful for deployment.

## Linting and Formatting

- `nx lint`: Runs linting checks on all code in your workspace.
- `nx lint <project-name>`: Runs linting checks on a specific project in your workspace.
- `nx format:write`: Formats the code in your workspace according to your linter configuration.
- `nx format:check`: Checks the code formatting in your workspace, useful as a check before commits.

## CSS Preprocessors

- `--style=css`: Generates a plain CSS file.
- `--style=scss`: Generates a SASS file.
- `--style=styl`: Generates a Stylus file.
- `--style=less`: Generates a Less file.

## E2E Testing

- `nx e2e <app-name-e2e>`: Runs end-to-end tests for a specific application in your workspace.

## Miscellaneous

- `nx generate @nrwl/workspace:doc`: Generates documentation for your workspace.
- `nx affected:commands`: Displays the commands that would be run for affected projects.
- `nx affected`: Runs tasks for affected projects based on git history.
- `nx workspace-generator`: Generates code scaffolding with workspace generators.
- `nx list`: Lists available generators.
- `nx help`: Displays help information for NX commands.

As mentioned previously, the usage of these commands might vary based on your specific project configuration and the plugins you have installed. For the most accurate information, always refer to the official NX documentation or use the `nx help` command.

---

