import React from "react";
import { storiesOf } from "@storybook/react";

import Video from "./Video";
import description from "./Video.md";

storiesOf("Video", module).add("Overview", () => <Video />, {
  notes: { markdown: description }
});
