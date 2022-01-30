import React from "react";

import LocationOnIcon from '@mui/icons-material/LocationOn';

// DATA
import stays from "../data/stays.json";



export default function LocationList(props) {

    const locationData = stays.map((el) => {
        return (
            <li 
                onClick={props.onClick}
                data-location={`${el.city}, ${el.country}`}
                key={el.id}
                >
                <LocationOnIcon sx={{ color: '#4F4F4F', paddingRight: '10px' }}/> 
                {`${el.city}, ${el.country}`}
            </li>
        )
    });

    return (
        locationData
    )

}