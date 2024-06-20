import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        return (
            <>
                <div className='col'>
                    <div className="card m-3" style={{ width: '20rem', height: '750px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <div className='text-center mt-3'>
                            <img
                                src={this.props?.product?.image}
                                className="card-img-top img-fluid"
                                alt="..."
                                style={{ maxWidth: '60%', maxHeight: '60%' }}
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props?.product?.title}</h5>
                            <h5 className="card-text">Price: {this.props?.product?.price}</h5>
                            <h5 className="card-text">Category: {this.props?.product?.category}</h5>
                            <p className="card-text">{this.props?.product?.description.slice(0, 200)}...</p>
                            <p className="card-text">
                                Ratings: {this.props?.product?.rating && this.props?.product?.rating?.rate}
                                Count: {this.props?.product?.rating && this.props?.product?.rating?.count}
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Product.propTypes = {
    product: PropTypes.object
}