/* eslint-disable no-lone-blocks */
import React, { useRef } from 'react';

// import emailjs from '@emailjs/browser';

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

    // emailjs.sendForm('service_v2r5csi', 'template_amcm8qn', form.current, 'xvm8A8R58Vbb7M2WP')
    // // serviceId: service_v2r5csi templateId: template_amcm8qn publicKey: xvm8A8R58Vbb7M2WP
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  // };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading" id='contacto'>Tienes alguna consulta?</h1>
      <h1 className="primary-heading">Dejanos ayudarte</h1>
      <div className="contact-form-container">
        {/* <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button> */}
        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Contact;


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };


{/* <form ref={form} onSubmit={sendEmail}> */ }
{/* Nombre del cliente */ }
{/* <input type="text" placeholder='Tu nombre' name="to_name" /> */ }
{/* <input type="email" placeholder='Tu email' name="email" />  */ }
{/* Email del cliente, aqui se le reenviara la consulta */ }
{/* Consulta del cliente */ }
{/* <textarea name="message" placeholder='Mensaje' /> */ }
{/* <input className="secondary-button" type="submit" value="Enviar" /> */ }
// </form>
