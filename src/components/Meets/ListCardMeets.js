import React from 'react';
import { ItemCardMeets } from './ItemCardMeets';
import './itemCard.css';


export const ListCardMeets = ({ data }) => {
   // console.log(data);
    const {meets} = data;
    

    return (
        <>
        <div className="cards">
        {
            meets?.map((meet) => (
                <ItemCardMeets key={meet.id} id={meet.id}  affair={meet.affair} dataMeet={meet.dataMeet} />
            ))
        }
        </div>
        </>
    );
};
