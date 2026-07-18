/* ============================================================
   Mock Data for Azentra License Ledger
   ============================================================ */

// SVG Icons used throughout the app
export const icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  licenses: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="4" x2="9" y2="20"/></svg>`,
  requests: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  renewals: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  audit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  helpCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  userPlus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  ban: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  creditCard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  settingsGear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
};

// Tool icon mapping
export const toolIcons = {
  'Adobe Creative Cloud': { src: './Icons/majesticons_edit-pen-4-line.png', bg: '#FFF3E0', filter: 'icon-orange' },
  'Slack Enterprise': { src: './Icons/bx_chat.png', bg: '#E8E5FF', filter: 'icon-purple' },
  'Asana Business': { src: './Icons/mdi_tick-circle-outline.png', bg: '#E8F8F5', filter: 'icon-green' },
  'AWS Business Support': { src: './Icons/material-symbols_cloud-outline.png', bg: '#E3F2FD', filter: 'icon-blue' },
  'Figma Enterprise': { src: './Icons/material-symbols_brush-outline.png', bg: '#E8E5FF', filter: 'icon-purple' },
  'GitHub Enterprise': { src: './Icons/material-symbols_code.png', bg: '#F5F5F5', filter: 'icon-grey' },
  'Tableau Professional': { src: './Icons/mdi_analytics.png', bg: '#E3F2FD', filter: 'icon-blue' },
  'Notion Team': { src: './Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' },
  'Grammarly Pro': { src: './Icons/material-symbols_brush-outline.png', bg: '#E8F8F5', filter: 'icon-green' },
  'Zoom Video': { src: './Icons/tabler_video.png', bg: '#E8E5FF', filter: 'icon-purple' },
  'Jira Cloud': { src: './Icons/mdi_analytics.png', bg: '#E3F2FD', filter: 'icon-blue' },
  'Canva Pro': { src: './Icons/material-symbols_brush-outline.png', bg: '#E8E5FF', filter: 'icon-purple' },
};

// Employee user
export const employeeUser = {
  name: 'Alex Chen',
  role: 'Product Designer',
  initials: 'AC',
  avatar: null,
};

// Admin user
export const adminUser = {
  name: 'Arun',
  role: 'System Admin',
  initials: 'AR',
  avatar: null,
};

// Employee sidebar nav items
export const employeeNav = [
  { id: 'employee-dashboard', label: 'Dashboard', icon: 'dashboard', route: 'employee-dashboard' },
  { id: 'my-licenses', label: 'My Licenses', icon: 'licenses', route: 'my-licenses' },
  { id: 'my-requests', label: 'Requests', icon: 'requests', route: 'my-requests' },
];

// Admin sidebar nav items
export const adminNav = [
  { id: 'admin-dashboard', label: 'Dashboard', icon: 'dashboard', route: 'admin-dashboard' },
  { id: 'all-licenses', label: 'All Licenses', icon: 'licenses', route: 'all-licenses' },
  { id: 'admin-requests', label: 'Requests', icon: 'requests', route: 'requests-queue' },
  { id: 'admin-renewals', label: 'Renewals', icon: 'renewals', route: 'admin-renewals' },
  { id: 'admin-audit', label: 'Audit Log', icon: 'audit', route: 'audit-log' },
];

// Employee dashboard stats
export const employeeStats = [
  { label: 'Active Licenses', value: '4', meta: 'All active', metaClass: 'success' },
  { label: 'Pending Requests', value: '1', meta: 'Under Review', metaClass: 'primary' },
  { label: 'Expiring Soon', value: '2', meta: 'Within 30 days', metaClass: 'warning' },
];

// Admin dashboard stats
export const adminStats = [
  { label: 'Total Licenses', value: '142', meta: '↗ 12%', metaClass: 'success' },
  { label: 'Seats Used', value: '854', meta: 'of 1,020 total', metaClass: '' },
  { label: 'Pending Requests', value: '3', meta: 'Requires Action', metaClass: 'primary' },
  { label: 'Expiring in 30 Days', value: '5', meta: 'High Risk', metaClass: 'danger' },
];

// Employee licenses
export const employeeLicenses = [
  { tool: 'Figma Enterprise', vendor: 'Figma Inc.', category: 'Design', type: 'Floating', expiry: 'Dec 15, 2024', status: 'Active' },
  { tool: 'Slack Enterprise', vendor: 'Salesforce', category: 'Collaboration', type: 'Named User', expiry: 'Mar 01, 2025', status: 'Active' },
  { tool: 'Adobe Creative Cloud', vendor: 'Adobe Systems Inc.', category: 'Creative & Design', type: 'Named User', expiry: 'Oct 12, 2024', status: 'Warning' },
  { tool: 'Notion Team', vendor: 'Notion Labs', category: 'Productivity', type: 'Team', expiry: 'Apr 20, 2025', status: 'Active' },
];

// Admin license ledger
export const adminLicenses = [
  { tool: 'Adobe Creative Cloud', vendor: 'Adobe Systems Inc.', category: 'Creative & Design', seats: '150 Seats', used: 142, total: 150, pct: 95, expiry: 'Oct 12, 2024', status: 'Warning' },
  { tool: 'Slack Enterprise', vendor: 'Salesforce', category: 'Collaboration', seats: '500 Seats', used: 380, total: 500, pct: 76, expiry: 'Oct 14, 2024', status: 'Warning' },
  { tool: 'Asana Business', vendor: 'Asana Inc.', category: 'Project Management', seats: '200 Seats', used: 154, total: 200, pct: 77, expiry: 'Jan 05, 2025', status: 'Active' },
  { tool: 'AWS Business Support', vendor: 'Amazon Web Services', category: 'Cloud Infrastructure', seats: 'Unlimited', used: null, total: null, pct: null, expiry: 'Monthly Auto-Renew', status: 'Active' },
];

// Notifications
export const notifications = [
  {
    id: 1,
    type: 'approved',
    icon: 'check',
    title: 'Figma Enterprise — Approved',
    description: 'Your license request has been approved and provisioned.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    type: 'rejected',
    icon: 'x',
    title: 'Grammarly Pro — Rejected',
    description: 'Your license request was not approved. See admin comments.',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: 3,
    type: 'renewal',
    icon: 'renewals',
    title: 'Adobe Creative Cloud — Expiring Soon',
    description: 'License expires in 14 days. Contact admin for renewal.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 4,
    type: 'info',
    icon: 'shield',
    title: 'Policy Update',
    description: 'New software request guidelines effective next week.',
    time: '2 days ago',
    unread: false,
  },
];

// Request queue (admin view)
export const requestQueue = [
  {
    id: 1,
    requester: 'Sarah Chen',
    role: 'Senior Marketing Manager',
    initials: 'SC',
    urgency: 'HIGH',
    date: 'AUG 24, 2023',
    tool: 'Adobe Creative Cloud',
    toolIcon: 'adobe',
    seats: '3 New Seats',
    justification: 'Our team needs this for the new Q3 marketing campaign to manage social assets. We are currently bottlenecked by the limited number of seats and it\'s delaying our production schedule.',
  },
  {
    id: 2,
    requester: 'Marcus Thompson',
    role: 'Engineering Lead',
    initials: 'MT',
    urgency: 'MEDIUM',
    date: 'AUG 23, 2023',
    tool: 'GitHub Enterprise',
    toolIcon: 'github',
    seats: '12 Seats (Renewal)',
    justification: null,
  },
  {
    id: 3,
    requester: 'Elena Rodriguez',
    role: 'Data Analyst',
    initials: 'ER',
    urgency: 'LOW',
    date: 'AUG 22, 2023',
    tool: 'Tableau Professional',
    toolIcon: 'tableau',
    seats: '1 Seat',
    justification: null,
  },
];

// Audit log entries
export const auditEntries = [
  {
    bg: '#F1F3F5',
    iconSrc: './Icons/mingcute_user-add-line.png',
    iconFilter: 'icon-grey',
    text: '<strong>New seat assigned to Marcus Wright</strong>',
    meta: 'License: Adobe Creative Cloud',
    time: '2 hours ago',
  },
  {
    bg: '#E8F8F5',
    iconSrc: './Icons/tabler_cash.png',
    iconFilter: 'icon-green',
    text: '<strong>Billing updated for Zoom Video Communications</strong>',
    meta: 'Action: Invoice #99827 Processed',
    time: '5 hours ago',
  },
  {
    bg: '#FDEDEC',
    iconSrc: './Icons/material-symbols_block-outline.png',
    iconFilter: 'icon-red',
    text: '<strong>License request denied for \'Grammarly Pro\'</strong>',
    meta: 'Requester: Sarah Jenkins • Reason: Duplicate Tool',
    time: 'Yesterday',
  },
];

// Software catalog for request form
export const softwareCatalog = [
  { name: 'Adobe Creative Cloud', category: 'Design', icon: 'adobe' },
  { name: 'Figma Enterprise', category: 'Design', icon: 'figma' },
  { name: 'Canva Pro', category: 'Design', icon: 'figma' },
  { name: 'GitHub Enterprise', category: 'Development', icon: 'github' },
  { name: 'Jira Cloud', category: 'Development', icon: 'tableau' },
  { name: 'Slack Enterprise', category: 'Collaboration', icon: 'slack' },
  { name: 'Notion Team', category: 'Productivity', icon: 'notion' },
  { name: 'Asana Business', category: 'Project Management', icon: 'asana' },
  { name: 'Tableau Professional', category: 'Analytics', icon: 'tableau' },
];
