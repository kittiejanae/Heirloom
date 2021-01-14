import React from "react";
import { DesktopProfileContainer, DesktopProfileImg } from "./ProfileElements";

import DesktopProfile from "../../images/DesktopProfile.png";

const Profile = () => {
  return (
    <>
      <DesktopProfileContainer to="/AppDemo">
        <DesktopProfileImg src={DesktopProfile} type="image/png" />
      </DesktopProfileContainer>
    </>
  );
};

export default Profile;
