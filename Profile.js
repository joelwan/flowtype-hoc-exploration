// @flow
import hideable from "./hideable";
import type { FunctionalComponent, HideableProps } from "./hideable";


type ProfileProps = {
  username:string,
  onEdit:Function,
};

function Profile(props:ProfileProps) {
  return (
    <div>
      Your Username: {props.username}
      <button onClick={props.onEdit}>Edit Profile</button>
    </div>
  );
}

const HideableProfile:FunctionalComponent<ProfileProps&HideableProps> = hideable(Profile);

export default HideableProfile;
