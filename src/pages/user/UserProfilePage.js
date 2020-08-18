import React from "react";
import { UserProfile } from "./UserProfile";

export function UserProfilePage(props) {
  return (
    <div className="user-sub-layout">
      <div className="primary-content">
        <UserProfile userId={props.match.params.userId} />
      </div>
    </div>
  );
}
