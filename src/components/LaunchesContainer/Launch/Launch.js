import React from 'react';

const Launch = ({launch}) => {
    const {launch_date_unix, mission_name, launch_year,links:{mission_patch_small }} = launch;
    return (
        <div>
            <div>launch_date_unix: {launch_date_unix}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
           <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};