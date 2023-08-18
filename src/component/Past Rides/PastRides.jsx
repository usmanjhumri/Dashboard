

import { useState } from "react";
import styles from './DragAndDropBoxes.module.css';

const PastRides = () => {
    const [rightBoxItems, setRightBoxItems] = useState(["usman", "latif", "khan", "sb"]);
    const [leftBoxItems, setLeftBoxItems] = useState([]);

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData("text/plain", item);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedItem = event.dataTransfer.getData("text/plain");

        // Remove the dropped item from the right box
        setRightBoxItems(prevItems => prevItems.filter(item => item !== droppedItem));

        // Add the dropped item to the left box
        setLeftBoxItems(prevItems => [...prevItems, droppedItem]);
    };

    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.box}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {leftBoxItems.map((item, index) => (
                        <div key={index} className={styles.draggableItem}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className={styles.box}>
                    {rightBoxItems.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                            className={styles.draggableItem}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PastRides;
