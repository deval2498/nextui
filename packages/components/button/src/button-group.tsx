import {forwardRef} from "@nextui-org/system";
import {__DEV__} from "@nextui-org/shared-utils";

import {ButtonGroupProvider} from "./button-group-context";
import {UseButtonGroupProps, useButtonGroup} from "./use-button-group";

export interface ButtonGroupProps extends Omit<UseButtonGroupProps, "ref"> {}

const ButtonGroup = forwardRef<ButtonGroupProps, "div">((props, ref) => {
  const {Component, domRef, context, children, styles, getButtonGroupProps} = useButtonGroup({
    ref,
    ...props,
  });

  return (
    <ButtonGroupProvider value={context}>
      <Component ref={domRef} className={styles} {...getButtonGroupProps()}>
        {children}
      </Component>
    </ButtonGroupProvider>
  );
});

if (__DEV__) {
  ButtonGroup.displayName = "NextUI.ButtonGroup";
}

export default ButtonGroup;