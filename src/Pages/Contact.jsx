


export const Contact = () => {
    return (
        <div className="contact">
        <h1>Contact Us</h1>
        <p>
            Have questions or special requests? Feel free to reach out to us. We
            value your feedback and are here to assist you.
        </p>
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        </div>
    );
}