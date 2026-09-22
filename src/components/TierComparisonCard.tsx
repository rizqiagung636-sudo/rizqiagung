import React from 'react';
import { Check, Sparkles, Users, Zap, Shield, HelpCircle } from 'lucide-react';
import { FEATURE_COMPARISONS } from '../data/rolloutData';

export const TierComparisonCard: React.FC = () => {
  return (
    <div id="tier-comparison-section" className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>Free vs. Pro Feature Allocation for Gemini 3.7 Flash</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Understanding what capabilities are unlocked for everyday users versus paid subscribers.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Free Tier Included</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-indigo-700">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span>Pro / Ultra Premium</span>
          </div>
        </div>
      </div>

      {/* Grid of comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURE_COMPARISONS.map((item, index) => (
          <div 
            key={index}
            id={`comparison-card-${index}`}
            className="rounded-lg border border-slate-200/80 bg-slate-50/40 p-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-sm font-bold text-slate-900">{item.feature}</h4>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">{item.description}</p>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-200/60">
              {/* Free tier item */}
              <div className="bg-white rounded p-2 border border-slate-100 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <div className="text-xs">
                  <span className="font-semibold text-slate-800 block">{item.freeTier.text}</span>
                  <span className="text-slate-500 text-[11px] leading-tight block">{item.freeTier.details}</span>
                </div>
              </div>

              {/* Pro tier item */}
              <div className="bg-white rounded p-2 border border-indigo-100 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </span>
                <div className="text-xs">
                  <span className="font-semibold text-indigo-950 block">{item.proTier.text}</span>
                  <span className="text-slate-500 text-[11px] leading-tight block">{item.proTier.details}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
