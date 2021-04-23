
import { render } from 'react-dom'
import { App } from './App'

// run on terminal 
// 2nd_ yarn babel src/index.jsx --out-file dist/bundle.js
// 3rd_ yarn add @babel/preset-react -D
//babel não lê html no js
// 4th_ yarn add webpack webpack-cli webpack-dev-server -D
// depois de instalado Typescript, yarn add @types/react-dom -D | yarn add @types/react -D
render(<App/>, document.getElementById("root"))


