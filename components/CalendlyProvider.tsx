'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PopupModal, useCalendlyEventListener } from 'react-calendly';

interface CalendlyContextType {
  openModal: () => void;
  closeModal: () => void;
}

const CalendlyContext = createContext<CalendlyContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById('calendly-root'));
  }, []);

  const openModal = () => {
    setIsOpen(true);
    setLoading(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setLoading(false);
    document.body.style.overflow = '';
  };

  useCalendlyEventListener({
    onEventTypeViewed: () => setLoading(false),
  });

  return (
    <CalendlyContext.Provider value={{ openModal, closeModal }}>
      {children}

      {rootElement && (
        <PopupModal
          url="https://calendly.com/saidur_appsmove/intro"
          open={isOpen}
          onModalClose={closeModal}
          rootElement={rootElement}
          pageSettings={{
            hideEventTypeDetails: true,
            hideGdprBanner: true,
          }}
        />
      )}

      {isOpen && loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-[9999]">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  return useContext(CalendlyContext);
}
