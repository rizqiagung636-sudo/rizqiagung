import { RolloutPhase, FeatureComparison } from '../types';

export const ROLLOUT_PHASES: RolloutPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    title: 'Developer & Enterprise API Launch',
    subtitle: 'Direct engine access via Google AI Studio & Vertex AI',
    dateRange: 'Mid August 2026',
    status: 'completed',
    progressPercent: 100,
    platforms: ['AI Studio / API'],
    freeTier: {
      headline: 'Google AI Studio Free Tier Access',
      highlights: [
        'Model identifier `gemini-3.7-flash` available immediately',
        'Standard developer free tier quota (15 RPM / 1M TPM)',
        'Full multimodal token input (text, images, audio, video)',
        'Zero setup cost, no credit card requirement'
      ],
      quotaNote: 'Standard non-billed quota with fair-use thresholds',
      availability: '100% Available globally in supported territories'
    },
    proTier: {
      headline: 'Vertex AI & Enterprise Pay-As-You-Go',
      highlights: [
        'Enterprise SLA with uncapped burst rate limits',
        'Gemini Enterprise Agent Platform native endpoints',
        'Provisioned throughput options for ultra-low latency',
        'Integrations in Android Studio, Antigravity, & Copilot'
      ],
      quotaNote: 'High concurrency enterprise billing tier',
      availability: '100% Available worldwide with SOC2 compliance'
    },
    milestones: [
      { id: 'm1-1', label: 'SDK release on @google/genai v2.4+', completed: true, tier: 'both' },
      { id: 'm1-2', label: 'Google AI Studio model selector update', completed: true, tier: 'free' },
      { id: 'm1-3', label: 'Vertex AI Model Garden production deployment', completed: true, tier: 'pro' },
      { id: 'm1-4', label: 'Cloud Playground latency benchmarks published', completed: true, tier: 'both' }
    ],
    notes: 'The initial launch phase establishes underlying model infrastructure and API endpoints before consumer frontend rollout.'
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    title: 'Pro & Ultra Early Access + Spark Agent',
    subtitle: 'Consumer subscription rollout in Gemini Web & Mobile Apps',
    dateRange: 'Late August 2026',
    status: 'completed',
    progressPercent: 100,
    platforms: ['Web', 'Android', 'iOS'],
    freeTier: {
      headline: 'Preparatory Queue & Infrastructure Warm-Up',
      highlights: [
        'Background telemetry to monitor server load',
        'No direct manual model toggle yet on gemini.google.com',
        'Fallback routing to Gemini Flash 3.6 for chat continuity',
        'Account eligibility verification queue activated'
      ],
      quotaNote: 'Awaiting scheduled staged batch rollout',
      availability: 'Selective internal testing batches (< 5%)'
    },
    proTier: {
      headline: 'Google AI Pro / Ultra Priority Deployment',
      highlights: [
        'Gemini 3.7 Flash toggle activated in top model dropdown',
        'Gemini Spark Agent interactive reasoning activated',
        'Hybrid "Thinking Mode" toggle for step-by-step logic',
        'Peak hours priority queue with dedicated cluster routing'
      ],
      quotaNote: 'Uncapped interactive rate limits for daily heavy usage',
      availability: '100% of active Pro / Ultra subscribers'
    },
    milestones: [
      { id: 'm2-1', label: 'Pro subscriber entitlement gate validation', completed: true, tier: 'pro' },
      { id: 'm2-2', label: 'Gemini Spark agent engine activation', completed: true, tier: 'pro' },
      { id: 'm2-3', label: 'Android & iOS App updates pushed to App Store / Play Store', completed: true, tier: 'both' },
      { id: 'm2-4', label: 'Free tier regional cluster capacity pre-scaling', completed: true, tier: 'free' }
    ],
    notes: 'Subscriber testing ensures reliability and reasoning quality before opening to hundreds of millions of free users.'
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    title: 'Staged Regional Rollout for Free Users',
    subtitle: 'Gradual distribution across countries and server regions',
    dateRange: 'Early to Mid September 2026',
    status: 'in-progress',
    progressPercent: 65,
    platforms: ['Web', 'Android', 'iOS'],
    freeTier: {
      headline: 'Active Public Staged Expansion',
      highlights: [
        'North America, APAC, and Western Europe accounts transitioning',
        'Gemini 3.7 Flash becoming default background workhorse',
        'Multimodal file uploads (PDF, photos, code) powered by 3.7',
        'Sub-second first-token response times on everyday queries'
      ],
      quotaNote: 'Generous everyday chat allowance with dynamic peak throttling',
      availability: '~65% of global free accounts converted'
    },
    proTier: {
      headline: 'Extended Context & Workspace Extensions',
      highlights: [
        'Integration with Google Docs, Gmail, Drive via Gemini 3.7',
        'Expanded 2M token context window support',
        'Fast multimodal audio and live video processing',
        'Exclusive early access to experimental agentic tools'
      ],
      quotaNote: 'Maximized context & enterprise privacy guarantees',
      availability: '100% active worldwide'
    },
    milestones: [
      { id: 'm3-1', label: 'Region 1 (North America & Japan) rollout completion', completed: true, tier: 'free' },
      { id: 'm3-2', label: 'Region 2 (Southeast Asia & Western Europe) rollout', completed: true, tier: 'free' },
      { id: 'm3-3', label: 'Region 3 (Latin America & India) staged rollout', completed: false, tier: 'free' },
      { id: 'm3-4', label: 'Pro Tier Workspace add-on 3.7 Flash engine migration', completed: true, tier: 'pro' }
    ],
    notes: 'Free tier accounts are migrated dynamically without requiring app re-downloads. Web client refreshes automatically.'
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    title: 'Full Global General Availability (GA)',
    subtitle: 'Complete replacement of legacy Flash across all endpoints',
    dateRange: 'Late September 2026',
    status: 'scheduled',
    progressPercent: 20,
    platforms: ['Web', 'Android', 'iOS', 'AI Studio / API', 'Workspace'],
    freeTier: {
      headline: '100% Global Free Tier Baseline',
      highlights: [
        'All free accounts worldwide default to Gemini 3.7 Flash',
        'Explicit "Gemini 3.7 Flash" label confirmed in chat header',
        'Synchronized web, Android, iOS, and mobile browser parity',
        'Full multimodality and web-grounded search synthesis'
      ],
      quotaNote: 'Permanent standard tier quota structure',
      availability: '100% target globally (all supported countries)'
    },
    proTier: {
      headline: 'Continuous Model Refresh & Pro 3.7 Pipeline',
      highlights: [
        'Seamless coexistence with flagship Gemini 3.7 Pro model',
        'High-density multimodal processing (HD vision, video feeds)',
        'Zero-queue server allocation even during peak global events',
        'Custom fine-tuned agent workflows in Gemini Advanced'
      ],
      quotaNote: 'Top-tier SLA and unlimited access bands',
      availability: '100% available with priority routing'
    },
    milestones: [
      { id: 'm4-1', label: 'Deprecation & graceful sunset of Flash 3.0 backend nodes', completed: false, tier: 'both' },
      { id: 'm4-2', label: 'Global 100% confirmation in mobile app store release notes', completed: false, tier: 'both' },
      { id: 'm4-3', label: 'Full multilingual optimization across 45+ languages', completed: true, tier: 'free' },
      { id: 'm4-4', label: 'Finalized global status dashboard update', completed: false, tier: 'both' }
    ],
    notes: 'Once Phase 4 is completed, Gemini 3.7 Flash will be the universal standard AI model for both web visitors and logged-in free accounts.'
  }
];

export const FEATURE_COMPARISONS: FeatureComparison[] = [
  {
    feature: 'Core Chat Model Engine',
    category: 'core',
    description: 'The underlying LLM powering standard daily queries',
    freeTier: {
      status: 'included',
      text: 'Gemini 3.7 Flash (Default)',
      details: 'Automatic upgrade as staged rollout reaches your account'
    },
    proTier: {
      status: 'included',
      text: 'Gemini 3.7 Flash + 3.7 Pro',
      details: 'Switch freely between ultra-fast Flash and heavyweight Pro'
    }
  },
  {
    feature: 'Gemini Spark / Agentic Reasoning',
    category: 'intelligence',
    description: 'Autonomous multi-step research, planning, and task execution',
    freeTier: {
      status: 'limited',
      text: 'Basic Web Grounding',
      details: 'Standard Google search retrieval without deep agent tool loops'
    },
    proTier: {
      status: 'included',
      text: 'Full Gemini Spark Agent',
      details: 'Multi-turn autonomous workflow execution and deep synthesis'
    }
  },
  {
    feature: 'Thinking Mode / Chain-of-Thought',
    category: 'intelligence',
    description: 'Visible deliberate step-by-step reasoning for complex math and logic',
    freeTier: {
      status: 'limited',
      text: 'Standard Reasoning Speed',
      details: 'Fast response with built-in internal reflection'
    },
    proTier: {
      status: 'included',
      text: 'Interactive Thinking Toggle',
      details: 'Adjustable reasoning budget with inspectable step logs'
    }
  },
  {
    feature: 'Peak Usage Rate Limits',
    category: 'limits',
    description: 'Frequency of messages allowed during high server traffic',
    freeTier: {
      status: 'limited',
      text: 'Standard Fair-Use Allowance',
      details: 'May see dynamic rate-limit prompts during major peak windows'
    },
    proTier: {
      status: 'included',
      text: 'Priority High-Volume Quota',
      details: 'Uncapped daily conversational bands with zero throttle'
    }
  },
  {
    feature: 'Multimodal Inputs (Images & Docs)',
    category: 'tools',
    description: 'Analysis of uploaded images, screenshots, PDFs, and code files',
    freeTier: {
      status: 'included',
      text: 'Included (Standard sizes)',
      details: 'Upload photos, screenshots, and standard documents'
    },
    proTier: {
      status: 'included',
      text: 'Included + 2M Context Window',
      details: 'Upload massive repositories, books, and long audio/video files'
    }
  },
  {
    feature: 'Google AI Studio Developer API Access',
    category: 'core',
    description: 'Direct API keys for building web applications and scripts',
    freeTier: {
      status: 'included',
      text: 'Free Tier API (15 RPM)',
      details: 'Available immediately for prototyping without credit card'
    },
    proTier: {
      status: 'included',
      text: 'Pay-As-You-Go / Tier 1-3',
      details: 'Up to 2,000+ RPM with enterprise uptime agreement'
    }
  }
];

export const ACCOUNT_CHECK_STEPS = [
  {
    step: 1,
    title: 'Open Gemini Web or App',
    description: 'Navigate to gemini.google.com on desktop or open the Gemini mobile app on Android/iOS.'
  },
  {
    step: 2,
    title: 'Inspect the Model Selector',
    description: 'Look at the top-left or header model badge. Pro users can view dropdown choices; Free users will see the active model version listed in settings or the chat header.'
  },
  {
    step: 3,
    title: 'Test Response Speed & Multimodality',
    description: 'Send a prompt or upload an image. Gemini 3.7 Flash responds with near-instant streaming and distinct concise multi-step analysis.'
  },
  {
    step: 4,
    title: 'Check AI Studio API Endpoint',
    description: 'Developers can immediately test via `ai.models.generateContent({ model: "gemini-3.7-flash" })` without waiting for the consumer app queue.'
  }
];
