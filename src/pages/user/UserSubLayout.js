import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserNav } from "./UsersMenu";
import { UserAddPage } from "./UserAddPage";
import { BrowseUsersPage } from "./BrowseUsersPage";
import { UserProfilePage } from "./UserProfilePage";
// import { UserNav, BrowseUsersPage, UserAddPage, UserProfilePage } from "./App";

export function UserSubLayout(props) {
  return (
    <div className="user-sub-layout">
      <aside>
        <UserNav />
      </aside>

      <div className="primary-content">
        <Switch>
          <Route path={props.match.path} exact component={BrowseUsersPage} />
          <Route
            path={`${props.match.path}/add`}
            exact
            component={UserAddPage}
          />
          <Route
            path={`${props.match.path}/:userId`}
            component={UserProfilePage}
          />
        </Switch>
      </div>
    </div>
  );
}
