import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import DataTable from "react-data-table-component";
import PropTypes from 'prop-types'


const DataTableEx1 = () => {
    const [posts, setPosts] = useState([]);
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    const getAllPosts = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/posts`);
            setPosts(data);
        } catch (error) {
            console.log(error?.message);
        }
    }


    // A super simple expandable component.
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: '5%', // when using custom you should use width or maxWidth, otherwise, the table will default to flex grow behavior
            sortable: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            width: '30%',
            sortable: true,
            style: {
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            }
        },
        {
            name: 'Body',
            selector: row => row.body,
            wrap: true,
            sortable: true
        }
    ]
    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <>
            <DataTable
                title='All Users Post Table'
                data={posts}
                columns={columns}
                pagination
                striped
                highlightOnHover
                responsive
                expandableRows
                expandableRowsComponent={ExpandedComponent}
            />
        </>
    )
}


DataTableEx1.propTypes = {
    data: PropTypes.any
}

export default DataTableEx1