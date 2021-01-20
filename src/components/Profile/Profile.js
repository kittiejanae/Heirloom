import React from "react";
import { DesktopProfileContainer, DesktopProfileImg } from "./ProfileElements";

import DesktopProfile from "../../images/DesktopProfile.png";

function Profile({ handleReset }) {
  return (
    <>
      <DesktopProfileContainer to="/Category" onClick={handleReset}>
        <DesktopProfileImg src={DesktopProfile} type="image/png" />
      </DesktopProfileContainer>
    </>
  );
}

export default Profile;
