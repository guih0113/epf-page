type ListItemProps = {
    href: string,
    text: string
}

export default function ListItem({ href, text }: ListItemProps) {
    return (
        <li>
            <a 
                href={href}
                className="transition duration-200 ease-in-out hover:translate-y-[-1] hover:scale-105 inline-block"
            >
                {text}
            </a>
        </li>
    );
}