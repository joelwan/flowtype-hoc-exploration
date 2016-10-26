// @flow
import LoggedProfile from "./Profile";


const badProfile = (
  <LoggedProfile
    username={1234}
    onEdit={"not implemented yet"}
  />
);

const goodProfile = (
  <LoggedProfile
    username={"pcardune"}
    onEdit={() => console.log("not implemented yet")}
  />
);
