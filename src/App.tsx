import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Layers, 
  Filter, 
  Search, 
  Users, 
  Zap, 
  CheckCircle2, 
  Clock, 
  ArrowUpDown,
  ExternalLink,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { UserTier, RolloutStatus } from './types';
import { ROLLOUT_PHASES } from './data/rolloutData';
import { PhaseCard } from './components/PhaseCard';
import { RolloutOverviewStats } from './components/RolloutOverviewStats';
import { TierComparisonCard } from './components/TierComparisonCard';
import { AccountStatusChecker } from './components/AccountStatusChecker';

export default function App() {
  const [selectedTier, setSelectedTier] = useState<UserTier>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | RolloutStatus>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'phases' | 'comparison' | 'checker'>('phases');

  // Filtered phases based on tier, status, and search query
  const filteredPhases = useMemo(() => {
    return ROLLOUT_PHASES.filter(phase => {
      // Status filter
      if (statusFilter !== 'all' && phase.status !== statusFilter) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = phase.title.toLowerCase().includes(query);
        const matchesSubtitle = phase.subtitle.toLowerCase().includes(query);
        const matchesFree = phase.freeTier.highlights.some(h => h.toLowerCase().includes(query));
        const matchesPro = phase.proTier.highlights.some(h => h.toLowerCase().includes(query));
        const matchesMilestone = phase.milestones.some(m => m.label.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSubtitle && !matchesFree && !matchesPro && !matchesMilestone) {
          return false;
        }
      }

      return true;
    });
  }, [statusFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-slate-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Gemini 3.7 Flash Rollout
                </h1>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Global Release Tracker
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Visual phase distribution for Free vs. Pro & Ultra accounts
              </p>
            </div>
          </div>

          {/* Quick External Links */}
          <div className="flex items-center gap-2 text-xs">
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium shadow-2xs"
            >
              <span>Gemini Web</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://aistudio.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors font-medium shadow-xs"
            >
              <span>AI Studio API</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Banner / Introduction */}
        <div className="mb-6 bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Model Lifecycle: Gemini 3.7 Flash</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Rollout Phases & Tier Allocation
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Google officially launched <strong className="text-slate-900">Gemini 3.7 Flash</strong> in August 2026. 
                While developer endpoints and Pro/Ultra subscribers received instantaneous access, free accounts are 
                gradually migrating as the default workhorse model via staged regional rollouts without requiring a paid subscription.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <div className="text-xs text-slate-500 font-medium">Global Status</div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Active Staged Distribution
              </div>
              <div className="text-[11px] text-slate-400">Targeting 100% GA by Q3 2026</div>
            </div>
          </div>
        </div>

        {/* Global Overview Metrics */}
        <RolloutOverviewStats phases={ROLLOUT_PHASES} />

        {/* Navigation View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-white rounded-xl p-2 border border-slate-200/90 shadow-2xs">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <button
              id="view-tab-phases"
              onClick={() => setActiveTab('phases')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'phases'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Phase Roadmap Cards</span>
            </button>

            <button
              id="view-tab-comparison"
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'comparison'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Free vs. Pro Comparison</span>
            </button>

            <button
              id="view-tab-checker"
              onClick={() => setActiveTab('checker')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'checker'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Account Status Checklist</span>
            </button>
          </div>

          {/* Quick tier perspective filter */}
          {activeTab === 'phases' && (
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-lg border border-slate-200/60 self-start sm:self-auto">
              <span className="text-[11px] font-semibold text-slate-500 uppercase px-1">
                Tier View:
              </span>
              <button
                id="tier-view-all"
                onClick={() => setSelectedTier('all')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  selectedTier === 'all'
                    ? 'bg-white text-slate-900 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Both Tiers
              </button>
              <button
                id="tier-view-free"
                onClick={() => setSelectedTier('free')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  selectedTier === 'free'
                    ? 'bg-white text-emerald-700 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Free Users
              </button>
              <button
                id="tier-view-pro"
                onClick={() => setSelectedTier('pro')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  selectedTier === 'pro'
                    ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                    : 'text-slate-600 hover:text-indigo-700'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Pro & Ultra
              </button>
            </div>
          )}
        </div>

        {/* View 1: Phase Roadmap Cards */}
        {activeTab === 'phases' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="search-phases-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search phases, features, milestones, or platforms..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-400 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs shrink-0">
                <span className="text-slate-400 font-medium text-[11px] mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  Status:
                </span>
                {(['all', 'completed', 'in-progress', 'scheduled'] as const).map((status) => (
                  <button
                    key={status}
                    id={`filter-status-${status}`}
                    onClick={() => setStatusFilter(status)}
                    className={`px-2.5 py-1.5 rounded-md font-medium capitalize transition-colors ${
                      statusFilter === status
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {status === 'all' ? 'All Phases' : status.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Phase Cards */}
            {filteredPhases.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
                <p className="text-sm font-semibold text-slate-700">No rollout phases match your criteria</p>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or status filter.</p>
                <button
                  onClick={() => { setSearchQuery(''); setStatusFilter('all'); }}
                  className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPhases.map((phase) => (
                  <PhaseCard
                    key={phase.id}
                    phase={phase}
                    selectedTier={selectedTier}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* View 2: Free vs Pro Feature Comparison */}
        {activeTab === 'comparison' && (
          <TierComparisonCard />
        )}

        {/* View 3: Account Verification Checklist */}
        {activeTab === 'checker' && (
          <AccountStatusChecker />
        )}

        {/* Additional Context Summary Section */}
        <div className="mt-8 bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-xs">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
            Frequently Asked Questions regarding Gemini 3.7 Flash Rollout
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-600 mt-3">
            <div className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-100">
              <h5 className="font-bold text-slate-800 mb-1">
                Will Free users definitely get Gemini 3.7 Flash?
              </h5>
              <p className="leading-relaxed">
                Yes. Google's Flash family is engineered as the default universal workhorse model. 
                All regular free users on web and mobile will automatically receive 3.7 Flash as their standard chat model.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-100">
              <h5 className="font-bold text-slate-800 mb-1">
                Why don't all accounts receive the update on the same day?
              </h5>
              <p className="leading-relaxed">
                Staged regional distribution allows Google to manage global server cluster capacity and verify reasoning stability 
                before migrating hundreds of millions of daily consumer chats.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-100">
              <h5 className="font-bold text-slate-800 mb-1">
                What is the difference between Flash and Pro on Gemini Apps?
              </h5>
              <p className="leading-relaxed">
                Flash delivers ultra-fast, high-efficiency responses with standard multimodal support. 
                Pro models provide high-density reasoning, extended context windows up to 2M tokens, and autonomous agent loops.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-100">
              <h5 className="font-bold text-slate-800 mb-1">
                Can developers test Gemini 3.7 Flash right now?
              </h5>
              <p className="leading-relaxed">
                Yes. Google AI Studio provides direct API access to `gemini-3.7-flash` with a generous Free Tier quota (15 RPM / 1M TPM) 
                without any waiting queue.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Model Rollout Phase Tracker</span>
            <span>•</span>
            <span>Gemini 3.7 Flash Ecosystem</span>
          </div>
          <div>
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}
