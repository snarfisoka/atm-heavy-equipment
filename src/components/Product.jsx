import React from 'react';

const Product = () => (
    <section id='product' className='py-12 px-6 text-center'>
        <h3 className='text-2xl font-bold mb-6'>Our Products</h3>
        <div className='grid grid-col-1 md:grid-cols-3 gap-6'>
            <div className='border p-4 shadow hover:shadow-lg'>
                <img src="./Product1.jpg" alt="Part 1" className='mx-auto mb-2 h-40' />
                <h4 className='font-bold'>Excavator Hydraulic Pump</h4>
                <p>High-performance hydraulic pumps compatible with major brands.</p>
            </div>
            <div className='border p-4 shadow hover:shadow-lg'>
                <img src="./Product2.jpg" alt="Part 2" className='mx-auto mb-2 h-40' />
                <h4 className='font-bold'>Bulldozer Track Chain</h4>
                <p>Durable and heavy-duty tracks made for challenging terrain.</p>
            </div>
            <div className='border p-4 shadow hover:shadow-lg'>
                <img src="./product3.jpg" alt="Part 3" className='mx-auto mb-2 h-40' />
                <h4 className='font-bold'>Loader Bucket Teeth</h4>
                <p>Efficient digging with reinforced steel teeth for all conditions.</p>
            </div>
        </div>
    </section>
);

export default Product