import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewToyDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <p>View toy details are here</p>
        </div>
    );
};

export default ViewToyDetails;