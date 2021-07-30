import {useEffect, useState} from 'react';


const MouseFollower = () => {

}
const Layout = ({children}) => {
    const [cursorPos, setCursorPos] = useState({ x: '0px', y: '0px' })

	useEffect(() => {
        document.addEventListener('mousemove', e => {
            setCursorPos({x: `${e.pageX}px`, y: `${e.pageY}px`})
        })
    }, [])
    
    return (
        <main>
            <div className="relative overflow-hidden">
                <div className="absolute bg-lightPurple bg-opacity-40 rounded-full w-8 h-8 pointer-events-none" style={{
                    'transform': `translate3d(${cursorPos.x} ,${cursorPos.y}, 0)`,
                    'zIndex': '111',
                    'transition': 'transform 1s cubic-bezier(.02,1.2,.8,1),opacity .25s ease'
                }} />
                {children}
            </div>
        </main>
    );
}

export default Layout;
