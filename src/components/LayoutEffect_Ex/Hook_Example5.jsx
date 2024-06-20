import { useEffect, useState } from "react"


const Hook_Example5 = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
       window.addEventListener('resize', handleResize);

       return () => { // clean up function similar as componentWillUnmount() ...
        window.removeEventListener('resize'); 
       }
    }, []); //works as componentDidMount() ...
    return (
        <div>
            <h1>Screen Sizes</h1>
            <h4>width: {screenSize.width}</h4>
            <h4>height: {screenSize.height}</h4>
        </div>
    )
}

export default Hook_Example5