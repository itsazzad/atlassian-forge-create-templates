# Compass Data Provider Template

This project demonstrates the Compass `dataProvider` module. It contains a Forge app written in Typescript that populates a Compass component with metrics and event when a matching link is added.

Compass is currently in Beta. See [atlassian.com/compass](https://www.atlassian.com/compass) to get access to Compass.

For information about how to use this module, read [this tutorial](https://go.atlassian.com/compass-data-provider). General Forge documentation is available [here](https://developer.atlassian.com/platform/forge).

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app by editing the `src/index.ts` file.

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

- Add the link `https://test.example.com/new` to a component to see it populate with sample events and metrics!

---

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
