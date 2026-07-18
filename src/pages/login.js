/* ============================================================
   Login Page
   ============================================================ */
import { navigate } from '../router.js';

export function renderLogin() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="login-page">
      <div class="login-card">
        <div class="login-brand">
          <div class="brand-header">
            <svg class="brand-logo" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span class="brand-name">Azentra</span>
          </div>
          <div class="brand-subtitle">LICENSE MANAGER</div>
        </div>

        <form class="login-form" id="login-form">
          <div class="input-group">
            <label for="login-email">WORK EMAIL</label>
            <input type="email" class="input-field" id="login-email" placeholder="name@company.com" value="name@company.com" />
          </div>

          <div class="input-group">
            <label for="login-password">PASSWORD</label>
            <input type="password" class="input-field" id="login-password" placeholder="••••••••" value="••••••••" />
          </div>

          <button type="submit" class="btn btn-primary" id="login-submit-btn">
            Sign in
          </button>

          <p class="contact-notice">Contact your admin if you don't have access.</p>
        </form>
      </div>

      <p class="admin-routing-notice">
        Are you an admin? You'll be routed to the admin view automatically after login.
      </p>

      <footer class="login-footer">
        <a href="#">PRIVACY POLICY</a>
        <a href="#">TERMS OF SERVICE</a>
        <a href="#">HELP CENTER</a>
        <span class="copyright">© 2024 AZENTRA LEDGER. ALL RIGHTS RESERVED.</span>
      </footer>
    </div>
  `;

  // Role selection modal for demo purposes
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showRoleModal();
  });
}

function showRoleModal() {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);animation:fadeIn 0.2s ease-out;';
  modal.innerHTML = `
    <div style="background:white;border-radius:16px;padding:36px;width:380px;box-shadow:0 20px 60px rgba(0,0,0,0.15);animation:scaleIn 0.3s ease-out;">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:6px;">Choose Your View</h2>
      <p style="font-size:0.875rem;color:#636E72;margin-bottom:24px;">Select a role to explore the Azentra demo</p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <button class="btn btn-outline btn-lg w-full" id="role-employee" style="justify-content:flex-start;gap:14px;padding:16px 20px;">
          <span style="width:40px;height:40px;border-radius:10px;background:#E8F8F5;color:#00B894;display:flex;align-items:center;justify-content:center;font-size:1.125rem;flex-shrink:0;">👤</span>
          <span style="text-align:left;">
            <span style="font-weight:600;display:block;">Employee View</span>
            <span style="font-size:0.8125rem;color:#636E72;font-weight:400;">Alex Chen · Product Designer</span>
          </span>
        </button>
        <button class="btn btn-outline btn-lg w-full" id="role-admin" style="justify-content:flex-start;gap:14px;padding:16px 20px;">
          <span style="width:40px;height:40px;border-radius:10px;background:#E8E5FF;color:#6C5CE7;display:flex;align-items:center;justify-content:center;font-size:1.125rem;flex-shrink:0;">🛡️</span>
          <span style="text-align:left;">
            <span style="font-weight:600;display:block;">Admin View</span>
            <span style="font-size:0.8125rem;color:#636E72;font-weight:400;">Arun · System Admin</span>
          </span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  document.getElementById('role-employee').addEventListener('click', () => {
    modal.remove();
    navigate('employee-dashboard');
  });

  document.getElementById('role-admin').addEventListener('click', () => {
    modal.remove();
    navigate('admin-dashboard');
  });
}
