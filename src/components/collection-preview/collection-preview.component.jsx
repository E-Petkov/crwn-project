import React from "react";

import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
    <div className={'collection-preview'}>
        <h1 title={'title'}>{title.toUpperCase()}</h1>
        <div className={'preview'}>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...ItemProps}) => (
                        <CollectionItem key={id} {...ItemProps}/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;