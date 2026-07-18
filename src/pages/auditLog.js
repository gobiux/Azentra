/* ============================================================
   Audit Log Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { adminUser, adminNav, auditEntries, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderAuditLog() {
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
    <!-- Page Header -->
    <div class="audit-page-header">
      <div class="header-left">
        <h1>Audit Log</h1>
        <p>Track every interaction and administrative change within the Azentra ecosystem for total compliance and visibility.</p>
      </div>
      <div>
        <div class="label-text mb-8">Date Range</div>
        <button class="date-range-picker" id="date-range-btn">
          Oct 24, 2023 - Oct 31, 2023
          ${icons.calendar}
        </button>
      </div>
    </div>

    <!-- Audit Entries -->
    <div class="audit-entries stagger-children" id="audit-entries">
      ${auditEntries.map((entry, i) => `
        <div class="audit-entry" style="animation-delay:${i * 80}ms;">
          <div class="audit-icon entry-avatar" style="background: ${entry.bg}; width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0;">
            <img src="${entry.iconSrc}" class="${entry.iconFilter}" style="width: 20px; height: 20px;" alt="Audit" />
          </div>
          <div class="entry-content">
            <div class="entry-text">${entry.text}</div>
            <div class="entry-meta">
              <span>${entry.meta}</span>
              <span class="meta-separator"></span>
              <span>${entry.time}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Pagination -->
    <div class="pagination mt-24">
      <span class="page-info">Showing 1-4 of 128 activities</span>
      <div class="page-controls">
        <button class="btn btn-outline btn-sm">
          ← Previous
        </button>
        <button class="btn btn-primary btn-sm">
          Next →
        </button>
      </div>
    </div>
  `;
}
