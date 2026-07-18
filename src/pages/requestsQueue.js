/* ============================================================
   Requests Queue Page (Admin)
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { showToast } from '../components/toast.js';
import { adminUser, adminNav, requestQueue, toolIcons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderRequestsQueue() {
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

  renderSidebar(adminNav, adminUser);
  renderTopbar(adminUser);

  const content = document.getElementById('page-content');
  content.innerHTML = `
    <h1 class="page-title mb-24">Incoming Requests</h1>

    <!-- Tabs -->
    <div class="tabs" id="queue-tabs">
      <div class="tab active" data-tab="all">All Requests</div>
      <div class="tab" data-tab="pending">Pending</div>
      <div class="tab" data-tab="approved">Approved</div>
      <div class="tab" data-tab="rejected">Rejected</div>
    </div>

    <!-- Queue Items -->
    <div class="stagger-children" id="queue-list">
      ${requestQueue.map((req, i) => {
        const ti = toolIcons[req.tool] || { src: './Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
        const urgencyClass = req.urgency === 'HIGH' ? 'high' : req.urgency === 'MEDIUM' ? 'medium' : 'low';
        return `
          <div class="request-queue-item ${urgencyClass}-urgency" data-request-id="${req.id}" style="animation-delay:${i * 80}ms;">
            <div class="queue-item-header">
              <div class="queue-requester">
                <div class="avatar">${req.initials}</div>
                <div class="queue-requester-info">
                  <h4>${req.requester}</h4>
                  <span class="role">${req.role}</span>
                </div>
              </div>
              <div class="queue-urgency">
                <div class="urgency-label ${urgencyClass}">● ${req.urgency} URGENCY</div>
                <div class="date">${req.date}</div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="queue-item-details">
                <div class="queue-detail-group">
                  <div class="label-text">Tool Requested</div>
                  <div class="detail-value flex items-center gap-8">
                    <div class="tool-icon" style="background: ${ti.bg}; width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
                      <img src="${ti.src}" class="${ti.filter}" style="width: 14px; height: 14px;" alt="${req.tool}" />
                    </div>
                    ${req.tool}
                  </div>
                </div>
                <div class="queue-detail-group">
                  <div class="label-text">Seats</div>
                  <div class="detail-value">${req.seats}</div>
                </div>
              </div>
              <div class="queue-item-actions">
                <button class="btn btn-danger btn-sm reject-btn" data-id="${req.id}">Reject</button>
                <button class="btn btn-success btn-sm approve-btn" data-id="${req.id}">Approve Request</button>
              </div>
            </div>

            ${req.justification ? `
              <div class="queue-justification">
                <span class="quote-icon">❝</span>
                <span>${req.justification}</span>
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>

    <!-- Automation Promo -->
    <div class="automation-promo animate-slide-up" style="animation-delay:400ms;">
      <div class="promo-content">
        <h3>Automate Approval Workflows?</h3>
        <p>Reduce manual review time by 60% with smart policy-based automated approvals for low-cost licenses.</p>
        <button class="btn btn-outline mt-16" id="btn-configure-rules">Configure Rules</button>
      </div>
      <div class="promo-visual">✨</div>
    </div>
  `;

  // Tab switching
  document.getElementById('queue-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabName = tab.dataset.tab;
    const items = document.querySelectorAll('.request-queue-item');
    items.forEach(item => {
      item.style.display = 'block';
    });

    if (tabName !== 'all') {
      showToast(`Showing ${tabName} requests`, 'info', 2000);
    }
  });

  // Approve/Reject handlers
  content.querySelectorAll('.approve-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.request-queue-item');
      card.style.transition = 'all 0.3s ease';
      card.style.opacity = '0.5';
      card.style.transform = 'translateX(20px)';
      showToast('Request approved successfully!', 'success');
      setTimeout(() => {
        card.style.borderLeftColor = 'var(--success)';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
        btn.textContent = '✓ Approved';
        btn.disabled = true;
        btn.style.opacity = '0.6';
      }, 400);
    });
  });

  content.querySelectorAll('.reject-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.request-queue-item');
      card.style.transition = 'all 0.3s ease';
      card.style.opacity = '0.5';
      showToast('Request rejected.', 'danger');
      setTimeout(() => {
        card.style.borderLeftColor = 'var(--danger)';
        card.style.opacity = '0.6';
        const approveBtn = card.querySelector('.approve-btn');
        if (approveBtn) approveBtn.remove();
        btn.textContent = '✕ Rejected';
        btn.disabled = true;
      }, 400);
    });
  });

  document.getElementById('btn-configure-rules')?.addEventListener('click', () => {
    showToast('Automation rules coming soon!', 'info');
  });
}
