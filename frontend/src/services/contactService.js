const contactService = {
  sendMessage: async (messageData) => {

const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      // Handle errors
      throw new Error('Failed to send message');
    }

    return await response.json();
  }
};

export default contactService;
