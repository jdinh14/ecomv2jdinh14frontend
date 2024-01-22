import React, { useState } from 'react';

export default function UnsubForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Code to send email to the backend
        try {
            const response = await fetch('https://reagents.onrender.com/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            else{
                alert(`${email} has unsubscribed`);
            }
            // Handle success
        } catch (error) {
            // Handle errors
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Unsubscribe</button>
        </form>
    );
}
