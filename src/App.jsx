import React, { useState } from 'react';

const GenerateContentForm = () => {
    const [inputContent, setInputContent] = useState('');
    const [responseContent, setResponseContent] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://backend-api-kws1.vercel.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pro: inputContent }),
            });

          
              const data = await response.json();
              setResponseContent(data.msg); 
      
          
          
           
        } catch (error) {
            setError(error.toString());
        }
    };

    return (
        <div>
            <h1>Generate Content</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={inputContent}
                    onChange={(e) => setInputContent(e.target.value)}
                    placeholder="Enter your content here"
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Generate</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {responseContent && (
                <div>
                    <h2>Generated Content</h2>
                    <p>{responseContent}</p>
                </div>
            )}
        </div>
    );
};

export default GenerateContentForm;
