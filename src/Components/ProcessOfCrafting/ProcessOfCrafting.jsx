function ProcessOfCrafting() {
  return (
    <div className="processContainer flex flex-col px-4 items-center paddings bg-slate-900 sm:bg-slate-600 gap-4">
      <div className="flex flex-row items-center paddings">
        <div className="leftSide">
          <img
            src="https://img.freepik.com/free-vector/delivery-service-concept_52683-68857.jpg?t=st=1709386884~exp=1709390484~hmac=0da18aa77815ba52e2f6109bdcc6f61a78630ca60799c94a2b3013c8a63f9267&w=740"
            alt="Signup"
            className="w-9/12 hidden lg:block mix-blend-multiply contrast-100"
          />
        </div>
        <div className="rightSide mt-10 sm:mt-20 flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl text-stone-200 sm:text-stone-100 font-black">
            The Process Of Crafting Your Dining Experience
          </h2>
          <div className="Email flex flex-col items-start justify-center gap-3 w-full">
          <div className="box py-3  bg-rose-600 rounded-md p-2 flex flex-row items-center gap-5 justify-center">
              <box-icon name="location-plus" type="solid" size="md" color="white"></box-icon>
              <div className="desc flex flex-col items-start gap-1 justify-start">
                <span className="text-xl text-blue-100">Set up your location</span>
                <span className="text-blue-100 opacity-85 text-sm">A High Quality solution Beautifully Food For Customer</span>
              </div>
            </div>

            <div className="box py-3 bg-slate-700 rounded-md p-2 flex flex-row items-center gap-5 justify-center">
              <box-icon name="baguette" type="solid" size="md" color="white"></box-icon>
              <div className="desc flex flex-col items-start gap-1 justify-start">
                <span className="text-xl text-stone-100">Select Food</span>
                <span className="text-stone-100 opacity-85 text-sm">A High Quality solution Beautifully Food For Customer</span>
              </div>
            </div>
            
            <div className="box py-3 bg-slate-700 rounded-md p-2 flex flex-row items-center gap-5 justify-center">
              <box-icon name="paypal" type="logo" size="md" color="white"></box-icon>
              <div className="desc flex flex-col items-start gap-1 justify-start">
                <span className="text-xl text-stone-100">Pay Cash or Online</span>
                <span className="text-stone-100 opacity-85 text-sm">A High Quality solution Beautifully Food For Customer</span>
              </div>
            </div>

            <div className="box  py-3 bg-slate-700 rounded-md p-2 flex flex-row items-center gap-5 justify-center">
              <box-icon name="truck" type="solid" size="md" color="white"></box-icon>
              <div className="desc flex flex-col items-start gap-1 justify-start">
                <span className="text-xl text-stone-100">Delivery or Pickup</span>
                <span className="text-stone-100 opacity-85 text-sm">A High Quality solution Beautifully Food For Customer</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessOfCrafting;
