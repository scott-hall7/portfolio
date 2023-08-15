export const entry = './src/index.js';
export const module = {
    rules: [
        //...
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            ],
        },
    ],
};