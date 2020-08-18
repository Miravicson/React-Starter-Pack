import React from "react";
import { PrimaryHeader } from "../components/PrimaryHeader";

function withLayout(Component) {
  return function DecoratedComponent(props) {
    return (
      <div className="primary-layout">
        <PrimaryHeader />
        <main>
          <Component {...props} />
        </main>
      </div>
    );
  };
}

export default withLayout;
