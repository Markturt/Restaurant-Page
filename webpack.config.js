const path=require("path");
const HtmlWebPack=require("html-webpack-plugin")



module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    plugins:[
        new HtmlWebPack({
            filename:"index.html",
            template:"./src/index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:"asset/resource"
            }
        ]
    },
    devtool:"inline-source-map",
}