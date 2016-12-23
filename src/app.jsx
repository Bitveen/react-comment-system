import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import CommentBox from "CommentBox";


const store = require("configureStore").configure();

store.subscribe(() => {
    console.log("state changed", store.getState());
});

// Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");


// Styles
require("style!css!sass!styles/app.scss");

render(
    <Provider store={store}>
        <CommentBox />
    </Provider>,
document.getElementById("root"));
