import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Zap, 
  Globe, 
  Smartphone, 
  Monitor, 
  Terminal, 
  Layers, 
  Check, 
  AlertCircle
} from 'lucide-react';
import { RolloutPhase, UserTier } from '../types';

interface PhaseCardProps {
  phase: RolloutPhase;
  selectedTier: UserTier;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({ phase, selectedTier }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  // Status badge styling
  const getStatusBadge = () => {
    switch (phase.status) {
      case 'completed':
        return (
          <span 
            id={`status-badge-${phase.id}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Completed / Live
          </span>
        );
      case 'in-progress':
        return (
          <span 
            id={`status-badge-${phase.id}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-200"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            In Active Rollout
          </span>
        );
      case 'scheduled':
        return (
          <span 
            id={`status-badge-${phase.id}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 border border-slate-200"
          >
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            Scheduled
          </span>
        );
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Web':
        return <Monitor className="w-3 h-3" />;
      case 'Android':
      case 'iOS':
        return <Smartphone className="w-3 h-3" />;
      case 'AI Studio / API':
        return <Terminal className="w-3 h-3" />;
      case 'Workspace':
        return <Layers className="w-3 h-3" />;
      default:
        return <Globe className="w-3 h-3" />;
    }
  };

  const showFree = selectedTier === 'all' || selectedTier === 'free';
  const showPro = selectedTier === 'all' || selectedTier === 'pro';

  return (
    <div 
      id={`card-phase-${phase.id}`}
      className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-200 overflow-hidden"
    >
      {/* Card Header */}
      <div className="p-5 sm:p-6 border-b border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold shadow-xs">
              0{phase.phaseNumber}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Phase {phase.phaseNumber}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {getStatusBadge()}
            <button
              id={`toggle-collapse-${phase.id}`}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'Collapse card' : 'Expand card'}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
          {phase.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          {phase.subtitle}
        </p>

        {/* Date and Platform Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100/80">
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{phase.dateRange}</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 mr-1">Platforms:</span>
            {phase.platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/60 font-medium"
              >
                {getPlatformIcon(platform)}
                <span>{platform}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-medium text-slate-600">Phase Completion</span>
            <span className="font-semibold text-slate-800">{phase.progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                phase.status === 'completed'
                  ? 'bg-emerald-500'
                  : phase.status === 'in-progress'
                  ? 'bg-amber-500'
                  : 'bg-slate-300'
              }`}
              style={{ width: `${phase.progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Expandable Body */}
      {isExpanded && (
        <div className="p-5 sm:p-6 space-y-5 bg-slate-50/50">
          {/* Free vs Pro Cards Grid */}
          <div className={`grid gap-4 ${showFree && showPro ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
            
            {/* Free Tier Details Card */}
            {showFree && (
              <div 
                id={`tier-card-free-${phase.id}`}
                className="bg-white rounded-lg p-4 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <h4 className="text-sm font-bold text-slate-800">
                        Free Tier Users
                      </h4>
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Standard Workhorse
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    {phase.freeTier.headline}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {phase.freeTier.highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-[11px]">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Availability:</span>
                    <span className="font-medium text-slate-700">{phase.freeTier.availability}</span>
                  </div>
                  <div className="text-slate-500">
                    <span className="font-medium text-slate-600">Rate Limits:</span> {phase.freeTier.quotaNote}
                  </div>
                </div>
              </div>
            )}

            {/* Pro Tier Details Card */}
            {showPro && (
              <div 
                id={`tier-card-pro-${phase.id}`}
                className="bg-white rounded-lg p-4 border border-indigo-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-indigo-50">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <h4 className="text-sm font-bold text-indigo-950">
                        Pro & Ultra Users
                      </h4>
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Priority & Spark Agent
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    {phase.proTier.headline}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {phase.proTier.highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-[11px]">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Availability:</span>
                    <span className="font-medium text-slate-700">{phase.proTier.availability}</span>
                  </div>
                  <div className="text-slate-500">
                    <span className="font-medium text-slate-600">Rate Limits:</span> {phase.proTier.quotaNote}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Key Phase Milestones */}
          <div className="bg-white rounded-lg p-4 border border-slate-200/80">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Phase Deliverables & Milestones</span>
              <span className="text-[11px] font-normal normal-case text-slate-500">
                {phase.milestones.filter(m => m.completed).length} of {phase.milestones.length} completed
              </span>
            </h5>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              {phase.milestones.map((m) => (
                <div 
                  key={m.id}
                  className="flex items-start gap-2 p-2 rounded-md bg-slate-50/70 border border-slate-100"
                >
                  {m.completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className={`leading-relaxed ${m.completed ? 'text-slate-800' : 'text-slate-500'}`}>
                      {m.label}
                    </p>
                    <span className="inline-block mt-0.5 text-[10px] uppercase font-semibold text-slate-400">
                      Tier: {m.tier === 'both' ? 'Free & Pro' : m.tier === 'free' ? 'Free Only' : 'Pro Only'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural / Rollout Notes */}
          {phase.notes && (
            <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-100/70 rounded-md p-3 border border-slate-200/50">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="font-semibold text-slate-700">Rollout Context: </span>
                {phase.notes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
