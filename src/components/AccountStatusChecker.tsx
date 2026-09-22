import React, { useState } from 'react';
import { CheckCircle2, Circle, ArrowRight, ExternalLink, HelpCircle, RefreshCw } from 'lucide-react';
import { ACCOUNT_CHECK_STEPS } from '../data/rolloutData';

export const AccountStatusChecker: React.FC = () => {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (stepNumber: number) => {
    setCheckedSteps(prev => ({
      ...prev,
      [stepNumber]: !prev[stepNumber]
    }));
  };

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;
  const isAllChecked = completedCount === ACCOUNT_CHECK_STEPS.length;

  return (
    <div id="account-status-checker" className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900">
              How to Check Your Account Eligibility
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              Interactive Checklist
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Follow these 4 practical steps to verify if Gemini 3.7 Flash is active for your account today.
          </p>
        </div>

        <div className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
          Status: <span className="font-bold text-slate-900">{completedCount} of {ACCOUNT_CHECK_STEPS.length} Steps Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        {ACCOUNT_CHECK_STEPS.map((step) => {
          const isDone = !!checkedSteps[step.step];
          return (
            <div
              key={step.step}
              id={`check-step-${step.step}`}
              onClick={() => toggleStep(step.step)}
              className={`p-3.5 rounded-lg border cursor-pointer transition-all duration-150 flex items-start gap-3 ${
                isDone 
                  ? 'bg-emerald-50/50 border-emerald-200 text-slate-900' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 text-slate-700'
              }`}
            >
              <button 
                type="button" 
                aria-label={`Mark step ${step.step} completed`}
                className="mt-0.5 shrink-0"
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Step {step.step}
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {step.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful summary banner */}
      <div className="rounded-lg bg-slate-50 border border-slate-200/60 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-600">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Haven't received 3.7 Flash yet on your Free account? Regional server migration occurs automatically; no app reinstall is required.
          </span>
        </div>
        <a
          href="https://gemini.google.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-2xs hover:bg-slate-50 shrink-0 self-start sm:self-auto"
        >
          <span>Open Gemini Web</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </div>
  );
};
