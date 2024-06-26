import { Button } from "./Button"

export const Navbar = () => {
    return (
            <div className="flex w-full justify-between">
                <div className="text-2xl font-bold flex flex-col justify-center">
                    100xDevs
                </div>
                <div className="flex flex-row md:text-xl text-sm">
                    <Button onClick={() => {
                        window.location.href = "https://github.com/code100x"
                    }}>Open source</Button>
                    <Button onClick={() => {
                        window.location.href = "https://youtube.com/@harkirat1"
                    }}>Youtube</Button>
                </div>
            </div>
    )
}