(() => {
  const toast = document.getElementById('toast');
  const cleanUrl = window.location.origin + window.location.pathname;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  };

  const shareData = {
    title: 'Jason A. Hayes | Applied R&D | Bring the Lab Home',
    text: 'A documented path from hands-on Washington R&D to current On the Double development—and the mission to bring the lab home.',
    url: cleanUrl
  };

  document.querySelectorAll('[data-share]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }
        await navigator.clipboard.writeText(cleanUrl);
        showToast('Link copied');
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        showToast('Share link ready');
      }
    });
  });
})();