
### Forex trading project
### normal running commands:
1- open the project in cmd 
2- run: `npm i`
3- run: `npm start --open`
the browser should automatically open on http://localhost:3000

### in case of dependency issues, or collision with the port 3000:
1- run `npm i`
2- run `npm run build`
3- run `npm install -g serve`
4- run `serve -s build`
5- open your browser on http://localhost:3000
this would run a seperate static server away from the normal react-script server, running the production version of the code.

### please run `npm i` before trying any of the below scripts

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
