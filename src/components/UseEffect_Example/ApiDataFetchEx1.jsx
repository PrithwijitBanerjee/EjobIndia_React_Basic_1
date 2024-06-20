import axios from 'axios';
import { useEffect, useState } from 'react'
import { Vortex } from 'react-loader-spinner';

const ApiDataFetchEx1 = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const baseUrl = 'https://fakestoreapi.com';

    const getAllProducts = async endPoint => {
        try {
            const res = await axios.get(`${baseUrl}/${endPoint}`);
            setProducts(res?.data);
            setIsErr(false);
        } catch (error) {
            setIsErr(true);
        } finally {
            setIsLoading(false); // common statement ...
        }
    }

    useEffect(() => {
        getAllProducts('products');

        return () => { // clean up function similar to componentWillUnmount() ... 
            setProducts([]);
            setIsLoading(true);
            setIsErr(false);
        }
    }, []); // similar to componentDidMount() ...

    if (isErr) {
        return (<div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className="row">
                <div className="col-12">
                    <h2>Something Went Wrong...</h2>
                </div>
            </div>
        </div>);
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 text-center my-5">
                    <h1>List of Products</h1>
                </div>
            </div>
            <div className="row">
                {
                    isLoading && products.length === 0 && (<div
                        className='container d-flex justify-content-center align-items-center'
                        style={{ height: '100vh' }}>
                        <div className="row">
                            <div className="col-12">
                                <Vortex
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="vortex-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="vortex-wrapper"
                                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                />
                            </div>
                        </div>
                    </div>)
                }

                {
                    !isLoading && products.length !== 0 && products?.map(product => (
                        <div className="col" key={product?.id}>
                            <div className="card"
                                style={{ width: '20rem', height: '750px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', margin: '10px' }}>
                                <img
                                    src={product?.image}
                                    className="card-img-top img-fluid"
                                    alt="..."
                                    style={{ maxWidth: '60%', maxHeight: '60%' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product?.title}</h5>
                                    <h5 className="card-title">Price: {product?.price}</h5>
                                    <h5 className="card-title">Category: {product?.category}</h5>
                                    <p className="card-text">{product?.description?.slice(0, 200)}...</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ApiDataFetchEx1