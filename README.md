# Compass globalPage template (UI Kit)

This project demonstrates the `compass:globalPage` module. It contains a Forge app written in Javascript that creates a global page in Compass called `Hello world`, then then uses [UI Kit](https://developer.atlassian.com/platform/forge/ui-kit/) to display `Hello world!` on the page.

Compass is currently in Beta. See [atlassian.com/compass](https://www.atlassian.com/compass) to request early access to Compass.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app by editing the `src/global-page.js` file.

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
