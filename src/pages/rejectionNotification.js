/* ============================================================
   Rejection Notification Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { showToast } from '../components/toast.js';
import { employeeUser, employeeNav } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderRejectionNotification() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="app-layout">
      <aside class="app-sidebar" id="app-sidebar"></aside>
      <main class="app-main">
        <header class="app-topbar" id="app-topbar"></header>
        <div class="app-content animate-fade-in notification-detail" id="page-content"></div>
      </main>
    </div>
  `;

  renderSidebar(employeeNav, employeeUser);
  renderTopbar(employeeUser);

  const content = document.getElementById('page-content');
  content.innerHTML = `
    <div class="flex items-center gap-12 mb-24">
      <button class="btn btn-ghost" id="btn-back" style="padding:8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>
      <div>
        <h1 class="page-title" style="font-size:1.5rem;">Notification</h1>
      </div>
    </div>

    <!-- Rejection Banner -->
    <div class="notification-banner danger">
      <div class="banner-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </div>
      <div>
        <h3>Your request was not approved.</h3>
        <p>Grammarly Pro license request has been rejected by the admin.</p>
      </div>
    </div>

    <!-- Rejection Body -->
    <div class="rejection-body">
      <!-- Left: Main Content -->
      <div class="rejection-main">
        <div class="rejection-tool-card">
          <div class="rejection-tool-header">
            <div class="rejection-tool-info">
              <div class="tool-icon asana" style="width:56px;height:56px;font-size:1.5rem;border-radius:10px;">G</div>
              <div>
                <h3>Grammarly Pro</h3>
                <span class="badge badge-neutral" style="margin-top:6px;">Writing & Communication</span>
              </div>
            </div>
            <div class="requested-date">
              <div class="label-text">Requested</div>
              <div class="date-value">Aug 20, 2023</div>
            </div>
          </div>

          <!-- Admin Response -->
          <div class="admin-response">
            <div class="response-label">Admin Response</div>
            <div class="response-quote">
              "We already provide all employees with a Grammarly Business account through our enterprise license. A Pro upgrade is not necessary as the existing plan covers the key features needed for your role. Please check your email for the existing account activation link."
            </div>
            <div class="response-author">
              <span class="dot"></span>
              Reviewed by Arun · System Admin · Aug 22, 2023
            </div>
          </div>
        </div>

        <!-- Impact & Queue -->
        <div class="impact-queue-row">
          <div class="impact-card">
            <div class="label-text">Impact Level</div>
            <div class="impact-value">Low Impact</div>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:4px;">
              Existing alternative available
            </p>
          </div>
          <div class="impact-card">
            <div class="label-text">Queue Status</div>
            <div class="impact-value closed">Closed</div>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:4px;">
              Request #AZ-2841
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="rejection-actions">
          <button class="btn btn-primary" id="btn-request-again">
            Request Again
          </button>
          <button class="btn btn-outline" id="btn-browse-alt">
            Browse Alternatives
          </button>
        </div>
      </div>

      <!-- Right: Sidebar -->
      <div class="rejection-sidebar">
        <!-- Why Rejected -->
        <div class="reasons-card">
          <h4>Why Was This Rejected?</h4>
          <div class="reason-item">
            <span class="reason-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </span>
            <span>Duplicate Tool — An existing enterprise license for Grammarly Business is already active.</span>
          </div>
          <div class="reason-item">
            <span class="reason-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </span>
            <span>Budget Constraints — Q3 software budget has been allocated to higher-priority requests.</span>
          </div>
          <div class="reason-item">
            <span class="reason-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </span>
            <span>Feature Overlap — Current Grammarly Business plan covers all required features.</span>
          </div>
        </div>

        <!-- Suggested Alternatives -->
        <div class="alternatives-card">
          <h4>Suggested Alternatives</h4>
          <div class="alternative-item">
            <div class="alt-info">
              <div class="alt-icon" style="background:#E8F8F5;color:#00B894;">G</div>
              <span class="alt-name">Grammarly Business</span>
            </div>
            <span class="alt-arrow">→</span>
          </div>
          <div class="alternative-item">
            <div class="alt-info">
              <div class="alt-icon" style="background:#E3F2FD;color:#0984E3;">H</div>
              <span class="alt-name">Hemingway Editor</span>
            </div>
            <span class="alt-arrow">→</span>
          </div>
          <div class="alternative-item">
            <div class="alt-info">
              <div class="alt-icon" style="background:#FFF9E6;color:#B8860B;">P</div>
              <span class="alt-name">ProWritingAid</span>
            </div>
            <span class="alt-arrow">→</span>
          </div>
        </div>

        <!-- Chat with IT -->
        <div class="chat-it-card">
          <div class="label-text">Need Help?</div>
          <h4>Chat with IT Procurement</h4>
          <p style="font-size:0.8125rem;opacity:0.8;margin-top:6px;line-height:1.5;">
            Have questions about this decision? Reach out to the procurement team.
          </p>
          <button class="btn btn-sm" style="background:rgba(255,255,255,0.15);color:white;margin-top:12px;border:1px solid rgba(255,255,255,0.2);" id="btn-chat-it">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-back')?.addEventListener('click', () => navigate('employee-dashboard'));
  document.getElementById('btn-request-again')?.addEventListener('click', () => {
    showToast('Redirecting to request form...', 'info');
    setTimeout(() => navigate('request-license'), 800);
  });
  document.getElementById('btn-browse-alt')?.addEventListener('click', () => {
    showToast('Opening software catalog...', 'info');
    setTimeout(() => navigate('request-license'), 800);
  });
  document.getElementById('btn-chat-it')?.addEventListener('click', () => {
    showToast('Chat feature coming soon!', 'info');
  });
}
