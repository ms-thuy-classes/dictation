/* =========================================================
   SHARED UTILITIES
   Các hàm dùng chung cho cả index.html và listening.html
   ========================================================= */

// Escape HTML để tránh XSS
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

// Hiển thị toast notification
function toast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);

  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(100%)';
    el.style.transition = 'all 0.3s ease';
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// Format thời gian (giây -> mm:ss)
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Chuẩn hóa từ để so sánh (bỏ dấu câu, lowercase)
function normalizeWord(w) {
  return w.toLowerCase().replace(/[.,!?;:"()\[\]{}]/g, '').trim();
}

// Lấy tham số từ URL
function getUrlParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}
