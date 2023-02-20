## 🚀 Pizza website using ReactJS

- Have basic understanding of react.
- create react application using following command
```cmd
    npx create-react-app pizza-project
```

- Run the application for yarn and npm.
```command
    > yarn start
    > npm start
```

- In public folder , we have index.html file which is the only html file in the project and we are not going to create new html files as we know react known for single page application. we just render the UI/JSX elements in  div with id root.

- In src folder, we are going to write/create the actuall code/project for our application.

- Here, index.js is the entry point for the application.
    - Here with the help of render() function 
    present in the react-dom in which will return the JSX(combination of html and javascript).
- So, App component is basically the root component of the application while rest of component is child component.
- There are 2 ways to create the components - Class component and Functional component(recommended).
- While naming the any components, must use PascalConvention.
- For returning single JSX elements is easy.
```javascript
    function App() {
        return <h1> Hello from the App component</h1>;
    }
```
- For returning multiple JSX elements must wrap in ```<div> </div>``` or react fragments ```<> </>```. 
```javascript
    function App{
        return (
            <div>
                <h1>Another Route App component</h1>
                <p>P</p>
            </div>
        );
    }


    function App{
        return (
            <>
                <h1>Another Route App component</h1>
                <p>P</p>
            </>
        );
    }
```

- export the component so that component can use outside the file(App.js) as well.
```javascript
    export default App;
```

- In order to use the component(App component in App.js) must import it and use it with the following syntax.
```javascript
//import the component
import App from './App.js'

//using the component 
 <App/>
```
- NOTE : use the component name same as filename also at the time of importing it will increase readibility is you use the same name as component.
- You can use different names as well but same name will increase the readibility of the code.

## 🚀 Creating different pages using React Router Library.

- First install react-router-dom.

```command 
> yarn add react-router-dom
> npm i react-router-dom
```
- Now import the BrowserRouter/Switch(Routes)/Routes from react-router-dom.
```javascript
 import {BrowserRouter as Router, Routes, Route} from    'react-router-dom';
```
- In order to avoid long naming use the alias "as" for e.g. look into BrowserRouter as Router.
- Now wrap it in the following sequence
- previous versions
```javascript 
function App() {
    <>
        <Router>
            <Switch>
                <Route path="/" component={Home}></Route>
            <Switch>
        <Router>
    </>
}
```

- new version
```javascript 
function App() {
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            <Routes>
        <Router>
    </>
}
```
- NOTE : Switch/Routes is basically used to stop matching the path.
- without switch it will continue its path matching and it will render everything.
- with switch it will stop searching when the path matches.

### 🚀 Using Link in react-router-dom

- For avoiding the page from getting refresh we will use Link provided by react-router-dom.
- Instead of normal html elements.
```html
    <Link to="/"> </Link>
    <Link to="/about"> </Link>
```