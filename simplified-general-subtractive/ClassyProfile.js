// @flow
import React, { Component } from "react";

import hideable from "./hideable";
import type { HideableComponent } from "./types";


type Props = {
  username:string,
  onEdit:Function,
  hide:boolean,
};

const defaultProps = {
  username: "World",
};

type DefaultProps = typeof defaultProps;

class Profile extends Component {
  props: Props;
  defaultProps: DefaultProps;

  static defaultProps = defaultProps;

  render() {
    return (
      <div>
        Your Username: {this.props.username}
        <button onClick={this.props.onEdit}>Edit Profile</button>
        Hide: {this.props.hide}
      </div>
    );
  }
}

const HideableProfile:HideableComponent<Props, DefaultProps> = hideable(Profile);

export default HideableProfile;
