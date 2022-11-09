# Forge "Configurable validation"

This project contains a Forge app written in Javascript that validates the input value of a Jira custom field using admin-provided RegExp.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge,
including the [documentation of Forge custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/#jira-custom-field).

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install dependencies (inside of the root directory):

```sh
npm install
```

- Install dependencies (inside of the `static/configurable-validation` directory):

```sh
npm install
```

- Modify your app by editing the files in `static/configurable-validation/src/`.

- Build your app (inside of the `static/onfigurable-validation` directory):

```sh
npm run build
```

- Build and deploy your app by running:

```sh
forge deploy
```

- Install your app in an Atlassian site by running:

```sh
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:

```sh
forge tunnel
```

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
