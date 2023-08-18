import { useState } from "react";
import styles from './DragAndDropBoxes.module.css';
import LeftBox from "./LeftBox";


const PastRides = () => {
    const [rightBoxItems, setRightBoxItems] = useState(LeftBox);
    const [leftBoxItems, setLeftBoxItems] = useState(LeftBox);

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData("text/plain", item.text);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedItemtext = event.dataTransfer.getData("text/plain");

        const droppedItem = rightBoxItems.find(item => item.text === droppedItemtext)

        if (droppedItem) {

            // Remove the dropped item from the right box
            setRightBoxItems(prevItems => prevItems.filter(item => item !== droppedItem));

            // Add the dropped item to the left box
            setLeftBoxItems(prevItems => [...prevItems, droppedItem]);
        }

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
                            <div className={styles.rightdraggableItem}>

                                <div className={styles.rightBox}>{item.text}</div>


                            </div>
                        </div>
                    ))}

                </div>
                <div className={styles.box}>
                    {rightBoxItems.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                            className={styles.rightdraggableItem}
                        >
                            <div className={styles.rightBox}>{item.text}</div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PastRides;
