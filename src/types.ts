export type RolloutStatus = 'completed' | 'in-progress' | 'scheduled';

export type UserTier = 'free' | 'pro' | 'all';

export interface Milestone {
  id: string;
  label: string;
  completed: boolean;
  tier: 'free' | 'pro' | 'both';
}

export interface TierDetails {
  headline: string;
  highlights: string[];
  quotaNote: string;
  availability: string;
}

export interface RolloutPhase {
  id: string;
  phaseNumber: number;
  title: string;
  subtitle: string;
  dateRange: string;
  status: RolloutStatus;
  progressPercent: number;
  platforms: ('Web' | 'Android' | 'iOS' | 'AI Studio / API' | 'Workspace')[];
  freeTier: TierDetails;
  proTier: TierDetails;
  milestones: Milestone[];
  notes?: string;
}

export interface FeatureComparison {
  feature: string;
  category: 'core' | 'intelligence' | 'limits' | 'tools';
  description: string;
  freeTier: {
    status: 'included' | 'limited' | 'not-included';
    text: string;
    details?: string;
  };
  proTier: {
    status: 'included' | 'limited' | 'not-included';
    text: string;
    details?: string;
  };
}
