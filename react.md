#Configuración de entorno de react

## Primeros pasos

1.Crea una carpeta con el nombre de tu proyecto.
2.Entra a la carpeta e inicializa el repositorio con git y con npm
** git init
** npm init -y 'Genera un archivo package json preconfigurado'
3.Crea las carpetas public y src
4.Dentro de public crear index.html.
5.Dentro de src crear index.js
6.En la raíz de tu proyecto instalar react y react-dom
\*\* npm install react react-dom

## Construcción de la app

1.Crear primer componente, dentro de src crear carpeta components y crear archivo FirstComponent.jsx, ejemplo:

import React from 'react'

const FirstComponent =()=>{
return(

<h2>Primer Componente</h2>
)
}
export default FirstComponent;

2.En el archivo index.js, escribir lo siguiente es:

import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from './components/FirstComponent'

ReactDOM.render(<FirstComponent/>,document.getElementById(app))

3.En el archivo index.html, escribir lo siguiente:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEX VIDEO</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>

4.Instalar babel
\*\*npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

5.Crear .babelrc en la raiz del proyecto archivo y escribir lo siguiente:
{
"presets": [
"@babel/preset-env",
"@babel/preset-react"
]
}

6.Instalar webpack
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin html-loader --save-dev

7.Crear el archivo webpack.config.js y escribir el siguiente contenido:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(\_\_dirname, 'dist'),
filename: 'bundle.js',
},
resolve: {
extensions: ['.js', '.jsx'],
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader',
},
},
{
test: /\.html$/,
use: {
loader: 'html-loader',
},
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: './public/index.html',
filename: './index.html',
}),
],
devServer:{
contentBase: path.join(\_\_dirname,'dist'),
compress: true,
historyApiFallback:true,
port: 9000
}
};

8.Agregar el siguiente script al package.js

\*\* "build": "webpack --mode production"

9.Instalar sass
\*\*npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

10.Agregar configuraciones de sass a webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// ...

module: {
rules: [
{
test: /\.(s\*)css$/,
use: [
{ loader: MiniCssExtractPlugin.loader },
'css-loader',
'sass-loader',
],
},
],
},

// ...

plugins: [
new MiniCssExtractPlugin({
filename: 'assets/[name].css',
}),
],`

```

```

11.Instalar ESLINT para buena pŕacticas
\*\*npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

12.Crear archivo .eslint y copiar contenido de la url https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a
al archivo.

13.Crear archivo .gitignore y copiar el contenido de https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544 al archivo.
