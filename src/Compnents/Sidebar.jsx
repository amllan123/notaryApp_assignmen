import axios from "axios";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.post(
        "https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse"
      );
      setUser(res.data);
    };
    getUser();
  }, []);

  return (
    <div className="Sidebarcontainer">
      <div className="logo">
        <OfflineBoltIcon />
        BeInsurance
      </div>

      <div className="userProfile">
        <img
          src={user?.response.personalInfo.photoURL}
          alt=""
          className="userImage"
        />
        <span className="userName">
          {user?.response.personalInfo.firstName +
            ` ` +
            user?.response.personalInfo.lastName}
        </span>

        <div className="userInformation">
          <div className="userInformationData">
            <EmailIcon />
            <span>{user?.response.personalInfo.email}</span>
          </div>
          <div className="userInformationData">
            <LocalPhoneIcon />
            <span>{user?.response.personalInfo.phoneNumber}</span>
          </div>
          <div className="userInformationData">
            <LocationOnIcon />
            <span>
              {user?.response.personalInfo.businessDetails.businessAddress}
            </span>
          </div>

          <div className="userInformationData">
            <PersonIcon />
            <span>Insurance ID:{user?.response._id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
