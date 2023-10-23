const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "umd",
		clean: true
	},
	resolve: {
		extensions: [".js", ".ts", ".tsx", ".jsx"]
	}, 
	externals: {
		react: "react"
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
		],
	}
}