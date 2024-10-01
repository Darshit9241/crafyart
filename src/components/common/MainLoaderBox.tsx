import { RootState } from "@/src/redux";
import React from "react";
import { useSelector } from "react-redux";

const MainLoaderBox = () => {
  const mainLoading = useSelector(
    (state: RootState) => state.actions.mainLoader
  );

  return (
    <div>
      {mainLoading && (
        <main className="main bg-white">
          <main className="main">
            <span className="loader_span"></span>
          </main>
        </main>
      )}
    </div>
  );
};

export default MainLoaderBox;
