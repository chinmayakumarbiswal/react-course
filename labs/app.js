
const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    [
        React.createElement(
            "div",
            {
                id: "child1"
            },
            [   React.createElement(
                    "h1", {}, "i am child"
                ),
                React.createElement(
                    "h1", {}, "i am 2nd child"
                ),
            ]
        ),
        React.createElement(
            "div",
            {
                id: "child2"
            },
            [   React.createElement(
                    "h1", {}, "i am child"
                ),
                React.createElement(
                    "h1", {}, "i am 2nd child"
                ),
            ]
        )
    ]
)

const heading = React.createElement(
    "h1", {
        id: "heading",
    },  
    "hello world"
);

console.log(parent); // it was a object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // here it converted the object and render or project on root div