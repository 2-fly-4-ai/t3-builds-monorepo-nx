import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { sanitize } from '../../utils/miscellaneous';

interface NewsletterFormProps {
  status: string;
  message: string;
  onValidated: (data: { EMAIL: string }) => boolean;
}

export default function NewsletterForm({
  status,
  message,
  onValidated,
}: NewsletterFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const handleFormSubmit = (): boolean | null => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    return email && email.indexOf('@') > -1 && isFormValidated;
  };

  const handleInputKeyEvent = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    setError(null);

    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit();
    }
  };

  const getMessage = (message: string): string | null => {
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
      <h3 className="mb-2 text-base font-medium">Subscribe to newsletter</h3>
      <div className="newsletter-input-fields flex overflow-hidden rounded-lg border">
        <div className="mc-field-group">
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event?.target?.value ?? '')
            }
            type="email"
            placeholder="Your email"
            className="block h-10 w-full appearance-none border bg-white py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white focus:text-gray-700 focus:placeholder-gray-600 dark:bg-black dark:bg-opacity-80 dark:text-white"
            onKeyUp={handleInputKeyEvent}
          />
        </div>
        <button
          className="focus:none cursor-pointer bg-gray-600 px-5 py-2 font-medium text-white hover:bg-gray-600"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
      <div className="min-h-42px pt-2">
        {status === 'sending' ? <p>Loading...</p> : null}
        {status === 'error' || error ? (
          <div
            className="pt-2 text-red-700"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === 'success' && !error && (
          <div
            className="pt-2 font-bold text-green-700"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
}
