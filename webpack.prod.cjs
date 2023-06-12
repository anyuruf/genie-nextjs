module.exports = merge(common('production'), {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: ['default', { mergeLonghand: false }]
                }
            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [
                    ...stylePaths
                ],
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
});