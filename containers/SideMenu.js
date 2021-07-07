import { useState, useEffect } from "react";

const SideMenu = ({ opened, onClose }) => {
    const [isOpen, setIsOpen] = useState(opened)

    useEffect(() => {
        setIsOpen(opened)
    }, [opened])

    return (
        <aside className={`flex flex-row z-10 h-screen ${isOpen ? "absolute" : "hidden"} left-0 right-0 bottom-0 top-0`}>
            <section className="md:w-6/12 bg-gray-500 opacity-70" onClick={() => {
                setIsOpen(false)
                onClose()
            }}>
            </section>
            <section className="w-full md:w-6/12 ml-auto bg-white">
            </section>
        </aside>
    );
}

export default SideMenu;
