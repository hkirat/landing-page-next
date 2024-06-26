

export const Button = ({ children, onClick }: { children: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className="m-2 flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 text-center text-white">
            {children}
        </button>
    )
}