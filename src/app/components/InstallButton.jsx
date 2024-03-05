'use client'

import { useEffect, useState } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó instalar la aplicación');
        } else {
          console.log('El usuario rechazó instalar la aplicación');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <button onClick={handleInstallClick} aria-label="Instalar la aplicación">
      Instalar la aplicación
    </button>
  );
};

export default InstallButton;
