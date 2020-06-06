## App Description
This project can be seen in production at [sw.mattypalka.usermd.net](http://sw.mattypalka.usermd.net).
If you want to run it locally clone / download this repo, run npm install to install all packages and use start script explained below.

This is a Star Wars Wiki page based on [SW API](http://swapi.dev/) build in React with React Router.

### What can be done? And how does it work?
User can navigate through different categories provided by the API and see relevant elements in given category. (e.g. Planets in the the Star Wars Universe).

Selecting any element in the category will provide more details on it, as well as, provide the information in what movie this particular element could be seen.

Similarly in the "Films" category, after selecting particular movie the user is able to see characters, planets and starships that were in the movie. Selecting any of those items will bring the user straight to it's detailed page.

#### Searching
User is able to search for particular universe element. Searchbar is always present on top of the app, there the user can select the category that they want to search in and they can provide a search query (i.e. name of character or vechicle). Searching will return all items relevant to the query.

If no search query is provided, the user will be presented with entire selected category.

#### Navigation 
If there are more than 10 items relevant to the search / category, the user has access to up and down arrows on the right side of the screen. Clicking on them will navigate to previous / next search pages respectively.

User can also navigate straight to given item if they know the direct URL to them 

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
