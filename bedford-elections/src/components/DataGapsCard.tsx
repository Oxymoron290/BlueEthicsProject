import { missingDocuments } from '../data/electionData';

export default function DataGapsCard() {
  return (
    <div className="card border-amber-800/50">
      <h3 className="section-title">
        <span className="text-amber-400">⚠</span> Data Gaps & Methodology
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Missing documents */}
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Documents Not Provided</h4>
          <ul className="space-y-2">
            {missingDocuments.map((doc, i) => (
              <li key={i} className="text-xs">
                <span className="text-amber-400 font-medium">{doc.item}</span>
                <br />
                <span className="text-gray-500">{doc.impact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Methodology */}
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Data Processing</h4>
          <div className="space-y-3 text-xs text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>40 documents received via Texas Public Information Act (Chapter 552) request</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>24 PDFs/DOCX with embedded text; 16 scanned PDFs processed via Tesseract OCR v5.4.0 at 300–400 DPI</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>40 structured JSON files generated with type-specific schemas</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>4 independent audit passes: 357 data point confirmations, 0 data issues</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>Grand total reconciliation: $126,755.12 confirmed across all sources</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">ℹ</span>
              <span>2019 Tarrant County cost ($11,750) is an estimate from council communiqué — no invoice provided</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
