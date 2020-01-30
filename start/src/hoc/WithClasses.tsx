import React from 'react';

const WithClass = (WrappedComponent: any, style: any) => {
    return () => (
        <div style={style}>
            <WrappedComponent />
        </div>
    )
}

export default WithClass;