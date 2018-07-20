import React from 'react';

const Breadcrumb = (props) => {
    if (!props.path) return <div/>
    return (
        <div className="breadcrumbs">
            {props.path.join(' > ')}
        </div>
    );
};

export default Breadcrumb
