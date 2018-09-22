const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
      }
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options:{
            modules: true,
            localIdentName: '[local]_[hash:base64:10]',
            importLoaders: 1 
          }
        },
        'less-loader'
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'img/[hash].[ext]'
          }
        }
      ]
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};