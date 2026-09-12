(() => {
  const cfg = window.BRING_THE_LAB_HOME || {};
  const toast = document.getElementById('toast');
  const fallbackUrl = window.location.origin + window.location.pathname;
  const publicUrl = cfg.publicUrl || fallbackUrl;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  };

  const supportLink = document.getElementById('supportLink');
  if (supportLink && cfg.fundraiserUrl) supportLink.href = cfg.fundraiserUrl;

  const repositoryLink = document.getElementById('repositoryLink');
  if (repositoryLink && cfg.repositoryUrl) repositoryLink.href = cfg.repositoryUrl;

  const shareData = {
    title: cfg.shareTitle || 'Jason A. Hayes | Applied R&D | Bring the Lab Home',
    text: cfg.shareText || 'Research gets real when you build it. Follow the documented R&D path and the mission to bring the lab home.',
    url: publicUrl
  };

  const copyShareLink = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(publicUrl);
      return true;
    }

    const field = document.createElement('textarea');
    field.value = publicUrl;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(field);
    return copied;
  };

  document.querySelectorAll('[data-share]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }
        const copied = await copyShareLink();
        showToast(copied ? 'Link copied' : 'Copy the page link to share');
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        try {
          const copied = await copyShareLink();
          showToast(copied ? 'Link copied' : 'Copy the page link to share');
        } catch (_) {
          showToast('Copy the page link to share');
        }
      }
    });
  });
})();
