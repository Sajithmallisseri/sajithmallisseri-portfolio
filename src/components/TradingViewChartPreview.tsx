import React, { useState } from 'react';
import { TrendingUp, Activity } from 'lucide-react';

export const TradingViewChartPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tables' | 'pinescript'>('tables');

  const technicalRules = [
    { rule: 'EMA9 19,932.48 > EMA21 19,894.13', status: 'PASS' },
    { rule: 'EMA21 19,894.13 > SMA50 19,911.92', status: 'FAIL' },
    { rule: 'SMA50 19,911.92 > SMA200 16,494.37', status: 'PASS' },
    { rule: 'Close 20,087.00 > EMA21 19,894.13', status: 'PASS' },
    { rule: 'Vol > 20D Avg Volume', status: 'FAIL' },
    { rule: '15M EMA9 20,087.90 > EMA21 20,077.24', status: 'PASS' },
    { rule: '15M Close 20,120.00 > EMA21 20,077.24', status: 'PASS' },
    { rule: 'Moving Average Cross: 1 day ago', status: 'PASS' },
  ];

  const fundamentalMetrics = [
    { label: 'OPM (Operating Margin)', value: '25.50%', highlight: true },
    { label: 'ROE (Return on Equity)', value: '31.46%', highlight: true },
    { label: 'EPS', value: '₹220.07', highlight: false },
    { label: 'EPS Growth', value: '+57.84%', highlight: true },
    { label: 'Debt / Equity', value: '0.24', highlight: false },
    { label: 'P/E Ratio', value: '91.28', highlight: false },
    { label: 'Quarterly Sales Growth', value: '+70.26%', highlight: true },
    { label: 'Quarterly Net Profit Growth', value: '+92.66%', highlight: true },
    { label: 'FY Sales Growth', value: '+30.50%', highlight: true },
    { label: 'FY Net Profit Growth', value: '+38.70%', highlight: true },
    { label: 'Promoter Holding', value: '73.15%', highlight: false },
    { label: 'FII Holding', value: '6.39%', highlight: false },
    { label: 'Industry P/E', value: '85.50', highlight: false },
    { label: 'Free Cash Flow', value: '-₹1,072.00 Cr', highlight: false },
  ];

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070F1B] overflow-hidden text-xs shadow-xs">
      {/* Header Attribution Bar */}
      <div className="bg-[#0f172a] text-slate-200 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-semibold text-xs sm:text-sm text-white">
            TradingView Technical and Fundamental Chart (Pine Script)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-400">
          <span>Author: sajithmallisseri · TradingView</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Stock Reference: Solar Industries India Limited (NSE)
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('tables')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'tables'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Dual Decision Tables
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pinescript')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              activeTab === 'pinescript'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Pine Script Logic and Signals
          </button>
        </div>
      </div>

      {activeTab === 'tables' ? (
        <div className="p-4 sm:p-5 space-y-5 bg-slate-50/50 dark:bg-slate-950/40">
          {/* Composite Score Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">Technical Score</span>
              <span className="text-base font-bold text-slate-900 dark:text-white font-mono">6 / 8</span>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 block">75% Confluence</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">Fundamental Score</span>
              <span className="text-base font-bold text-slate-900 dark:text-white font-mono">9 / 10</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">Strong Balance Sheet</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">Final Total Score</span>
              <span className="text-base font-bold text-slate-900 dark:text-white font-mono">15 / 18</span>
              <span className="text-[10px] text-amber-500 block">High Multi-Factor Rank</span>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-center">
              <span className="text-[10px] text-amber-700 dark:text-amber-300 block font-medium uppercase tracking-wider">Engine Signal</span>
              <span className="text-base font-extrabold text-amber-700 dark:text-amber-400 font-mono tracking-wider">WAIT</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 block">Awaiting Volume Breakout</span>
            </div>
          </div>

          {/* Side by Side Tables replicating the user's Pine Script UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left: Technical Analysis Table (CANDLE-9) */}
            <div className="lg:col-span-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-3 py-2 bg-slate-900 text-white flex justify-between items-center text-[11px] font-bold">
                <span>TECHNICAL INDICATORS (CANDLE-9)</span>
                <span className="text-teal-400 font-mono">6 / 8 PASS</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
                {technicalRules.map((t, idx) => (
                  <div key={idx} className="px-3 py-2 flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-[11px]">
                      {t.rule}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${
                        t.status === 'PASS'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400'
                      }`}
                    >
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                <span>ADX 15M: <strong className="text-amber-600 dark:text-amber-400 font-mono">17.69 (WEAK)</strong></span>
                <span>Signal Cadence: <strong className="text-slate-700 dark:text-slate-200">1D + 15M Timeframe</strong></span>
              </div>
            </div>

            {/* Right: Fundamental Analysis Table */}
            <div className="lg:col-span-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-3 py-2 bg-slate-900 text-white flex justify-between items-center text-[11px] font-bold">
                <span>FUNDAMENTAL FINANCIALS (SOLARINDS)</span>
                <span className="text-emerald-400 font-mono">FUND SCORE: 9 / 10</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-[11px] max-h-[300px] overflow-y-auto">
                {fundamentalMetrics.map((f, idx) => (
                  <div key={idx} className="px-3 py-1.5 flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300">{f.label}</span>
                    <span
                      className={`font-mono text-[11px] font-semibold ${
                        f.highlight
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                <span>Promoter + FII Holding: <strong className="text-slate-700 dark:text-slate-200 font-mono">79.54%</strong></span>
                <span>Valuation P/E: <strong className="text-slate-700 dark:text-slate-200 font-mono">91.28</strong></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 space-y-4">
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-900 dark:text-teal-300">
              <Activity className="w-4 h-4 text-teal-500" />
              <span>Pine Script v5 Algorithmic Framework</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Developed in Pine Script programming language directly on TradingView. It synthesizes technical momentum overlays with underlying balance sheet ratios, plotting automated <strong>BUY</strong> and <strong>SELL</strong> signals on candlestick price action while maintaining on-chart dashboard tables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Multi-Timeframe Confluence</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Calculates EMA9, EMA21, SMA50, and SMA200 on daily charts alongside 15-minute intra-day trend checks using `request.security()`.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Financials Data Ingestion</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Fetches audited quarterly and annual metrics (OPM, ROE, EPS growth, Promoter shareholding, debt-to-equity) via Pine Script financial functions.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Decision Engine and Scoring</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Weighted scoring matrix evaluating 8 technical criteria and 10 fundamental criteria. Emits BUY, SELL, or WAIT signals to prevent false breakouts.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">Interactive Table UI</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Utilizes Pine Script `table.new()` and `table.cell()` to render non-intrusive floating heads-up display tables directly on the chart canvas.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
