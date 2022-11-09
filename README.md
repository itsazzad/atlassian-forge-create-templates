# Forge Hello World

This project contains a Forge app written in JavaScript that uses a background script to send events to an issue panel.

See the [Forge documentation](https://developer.atlassian.com/platform/forge) to learn more about Forge.

## Requirements

Set up Forge if you haven't already done so. For instructions, see [Getting started](https://developer.atlassian.com/platform/forge/getting-started/).

## Quick start
### Background Scripts
- Install dependencies (inside the `bg-script` directory)::
```
npm install
```
- Modify your background script by editing the files in `bg-script/src/`.
- Build your background script (inside the `bg-script` directory):
```
npm run build
```
### Issue panel

- Modify your issue panel by editing the files in `issue-panel/src/`.
Build your issue panel (inside the `issue-panel` directory):
```
npm run build
```

- Deploy your app by running:
```
forge deploy
```

- Install your app on an Atlassian site by running:
```
forge install
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) to get help and provide feedback.
