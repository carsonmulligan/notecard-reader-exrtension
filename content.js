(function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.bottom = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '50%';
    overlay.style.backgroundColor = 'white';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);
  })();