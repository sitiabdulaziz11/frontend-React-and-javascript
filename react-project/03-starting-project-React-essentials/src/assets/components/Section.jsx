export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>{/*this used to set on our custom Section component here will be forwarded to built-in section element. like id or className */}
            <h2>{title}</h2>
            {children}
        </section>
    )
}