# Forge UI modifications hello world

This project contains a Forge app written in Javascript with a [UI modifications](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-ui-modifications/) module. The module displays `Hello World!` in the summary field when creating an issue with project id 10000 and issue type id 10001. This UI modification is included in the Jira instance automatically when you install it. This happens through a "installation" lifecycle event.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions on how to get set up.

## Quick start

- Modify your app by editing the files in `static/hello-world/src/`.

- Build your app (inside of the `static/hello-world` directory):
```
npm run build
```

- Deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to re-run the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
