import React, { unstable_Profiler as Profiler } from 'react';

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the commit
  baseDuration, // time to render the whole tree without memoization
  startTime, // timestamp of when React began rendering this commit
  commitTime // timestamp of when React committed this update
) => {
  console.log(`Profiler Log (${id}) - Phase: ${phase}, Actual Duration: ${actualDuration}ms`);
};

export default function MyProfile() {
  return (
    <Profiler id="MyProfileComponent" onRender={onRenderCallback}>
      <div>My Profile Content</div>
    </Profiler>
  );
}