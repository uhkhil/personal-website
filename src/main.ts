// Main entry point for any client-side TypeScript logic

document.addEventListener('DOMContentLoaded', () => {
  // Navigation active highlighting
  const currentPath = globalThis.location.pathname;
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (
      link.getAttribute('href') === currentPath ||
      (currentPath === '/' && link.getAttribute('href') === '/index.html')
    ) {
      link.classList.add('text-white');
      link.classList.remove('text-zinc-400');
    }
  });
});
