import React from "react";

export default function Loader() {
  return (
    <div>
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p>Loading..</p>
      </div>
    </div>
  );
}
