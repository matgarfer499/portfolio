export function Section({children, id}) {
    return (
        <section id={id} className="w-screen sm:h-screen snap-start">{children}</section>
    )
}

export default Section
