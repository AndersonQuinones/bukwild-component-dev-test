import React from "react";
import Strings from "../../../constants/Strings";
import "./Footer.css";

function handleCTAClick() {
  // TODO - Implement click handler
  console.log("CTA Clicked!");
}

export default function Footer(props) {
  return (
    <div>
      <div className="Footer">
        <div className=" FooterItem text-callout">{props.cta}</div>
        {/* TODO - Limit clickable surface  */}
        <div className="FooterItem FooterButton" onClick={handleCTAClick}>
          {Strings.partials.Header.letsTalkButtonText}
          <span className="FooterIcon">
            {Strings.partials.Header.letsTalkButtonIcon}
          </span>
        </div>
      </div>
    </div>
  );
}
