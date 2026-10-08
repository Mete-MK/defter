const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'),out=path.join(root,'www','lib');
fs.mkdirSync(out,{recursive:true});
const map=[['jszip/dist/jszip.min.js','jszip.min.js'],['mammoth/mammoth.browser.min.js','mammoth.browser.min.js'],['pdfjs-dist/build/pdf.min.js','pdf.min.js'],['pdfjs-dist/build/pdf.worker.min.js','pdf.worker.min.js'],['docx-preview/dist/docx-preview.min.js','docx-preview.min.js'],['jspdf/dist/jspdf.umd.min.js','jspdf.umd.min.js']];
let bad=0;
for(const [src,dst] of map){
  try{fs.copyFileSync(path.join(root,'node_modules',src),path.join(out,dst));console.log('OK  ',dst)}
  catch(e){bad++;console.error('FEHLT',src)}
}
if(bad){console.error('Einige Bibliotheken konnten nicht kopiert werden.');process.exit(1)}
