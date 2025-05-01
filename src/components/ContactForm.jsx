import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState ({name: '', email: '', message: ''});

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    setFormData({name: '', email: '', message: ''})
                },
                (error) => {
                    alert('Failed to send message. Please try again')
                    console.error(error);
                });
    };

    return (
        <section id='contact' className='py-12 px-6 text-center'>
            <h3 className='text-2xl font-bold mb-4'>Contact Us</h3>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto space-y-4'>
                <input name='name' value={formData.name} onChange={handleChange} required placeholder='Name' className='w-full border px-4 py2' />
                <input name='email' value={formData.email} onChange={handleChange} required placeholder='Email' className='w-full border px-4 py2' />
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" className='w-full border px-4 py-2 h-32' />
                <button type='submit' className='bg-yellow-600 text-white px-6 py-2 font-bold'>Send</button>
            </form>
            <div className='mt-8'>
                <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.5176965400288!2d120.53811682972075!3d14.647903892469314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33963fdb179f7fdd%3A0xf5b5449713a18d91!2sHeavy%20Equipment%20Parts%20Supply%20%26%20Merchandise!5e0!3m2!1sen!2sph!4v1745919328096!5m2!1sen!2sph" 
                 width="100%" height="300" style={{border: 0}} allowFullScreen loading='lazy'
                 referrerPolicy='no-referrer-when-downgrade'
                 title="ATM Heavy Equipment Location"
                ></iframe>
            </div>
            <div>
            <h4>Visit Us:</h4>
            <a href="https://www.facebook.com/atmheavyequipment"><img src="./fb logo.svg" alt="fb logo" className='mx-auto mb-2 h-7' /></a>
            </div>
        </section>
    )
}

export default ContactForm