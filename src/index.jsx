import ForgeUI, {render} from "@forge/ui";

import {View} from "./view";
import {Edit} from "./edit";
import {ContextConfig} from "./context-config";

export const runView = render(<View/>);
export const runEdit = render(<Edit/>);
export const runContextConfig = render(<ContextConfig/>);
