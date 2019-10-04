# Hacktoberfest

### Style

- Prettier configuration is at `.prettierrc.json` and typescript/javascript code must be formatted using that config and prettier before getting merged into master. This project
is setup with husky which triggers tests for lint and prettier errors pre-push. This means you will need to fix these errors before you are able to push any code.

### Tests
- All tests will need to pass before getting merged into master.  Run `yarn test` or `yarn test:watch` to check that your additions do not break any tests. Similar to how to styles
are checked pre-push, tests also run and must pass before any code can be pushed. 

### Installation

```shell
npm i
```

### Commands

- `yarn start:web` - runs the Web version of the app in the development mode
- `yarn build:web` - builds the Web version of the app for production to the **dist-web** folder
- `yarn start:ios` - runs the iOS version of the app and attempts to open in the iOS Simulator if you're on a Mac and have it installed
- `yarn start:android` - runs the Android version of the app and attempts to open your app on a connected Android device or emulator
- `yarn start:windows` - runs the Windows version of the app
- `yarn start:rn-dev-server` - runs react native (RN) development server

---

Created by **create-rx-app@0.6.4**
