import { useState } from 'react';
import { sculptureList } from './data2Gallery1.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        let newIndex = index + 1;

        // Check if the newIndex exceeds the length of sculptureList
        // If it does, reset the index to 0 to go back to the first item
        if (newIndex >= sculptureList.length) {
            newIndex = 0;
        }

        // Update the index state with the new value
        setIndex(newIndex);
    }

    function handlePrevClick() {
        let newIndex = index - 1;
        if (newIndex < 0) {
            newIndex = sculptureList.length - 1;
        }
        setIndex(newIndex);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handlePrevClick}>
                Prev
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>

            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
