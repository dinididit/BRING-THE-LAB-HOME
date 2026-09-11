(() => {
  const cfg = window.BRING_THE_LAB_HOME || {};
  const fundraiser = document.getElementById('fundraiserLink');
  const support = document.getElementById('supportButton');
  const note = document.getElementById('fundraiserNote');
  const toast = document.getElementById('toast');

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  };

  if (cfg.fundraiserUrl && /^https?:\/\//i.test(cfg.fundraiserUrl)) {
    fundraiser.href = cfg.fundraiserUrl;
    fundraiser.textContent = 'Go to the fundraiser';
    fundraiser.removeAttribute('aria-disabled');
    fundraiser.setAttribute('rel', 'noopener noreferrer');
    support.href = cfg.fundraiserUrl;
    support.setAttribute('rel', 'noopener noreferrer');
    note.textContent = 'This page never handles donations directly. Supporters are sent to the fundraising platform.';
  } else {
    fundraiser.addEventListener('click', (event) => {
      event.preventDefault();
      showToast('Fundraiser link is the next connection.');
    });
  }

  const shareUrl = cfg.publicUrl || window.location.href;
  const shareData = {
    title: 'Bring the Lab Home',
    text: 'The lab existed. The lab worked. Now we bring it home and put it back to work.',
    url: shareUrl
  };

  document.querySelectorAll('[data-share]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }
        await navigator.clipboard.writeText(shareUrl);
        showToast('Link copied. Send it to a builder.');
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        try {
          await navigator.clipboard.writeText(shareUrl);
          showToast('Link copied.');
        } catch {
          showToast('Copy this link: ' + shareUrl);
        }
      }
    });
  });
})();
