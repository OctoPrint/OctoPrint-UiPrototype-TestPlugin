const PLUGIN = "uiprototype_testplugin";

const path = require("path");

function muiExternals({request}, callback) {
    // This contains some black magic to get all @mui/material imports to work via the UMD MaterialUI object.

    if (
        request === "@mui/material" ||
        request === "@mui/material/utils" ||
        request === "@mui/material/styles"
    ) {
        // @mui/material/utils, and @mui/material/styles are directly available
        // on the MaterialUI object. So is obviously @mui/material.
        return callback(null, "var window['MaterialUI']");
    }

    if (/^@mui\/material\/.+$/.test(request)) {
        // @mui/material/* is available in the MaterialUI object, but we need to
        // traverse the object to get to it.
        const name = request.replace(/^@mui\/material\//, "");

        // This needs to be done so that "import Button from '@mui/material/Button';" and
        // the like works, not just "import { Button } from '@mui/material';".
        const ref =
            "{ ...window['MaterialUI']" +
            name
                .split(".")
                .map((n) => "['" + n + "']")
                .join("") +
            " }";
        return callback(null, `var ${ref}`);
    }

    // Nothing to do with @mui/material, so skip it
    callback();
}

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "../octoprint_" + PLUGIN + "/static"),
        filename: "octoprint_" + PLUGIN + ".js",
        library: {
            name: "octoprint_" + PLUGIN,
            type: "umd"
        }
    },
    optimization: {minimize: false},
    externals: [
        {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-is": "ReactIs"
        },
        muiExternals
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults"
                                    }
                                ],
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
