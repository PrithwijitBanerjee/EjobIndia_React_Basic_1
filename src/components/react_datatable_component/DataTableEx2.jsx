import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import DataTable from "react-data-table-component";


const DataTableEx2 = () => {
    const baseUrl = 'https://dummyjson.com';
    const [photos, setPhotos] = useState([]);

    const getAllPhotos = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/products`);
            setPhotos(data.products);
        } catch (error) {
            console.log(error?.message);
        }
    }
    useEffect(() => {
        getAllPhotos();
    }, []);
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: '5%',
            sortable: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            width: '50%',
            sortable: true,
            style: {
                backgroundColor: 'skyblue',
                // color: 'white',
                fontWeight: 'bolder',
                '&:hover': {
                    cursor: 'pointer',
                },
            }
        },
        {
            name: 'Images',
            // selector: row => <img src={row?.thumbnail} alt="no-img-found" width={100} height={100} />,
            cell: row => <img src={row?.thumbnail} alt="no-img-found" width={100} height={100} />,
            style: {
                display: 'flex',
                justifyContent: 'center'
            },
            wrap: true,
            sortable: true,
            width: '50%'
        }
    ]
    return (
        <>
            <DataTable
                title='All Users Post Table'
                data={photos}
                columns={columns}
                pagination
                striped
                highlightOnHover
                responsive
            />
        </>
    )
}

export default DataTableEx2