const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const PORT = 8000;

if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	const express = require('express');
	const server = express();


	server.use(express.static(__dirname + '/build'));

	server.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'build/index.html'));
	});

	server.listen(PORT, () => console.log(
		`Express Production Server is now running on http://localhost:${PORT}/`
	));
}