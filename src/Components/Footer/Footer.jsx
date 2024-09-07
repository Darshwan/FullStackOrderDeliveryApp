function Footer() {
  return (
    <div className="footerContainer bg-black flex flex-row items-start p-4 justify-between flex-wrap gap-4">
      <div className="logoAndDescription flex flex-col items-start justify-center">
        <div className="logo mb-6 flexCenRow">
          <box-icon
            type="solid"
            name="florist"
            size="md"
            color="red"
          ></box-icon>
          <h2 className="text-rose-800">A.C Zone</h2>
        </div>
        <span className="text-stone-100 text-sm w-full">
          At A.C.ZONE, we invite you to embark on a <br /> journey of taste and
          delight. Our tables are <br /> more than just a piece
        </span>
      </div>
      <div className="quickLink flex flex-col items-center justify-center">
        <h2 className="headerLink text-xl text-rose-700 lg:text-stone-100 mb-3 lg:mb-6">Quick Link</h2>
        <div className="quickLinks flex flex-col items-center justify-center gap-1 text-stone-100 text-md">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="cursor-pointer hover:underline">About</span>
          <span className="cursor-pointer hover:underline">Delivery</span>
          <span className="cursor-pointer hover:underline">Pickup</span>
        </div>
      </div>
      <div className="termsAndPolicy flex flex-col items-center justify-center">
        <h2 className="headerLink text-xl text-rose-700 lg:text-stone-100 mb-3 lg:mb-6">Terms & Policy</h2>
        <div className="quickLinks flex flex-col items-center justify-center gap-1 text-stone-100 text-md">
          <span className="cursor-pointer hover:underline">Trust & Safety</span>
          <span className="cursor-pointer hover:underline">Terms Of Service</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
        </div>
      </div>
      <div className="subscribeNewsLetter flex flex-col items-start justify-start gap-3">
      <h2 className="headerLink text-xl text-rose-700 lg:text-stone-100 mb-3 lg:mb-6">Subscribe To Our Newsletter</h2>
      <div className="inputAndBtn flex flex-row items-center justify-start gap-3 flex-wrap">
        <input type="email" className="px-3 py-2 bg-transparent border border-red-700 rounded-md outline-none text-stone-100 text-sm" placeholder="Your email..."/>
        <button className="btn text-sm">Subscribe</button>
      </div>
      <div className="paymentMethods flex flex-col items-start justify-start">
        <span className="text-stone-100">We accept Payment Methods: </span>
        <div className="paymentIcons flex flex-row items-center justify-start gap-2">
        <box-icon type='logo' name='visa' color="white" size="lg"></box-icon>
        <box-icon name='paypal' type='logo' color="white" size="md"></box-icon>
        <box-icon name='mastercard' type='logo' color="white" size="md" ></box-icon>
        <box-icon type='solid' name='bank' color="white" size="md"></box-icon>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
