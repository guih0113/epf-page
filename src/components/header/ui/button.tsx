type ButtonProps = {
    text: string;
};

export function Button({ text }: ButtonProps) {
    return (
        <button
            className="border border-white text-white w-28 h-9 rounded-xl text-sm font-semibold hover:bg-[#00DD15] hover:text-black hover:border-black duration-300"
        >
            {text}
        </button>
    );
}