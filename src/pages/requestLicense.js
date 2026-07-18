/* ============================================================
   Request License Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { showToast } from '../components/toast.js';
import { employeeUser, employeeNav, softwareCatalog, toolIcons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderRequestLicense() {
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

  const categories = ['All', ...new Set(softwareCatalog.map(s => s.category))];

  const content = document.getElementById('page-content');
  content.innerHTML = `
    <div class="flex items-center gap-12 mb-24">
      <button class="btn btn-ghost" id="btn-back-dash" style="padding:8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>
      <div>
        <h1 class="page-title">Request a License</h1>
        <p class="page-subtitle">Browse the software catalog or submit a custom request</p>
      </div>
    </div>

    <!-- Software Catalog -->
    <div class="software-catalog">
      <h3 class="section-title mb-16">Software Catalog</h3>
      <div class="category-chips" id="category-chips">
        ${categories.map((c, i) => `
          <button class="category-chip ${i === 0 ? 'active' : ''}" data-category="${c}">${c}</button>
        `).join('')}
      </div>
      <div class="catalog-grid stagger-children" id="catalog-grid">
        ${renderCatalogItems(softwareCatalog)}
      </div>
    </div>

    <!-- Request Form -->
    <div class="request-form-card mt-32" id="request-form-section">
      <h3 class="section-title mb-24">Request Details</h3>
      <form id="request-form">
        <div class="form-grid">
          <div class="input-group">
            <label for="selected-tool">Selected Software</label>
            <input type="text" class="input-field" id="selected-tool" placeholder="Select from catalog above..." readonly />
          </div>
          <div class="input-group">
            <label for="num-seats">Number of Seats</label>
            <input type="number" class="input-field" id="num-seats" placeholder="1" min="1" value="1" />
          </div>
          <div class="input-group">
            <label for="urgency-select">Urgency Level</label>
            <select class="input-field" id="urgency-select">
              <option value="low">Low — No rush</option>
              <option value="medium" selected>Medium — Needed soon</option>
              <option value="high">High — Blocking work</option>
            </select>
          </div>
          <div class="input-group">
            <label for="department">Department</label>
            <input type="text" class="input-field" id="department" value="Product Design" />
          </div>
          <div class="input-group full-width">
            <label for="justification">Business Justification</label>
            <textarea class="input-field textarea-field" id="justification" placeholder="Explain why you need this software and how it will be used..."></textarea>
          </div>
        </div>
        <div class="flex gap-12 mt-24" style="justify-content:flex-end;">
          <button type="button" class="btn btn-ghost" id="btn-cancel-request">Cancel</button>
          <button type="submit" class="btn btn-primary" id="btn-submit-request">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  `;

  // Category filtering
  document.getElementById('category-chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.category-chip');
    if (!chip) return;

    document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const category = chip.dataset.category;
    const filtered = category === 'All' 
      ? softwareCatalog 
      : softwareCatalog.filter(s => s.category === category);

    document.getElementById('catalog-grid').innerHTML = renderCatalogItems(filtered);
    attachCatalogHandlers();
  });

  attachCatalogHandlers();

  // Form submission
  document.getElementById('request-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const tool = document.getElementById('selected-tool').value;
    if (!tool) {
      showToast('Please select a software from the catalog', 'danger');
      return;
    }
    showToast(`Request for "${tool}" submitted successfully!`, 'success');
    setTimeout(() => navigate('request-status'), 1500);
  });

  document.getElementById('btn-back-dash')?.addEventListener('click', () => navigate('employee-dashboard'));
  document.getElementById('btn-cancel-request')?.addEventListener('click', () => navigate('employee-dashboard'));
}

function renderCatalogItems(items) {
  return items.map(item => {
    const ti = toolIcons[item.name] || { src: '/Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
    return `
      <div class="catalog-item" data-tool="${item.name}">
        <div class="tool-icon" style="background: ${ti.bg}; width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:10px;margin-bottom:12px;">
          <img src="${ti.src}" class="${ti.filter}" style="width: 20px; height: 20px;" alt="${item.name}" />
        </div>
        <div class="tool-name">${item.name}</div>
        <div class="tool-category">${item.category}</div>
      </div>
    `;
  }).join('');
}

function attachCatalogHandlers() {
  document.querySelectorAll('.catalog-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.catalog-item').forEach(c => c.classList.remove('selected'));
      item.classList.add('selected');
      document.getElementById('selected-tool').value = item.dataset.tool;
    });
  });
}
