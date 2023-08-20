import React from "react";
import TechnologyGroup from "./TechnologyGroup";

const back = ["php", "laravel", "SQL", "python", "java"];
const front = ["js", "jquery", "react", "tailwind", "bootstrap", "bulma", "flask", "html", "css"];
const other = ["linux", "aws", "virtualbox", "git", "figma"];

export function Habilities() {
  return (
    <div className="mt-2 w-11/12 h-4/5 flex flex-col items-start justify-between">
      <TechnologyGroup title="BACK END" technologies={back} />
      <TechnologyGroup title="FRONT END" technologies={front} />
      <TechnologyGroup title="OTROS" technologies={other} />
    </div>
  );
}

export default Habilities;
