interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                🗳️ Bedford Election Cost Dashboard
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                City of Bedford, Texas — 2019–2025 • FOIA Data Analysis
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="inline-flex items-center rounded-full bg-emerald-900/50 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-700/50">
                ✓ 4 Audit Passes • 357 Confirmations
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-gray-500 text-center">
            Analysis generated from 40 FOIA records (24 text-extractable PDFs/DOCX, 16 OCR-processed scanned PDFs).
            All dollar figures from invoices/contracts unless noted as estimates. Data verified through four independent audit passes.
          </p>
          <p className="text-xs text-gray-600 text-center mt-2">
            Data source: City of Bedford response to Texas Public Information Act (Chapter 552) request for election cost records.
          </p>
        </div>
      </footer>
    </div>
  );
}
