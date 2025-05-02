import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

const Product = () => {

    const [isFlipped, setIsFlipped] = useState({
        card1: false,
        card2: false,
        card3: false,
    });

    const handleClick = (cardKey) => (e) => {
        e.preventDefault();
        setIsFlipped((prev) => ({
            ...prev,
            [cardKey]: !prev[cardKey],
        }));
    };

    return(

    <section id='product' className='py-12 px-6 text-center'>
        <h3 className='text-2xl font-bold mb-6'>Our Products</h3>
        <div className='grid grid-col-1 md:grid-cols-3 gap-6'>
        <ReactCardFlip isFlipped={isFlipped.card1} flipDirection='vertical'>    
            <div className={`border p-4 shadow hover:shadow-lg cursor-pointer ${isFlipped.card1 ? 'bg-gray-200' : ''}`} onClick={handleClick('card1')}>
                <img src="./Product1.jpg" alt="Part 1" className='mx-auto mb-2 h-40' />
                <h4 className='font-bold'>Excavator Hydraulic Pump</h4>
                <p>High-performance hydraulic pumps compatible with major brands.</p>
            </div>
            <div className='border p-4 shadow hover:shadow-lg cursor-pointer bg-gray-100' onClick={handleClick('card1')}>
                <h4 className='font-bold text-lg'>More About This Product</h4>
                <p>Premium-quality hydraulic pumps designed for compatibility with top equipment brands.</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped.card2} flipDirection='vertical'>    
            <div className={`border p-4 shadow hover:shadow-lg cursor-pointer ${isFlipped.card2 ? 'bg-gray-200' : ''}`} onClick={handleClick('card2')} >
                <img src="./Product2.jpg" alt="Part 2" className='mx-auto mb-2 h-40' />
                <h4 className='font-bold'>Bulldozer Track Chain</h4>
                <p>Durable and heavy-duty tracks made for challenging terrain.</p>
            </div>
            <div className='border p-4 shadow hover:shadow-lg cursor-pointer bg-gray-100' onClick={handleClick('card2')}>
                <h4 className='font-bold text-lg'>More About This Product</h4>
                <p>Heavy-duty track chains made from heat-treated steel for maximum durability and smooth performance on rough terrain. Compatible with major bulldozer brands.</p>
            </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped.card3} flipDirection='vertical'>
            <div className={`border p-4 shadow hover:shadow-lg cursor-pointer ${isFlipped.card3 ? 'bg-gray-200' : ''}`} onClick={handleClick('card3')}>
                <img src="./product3.jpg" alt="Part 3" className='mx-auto mb-2 h-40' />
                <h4 className='font-bold'>Loader Bucket Teeth</h4>
                <p>Efficient digging with reinforced steel teeth for all conditions.</p>
            </div>
            <div className='border p-4 shadow hover:shadow-lg cursor-pointer bg-gray-100' onClick={handleClick('card3')}>
                <h4 className='font-bold text-lg'>More About This Product</h4>
                <p>These teeth are made of reinforced steel and optimized for long-lasting wear resistance in all digging conditions.</p>
            </div>
        </ReactCardFlip>
        </div>
    </section>
    );
};

export default Product