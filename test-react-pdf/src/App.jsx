import { useState } from "react";
import { PDFViewer, pdf, Document } from "@react-pdf/renderer";
import "./App.css";
import Svg from "./svg";
import GoTo from "./goTo";
import Text from "./text";
import Knobs from "./knobs";
import Resume from "./resume";
import Fractals from "./fractals";
import PageWrap from "./pageWrap";
import { downloadPDFByBlob, viewPdfByBlob } from "./pdf";
import { useCallback } from "react";

const EXAMPLES = {
  svg: Svg,
  goTo: GoTo,
  text: Text,
  knobs: Knobs,
  resume: Resume,
  pageWrap: PageWrap,
  fractals: Fractals,
};

const App = () => {
  const [example, setExample] = useState("pageWrap");
  const Document = EXAMPLES[example];
  console.log(example);

  const handleExampleChange = (v) => {
    setExample(v);
  };

  const downloadPDF = () => {
    const blob = pdf(Document()).toBlob();
    blob.then((item) => {
      console.log("item", item);
      downloadPDFByBlob(item, example);
    });
  };

  const lookPDF = () => {
    const blob = pdf(Document()).toBlob();
    blob.then((item) => {
      console.log("item", item);
      viewPdfByBlob(item);
    });
  };

  return (
    <div className="wrapper">
      <h2>
        Examples: <span style={{ color: "blue" }}>{example}</span>
      </h2>
      <ul>
        {Object.keys(EXAMPLES).map((value) => (
          <li
            key={value}
            data-name={value}
            role="presentation"
            style={{
              margin: "10px auto",
              textDecoration: "none",
              listStyle: "none",
            }}
            onClick={() => handleExampleChange(value)}
          >
            <button
              style={{
                backgroundColor: "#eee",
                width: 150,
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={downloadPDF}>下载</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={lookPDF}>预览</button>
      {/* <Document /> */}
      {/* <PDFViewer style={{ flex: 1 }}><Document /></PDFViewer> */}
    </div>
  );
};

export default App;
