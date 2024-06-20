import { contextContainer, secondContextContainer } from "./AppContextRoutes"


const ChildA = () => {
    const Consumer = contextContainer.Consumer;
    const SecondConsumer = secondContextContainer.Consumer;
    return (
        <div>
            <Consumer>
                {
                    (myFruits) => {
                        return (
                            <SecondConsumer>
                                {
                                    (student) => {
                                        console.log(student, myFruits);
                                        return myFruits?.map((fruit, index) => (
                                            <div key={index}>{fruit}</div>
                                        ));
                                    }
                                }
                            </SecondConsumer>
                        )
                    }
                }
            </Consumer>
        </div>
    )
}

export default ChildA