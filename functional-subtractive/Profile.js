// @flow
import hideable from "./hideable";
import type { FunctionalComponent, HideableProps } from "./hideable";


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

const HideableProfile:FunctionalComponent<$Diff<ProfileProps, HideableProps>> = hideable(Profile);

export default HideableProfile;
