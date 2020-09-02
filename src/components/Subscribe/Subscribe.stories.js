import React from "react";
import { storiesOf } from "@storybook/react";

import Subscribe from "./Subscribe";
import description from "./Subscribe.md";

storiesOf("Subscribe", module).add("Overview", () => <Subscribe />, {
  notes: { markdown: description }
});
