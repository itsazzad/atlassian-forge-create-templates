# Compass teamPage template (UI Kit)

This project demonstrates the [compass:teamPage](https://developer.atlassian.com/platform/forge/manifest-reference/modules/compass-team-page/) module. It contains a Forge app written in Javascript that creates an app team page called `Hello world`, then uses [UI Kit](https://developer.atlassian.com/platform/forge/ui-kit/) to display `Hello world!` on the team page.

Compass is currently in Beta. Visit [go.atlassian.com/get-compass](https://go.atlassian.com/get-compass) to get started.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install top-level dependencies:
```
npm install
```

- Modify your app by editing the `src/team-page.js` file.

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

