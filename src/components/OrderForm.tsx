import React, { useState } from 'react';

const OrderForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ name, phone, option });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="options">Options:</label>
                <select
                    id="options"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    required
                >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default OrderForm;