declare module "@google-maps/map" {
  import React from "react";
  import { Map as GoogleMapBase } from "@vis.gl/react-google-maps";

  export const Map: React.FC<React.ComponentProps<typeof GoogleMapBase>>;
}
