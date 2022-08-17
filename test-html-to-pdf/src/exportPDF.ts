// import html2canvas from 'html2canvas'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * export PDF
 * @param {export file name} title
 * @param {file contianer -> dom element} ele
 */

export const exportPDF = async (title: string, ele: HTMLDivElement | null): Promise<void> => {
  if (ele) {
    // according to the dip to avoid the img bluring
    const scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2
    const pdf = new jsPDF('p', 'pt', 'a4')
    let width = ele.offsetWidth
    let height = ele.offsetHeight
    console.log(scale, width, height, pdf)

    const canvas = document.createElement('canvas')
    canvas.width = width * scale
    canvas.height = height * scale
    const contentWidth = canvas.width
    const contentHeight = canvas.height

    // A4 size [595.28, 841.89]
    const pageHeight = (contentWidth / 595.28) * 841.89
    let leftHeight = contentHeight
    let position = 0
    const imgWidth = 595.28
    const imgHeight = (595.28 / contentWidth) * contentHeight
    const pdfCanvas = await html2canvas(ele, {
      useCORS: true,
      canvas,
      scale,
      width,
      height,
      x: 0,
      y: 0
    })
    const imgDataUrl = pdfCanvas.toDataURL()
    if (height > 14400) {
      // beyound jspdf height limit
      const ratio = 14400 / height
      width = width * ratio
    }

    // scale to a4, pdf.internal.pageSize 获取当前 pdf 设定的宽高
    height = (height * pdf.internal.pageSize.getWidth()) / width
    width = pdf.internal.pageSize.getWidth()
    if (leftHeight < pageHeight) {
      pdf.addImage(imgDataUrl, 'png', 0, 0, imgWidth, imgHeight)
    } else {
      while (leftHeight > 0) {
        pdf.addImage(imgDataUrl, 'png', 0, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        // avoid adding blank page
        if (leftHeight > 0) {
          pdf.addPage()
        }
      }
    }
    console.log(title, pdf.output('datauristring', { filename: `${title}.pdf` }))
    // viewPdf(pdf.output('datauristring', { filename: `${title}.pdf` }))
    window.open(pdf.output('bloburi'), '_blank')
    // window.open(pdf.output('datauristring', { filename: `${title}.pdf` }), '_blank')
    // pdf.output('pdfobjectnewwindow', { filename: `${title}.pdf` })).open('_blank')
    await pdf.save(`${title}.pdf`)
  }
}

// const viewPdf = (content: string): void => {
//   if (!content) {
//     return
//   }
//   const blob = base64ToBlob(content)
//   const fileURL = URL.createObjectURL(blob)
//   window.open(fileURL)
//   /* if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//     window.navigator.msSaveOrOpenBlob(blob)
//   } else {
//     const fileURL = URL.createObjectURL(blob)
//     window.open(fileURL)
//   } */
// }

// const base64ToBlob = (code: string): Blob => {
//   code = code
//     .replace(/[\n\r]/g, '')
//     .replace('/-/g', '+')
//     .replace(/_/g, '/')
//   console.log(code)
//   const raw = decodeURIComponent(code)
//   const rawLength = raw.length
//   const uInt8Array = new Uint8Array(rawLength)
//   for (let i = 0; i < rawLength; ++i) {
//     uInt8Array[i] = raw.charCodeAt(i)
//   }
//   return new Blob([uInt8Array], { type: 'application/pdf' })
// }
