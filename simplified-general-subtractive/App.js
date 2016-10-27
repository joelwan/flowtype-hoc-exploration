// @flow
import ClassyProfile from "./ClassyProfile";
import FunctionalProfile from "./FunctionalProfile";


const badClassyProfile = (
  <ClassyProfile
    username={1234}
    onEdit={"not implemented yet"}
  />
);

const goodClassyProfile = (
  <ClassyProfile
    onEdit={() => console.log("not implemented yet")}
  />
);

const badFunctionalProfile = (
  <FunctionalProfile
    username={1234}
    onEdit={"not implemented yet"}
  />
);

const goodFunctionalProfile = (
  <FunctionalProfile
    onEdit={() => console.log("not implemented yet")}
  />
);
