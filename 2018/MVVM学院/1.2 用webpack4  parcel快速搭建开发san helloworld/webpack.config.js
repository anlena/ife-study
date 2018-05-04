const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test: /.san$/,
        use: [
          'san-loader',
        ]
      },{
        test: /.html$/,
        loader: 'html-loader'
      },{
        test:/.css$/,
        loaders:["style-loader", "css-loader"]
      },{
        test: /.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },{
        test:/.(jpg|png|gif|eot|svg|woff|woff2|ttf)$/,
        loader:'url-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  devServer:{
    contentBase:'./dist'
  }
}