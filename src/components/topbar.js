/* ============================================================
   Topbar Component — with Dropdown Menus
   ============================================================ */
import { icons, notifications } from '../data/mockData.js';
import { navigate } from '../router.js';
import avatarImg from '../assets/avatar.png';

let activeDropdown = null;

function closeAllDropdowns() {
  document.querySelectorAll('.topbar-dropdown').forEach(d => {
    d.classList.remove('open');
  });
  activeDropdown = null;
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (!dropdown) return;

  if (activeDropdown === id) {
    closeAllDropdowns();
    return;
  }

  closeAllDropdowns();
  dropdown.classList.add('open');
  activeDropdown = id;
}

export function renderTopbar(user, containerId = 'app-topbar') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const notifTypeColors = {
    approved: 'background:#E8F8F5;color:#00B894;',
    rejected: 'background:#FDEDEC;color:#E74C3C;',
    renewal: 'background:#FFF9E6;color:#B8860B;',
    info: 'background:#E3F2FD;color:#0984E3;',
  };

  container.innerHTML = `
    <div class="topbar-search">
      <img src="./Icons/material-symbols_search-rounded.png" class="search-icon icon-grey" alt="Search" style="width:16px; opacity: 0.6;"/>
      <input type="text" class="input-field search-input" placeholder="Search licenses or vendors..." id="topbar-search-input" />
    </div>

    <div class="topbar-right">
      <!-- Notifications -->
      <div class="topbar-dropdown-wrapper">
        <button class="topbar-icon-btn" id="topbar-notifications-btn" title="Notifications">
          <img src="./Icons/line-md_bell.png" class="topbar-icon" alt="Notifications" />
          <span class="notification-dot"></span>
        </button>
        <div class="topbar-dropdown" id="dropdown-notifications">
          <div class="dropdown-header">
            <span class="dropdown-title">Notifications</span>
            <a href="#" class="dropdown-action" id="mark-all-read">Mark all read</a>
          </div>
          <div class="dropdown-body">
            ${notifications.map(notif => `
              <div class="dropdown-notif-item${notif.unread ? ' unread' : ''}" data-type="${notif.type}">
                <div class="dropdown-notif-icon" style="${notifTypeColors[notif.type] || ''}">
                  ${icons[notif.icon] || '📋'}
                </div>
                <div class="dropdown-notif-content">
                  <div class="dropdown-notif-title">${notif.title}</div>
                  <div class="dropdown-notif-desc">${notif.description}</div>
                </div>
                <span class="dropdown-notif-time">${notif.time}</span>
              </div>
            `).join('')}
          </div>
          <div class="dropdown-footer">
            <a href="#/notifications" id="view-all-notif">View All Notifications</a>
          </div>
        </div>
      </div>

      <!-- Settings -->
      <div class="topbar-dropdown-wrapper">
        <button class="topbar-icon-btn" id="topbar-settings-btn" title="Settings">
          <img src="./Icons/uil_setting.png" class="topbar-icon" alt="Settings" />
        </button>
        <div class="topbar-dropdown" id="dropdown-settings">
          <div class="dropdown-header">
            <span class="dropdown-title">Settings</span>
          </div>
          <div class="dropdown-body dropdown-menu-list">
            <div class="dropdown-menu-item" id="settings-profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Profile Settings</span>
            </div>
            <div class="dropdown-menu-item" id="settings-security">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Security</span>
            </div>
            <div class="dropdown-menu-item" id="settings-notifications">
              <img src="./Icons/line-md_bell.png" class="dropdown-icon" alt="bell" style="width:16px;height:16px;" />
              <span>Notification Preferences</span>
            </div>
            <div class="dropdown-menu-item" id="settings-billing">
              <img src="./Icons/mdi_wallet-outline.png" class="dropdown-icon" alt="billing" style="width:16px;height:16px;" />
              <span>Billing & Plans</span>
            </div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-menu-item" id="settings-integrations">
              <img src="./Icons/material-symbols_brush-outline.png" class="dropdown-icon" alt="brush" style="width:16px;height:16px;" />
              <span>Integrations</span>
            </div>
            <div class="dropdown-menu-item" id="settings-api">
              <img src="./Icons/material-symbols_key-outline.png" class="dropdown-icon" alt="key" style="width:16px;height:16px;" />
              <span>API Keys</span>
            </div>
          </div>
        </div>
      </div>

      <!-- User -->
      <div class="topbar-dropdown-wrapper">
        <div class="topbar-user" id="topbar-user-btn">
          <div class="topbar-user-info">
            <div class="user-name">${user.name}</div>
            <div class="user-role">${user.role}</div>
          </div>
          <div class="avatar">
            <img src="${avatarImg}" alt="${user.name}" class="avatar-img" />
          </div>
        </div>
        <div class="topbar-dropdown topbar-dropdown-right" id="dropdown-user">
          <div class="dropdown-user-header">
            <div class="avatar avatar-lg">
              <img src="${avatarImg}" alt="${user.name}" class="avatar-img" />
            </div>
            <div>
              <div class="dropdown-user-name">${user.name}</div>
              <div class="dropdown-user-role">${user.role}</div>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-body dropdown-menu-list">
            <div class="dropdown-menu-item" id="user-profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>My Profile</span>
            </div>
            <div class="dropdown-menu-item" id="user-settings">
              ${icons.settings}
              <span>Account Settings</span>
            </div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-menu-item dropdown-menu-item-danger" id="user-logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Toggle dropdowns
  document.getElementById('topbar-notifications-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('dropdown-notifications');
  });

  document.getElementById('topbar-settings-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('dropdown-settings');
  });

  document.getElementById('topbar-user-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('dropdown-user');
  });

  // Close on outside click
  document.addEventListener('click', () => {
    closeAllDropdowns();
  });

  // Stop dropdown clicks from closing
  document.querySelectorAll('.topbar-dropdown').forEach(d => {
    d.addEventListener('click', (e) => e.stopPropagation());
  });

  // Logout handler
  document.getElementById('user-logout')?.addEventListener('click', () => {
    closeAllDropdowns();
    navigate('login');
  });

  // Notification item clicks
  container.querySelectorAll('.dropdown-notif-item').forEach(item => {
    item.addEventListener('click', () => {
      closeAllDropdowns();
      const type = item.dataset.type;
      if (type === 'approved') navigate('notifications');
      else if (type === 'rejected') navigate('rejection-notification');
    });
  });

  // Mark all read
  document.getElementById('mark-all-read')?.addEventListener('click', (e) => {
    e.preventDefault();
    container.querySelectorAll('.dropdown-notif-item.unread').forEach(item => {
      item.classList.remove('unread');
    });
    const dot = container.querySelector('.notification-dot');
    if (dot) dot.style.display = 'none';
  });
}
