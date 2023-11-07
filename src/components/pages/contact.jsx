import {useState, useEffect } from 'react'
import { validateEmail, validateLength } from '../../utils/helpers';

export default function Contact() {
// Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [input, setInput] = useState(true);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    console.log(e)
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
      setInputType(inputType);

    } else if (inputType === 'name') {
      setName(inputValue);
      setInputType(inputType);

    } else {
      setMessage(inputValue);
      setInputType(inputType);
    }
  };

  const handleFocus = (e) => {
    const { target } = e;
    console.log(e)
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
      setInput(true);
    } else {
      setInput(false)
    }

  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    alert(`Thank you for the message ${name}`)
  };

  useEffect((e) => {

  })

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have questions? Feel free to reach out!
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20 form" onSubmit={handleFormSubmit}>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
              onblur={handleFocus}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              />
              {!email && input &&  (
                <div>
                  <p>This field is required</p>
                </div>
              )}
            </div>
          </div>
        <div className="sm:col-span-2 my-5">
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                />
              </div>
          </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              value={message}
              name="message"
              id="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Leave a message..."
              rows={6}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
              />
            </div>
          </div>
        <button 
        type="submit"
        className="block w-full rounded-md bg-regal-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
        >
          Submit</button>

      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
  );
 
}
