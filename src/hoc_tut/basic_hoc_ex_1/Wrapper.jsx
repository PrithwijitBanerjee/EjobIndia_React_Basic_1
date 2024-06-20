// HOC ----> Higher Order Component, it is advance techniques in React, used in reusing the common logic that is needed in every child component.
// HOC takes Component as a parameter and returns a Component as an output.
// component --> goes as a paremeter ---> to ---> HOC(it wraps that component with Wrapped component which is present inside the HOC) ---> returns ---> Wrapped component.  
// HOC is not the part of React API.

// const wrapper = (Component) => ({ ...props }) => (
//     <div style={{ border: '2px solid blue', borderRadius: '20px' }}>
//         <h1>Wrapper Component</h1>
//         <Component {...props} />
//     </div>
// )

// or way, in vite you follow this style .....

const wrapper = (Component) => {
    const WrappedComponent = ({ ...props }) => (
        <div style={{ border: '2px solid blue', borderRadius: '20px', marginTop: '10px' }}>
            <h1>Wrapper Component</h1>
            <Component {...props} />
        </div>
    )
    return WrappedComponent;
}

export default wrapper;