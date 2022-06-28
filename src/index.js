import { React, createRoot, ReactDOM } from './whichReact'
import './index.css'

// import ContextPage from "./pages/ContextPage";
import { App } from './pages/01_Render'

// ReactDOM.render(jsx, document.getElementById("root"));

const root = createRoot(document.getElementById('root'))

root.render(<App />)

console.log(`%c初始化render结束 , 等待生成 DOM`, 'color:#40a9ff')
console.log('React', React.version)
