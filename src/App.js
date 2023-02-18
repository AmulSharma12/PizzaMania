//You have to remember the point this is the root component.
//and rest of the components are the child components.

// There are basically 2 ways to create react component.
// 1. class component - which are using previously.
// 2. functional component - what we are going to use. (Recommended)

//Same name as file in PascalConvention as it was component.
function App() {
  // this is looking like html but it is not this is called JSX element.
  // return <h1>Hello from the App component</h1>

  //JSX expression must have one parent element.
  //<p>This is a paragraph</p>;

  //solution - is use return (); for multiple line JSX element.
  //and also must wrap it multiple JSX element.
  //   return (
  //     <div>
  //         <h1>Hello from the App component</h1>
  //         <p>This is a paragraph</p>
  //     </div>
  //   );

  // if you want to wrap it without extra div - use react fragments <> </>
  return (
    <>
      <h1>Hello from the App component</h1>
      <p>This is a paragraph</p>
    </>
  );
}

//as you have created the component/function so you have to export it so it can use it
//export default is in-built -> for exporting any module in javascript.
export default App;
