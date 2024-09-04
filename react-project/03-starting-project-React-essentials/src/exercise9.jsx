import { useState } from 'react';

export default function App() {
    const [price, setPrice] = React.useState(100);

    const handleButtonClick = () => {
        setPrice(75);
    };

    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleButtonClick}>Apply Discount</button>
        </div>
    );
}