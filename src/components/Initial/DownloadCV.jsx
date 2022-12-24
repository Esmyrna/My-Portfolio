import {Document, Page} from 'react-pdf'
import { useState } from 'react';
import {curriculo} from '../../assets/Curriculo'
function DownloadCV() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({numPages}){
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offSet){
      setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
  
    return (
          <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="600" pageNumber={pageNumber} />
          </Document>

          )
}

export default DownloadCV;