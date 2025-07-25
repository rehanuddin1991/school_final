export const commonPrintStyles = `
  @page {
    size: A4;
    margin: 0;
  }

  body {
    font-family: 'SolaimanLipi', 'Kalpurush', 'Noto Serif Bengali', serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 0;
    padding: 0;
    line-height: 1.3;
    background: #f9f9f9;
  }

  .outer-border {
    margin: 15px;
    padding: 7px;
    background:green;
    
  }

  .middle-border {
  background: #000080;
    padding: 12px;
    
  }

  .inner-border {
    padding: 15px;
    border: 1px solid #000;
    border-radius: 3px;
    background: white;
    position: relative;
    box-sizing: border-box;
    min-height: auto;
    overflow: hidden;
    z-index: 1;
  }

  .watermark {
    background-image: url('__UNION_IMG__'); /* পরে রিপ্লেস হবে */
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    opacity: 0.1;
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 20px;
    position: relative;
    z-index: 1;
    line-height: 0.5;
    font-size: 12px;
  }

  .header-logo {
    
    width: 100px;
    height: auto;
  }
 

  .header-title {
  font-family: "SolaimanLipi", "Nikosh", "Roboto", "Arial", sans-serif;
  font-size: 20px;          /* অফিসিয়াল লুকের জন্য সামান্য বড় */
  font-weight: 600;         /* Semi-bold, অফিসিয়াল ফিল */
  text-align: center;
  flex: 1;
  color: #1a1a1a;           /* ডার্ক অফিসিয়াল টেক্সট কালার */
  letter-spacing: 0.5px;    /* অক্ষরের মাঝে হালকা ফাঁক */
          /* প্রিন্টের জন্য ভালো লাইন হাইট */
}

  hr {
    border: 1px solid #000;
    margin-top: 7px;
    margin-bottom: 5px;
  }

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  .top-section p {
    margin: 0;
    margin-top: 5px;
  }

  h2 {
    text-align: center;
    margin: 10px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }

  table tr td {
    padding: 5px 0;
  }

  p {
    z-index: 1;
  }

  .signature-area {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    z-index: 1;
  }

  .signature-box {
  margin-top:10px;
    text-align: center;
    line-height: 0.7;
    font-size:12px;
    font-weight:bold;
     
  }

  .qr-code {
    width: 80px;
    height: auto;
  }
`;

// ✅ শুধুমাত্র 2nd style এর জন্য অতিরিক্ত CSS
export const taxTableStyles = `
  .container2 {
    margin-top: 0.1rem;
    display: flex;
    justify-content: center;
  }

  .tax-table {
    width: 100%;
    max-width: 30rem;
    border: 1px solid #86efac;
    border-radius: 0.4rem;
    box-shadow: 0 4px 6px rgba(16, 185, 129, 0.1);
    border-collapse: collapse;
  }

  .tax-table tbody tr.header-row {
    border-bottom: 1px solid #bbf7d0;
    background-color: #dcfce7;
  }

  .tax-table tbody tr.header-row td.header-cell {
    padding: 1px;
    font-weight: 700;
    color: #166534;
    text-align: center;
  }

  .tax-table tbody tr.row {
    border-bottom: 1px solid #bbf7d0;
  }

  .tax-table tbody tr.row:last-child {
    border-bottom: none;
  }

  .label-cell {
    padding: 1px;
    font-weight: 600;
    white-space: nowrap;
  }

  .input-cell {
    padding: 2px;
  }

  .input-cell input[type="text"] {
    width: 100%;
    padding: 1px 1px;
    border: 1px solid #4ade80;
    border-radius: 0.375rem;
    background-color: #dcfce7;
    box-sizing: border-box;
    text-align: center;
  }

  .input-cell input[readonly] {
    border-color: #22c55e;
    background-color: #bbf7d0;
    font-weight: 700;
  }
`;
