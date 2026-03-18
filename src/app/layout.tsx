import type { ReactNode } from "react";

// Root layout mínimo — el locale layout en [locale]/layout.tsx maneja fonts e i18n
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
