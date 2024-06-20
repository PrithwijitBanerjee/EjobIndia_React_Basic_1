import { Component } from 'react'
import PropTypes from 'prop-types'

export default class PaginationBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.pageNumbers = [];
        for (let i = 1; i < Math.ceil(this.props.products.length / this.props.productsPerPage); i++) {
            this.pageNumbers.push(i);
        }
        return (
            <>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <button className='btn' onClick={() => {
                        if (this.props.page >= 1) {
                            this.props.handlePageChange(this.props.page - 1);
                        } else {
                            this.props.handlePageChange(1);
                        }
                    }}>
                        {'<<<'} prev
                    </button>
                    {
                        this.pageNumbers?.map((pNo, id) => (
                            <button
                                key={id}
                                className={this.props.page === pNo ? 'btn bg-primary text-white' : 'btn'}
                                onClick={() => this.props.handlePageChange(pNo)}>
                                {pNo}
                            </button>
                        ))
                    }
                    <button className='btn' onClick={() => {
                        if (this.props.page <= this.pageNumbers.length) {
                            this.props.handlePageChange(this.props.page + 1);
                        } else {
                            this.props.handlePageChange(1);
                        }
                    }}>
                        next{'>>>'}
                    </button>
                </div>
            </>
        )
    }
}

PaginationBtn.propTypes = {
    products: PropTypes.array,
    productsPerPage: PropTypes.number,
    page: PropTypes.number,
    handlePageChange: PropTypes.func
}
