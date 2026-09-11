(() => {
  const toast = document.getElementById('toast');

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  };


  const shareData = {
    title: 'Bring the Lab Home',
    text: 'The lab existed. The lab worked. Now we bring it home and put it back to work.',
    url: window.location.href
  };

  document.querySelectorAll('[data-share]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied');
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        showToast('Share link ready');
      }
    });
  });
})();
