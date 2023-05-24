import { useState } from 'react';
import { sanitize } from '../../utils/miscellaneous';

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf('@') > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ('0' !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div>
      <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
        Subscribe to newsletter
      </h3>
      <div className="newsletter-input-fields flex">
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="block h-10 w-full appearance-none border border-gray-400 bg-white py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white focus:text-gray-700 focus:placeholder-gray-600 dark:bg-gray-700"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>

        <button
          className="focus:none cursor-pointer bg-indigo-500 px-5 py-2 font-medium text-white hover:bg-indigo-600"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
      <div className="min-h-42px pt-2">
        {'sending' === status ? <p>Loading...</p> : null}
        {'error' === status || error ? (
          <div
            className="pt-2 text-red-700"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {'success' === status && 'error' !== status && !error && (
          <div
            className="pt-2 font-bold text-green-700"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
