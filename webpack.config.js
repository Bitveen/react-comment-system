module.exports = {
    entry: __dirname + "/src/app.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname + "/src",
        alias: {
            CommentBox: "components/CommentBox.jsx",
            CommentForm: "components/CommentForm.jsx",
            CommentList: "components/CommentList.jsx",
            Comment: "components/Comment.jsx",
            actions: "actions/actions.jsx",
            reducers: "reducers/reducers.jsx",
            configureStore: "store/configureStore.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /.\jsx?$/,
                include: __dirname + "/src"
            }
        ]
    }
};
