(() => {
  const cfg = window.BRING_THE_LAB_HOME || {};
  const fundraiser = document.getElementById('fundraiserLink');
  const support = document.getElementById('supportButton');
  const note = document.getElementById('fundraiserNote');
  const toast = document.getElementById('toast');

  const receiptNote = document.querySelector('.receipt-note');
  if (receiptNote) receiptNote.textContent = 'This page stays focused on the lab, the equipment and the recovery trail.';
  const privacyNote = document.querySelector('.privacy-note');
  if (privacyNote) privacyNote.textContent = 'No exact storage address is published here. The campaign needs proof, not somebody else\'s keys.';
  const storageImage = document.getElementById('storageImage');
  if (storageImage) storageImage.alt = 'Single cropped still from the Washington storage video showing Tony beside the storage unit and stored equipment.';

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  };

  const loadB64Image = async (id, paths) => {
    const image = document.getElementById(id);
    if (!image) return;
    try {
      const parts = await Promise.all(paths.map(async (path) => {
        const response = await fetch(path, { cache: 'force-cache' });
        if (!response.ok) throw new Error(`Image data ${response.status}`);
        return (await response.text()).replace(/\s+/g, '');
      }));
      image.src = `data:image/jpeg;base64,${parts.join('')}`;
      image.classList.add('loaded');
    } catch (error) {
      console.error('Image load failed', id, error);
    }
  };

  loadB64Image('heroImage', ['assets/data/hero-00.b64', 'assets/data/hero-rest.b64']);
  loadB64Image('storageImage', ['assets/data/storage.b64']);

  if (fundraiser && support && note && cfg.fundraiserUrl && /^https?:\/\//i.test(cfg.fundraiserUrl)) {
    fundraiser.href = cfg.fundraiserUrl;
    fundraiser.textContent = 'Go to the fundraiser';
    fundraiser.removeAttribute('aria-disabled');
    fundraiser.setAttribute('rel', 'noopener noreferrer');
    support.href = cfg.fundraiserUrl;
    support.setAttribute('rel', 'noopener noreferrer');
    note.textContent = 'This page never handles donations directly. Supporters are sent to the fundraising platform.';
  } else if (fundraiser) {
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
