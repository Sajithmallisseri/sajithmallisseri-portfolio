import React, { useState } from 'react';
import { Database, Check, Printer, Shield, ArrowRight, Layers, FileSpreadsheet } from 'lucide-react';

export const PharmaSoftwarePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'schema'>('preview');

  const erpModulesRow1 = [
    'Invoice', 'GRS', 'Opening Stock', 'Sales Return', 'Purch Return', 
    'Breakage', 'Expired', 'Stock Reg', 'Stock Ledger', 'Stock Stmt', 'Daily Stock'
  ];
  const erpModulesRow2 = [
    'Breakage Stmt', 'Expiry Stmt', 'Sales Stmt', 'Stock Sales', 'Brand Sales', 
    'Date Sales', 'Consolidated', 'Customers', 'Products', 'Invoice List'
  ];
  const erpModulesRow3 = ['GRS List', 'Stock Valuation', 'Backup'];

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070F1B] overflow-hidden text-slate-800 dark:text-slate-200 text-xs shadow-xs">
      {/* Header Banner narrating the exact tech stack */}
      <div className="bg-teal-900/90 dark:bg-teal-950 text-teal-100 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-teal-800">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="font-semibold text-xs sm:text-sm">
            This software is made with React.js API, Django, Python and Database is SQLite · Hosting: PythonAnywhere [cloud web hosting service].
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-300">
          <span>Goa Pharmaceuticals · Calicut</span>
        </div>
      </div>

      {/* View Switcher */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Trimmed Application Interface
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'preview'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Live Form Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'schema'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Commercial Architecture and Modules
          </button>
        </div>
      </div>

      {activeTab === 'preview' ? (
        <div className="p-4 sm:p-5 space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
          {/* Top Admin / Status bar */}
          <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span>Logged in as: <strong className="text-slate-900 dark:text-white font-mono">admin</strong></span>
            <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300">Logout</span>
          </div>

          {/* ERP Module Navigation Bars */}
          <div className="space-y-1 overflow-x-auto pb-1 text-[11px]">
            <div className="flex flex-wrap gap-1">
              {erpModulesRow1.map((mod) => (
                <span
                  key={mod}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                    mod === 'Invoice'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {mod}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1">
              {erpModulesRow2.map((mod) => (
                <span
                  key={mod}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {mod}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1">
              {erpModulesRow3.map((mod) => (
                <span
                  key={mod}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>

          {/* Company Invoice Letterhead */}
          <div className="pt-3 pb-2 text-center border-t border-slate-200 dark:border-slate-800 space-y-1">
            <p className="text-xs text-slate-600 dark:text-slate-400">गोवा फार्मास्यूटिकल्स</p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Goa Pharmaceuticals
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              #5/846 G 1st Floor, Sastri Nagar Road, Eranjhipalam PO Calicut-06 (A KESRU Unit under Employment Department of Kerala Govt.)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              <span>GSTIN: <strong>32ADRPB970IDIZW</strong></span>
              <span>·</span>
              <span>DL No: 145873/20B/2020, 145874/21B/202</span>
              <span>·</span>
              <span>Phone: 9061194646</span>
            </div>
          </div>

          {/* Form Header Title */}
          <div className="text-center py-1 bg-slate-200/60 dark:bg-slate-800/80 rounded font-bold text-xs uppercase tracking-wide text-slate-800 dark:text-slate-200">
            GST Invoice
          </div>

          {/* Key Form Fields Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px]">Invoice Number</span>
              <strong className="text-slate-800 dark:text-slate-100 font-mono">GAP/1</strong>
            </div>
            <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px]">Due Date</span>
              <span className="text-slate-800 dark:text-slate-200 font-mono">dd-mm-yyyy</span>
            </div>
            <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px]">Customer</span>
              <span className="text-slate-800 dark:text-slate-200">Select Customer</span>
            </div>
            <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px]">Tax Mode</span>
              <span className="text-teal-600 dark:text-teal-400 font-semibold">☑ Intra-state (CGST+SGST)</span>
            </div>
          </div>

          {/* Particulars Table */}
          <div className="overflow-x-auto rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[10px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-1.5 font-semibold">Particulars</th>
                  <th className="p-1.5 font-semibold">Batch</th>
                  <th className="p-1.5 font-semibold">Mfg</th>
                  <th className="p-1.5 font-semibold">Expiry</th>
                  <th className="p-1.5 font-semibold">Qty</th>
                  <th className="p-1.5 font-semibold">MRP</th>
                  <th className="p-1.5 font-semibold">PTR</th>
                  <th className="p-1.5 font-semibold">PTS</th>
                  <th className="p-1.5 font-semibold">GST%</th>
                  <th className="p-1.5 font-semibold">CGST</th>
                  <th className="p-1.5 font-semibold">SGST</th>
                  <th className="p-1.5 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                <tr>
                  <td className="p-1.5 font-sans font-medium text-slate-900 dark:text-white">Sample Pharma Item</td>
                  <td className="p-1.5">GP23J04</td>
                  <td className="p-1.5">10/24</td>
                  <td className="p-1.5">09/27</td>
                  <td className="p-1.5">10</td>
                  <td className="p-1.5">₹160.00</td>
                  <td className="p-1.5">₹108.00</td>
                  <td className="p-1.5 bg-yellow-50 dark:bg-yellow-950/30 font-semibold text-yellow-700 dark:text-yellow-400">₹102.60</td>
                  <td className="p-1.5">12%</td>
                  <td className="p-1.5">₹61.56</td>
                  <td className="p-1.5">₹61.56</td>
                  <td className="p-1.5 font-semibold text-slate-900 dark:text-white">₹1,149.12</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Totals and Bank Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px]">
            <div className="space-y-1 text-slate-600 dark:text-slate-400 text-[10px]">
              <p><strong>Bank Details:</strong> PNB, Calicut Branch, A/C: 07795015004571, IFSC: PUNB0425800</p>
              <p><strong>Terms:</strong> Interest @24% if payment delayed. Google Pay: 9846438977. Calicut jurisdiction.</p>
            </div>
            <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 text-right text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Taxable Value:</span>
                <span className="font-mono">₹1,026.00</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>CGST (6%) + SGST (6%):</span>
                <span className="font-mono">₹123.12</span>
              </div>
              <div className="flex justify-between text-slate-900 dark:text-white font-bold pt-1 border-t border-slate-200 dark:border-slate-800">
                <span>Grand Total:</span>
                <span className="font-mono text-teal-600 dark:text-teal-400">₹1,149.12</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-purple-700 hover:bg-purple-600 text-white font-semibold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save and Print Invoice</span>
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 space-y-4">
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-900 dark:text-teal-300">
              <Shield className="w-4 h-4 text-teal-500" />
              <span>Technical Specification</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              This software is made with <strong className="text-slate-900 dark:text-white">React.js API</strong> for fast client rendering, <strong className="text-slate-900 dark:text-white">Django and Python</strong> for the transactional business logic and tax computation engine, and the <strong className="text-slate-900 dark:text-white">Database is SQLite</strong> for reliable, lightweight, ACID-compliant local and client-server operation. Hosted on <strong className="text-slate-900 dark:text-white">PythonAnywhere [cloud web hosting service]</strong> for 24/7 commercial availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Frontend API Layer</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Built with React.js, consuming REST endpoints for dynamic line-item addition, HSN lookups, and instantaneous client-side tax calculations.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Backend Business Logic</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Engineered with Django and Python, validating GSTIN checksums, maintaining dual-entry ledger accounts, and executing automated PDF rendering.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Relational Database</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Database is SQLite, configured with strict foreign keys and automated daily backup routines (`Backup` module in toolbar).
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Cloud Web Hosting</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Hosting: PythonAnywhere [cloud web hosting service], delivering high availability, WSGI server processing, and persistent commercial access.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 sm:col-span-2">
              <span className="font-semibold text-slate-900 dark:text-white">Commercial Operations Scope</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Features 24 integrated modules including GRS, Opening Stock, Breakage, Expiry Statements, Stock Ledger, and Consolidated Reports.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
