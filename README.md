# Forge workflow condition template (custom UI)

This project demonstrates the Jira expression condition from the [jira:workflowCondition](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-workflow-condition/)
module, which uses [custom UI](https://developer.atlassian.com/platform/forge/custom-ui/).

This project contains a Forge app written in Javascript that registers a workflow condition, displays the user interface when creating,
editing, or viewing condition configuration, and subscribes to Jira events for [failed expressions](https://developer.atlassian.com/platform/forge/events-reference/jira/#jira-expressions-events).

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for Forge documentation
and tutorials.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions on how to set up.

## Quick start

- Install dependencies from `package.json` (inside the root directory):

```shell
npm install
```

- Install dependencies from `static/custom-ui-expression/package.json` (inside the `static/custom-ui-expression` directory):

```shell
npm install
```

- Modify your app by editing `manifest.yml`, `src/index.js`, and the files in `static/custom-ui-expression/src/` directory.

- Build your app (inside the `static/custom-ui-expression` directory):

```shell
npm run build
```

- Deploy your app (inside the root directory):

```shell
forge deploy
```

- Install your app on an Atlassian site (inside the root directory):

```shell
forge install
```

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up changes automatically. You don't need to rerun the `install`
  command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
