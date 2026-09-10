"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { EnquiryPrefill } from "@/lib/enquiry";

interface EnquiryModalContextValue {
  isOpen: boolean;
  prefill: EnquiryPrefill | null;
  openModal: (prefill: EnquiryPrefill) => void;
  closeModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | undefined>(
  undefined
);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<EnquiryPrefill | null>(null);

  const openModal = useCallback((p: EnquiryPrefill) => {
    setPrefill(p);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // small delay-free reset is fine; content only matters while open
    setPrefill(null);
  }, []);

  const value = useMemo(
    () => ({ isOpen, prefill, openModal, closeModal }),
    [isOpen, prefill, openModal, closeModal]
  );

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used inside EnquiryModalProvider");
  }
  return ctx;
}