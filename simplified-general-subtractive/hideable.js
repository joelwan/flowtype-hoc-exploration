
function hideable(FirstOrderComponent) {
  return function NewComponent(propsWithoutHide) {
    return <FirstOrderComponent {...propsWithoutHide} hide={true} />;
  }
}

export default hideable;
