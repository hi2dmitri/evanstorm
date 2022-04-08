import React, { useState } from 'react';

const FORM_ENDPOINT = ''; // TODO - fill on the later step

const ContactForm = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    console.log(data);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus('We\'ll be in touch soon.'))
      .catch((err) => setStatus('Something went wrong, please try again later'));
  };

  if (status) {
    return (
      <div className='bg-white p-[20px] rounded-md'>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{status}</div>
      </div>
    );
  }

  return (
    <div className='flex align-center opacity-85 justify-center w-[400px] rounded-md h-[450px] bg-white shadow-lg'>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className='w-[360px] mt-[30px]'
      >
        <div className='text-center font-bold uppercase text-lg'> GET IN TOUCH</div>

        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 mt-6 py-3 placeholder-gray-500 text-gray-700 relative bg-gray-100 rounded text-sm shadow outline outline-gray-300 focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-gray-100 outline-gray-300 rounded text-sm shadow outline focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            rows='7'
            className="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-gray-100 rounded text-sm shadow outline outline-gray-300 focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-white text-gray-800 w-[100%] active:bg-gray-300 font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg hover:bg-gray-200 outline outline-3 focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="submit"
          >
          Send a message
          </button>
        </div>
      </form>
    </div>
  );
 
};

export default ContactForm;