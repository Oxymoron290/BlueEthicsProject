// Hardcoded election data from 40 verified JSON files (5 audit passes, 357+ confirmations)
// This avoids runtime fetch complexity for a static dashboard

export interface ElectionCost {
  label: string;
  date: string;
  type: 'general' | 'special' | 'proposition';
  tarrantCounty: number;
  starTelegram: number;
  translation: number;
  petition: number;
  grandTotal: number;
  multiplier: number | null;
  tab: number | null;
  deposit: number | null;
  estimatedCost: number | null;
  balanceDue: number | null;
  isEstimate: boolean;
}

export interface ElectionResult {
  year: string;
  label: string;
  type: 'general' | 'special' | 'proposition';
  ballotsCast: number;
  registeredVoters: number;
  turnout: number;
  races: Race[];
}

export interface Race {
  name: string;
  candidates: Candidate[];
}

export interface Candidate {
  name: string;
  votes: number;
  percentage: number;
  winner: boolean;
}

export interface VotingBreakdown {
  election: string;
  absentee: number;
  earlyVoting: number;
  electionDay: number;
  total: number;
}

export interface CostCategory {
  name: string;
  countyWide: number;
  bedfordShare: number;
  percentOfTotal: number;
}

export interface RepeatCandidate {
  name: string;
  elections: string;
  races: string;
  record: string;
  notes: string;
}

// ============================================================
// COST DATA (verified through 4 audit passes)
// ============================================================
export const electionCosts: ElectionCost[] = [
  {
    label: 'May 2019 General',
    date: '2019-05-04',
    type: 'general',
    tarrantCounty: 11750.00,
    starTelegram: 675.00,
    translation: 0,
    petition: 0,
    grandTotal: 12425.00,
    multiplier: null,
    tab: null,
    deposit: null,
    estimatedCost: 7100.00, // Contract says $7,100; communiqué said $11,750 (6 entities in joint election)
    balanceDue: null,
    isEstimate: true,
  },
  {
    label: 'Nov 2020 Special',
    date: '2020-11-03',
    type: 'proposition',
    tarrantCounty: 80.00,
    starTelegram: 675.00, // Ad #4770845 from bundle invoice (Check #145185, 2020-10-22)
    translation: 444.38,
    petition: 3395.18,
    grandTotal: 4594.56,
    multiplier: null,
    tab: null,
    deposit: 0,
    estimatedCost: null,
    balanceDue: 80.00,
    isEstimate: false,
  },
  {
    label: 'May 2021 General',
    date: '2021-05-01',
    type: 'general',
    tarrantCounty: 5313.74,
    starTelegram: 1543.50,
    translation: 0,
    petition: 0,
    grandTotal: 6857.24,
    multiplier: 0.0019,
    tab: 8,
    deposit: 3610.00,
    estimatedCost: null,
    balanceDue: 1703.74,
    isEstimate: false,
  },
  {
    label: 'Aug 2021 Special',
    date: '2021-08-07',
    type: 'special',
    tarrantCounty: 24162.99,
    starTelegram: 1543.50,
    translation: 0,
    petition: 0,
    grandTotal: 25706.49,
    multiplier: null,
    tab: null,
    deposit: 0,
    estimatedCost: 18000.00,
    balanceDue: 24162.99,
    isEstimate: false,
  },
  {
    label: 'May 2022 General',
    date: '2022-05-07',
    type: 'general',
    tarrantCounty: 11301.36,
    starTelegram: 1543.50,
    translation: 0,
    petition: 0,
    grandTotal: 12844.86,
    multiplier: 0.0030,
    tab: 7,
    deposit: 7340.00,
    estimatedCost: 9778.06,
    balanceDue: 3952.12,
    isEstimate: false,
  },
  {
    label: 'Aug 2022 Special',
    date: '2022-08-20',
    type: 'special',
    tarrantCounty: 24674.18,
    starTelegram: 1543.50,
    translation: 0,
    petition: 0,
    grandTotal: 26217.68,
    multiplier: 0.5000,
    tab: 5,
    deposit: 17360.00,
    estimatedCost: null,
    balanceDue: 7314.18,
    isEstimate: false,
  },
  {
    label: 'May 2024 General',
    date: '2024-05-04',
    type: 'general',
    tarrantCounty: 10187.34,
    starTelegram: 6235.83,
    translation: 320.93,
    petition: 0,
    grandTotal: 16744.10,
    multiplier: 0.0027,
    tab: 6,
    deposit: 7140.00,
    estimatedCost: null,
    balanceDue: 3047.34,
    isEstimate: false,
  },
  {
    label: 'May 2025 General',
    date: '2025-05-03',
    type: 'general',
    tarrantCounty: 20379.30,
    starTelegram: 1660.89,
    translation: 0,
    petition: 0,
    grandTotal: 22040.19,
    multiplier: 0.0120,
    tab: null,
    deposit: 11720.56,
    estimatedCost: 15627.41,
    balanceDue: 8658.74,
    isEstimate: false,
  },
];

// ============================================================
// ELECTION RESULTS (verified through 4 audit passes)
// ============================================================
export const electionResults: ElectionResult[] = [
  {
    year: '2019',
    label: 'May 2019 General',
    type: 'general',
    ballotsCast: 1991,
    registeredVoters: 31436,
    turnout: 6.33,
    races: [
      {
        name: 'Place 3',
        candidates: [
          { name: 'Amy Sabol', votes: 1281, percentage: 65.7, winner: true },
          { name: 'Don Coates', votes: 668, percentage: 34.3, winner: false },
        ],
      },
      {
        name: 'Place 5',
        candidates: [
          { name: 'Culver', votes: 1552, percentage: 100, winner: true },
        ],
      },
    ],
  },
  {
    year: '2020',
    label: 'Nov 2020 Proposition',
    type: 'proposition',
    ballotsCast: 24111,
    registeredVoters: 32126,
    turnout: 75.04,
    races: [
      {
        name: 'Prop A: Alcohol Sales',
        candidates: [
          { name: 'For', votes: 19403, percentage: 80.5, winner: true },
          { name: 'Against', votes: 4708, percentage: 19.5, winner: false },
        ],
      },
    ],
  },
  {
    year: '2021',
    label: 'May 2021 General',
    type: 'general',
    ballotsCast: 3247,
    registeredVoters: 32583,
    turnout: 9.97,
    races: [
      {
        name: 'Mayor',
        candidates: [
          { name: 'Michael Boyter', votes: 2557, percentage: 83.7, winner: true },
          { name: 'Kyle McDonald', votes: 498, percentage: 16.3, winner: false },
        ],
      },
      {
        name: 'Place 1',
        candidates: [
          { name: 'Cindy Almendarez', votes: 1750, percentage: 56.5, winner: true },
          { name: 'Charles Baetz', votes: 1350, percentage: 43.6, winner: false },
        ],
      },
      {
        name: 'Place 2',
        candidates: [
          { name: 'Dan Cogan', votes: 1691, percentage: 53.8, winner: true },
          { name: 'Dave Gebhart', votes: 1452, percentage: 46.2, winner: false },
        ],
      },
    ],
  },
  {
    year: '2021 Sp.',
    label: 'Aug 2021 Special',
    type: 'special',
    ballotsCast: 1588,
    registeredVoters: 32583,
    turnout: 4.87,
    races: [
      {
        name: 'Place 4 (Unexpired)',
        candidates: [
          { name: 'Rich Steves', votes: 966, percentage: 60.95, winner: true },
          { name: 'Sal Caruso', votes: 572, percentage: 36.09, winner: false },
          { name: 'Charles Baetz', votes: 24, percentage: 1.51, winner: false },
          { name: 'Al Guerrero', votes: 23, percentage: 1.45, winner: false },
        ],
      },
    ],
  },
  {
    year: '2022',
    label: 'May 2022 General',
    type: 'general',
    ballotsCast: 2632,
    registeredVoters: 33141,
    turnout: 7.94,
    races: [
      {
        name: 'Place 3',
        candidates: [
          { name: 'Amy Sabol', votes: 2015, percentage: 100, winner: true },
        ],
      },
      {
        name: 'Place 5',
        candidates: [
          { name: 'Steve Farco', votes: 1291, percentage: 52.82, winner: true },
          { name: 'Charles Baetz', votes: 786, percentage: 32.16, winner: false },
          { name: 'Michael A Dickens', votes: 367, percentage: 15.02, winner: false },
        ],
      },
    ],
  },
  {
    year: '2022 Sp.',
    label: 'Aug 2022 Special',
    type: 'special',
    ballotsCast: 1694,
    registeredVoters: 33332,
    turnout: 5.08,
    races: [
      {
        name: 'Place 1 (Unexpired)',
        candidates: [
          { name: 'Nichelle D. Dawkins', votes: 884, percentage: 52.22, winner: true },
          { name: 'Jeron Liverman', votes: 739, percentage: 43.65, winner: false },
          { name: 'Cecelia Cole', votes: 70, percentage: 4.13, winner: false },
        ],
      },
    ],
  },
  {
    year: '2024',
    label: 'May 2024 General + Charter',
    type: 'general',
    ballotsCast: 4186,
    registeredVoters: 33388,
    turnout: 12.54,
    races: [
      {
        name: 'Mayor',
        candidates: [
          { name: 'Dan Cogan', votes: 2503, percentage: 60.12, winner: true },
          { name: 'Jim Griffin', votes: 1177, percentage: 28.27, winner: false },
          { name: "Eric 'BIGJUICY' Love", votes: 483, percentage: 11.60, winner: false },
        ],
      },
      {
        name: 'Place 1',
        candidates: [
          { name: 'Nichelle D. Dawkins', votes: 3185, percentage: 100, winner: true },
        ],
      },
      {
        name: 'Place 2',
        candidates: [
          { name: 'Joy Donovan Brandon', votes: 1945, percentage: 50.15, winner: true },
          { name: 'Jeron Liverman', votes: 1296, percentage: 33.42, winner: false },
          { name: "Tycom 'Ty' Wright", votes: 637, percentage: 16.43, winner: false },
        ],
      },
    ],
  },
  {
    year: '2025',
    label: 'May 2025 General',
    type: 'general',
    ballotsCast: 2958,
    registeredVoters: 32849,
    turnout: 9.00,
    races: [
      {
        name: 'Place 3',
        candidates: [
          { name: 'Amy Sabol', votes: 2104, percentage: 78.3, winner: true },
          { name: 'Timothy Sturm', votes: 584, percentage: 21.7, winner: false },
        ],
      },
      {
        name: 'Place 5',
        candidates: [
          { name: 'Steve Farco', votes: 2136, percentage: 76.3, winner: true },
          { name: 'Bryan Keith Turek', votes: 662, percentage: 23.7, winner: false },
        ],
      },
    ],
  },
];

// ============================================================
// 2024 CHARTER PROPOSITIONS
// ============================================================
export interface Proposition {
  id: string;
  yes: number;
  yesPercent: number;
  no: number;
  noPercent: number;
  passed: boolean;
}

export const propositions2024: Proposition[] = [
  { id: 'Prop A', yes: 3515, yesPercent: 85.7, no: 585, noPercent: 14.3, passed: true },
  { id: 'Prop B', yes: 2912, yesPercent: 72.2, no: 1119, noPercent: 27.8, passed: true },
  { id: 'Prop C', yes: 3047, yesPercent: 76.2, no: 951, noPercent: 23.8, passed: true },
  { id: 'Prop D', yes: 2251, yesPercent: 55.4, no: 1816, noPercent: 44.7, passed: true },
  { id: 'Prop E', yes: 3294, yesPercent: 82.8, no: 685, noPercent: 17.2, passed: true },
  { id: 'Prop F', yes: 3401, yesPercent: 84.6, no: 617, noPercent: 15.4, passed: true },
  { id: 'Prop G', yes: 2501, yesPercent: 63.0, no: 1468, noPercent: 37.0, passed: true },
];

// ============================================================
// VOTING METHOD BREAKDOWN (verified from JSONs)
// ============================================================
export const votingBreakdowns: VotingBreakdown[] = [
  { election: '2019 Place 3', absentee: 16, earlyVoting: 920, electionDay: 345, total: 1281 },
  { election: '2019 Place 5', absentee: 15, earlyVoting: 1128, electionDay: 409, total: 1552 },
  { election: '2021 Sp. Place 4', absentee: 59, earlyVoting: 1197, electionDay: 332, total: 1588 },
  { election: '2022 Place 5', absentee: 166, earlyVoting: 743, electionDay: 382, total: 1291 },
  { election: '2022 Sp. Place 1', absentee: 143, earlyVoting: 553, electionDay: 188, total: 884 },
  { election: '2024 Mayor', absentee: 177, earlyVoting: 1703, electionDay: 623, total: 2503 },
  { election: '2024 Place 2', absentee: 140, earlyVoting: 2138, electionDay: 1010, total: 3288 },
  { election: '2025 Place 3', absentee: 35, earlyVoting: 1438, electionDay: 631, total: 2104 },
  { election: '2025 Place 5', absentee: 38, earlyVoting: 1440, electionDay: 658, total: 2136 },
];

// ============================================================
// 2024 COST CATEGORY BREAKDOWN (most detailed invoice)
// ============================================================
export const costCategories2024: CostCategory[] = [
  { name: 'Early Voting (EVPA)', countyWide: 580912.38, bedfordShare: 5822.51, percentOfTotal: 57.2 },
  { name: 'Vote by Mail (EVM)', countyWide: 56829.08, bedfordShare: 648.28, percentOfTotal: 6.4 },
  { name: 'Election Day (ED)', countyWide: 752957.57, bedfordShare: 2320.35, percentOfTotal: 22.8 },
  { name: 'General Expenses', countyWide: 171422.86, bedfordShare: 470.08, percentOfTotal: 4.6 },
  { name: '10% Admin Fee', countyWide: 156212.19, bedfordShare: 926.12, percentOfTotal: 9.1 },
];

// ============================================================
// REGISTERED VOTER TREND
// ============================================================
export const registeredVoterTrend = [
  { year: '2019', voters: 31436, source: 'Official Results' },
  { year: '2020', voters: 32126, source: 'Official Results' },
  { year: '2021', voters: 32583, source: 'Official Results' },
  { year: 'May 2022', voters: 33141, source: 'Official Results' },
  { year: 'Aug 2022', voters: 33332, source: 'Official Results' },
  { year: '2024', voters: 33388, source: 'Official Results' },
  { year: '2025', voters: 32849, source: 'Official Results' },
];

// ============================================================
// ESTIMATE VS ACTUAL
// ============================================================
export const estimateVsActual = [
  { election: 'May 2019', estimated: 7100.00, actual: 11750.00, variance: 65, note: 'Contract est $7,100; communiqué reported $11,750' },
  { election: '2020 Petition', estimated: 2738.70, actual: 3395.18, variance: 24 },
  { election: 'Aug 2021 Sp.', estimated: 18000.00, actual: 24162.99, variance: 34 },
  { election: 'May 2022', estimated: 9778.06, actual: 11301.36, variance: 16 },
  { election: 'May 2025', estimated: 15627.41, actual: 20379.30, variance: 30 },
];

// ============================================================
// BUDGET VS ACTUAL (City G/L Account 101.10.12-8308)
// ============================================================
export interface BudgetVsActualEntry {
  fiscalYear: number;
  adoptedBudget: number;
  actual: number;
}

export const budgetVsActual: BudgetVsActualEntry[] = [
  { fiscalYear: 2019, adoptedBudget: 11750, actual: 7922.26 },
  { fiscalYear: 2020, adoptedBudget: 13750, actual: 279.08 },
  { fiscalYear: 2021, adoptedBudget: 12080, actual: 28049.63 },
  { fiscalYear: 2022, adoptedBudget: 12750, actual: 38091.57 },
  { fiscalYear: 2023, adoptedBudget: 10750, actual: 43.00 },
  { fiscalYear: 2024, adoptedBudget: 12750, actual: 10573.74 },
  { fiscalYear: 2025, adoptedBudget: 12750, actual: 20433.98 },
];

// ============================================================
// REPEAT CANDIDATES
// ============================================================
export const repeatCandidates: RepeatCandidate[] = [
  { name: 'Amy Sabol', elections: '2019, 2022, 2025', races: 'Place 3 (×3)', record: '3–0', notes: 'Won all three; unopposed 2022' },
  { name: 'Charles Baetz', elections: '2021, 2021 Sp., 2022', races: 'Pl 1, Pl 4, Pl 5', record: '0–3', notes: 'Never won' },
  { name: 'Steve Farco', elections: '2022, 2025', races: 'Place 5 (×2)', record: '2–0', notes: '52.8% → 76.3%' },
  { name: 'Jeron Liverman', elections: '2022 Sp., 2024', races: 'Pl 1, Pl 2', record: '0–2', notes: '43.7% → 33.4%' },
  { name: 'Dan Cogan', elections: '2021, 2024', races: 'Pl 2, Mayor', record: '2–0', notes: 'Place 2 → Mayor' },
  { name: 'Nichelle D. Dawkins', elections: '2022 Sp., 2024', races: 'Place 1 (×2)', record: '2–0', notes: 'Contested → Unopposed' },
];

// ============================================================
// MISSING DOCUMENTS (data gaps)
// ============================================================
export const missingDocuments = [
  { item: '2021 Tarrant County Contract', impact: 'Cannot verify contract terms, multipliers, or deposits for 2021' },
  { item: 'HEB ISD / TCC cost-sharing', impact: 'Multiple communiqués reference cost splits; no documentation provided' },
  { item: '2020 Star-Telegram invoice', impact: 'Found: Ad #4770845 in bundle (4766589, 4770845, 4773220.pdf), $675.00 election notice' },
  { item: 'Translation invoices (2021, 2022, 2025)', impact: 'Only 2024 and 2019/2020 provided' },
  { item: '2021 Special Election contract', impact: 'Cannot verify terms for Aug 2021 election' },
];

// ============================================================
// DERIVED STATS
// ============================================================
export const grandTotal = electionCosts.reduce((sum, e) => sum + e.grandTotal, 0);
export const totalElections = electionCosts.length;
export const avgCostPerElection = grandTotal / totalElections;

// Average municipal turnout (excluding 2020 presidential overlay)
const municipalResults = electionResults.filter(r => r.type !== 'proposition');
export const avgMunicipalTurnout = municipalResults.reduce((sum, r) => sum + r.turnout, 0) / municipalResults.length;

export const tarrantCountyTotal = electionCosts.reduce((sum, e) => sum + e.tarrantCounty, 0);
export const starTelegramTotal = electionCosts.reduce((sum, e) => sum + e.starTelegram, 0);
export const translationTotal = electionCosts.reduce((sum, e) => sum + e.translation, 0);
export const petitionTotal = electionCosts.reduce((sum, e) => sum + e.petition, 0);
