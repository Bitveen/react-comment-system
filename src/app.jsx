import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import CommentBox from "CommentBox";


const store = require("configureStore").configure();


// Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");


render(
    <Provider store={store}>
        <CommentBox />
    </Provider>,
document.getElementById("root"));
