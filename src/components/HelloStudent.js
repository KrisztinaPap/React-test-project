import React from 'react';

const HelloStudent = ( props ) => {
    return (
        <p>
            Hello&nbsp;
            { props.name },
            Welcome to TECHCareers and its React unit!
            Their favourite unit is:&nbsp;
            { props.unit }
        </p>
    );
}

export default HelloStudent;