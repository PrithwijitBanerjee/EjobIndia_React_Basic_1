import Welcome from "./Welcome"
import wrapper from "./Wrapper"


const AppComp = () => {
    const EnhancedComponent = wrapper(Welcome);
    return (
        <div>
            <EnhancedComponent name={'John Doe'} age={27}/>
            <EnhancedComponent name={'Jane Doe'} age={30}/>
        </div>
    )
}

export default AppComp