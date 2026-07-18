/* ============================================================
   Request Status Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { employeeUser, employeeNav, toolIcons, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderRequestStatus() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="app-layout">
      <aside class="app-sidebar" id="app-sidebar"></aside>
      <main class="app-main">
        <header class="app-topbar" id="app-topbar"></header>
        <div class="app-content animate-fade-in" id="page-content"></div>
      </main>
    </div>
  `;

  renderSidebar(employeeNav, employeeUser);
  renderTopbar(employeeUser);

  const content = document.getElementById('page-content');
  content.innerHTML = `
    <div class="flex items-center gap-12 mb-8">
      <button class="btn btn-ghost" id="btn-back" style="padding:8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>
      <div>
        <h1 class="page-title">Request Status</h1>
      </div>
    </div>

    <!-- Status Header -->
    <div class="request-status-header">
      <p class="page-subtitle">Track the progress of your license request in real time.</p>
      <div class="status-code">
        <div class="label-text">Request ID</div>
        <div class="code">AZ-2847</div>
      </div>
    </div>

    <!-- Request Info Card -->
    <div class="request-info-card animate-slide-up">
      <div class="request-info-top">
        <div class="request-tool">
          <div class="tool-icon figma" style="width:56px;height:56px;font-size:1.5rem;border-radius:10px;">F</div>
          <div class="request-tool-details">
            <h3>
              Figma Enterprise
              <span class="badge badge-primary">Design</span>
            </h3>
            <div class="meta">
              Requested by <strong>Alex Chen</strong> · Product Design Team<br/>
              3 Seats · Submitted Aug 22, 2023
            </div>
          </div>
        </div>
        <div class="request-badges">
          <div>
            <div class="label-text" style="margin-bottom:6px;">Urgency</div>
            <span class="badge badge-warning badge-dot">Medium</span>
          </div>
          <div>
            <div class="label-text" style="margin-bottom:6px;">Current State</div>
            <span class="badge badge-primary badge-dot">Under Review</span>
          </div>
        </div>
      </div>

      <!-- Step Indicator -->
      <div class="step-indicator">
        <div class="step completed">
          <div class="step-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="step-label">Submitted</div>
          <div class="step-meta">Aug 22, 2023<br/>9:30 AM</div>
        </div>
        <div class="step active">
          <div class="step-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/></svg>
          </div>
          <div class="step-label">Under Review</div>
          <div class="step-meta">Started Aug 23<br/>Assigned to IT</div>
        </div>
        <div class="step pending">
          <div class="step-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/></svg>
          </div>
          <div class="step-label">Decision</div>
          <div class="step-meta">Pending<br/>ETA: 1-2 days</div>
        </div>
      </div>
    </div>

    <!-- Review Time Callout -->
    <div class="review-time-callout mt-16 animate-slide-up" style="animation-delay:100ms;">
      <div class="callout-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Estimated review time: <strong>1-2 business days</strong></span>
      </div>
      <div class="callout-links">
        <a href="#/notifications">View Notifications</a>
        <a href="#" class="cancel-link" id="cancel-request-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Cancel Request
        </a>
      </div>
    </div>

    <!-- Bottom Grid -->
    <div class="status-bottom animate-slide-up" style="animation-delay:200ms;">
      <div class="review-notes">
        <h3>Review Notes</h3>
        <div class="note-item">
          <div class="avatar avatar-sm" style="background:#E3F2FD;color:#0984E3;">PS</div>
          <div class="note-content">
            <div class="note-author">
              Priya Singh
              <span class="note-time">Aug 23, 2:15 PM</span>
            </div>
            <div class="note-text">
              Reviewing request against current Figma license allocation. Design team currently at 92% capacity. Checking budget approval with finance.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="cost-impact-card">
          <div class="label-text">Estimated Cost Impact</div>
          <div class="cost-value">$450 <span>/month</span></div>
          <p style="font-size:0.8125rem;color:var(--text-secondary);line-height:1.5;">
            Based on Figma Enterprise pricing at $150/seat/month for 3 seats.
          </p>
          <div class="approval-chain">
            <div class="label-text mb-8">Approval Chain</div>
            <div class="avatar-stack">
              <div class="avatar avatar-sm" style="background:#E8E5FF;color:#6C5CE7;">PS</div>
              <div class="avatar avatar-sm" style="background:#E8F8F5;color:#00B894;">MK</div>
              <div class="avatar avatar-sm" style="background:#FFF9E6;color:#B8860B;">AD</div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:8px;">
              IT Admin → Finance → Director
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-back')?.addEventListener('click', () => navigate('employee-dashboard'));
}
