# Forge Hello World

This project contains a Forge app written in Javascript that registers a workflow condition and listens to Jira events for 
[failed expressions](https://developer.atlassian.com/platform/forge/events-reference/jira/#jira-expressions-events). 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify the Jira expression used in the workflow condition by editing the `manifest.yml` file.
- You can also modify `avi:jira:failed:expression` trigger function by editing the `src/index.js`.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
