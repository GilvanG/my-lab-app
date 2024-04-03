// https://www.youtube.com/watch?v=uY8t-isw5nY

import { ProfilerHOC } from "../../components/Profiler";
import { HOC } from "../hoc";

export function ProfilerInHOC() {
  const Profiler1 = ProfilerHOC(HOC)
  const Level1 = () => <Profiler1 active={true} id='hoc-1'/>
  const Profiler2 = ProfilerHOC(Level1)
  return <Profiler2 active={true} id='hoc-2'/>

}





















