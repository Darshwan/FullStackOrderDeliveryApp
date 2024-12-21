import React from 'react'

function Address() {
  return (
    <div >
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight pb-4">
        Your Current Address
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369.8195277842885!2d84.08525695291888!3d28.13625451845146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bd1361c64cfd%3A0xfaa9b0ae079b3138!2sLekhnath!5e0!3m2!1sen!2snp!4v1733360829460!5m2!1sen!2snp"
        width="100%"
        height="550px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Map"
      ></iframe>
    </div>
  );
}

export default Address