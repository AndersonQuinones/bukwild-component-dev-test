import React from "react";
import Strings from "../../../constants/Strings";

export default function Footer(props) {
  return (
    <div>
      <div className="PageFooter">
        <p className="text-callout">{props.cta}</p>

        <button>{Strings.partials.Header.letsTalkButtonText}</button>
      </div>
    </div>
  );
}
