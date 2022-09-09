const getBlobUrl = (blob) => window.URL.createObjectURL(blob);

export const downloadPDFByBlob = (item, title = "123") => {
  const blob = new Blob([item], { type: "pdf" });
  const filename = `${title}.pdf`;
  // 下载为文件
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    const body = document.querySelector("body");
    link.href = window.URL.createObjectURL(blob); // 创建对象url
    link.download = filename;
    link.style.display = "none";
    body.appendChild(link);
    link.click();
    body.removeChild(link);
    window.URL.revokeObjectURL(link.href); // 通过调用 URL.createObjectURL() 创建的 URL 对象
  }
};

export const viewPdfByBlob = (item) => window.open(getBlobUrl(item), "_blank");
