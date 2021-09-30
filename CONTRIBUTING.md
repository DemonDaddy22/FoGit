# Contribution Guidelines

Firstly, I'd like to thank you for sparing your precious time towards this project! You are AWESOME and so are your contributions to open-source projects!

## Table of Contents

1. [About the Project](#about-the-project)
2. [Getting Started](#getting-started)
3. [Issue First](#issue-first)
4. [PR Next](#pr-next)
5. [Best Practices](#best-practices)

## About the Project

FoGit is an open-source project which aims to provide an easy tool to the user to find out

- who all are not following back the user
- who all are following the user even when the user is not following them
- who all are followed by the user and are following back the user

*This is bound to get updated as the project unfolds!*

## Getting Started

This project is being developed using TypeScript, ReactJS and SASS. Prior knowledge in these technologies would definitely be helpful to the contributor.
To make contributions to the project, fork the project and clone it in your local setup using git or by downloading the .zip folder. To start the project locally, make sure you have Node and NPM installed, and the Node version is `14.17.0`. Install the dependencies thereafter and you'll be all set to run the project locally.

```
1. git clone *repo-link*
2. node -v
3. npm i
4. npm start
```

## Issue First

It is a recommended practice to open an issue first before starting with the changes/development. The issue must describe the problem you might be facing, or a feature/enhancement you would like to propose. This helps other contributors and maintainers to keep a track of development happening on the project.
To create an issue on this project, follow the [ISSUE_TEMPLATE](.github/ISSUE_TEMPLATE/issue_template.md).

## PR Next

Once you are done with creating an issue and developing the changes, it is time to merge them into the `master` branch. For this you need to create a Pull Request (PR) for the master branch. Each PR needs to pass certain pre-defined checks before the PR is ready to be reviewed. If your PR doesn't pass the checks, kindly make the necessary changes so that it is easier for the reviewer to review your code.
To create a PR on this project, follow the [PULL_REQUEST_TEMPLATE](.github/PULL_REQUEST_TEMPLATE/pull_request_template.md).

## Best Practices

Avoid adding any unncecessary packages and modules as they can increase the repo size and can affect the end app. Stick to the coding practices followed throughout the code base to ensure consistency. Give meaningful names to your branches eg. if you are working on a new feature, name it as `feature/*feature-name*`, for bug fix, `bugfix/*bug-name*`, and for any enhancements, `enhancement/*brief-enhancement-description*`.

Be kind and keep contributing!.
