/* ============================================================
   Sidebar Component
   ============================================================ */
import { navigate, getCurrentRoute } from '../router.js';

export function renderSidebar(navItems, user, containerId = 'app-sidebar') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentRoute = getCurrentRoute();

  const pngIcons = {
    dashboard: './Icons/mingcute_grid-2-line.png',
    licenses: './Icons/boxicons_receipt.png',
    requests: './Icons/mdi_clipboard-clock-outline.png',
    renewals: './Icons/ic_round-sync.png',
    audit: './Icons/material-symbols_history.png',
    helpCircle: './Icons/material-symbols_help-outline.png'
  };

  container.innerHTML = `
    <div class="sidebar-logo">
      <h1>Azentra</h1>
      <span>LICENSE LEDGER</span>
    </div>
    <nav class="sidebar-nav">
      ${navItems.map(item => {
        const isActive = currentRoute === item.route;
        const iconSrc = pngIcons[item.icon] || '';
        const iconClass = isActive ? 'sidebar-icon active-icon' : 'sidebar-icon';
        return `
          <div class="sidebar-nav-item ${isActive ? 'active' : ''}" data-route="${item.route}" id="nav-${item.id}">
            <span class="nav-icon">
              ${iconSrc ? `<img src="${iconSrc}" class="${iconClass}" alt="${item.label} icon" />` : ''}
            </span>
            <span>${item.label}</span>
          </div>
        `;
      }).join('')}
    </nav>
    <div class="sidebar-bottom">
      <button class="btn" id="sidebar-upgrade-btn">Upgrade Plan</button>
    </div>
    <div class="sidebar-help" id="sidebar-help-btn">
      <img src="${pngIcons.helpCircle}" class="sidebar-icon help-icon" alt="Help Center icon" />
      <span>Help Center</span>
    </div>
  `;

  // Attach navigation handlers
  container.querySelectorAll('.sidebar-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const route = item.dataset.route;
      navigate(route);
    });
  });
}
