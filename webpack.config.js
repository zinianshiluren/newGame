var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// 常用路径
var ROOT_PATH = path.join(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'app');
var BUILD_PATH = path.join(ROOT_PATH, 'build')


module.exports = {
	entry: path.resolve(APP_PATH, 'app.jsx'),

	output: {
		path: BUILD_PATH,
		// publicPath: BUILD_PATH,
		filename: 'bundle.js'
	},

	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: BUILD_PATH,
		port: '8086',
		disableHostCheck: true,
	},

	resolve: {
		extensions: ['.js', '.jsx', '.sass', 'css']
	},

	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.jsx?$/,
			loaders: ['babel-loader']
		}, // loader 的配置
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				query:{
					name:'img/[name]-[hash:5].[ext]'  //这里img是存放打包后图片文件夹，结合publicPath来看就是/webBlog/build/img文件夹中，后边接的是打包后图片的命名方式。
				}
			},
			{
				test: /\.(js|jsx)$/,
				loader:'babel-loader',
				include: APP_PATH,
				query: {
					plugins: [
						["react-transform", {
							transforms: [{
								transform: "react-transform-hmr",
								imports: ["react"],
								locals: ["module"]
							}, {
								"transform": "react-transform-catch-errors",
								"imports": ["react", "redbox-react"]
							}]
						}]
					]
				}
			}
			]
		},
}