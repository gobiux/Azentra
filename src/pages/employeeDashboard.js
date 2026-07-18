/* ============================================================
   Employee Dashboard Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { employeeUser, employeeNav, employeeStats, employeeLicenses, toolIcons, notifications, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderEmployeeDashboard() {
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
    <!-- Main Header -->
    <div class="dashboard-header-container">
      <div class="header-left">
        <h1 class="page-title">License Overview</h1>
        <p class="page-subtitle">Manage your professional software stack and permissions.</p>
      </div>
      <div class="header-right">
        <button class="btn btn-primary" id="btn-request-license">
          + Request New License
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="dashboard-stats" style="grid-template-columns: repeat(3, 1fr);">
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">ACTIVE LICENSES</span>
          <div class="stat-icon-wrapper bg-purple-light">
            <img src="./Icons/material-symbols_verified-outline.png" class="stat-icon icon-purple" alt="Active" />
          </div>
        </div>
        <div class="stat-value">12</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">PENDING REQUESTS</span>
          <div class="stat-icon-wrapper bg-orange-light">
            <img src="./Icons/material-symbols_hourglass-outline.png" class="stat-icon icon-orange" alt="Pending" />
          </div>
        </div>
        <div class="stat-value">2</div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">EXPIRING SOON</span>
          <div class="stat-icon-wrapper bg-red-light">
            <img src="./Icons/material-symbols_warning-outline-rounded.png" class="stat-icon icon-red" alt="Expiring" />
          </div>
        </div>
        <div class="stat-value value-red">1</div>
      </div>
    </div>

    <!-- Assigned Licenses Section -->
    <div class="card assigned-licenses-card">
      <div class="card-header">
        <h2 class="card-title">Assigned Licenses</h2>
      </div>
      <div class="table-container">
        <table class="data-table" id="assigned-licenses-table">
          <thead>
            <tr>
              <th>TOOL NAME</th>
              <th>CATEGORY</th>
              <th>ASSIGNED DATE</th>
              <th>EXPIRY DATE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="tool-info">
                  <div class="tool-icon" style="background: #F5F5F5;">
                    <img src="./Icons/ph_note.png" class="icon-grey" style="width: 20px; height: 20px;" alt="Notion" />
                  </div>
                  <span class="tool-name">Notion</span>
                </div>
              </td>
              <td>Productivity</td>
              <td>Jan 12, 2024</td>
              <td>Jan 12, 2025</td>
              <td><span class="badge badge-purple-pill">ACTIVE</span></td>
              <td class="action-cell"><button class="action-btn">⋮</button></td>
            </tr>
            <tr>
              <td>
                <div class="tool-info">
                  <div class="tool-icon" style="background: #E8E5FF;">
                    <img src="./Icons/bx_chat.png" class="icon-purple" style="width: 20px; height: 20px;" alt="Slack" />
                  </div>
                  <span class="tool-name">Slack</span>
                </div>
              </td>
              <td>Collaboration</td>
              <td>Feb 05, 2024</td>
              <td>May 15, 2024</td>
              <td><span class="badge badge-red-pill">EXPIRING</span></td>
              <td class="action-cell"><button class="action-btn">⋮</button></td>
            </tr>
            <tr>
              <td>
                <div class="tool-info">
                  <div class="tool-icon" style="background: #E8E5FF;">
                    <img src="./Icons/material-symbols_brush-outline.png" class="icon-purple" style="width: 20px; height: 20px;" alt="Figma" />
                  </div>
                  <span class="tool-name">Figma</span>
                </div>
              </td>
              <td>Design</td>
              <td>Mar 10, 2024</td>
              <td>Mar 10, 2025</td>
              <td><span class="badge badge-purple-pill">ACTIVE</span></td>
              <td class="action-cell"><button class="action-btn">⋮</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Global Seat Utilization -->
      <div class="seat-utilization">
        <div class="utilization-header">
          <span class="utilization-label">GLOBAL SEAT UTILIZATION</span>
          <span class="utilization-value">15 / 20 Seats Used</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: 75%;"></div>
        </div>
      </div>
    </div>

    <!-- Dashboard Footer -->
    <div class="dashboard-footer">
      <div class="footer-left">© 2024 AZENTRA LEDGER. ALL RIGHTS RESERVED.</div>
      <div class="footer-right">
        <a href="#">PRIVACY POLICY</a>
        <a href="#">TERMS OF SERVICE</a>
        <a href="#">HELP CENTER</a>
      </div>
    </div>
  `;

  // Event handlers
  document.getElementById('btn-request-license')?.addEventListener('click', () => navigate('request-license'));
}
