// @flow

export type FunctionalComponent<Props> = (props:Props) => React$Element<*>|null;

export type HideableProps = {
  hide:boolean,
};

export type HideableComponent<Props> = FunctionalComponent<$Diff<Props, HideableProps>>;
