import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader'

const __dirname = new URL('.', import.meta.url).pathname;

const reactAppsConfig = {
    name: 'react-webpack-config',
    mode: "production",
    context: path.resolve(__dirname, './react'),
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    entry: {
        'home': './home/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name]-react.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "index.react.html"),
          filename: "index.react.html",
        }),
    ],
}

const vueAppsConfig = {
    name: 'vue-webpack-config',
    mode: "production",
    context: path.resolve(__dirname, './vue'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue']
    },
    entry: {
        'home': { import: './home/index.js' }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name]-vue.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.vue.html"),
            filename: "index.vue.html",
        }),
    ]
}

const nativeAppsConfig = {
    name: 'navtive-webpack-config',
    mode: "production",
    context: path.resolve(__dirname, './native'),
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        'home': './home/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name]-native.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "index.native.html"),
          filename: "index.native.html",
        }),
    ],
}

const config = [reactAppsConfig, vueAppsConfig, nativeAppsConfig]

export default config;