"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // prevent hydration error
  if (!isMounted) {
    //if in server side --> return null
    return null;
  }

  return (
    //if in client side --> return StoreModal
    <>
      <StoreModal />
    </>
  );
};
