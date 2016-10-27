// @flow
import hideable from "./hideable";
import type { HideableComponent } from "./types";


type ProfileProps = {
  username:string,
  onEdit:Function,
  hide:boolean,
};

function Profile(props:ProfileProps) {
  return (
    <div>
      Your Username: {props.username}
      <button onClick={props.onEdit}>Edit Profile</button>
      Hide: {props.hide}
    </div>
  );
}

const HideableProfile:HideableComponent<ProfileProps> = hideable(Profile);

export default HideableProfile;
