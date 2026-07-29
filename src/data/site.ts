// Central content model for FloodSense Ghana.
// Keeping copy here (not in markup) makes it easy to keep the honest
// live / in-development / planned status accurate as the project evolves.

export const site = {
  name: 'FloodSense Ghana',
  tagline: 'IoT-based multi-hazard early warning for Ghana',
  description:
    'A solar-powered sensor network, AI flood prediction, and SMS-based community alerting — targeting deployment in Accra, Ghana’s most heavily flooded area.',
  // Deployment target vs. where the venture is developed from.
  region: 'Accra, Ghana',
  origin: 'Developed from the Upper East Region',
  email: 'songwaecasper7@gmail.com',
  founderName: 'Casper Songwae Gyaang',
  institution: 'Bolgatanga Technical University',
};

export type Status = 'dev' | 'design' | 'field';

export const statusLabel: Record<Status, string> = {
  dev: 'In development',
  design: 'Designed · not yet built',
  field: 'Presented in the field',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/technology/', label: 'Technology' },
  { href: '/partnerships/', label: 'Partnerships' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

// --- The system: five subsystems, each with an HONEST build status ---------
export const system: {
  id: string;
  name: string;
  status: Status;
  summary: string;
  detail: string;
}[] = [
  {
    id: 'sensor-nodes',
    name: 'Solar-powered sensor nodes',
    status: 'dev',
    summary:
      'Field units measuring water level, rainfall, and air quality, transmitting over GSM.',
    detail:
      'Each node is designed to run off-grid on solar and battery, sampling water level, rainfall, and air-quality readings and relaying them over the GSM cellular network — no internet or Wi-Fi required at the site.',
  },
  {
    id: 'ai-prediction',
    name: 'AI flood prediction (LSTM)',
    status: 'dev',
    summary:
      'A recurrent neural network that learns from time-series sensor and weather data to forecast flood risk.',
    detail:
      'An LSTM (Long Short-Term Memory) model is being developed to learn temporal patterns in water level and rainfall data and estimate near-term flood risk. Prediction quality depends on historical training data currently being assembled with research partners.',
  },
  {
    id: 'sms-alerting',
    name: 'SMS-based community alerting',
    status: 'dev',
    summary:
      'Plain-text SMS warnings for communities without smartphone or data access.',
    detail:
      'Alerts are delivered by SMS so they reach basic phones — deliberately built for communities without smartphones or mobile data, where app-based warnings would never arrive.',
  },
  {
    id: 'spatial-map',
    name: 'Spatial risk map',
    status: 'design',
    summary:
      'A geographic view of flood risk across monitored zones.',
    detail:
      'A map-based view of risk levels across monitored areas is designed but not yet built. It will visualise node locations and modelled risk across Accra’s flood-prone zones for planners and responders.',
  },
  {
    id: 'authority-dashboard',
    name: 'Authority dashboard',
    status: 'design',
    summary:
      'A monitoring console for NADMO and local officials.',
    detail:
      'A dashboard for NADMO and local authorities to monitor live conditions, alert history, and node health is designed but not yet built.',
  },
];

// --- Institutional backing (all real / established) ------------------------
export const partners = [
  {
    name: 'Africa Energy Technology Centre (AETC)',
    relation: 'Signed ambassador program',
    note: 'Innovation & energy technology',
  },
  {
    name: 'CSIR — Water Research Institute',
    relation: 'Research partnership',
    note: 'Water science & data',
  },
  {
    name: 'Ghana Meteorological Agency (GMet)',
    relation: 'Research partnership',
    note: 'Weather & climate data',
  },
];

export const recognition = [
  {
    title: '1st Place — AETC 2026 Energy Innovators Pitch Competition',
    kind: 'Award',
  },
  {
    title: 'Signed ambassador program with the Africa Energy Technology Centre',
    kind: 'Ambassador',
  },
  {
    title:
      'Officially presented to the Ministry of Youth Development and Empowerment, through the AETC',
    kind: 'Engagement',
    note: 'Government of Ghana',
  },
  {
    title: 'Presented to NADMO officials and community stakeholders',
    kind: 'Engagement',
    note: 'Adenta and Madina, Accra',
  },
];
