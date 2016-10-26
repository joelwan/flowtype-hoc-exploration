// @flow

export type FunctionalComponent<Props> = (props:Props) => React$Element<*>|null;
export type HideableProps = {
  hide:boolean,
};

function hideable<FirstOrderProps>(FirstOrderComponent:FunctionalComponent<FirstOrderProps>):FunctionalComponent<FirstOrderProps&HideableProps>{
  return function NewComponent(propsWithHide:FirstOrderProps&HideableProps) {
    if (propsWithHide.hide) {
      return null;
    }
    const firstOrderProps:FirstOrderProps = propsWithHide;
    return <FirstOrderComponent {...firstOrderProps}/>;
  }
}

export default hideable;
