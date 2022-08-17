import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { exportPDF } from './exportPDF'

function App() {
  const [count, setCount] = useState(0)
  const onClickExportPdf = () => {
    exportPDF('test', document.querySelector('#i_am_root'))
  }

  return (
    <>
      <div className="App" id='i_am_root'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div><a href='tel:110'>打电话</a></div>
        <div><a href='mail:123@163.com'>发邮件</a></div>
        <div><a href='http://123.com'>跳转页面</a></div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div>
        <button onClick={onClickExportPdf}>导出PDF</button>
      </div>
    </>
  )
}

export default App
