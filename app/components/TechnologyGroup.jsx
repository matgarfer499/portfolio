import HabTitle from "./HabTitle";
import Technologys from "./Technologys";

export function TechnologyGroup({ title, technologies }) {
    return (
        <div className="flex flex-col items-start">
            <HabTitle text={title} />
            <div className="flex flex-wrap items-center gap-8">
                {technologies.map((value, i) => {
                    return <Technologys tech={value} key={i} />;
                })}
            </div>
        </div>
    );
}

export default TechnologyGroup;
