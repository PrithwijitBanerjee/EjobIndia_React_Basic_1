import { Component } from 'react'
import { Vortex } from 'react-loader-spinner';
import Product from './Product';
import PaginationBtn from './PaginationBtn';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.initial_state = {
            products: [],
            loading: true,
            isError: false,
            errMsg: '',
            page: 1
        };
        this.state = this.initial_state; // Initialize the state ...

        this.productsPerPage = 3;
        this.lastIndex = this.productsPerPage * this.state.page;
        this.firstIndex = this.lastIndex - this.productsPerPage;
        this.baseUrl = 'https://fakestoreapi.com';
        this.timerId = null;
    }
    getProducts = async endPoint => {
        try {
            const response = await fetch(`${this.baseUrl}/${endPoint}`);
            const res = await response.json();
            this.setState(prevState => {
                return {
                    ...prevState,
                    products: res,
                    // loading: false
                }
            });
        } catch (error) {
            // throw new Error('Something Went Wrong!!!');
            this.setState({
                isError: true,
                errMsg: 'Something went wrong',
                // loading: false
            });
        } finally {
            this.setState(prevState => {
                return {
                    ...prevState,
                    loading: false
                }
            })
        }
    }
    componentDidMount() {
        this.timerId = setTimeout(() => {
            this.getProducts('products');
        }, 1000);
    }
    componentWillUnmount() {
        // Clean Up code ....
        this.setState(this.initial_state);
        clearTimeout(this.timerId);
    }
    render() {
        // Recalculate indices based on current page
        const lastIndex = this.productsPerPage * this.state.page;
        const firstIndex = lastIndex - this.productsPerPage;
        if (this.state?.isError) {
            return (<div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="row">
                    <div className="col-12">
                        <h2>{this.state?.errMsg}</h2>
                    </div>
                </div>
            </div>);
        }
        return (
            <>
                <div className='d-flex justify-content-center align-items-center m-5'>
                    <h1>List of products</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.loading && (<div
                                className="container d-flex justify-content-center align-items-center"
                                style={{ height: '70vh' }}>
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
                            this.state?.products?.length !== 0 && this.state?.products?.slice(firstIndex, lastIndex)?.map(product => (
                                <Product
                                    key={product?.id}
                                    product={product}
                                />
                            ))
                        }

                        <div className='col-12'>
                            <PaginationBtn
                                page={this.state.page}
                                handlePageChange={newPage => this.setState(prevState => ({ ...prevState, page: newPage }))}
                                productsPerPage={this.productsPerPage}
                                products={this.state.products}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
