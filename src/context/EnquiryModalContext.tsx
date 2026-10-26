"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryModalContextType {
  isOpen: boolean;
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiryModal = () => setIsOpen(true);
  const closeEnquiryModal = () => setIsOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
