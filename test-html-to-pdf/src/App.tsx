import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { exportPDF } from './exportPDF'
import html2pdf from 'html2pdf.js'

console.log(html2pdf)
function App() {
  const [count, setCount] = useState(0)
  const onClickExportPdf = async () => {
    let root = document.getElementById('i_am_root')
    const scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2
    let width = root.offsetWidth
    let height = root.offsetHeight
    let pdf = html2pdf(root,{
      margin:       1,
      filename:     'myfile.pdf',
      
      enableLinks:true,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:{
        useCORS: true,
        scale,
        width,
        height
      },
      jsPDF:{
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      }
    })
    let blobUri = await pdf.outputPdf('bloburi')
    window.open(blobUri, '_blank')
  }
  const onClickExportPdf2 = async () => {
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
        <div><a href='https://baidu.com' taget="_blank">跳转页面</a></div>
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
        <button onClick={onClickExportPdf2}>导出PDF2</button>
      </div>
    </>
  )
}

export default App
