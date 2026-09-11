(() => {
  const toast = document.getElementById('toast');

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  };

  const loadB64Image = async (id, paths) => {
    const image = document.getElementById(id);
    if (!image) return;
    try {
      const parts = await Promise.all(paths.map(async (path) => {
        const response = await fetch(path, { cache: 'no-store' });
        if (!response.ok) throw new Error(`${path}: ${response.status}`);
        return (await response.text()).replace(/\s+/g, '');
      }));
      image.src = `data:image/jpeg;base64,${parts.join('')}`;
    } catch (error) {
      console.error('Image load failed', id, error);
    }
  };

  loadB64Image('heroImage', ['assets/data/hero-00.b64', 'assets/data/hero-rest.b64']);
  loadB64Image('storageImage', ['assets/data/storage.b64']);

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
