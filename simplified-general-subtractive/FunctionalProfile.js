// @flow
import hideable from "./hideable";
import type { HideableComponent } from "./types";


type ProfileProps = {
  username?:string,
  onEdit:Function,
  hide:boolean,
};

function Profile({
  username="World",
  onEdit,
  hide,
}:ProfileProps) {
  return (
    <div>
      Your Username: {username}
      <button onClick={onEdit}>Edit Profile</button>
      Hide: {hide}
    </div>
  );
}

const HideableProfile:HideableComponent<ProfileProps, *> = hideable(Profile);

export default HideableProfile;
