import { useState } from 'react';
import Navbar from './navbar';

function Chatbot() {

    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        'Assistent: Hallo! Hoe kan ik je vandaag helpen met betrekking tot onze keukenbladen?'
    ]);

    async function sendData() {
        appendUserMessage(inputValue);
        const response = await fetch('ai/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputValue })
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            appendBotMessage(jsonResponse.message);
        } else {
            appendBotMessage('Failed to send data');
        }
        setInputValue('');
    }

    function getTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function appendUserMessage(message: string) {
        setMessages(prevMessages => [
            `${getTime()} - U: ${message}`,
            ...prevMessages
        ]);
    }

    function appendBotMessage(message: string) {
        setMessages(prevMessages => [
            `${getTime()} - Assistent: ${message}`,
            ...prevMessages
        ]);
    }

    return (
        <>
            <Navbar />
            <div className="input-container" id="logContainer">
                <h2>KeukenGPT</h2>
                <textarea
                    id="inputBox"
                    placeholder="Enter something here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
                <button onClick={sendData}>Send</button>
                <hr />
                <div className="output-box" id="outputBox">
                    {messages.map((message, index) => (
                        <div key={index} className={message.includes('U:') ? 'user-message' : 'log-container'}>
                            {message}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Chatbot;
