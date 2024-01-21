const path=require("path");



module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist"),
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["css-loader","style-loader"]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:"asset/resource"
            }
        ]
    },
    devtool:"inline-source-map",
    devServer:{
        static:"./dist"
    }
}