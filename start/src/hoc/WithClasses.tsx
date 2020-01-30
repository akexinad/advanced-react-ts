import React from "react";

const WithClass = (WrappedComponent: any, style: any) => {
    return (props: any) => (
        <div style={style}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default WithClass;
