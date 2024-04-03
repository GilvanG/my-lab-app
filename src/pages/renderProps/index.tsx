import { Countdown } from "../../components/RenderProps/Countdown";
import { DisplayTimer } from "../../components/RenderProps/DisplayTimer";

export function RenderProps() {

  return (
    <Countdown displayTimer={DisplayTimer} />
  );
}