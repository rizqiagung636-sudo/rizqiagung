import React from 'react';
import { Activity, ShieldCheck, Zap, Users } from 'lucide-react';
import { RolloutPhase } from '../types';

interface RolloutOverviewStatsProps {
  phases: RolloutPhase[];
}

export const RolloutOverviewStats: React.FC<RolloutOverviewStatsProps> = ({ phases }) => {
  const activePhase = phases.find(p => p.status === 'in-progress') || phases[0];
  const completedCount = phases.filter(p => p.status === 'completed').length;
  const overallPercentage = Math.round(
    phases.reduce((acc, p) => acc + p.progressPercent, 0) / phases.length
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Global Progress Card */}
      <div 
        id="stat-global-progress"
        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Global Progress
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Activity className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="text-2xl font-bold text-slate-900">{overallPercentage}%</span>
            <span className="text-xs text-slate-500 font-medium">({completedCount} of {phases.length} Phases Live)</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
              style={{ width: `${overallPercentage}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Active Phase Card */}
      <div 
        id="stat-active-phase"
        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Current Phase
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 mb-0.5">
            Phase 0{activePhase.phaseNumber}: Regional Free Rollout
          </div>
          <p className="text-xs text-slate-500">
            Targeting NA, APAC & Western Europe
          </p>
        </div>
      </div>

      {/* Free Tier Status Card */}
      <div 
        id="stat-free-status"
        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Free Tier Status
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 mb-0.5">
            Rolling Out (~65%)
          </div>
          <p className="text-xs text-slate-500">
            No subscription required; default model transition
          </p>
        </div>
      </div>

      {/* Pro Tier Status Card */}
      <div 
        id="stat-pro-status"
        className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Pro & Ultra Status
          </span>
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Zap className="w-4 h-4" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900 mb-0.5">
            100% Deployed
          </div>
          <p className="text-xs text-slate-500">
            Gemini Spark Agent & Thinking Mode enabled
          </p>
        </div>
      </div>
    </div>
  );
};
