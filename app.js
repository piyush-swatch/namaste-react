const nestedElement = React.createElement('div', {'id': 'parent'},
    [
        React.createElement('div', {'id': 'child'}, 
        [React.createElement('h1', {'id': 'heading'}, 'I am a heading'),
        React.createElement('h2', {'id': 'heading2'}, 'I am a heading 2')] 
        ),
        React.createElement('div', {'id': 'child2'}, 
        [React.createElement('h1', {'id': 'heading'}, 'I am a heading'),
        React.createElement('h2', {'id': 'heading2'}, 'I am a heading 2')] 
        )  
    ]  
);

console.log(nestedElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElement);