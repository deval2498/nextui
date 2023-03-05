import {forwardRef} from "@nextui-org/system";
import {__DEV__} from "@nextui-org/shared-utils";

import {useCode, UseCodeProps} from "./use-code";

export interface CodeProps extends Omit<UseCodeProps, "ref"> {}

const Code = forwardRef<CodeProps, "code">((props, ref) => {
  const {Component, children, getCodeProps} = useCode({ref, ...props});

  return <Component {...getCodeProps()}>{children}</Component>;
});

if (__DEV__) {
  Code.displayName = "NextUI.Code";
}

export default Code;