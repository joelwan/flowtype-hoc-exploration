// @flow
import logOnRender from "./logOnRender";
import type { FunctionalComponent } from "./logOnRender";


type ProfileProps = {username:string, onEdit:Function}

function Profile(props:ProfileProps) {
  return (
    <div>
      Your Username: {props.username}
      <button onClick={props.onEdit}>Edit Profile</button>
    </div>
  );
}

const LoggedProfile:FunctionalComponent<ProfileProps> = logOnRender(Profile);

export default LoggedProfile;
