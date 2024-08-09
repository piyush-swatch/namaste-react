import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element without JSX
const heading = React.createElement("h1", { 'id': 'hello' }, 'Heading without JSX');


// React Element using JSX - not pure JS, hence transpiled by Parcel using Babel package
// Babel transpile/converts jsx to React object (the same object being created by React.createElement)
const jsxHeading = <h1 id="hello" className="jsxClass">Heading using JSX</h1>;

// multiple lines JSX syntax - wrap inside paranthesis
const JsxHeading2 = () => {
    return (
        <h1
            id="hello2"
            className="jsxClass2">
            Heading using JSX multiple lines...
        </h1>)
}

const teacherName = 'Akshay Saini';

// React Functional Components - basically function returning the JSX Element
const HeadingComponent = () => {
    return (
        <div className="container">

            {jsxHeading}

            {/* using component composition */}
            <JsxHeading2 />
            {JsxHeading2()}
            <JsxHeading2 ></JsxHeading2>

            {/* Using javascript statement inside JSX */}
            by {teacherName}

            <h1 id="hello">
                Namaste React functional component
            </h1>
        </div>
    )
}


// get root element from HTML
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

// render
rootElement.render(<HeadingComponent />);