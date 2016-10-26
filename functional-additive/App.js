// @flow
import HideableProfile from "./Profile";


const badProfile = (
  <HideableProfile
    username={1234}
    onEdit={"not implemented yet"}
    hide="yes"
  />
);

const goodProfile = (
  <HideableProfile
    username={"pcardune"}
    onEdit={() => console.log("not implemented yet")}
    hide={true}
  />
);
