import Tag from "./Tag";

export function TagGroup({ technologies }) {
    return (
        <div className="mt-auto flex flex-wrap justify-start gap-2 items-center p-1">
            {technologies.map((value, i) => {
                return <Tag tech={value} key={i} />;
            })}
        </div>
    );
}

export default TagGroup;
