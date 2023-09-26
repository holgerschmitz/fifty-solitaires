[![Support Ukraine Badge](https://bit.ly/support-ukraine-now)](https://github.com/support-ukraine/support-ukraine)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Fifty Solitaires: Updating the Project

It has been well over a year since I last posted about this project. I have been busy with other projects and had to leave this one on the back burner.
A lot has changed since then and the first thing that I now need to do is upgrade all the project's dependencies to their latest versions. This might not 
be very interesting from a software development perspective, but it is a necessary step to ensure that the project is up to date. So, this post will be 
all about upgrading dependencies, making adjustments to the configuration and fixing any issues that might arise. As a little taster, I can already tell 
you that the upgrade of Storybook was the most challenging part of this process. But more on that later.

### Attempting to run the last version of the project

Before I started upgrading dependencies, I wanted to make sure that the project still worked as expected. So, I cloned the repository and ran the following
commands.

```bash
npm install
```

Right away, I got error messages from `node-gyp.js` when it was trying to build the binaries of `node-sass`. I have seen this error before and it is usually
caused by the fact that the version of `node-sass` is not compatible with the version of Node.js that I am using. So, I checked that I currently have Node.js
version **20.5.1** installed and then I checked the `node-sass` [documentation](https://www.npmjs.com/package/node-sass) to see that I need version **9.0.0** of node-sass. So, I updated the `package.json` file to use the current latest version.

```json
"node-sass": "^9.0.0",
```

Remember that I had already created some components and stories for Storybook, but I had not yet implemented the main application. So, I ran Storybook to see
if the components would still show up as expected.

```bash
npm run storybook
```

Storybook uses Webpack 4 to bundle the project. This emitted the following error message

```bash
Error: error:0308010C:digital envelope routines::unsupported
```

Again, this is a compatibility problem with Node. On StackOverflow, I found a [solution](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported) that suggested to tell Node.js to enable the legacy openssl provider. This can be done
by setting an environment variable.

```bash 
export NODE_OPTIONS=--openssl-legacy-provider
npm run storybook
```

This time, Storybook started up and I could see the project in the browser. At this point, I am hoping this environment variable will be needed once 
I have upgraded all the dependencies. But for now, I will leave it in place.

### Upgrading dependencies

Now that I can see the `Card` and `Pile` components in Storybook, I will start upgrading the dependencies. 

Remove all entries in `dependencies` from the `package.json` file.

```json
"dependencies": {},
```

```bash
rm -rf node_modules package-lock.json 
npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom react node-sass react-dom react-scripts typescript web-vitals
```

```bash
npm start
```

```bash
npx storybook@latest upgrade
```

```bash
? Do you want to run the 'new-frameworks' migration on your project? › (Y/n)
```
