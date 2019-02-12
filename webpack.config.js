var path = require("path");
module.exports = { 
    entry: ['./src/main.js'], 
    output: { 
        path: path.resolve(__dirname,"lib"), 
        filename: 'fqm_douyu.js', 
    }, 
    module: { 
        loaders: [{ 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader',
            query:{
                presets:["env"]
            } 
        }] 
    } 
} 