// @flow

type FunctionalComponent<Props> = (props:Props) => React$Element<*>|null;
type ClassyComponent<D, P> = Class<React$Component<D, P, *>>;
type Component<D, P> = ClassyComponent<D, P> | FunctionalComponent<P>;

type HideableProps = {
  hide:boolean,
};

export type HideableComponent<DefProps, Props> = Component<DefProps, $Diff<Props, HideableProps>>;
