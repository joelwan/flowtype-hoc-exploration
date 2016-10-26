// @flow

export type FunctionalComponent<Props> = (props:Props) => React$Element<*>|null;

export type HideableProps = {
  hide:boolean,
};

function hideable<FirstOrderProps>(
  FirstOrderComponent:FunctionalComponent<FirstOrderProps>
):FunctionalComponent<$Diff<FirstOrderProps, HideableProps>> {

  return function NewComponent(propsWithoutHide:$Diff<FirstOrderProps, HideableProps>) {
    return <FirstOrderComponent {...propsWithoutHide} hide={true} />;
  }
}

export default hideable;
