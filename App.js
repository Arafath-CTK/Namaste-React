const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from REACT!"
);

console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
