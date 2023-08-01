import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 10px;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    .bdr-radius {
      border-radius: 7px;
    }
    /* Center the submit button */
    .submit-button-container {
      display: flex;
      justify-content: center;
    }
    .submit-btn {
      width: 100%;
      background-color: #223BC9;
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        title="Location-Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55939.41040249916!2d76.09840215342349!3d28.802721310182996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912612b5c6fb30f%3A0x257571e2388eb9eb!2sBhiwani%2C%20Haryana!5e0!3m2!1sen!2sin!4v1689493641911!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyqyrla"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              className="bdr-radius"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="bdr-radius"
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              className="bdr-radius"
            ></textarea>

            <div className="submit-button-container">
              <input type="submit" value="Send" className="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
