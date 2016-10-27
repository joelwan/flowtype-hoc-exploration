// @flow

export type ClassyComponent<D, P> = Class<React$Component<D, P, *>>;

export type HideableProps = {
  hide:boolean,
};

export type HideableComponent<DefProps, Props> = ClassyComponent<DefProps, $Diff<Props, HideableProps>>;
