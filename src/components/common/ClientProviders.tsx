"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/Store";
import Dock from "@/components/common/Dock";
import navData from "@/data/navData";
import { ReactNode } from "react";

export default function ClientProviders({
  children,
}: {
  readonly children: ReactNode;
}) {
  const items = navData();

  return (
    <Provider store={store}>
      <div className="relative min-h-screen">
        {children}

        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            className="text-white"
          />
        </div>
      </div>
    </Provider>
  );
}
