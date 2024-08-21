{
  /* 
<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div> 
*/
}

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "Hey I am grand child1"),
      React.createElement("h2", {}, "Hey I am grand child2"),
    ],
    [
      React.createElement("h3", {}, "Hey I am grand child3"),
      React.createElement("h4", {}, "Hey I am grand child4"),
    ]
  )
);

console.log({ element });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
