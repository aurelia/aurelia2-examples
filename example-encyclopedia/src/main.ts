import { AnimationHooks } from "./animation-hooks";
import Aurelia from "aurelia";
import { RouterConfiguration } from "@aurelia/router";
import { MyApp } from "./my-app";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

Aurelia.register(
  RouterConfiguration.customize({
    useUrlFragmentHash: false,
    useHref: false,
    swapOrder: "attach-detach-simultaneously",
  }),
  AnimationHooks
)
  .app(MyApp)
  .start();
