// @flow

type FunctionalComponent<Props> = (props:Props) => React$Element<*>|null;

function logOnRender<FirstOrderProps>(FirstOrderComponent:FunctionalComponent<FirstOrderProps>):FunctionalComponent<FirstOrderProps> {
  return function NewComponent(firstOrderProps:FirstOrderProps) {
    console.log("Rendering with props:", firstOrderProps);
    return <FirstOrderComponent {...firstOrderProps}/>;
  }
}

export default logOnRender;
