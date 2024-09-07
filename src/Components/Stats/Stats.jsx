// import React from 'react'
import "./stats.css";
function Stats() {
  return (
    // <div className="stats-container w-screen flex-wrap py-5 flex flex-row gap-4 items-center justify-center bg-black text-white px-5">
    //   <div className="Stat flex flex-col gap-2 flex-wrap items-center justify-center">
    //     <span className="stat-number text-5xl items-center ">
    //       15<box-icon name="plus" color="#E32636"></box-icon>
    //     </span>
    //     <span className="statDescription opacity-90">Years of Experience</span>
    //   </div>
    //   <hr className="rounded mx-10 h-24 bg-white w-0.5" />
    //   <div className="Stat flex flex-col gap-2 flex-wrap items-center justify-center">
    //   <span className="stat-number text-5xl items-center ">
    //       5<box-icon name="plus" color="#E32636"></box-icon>
    //     </span>
    //     <span className="statDescription opacity-90">Master Chefs</span>
    //   </div>
    //   <hr className="mx-10 h-24 bg-white w-0.5" />
    //   <div className="Stat flex flex-col gap-2 flex-wrap items-center justify-center">
    //     <span className="stat-number text-5xl items-center ">
    //       200<box-icon name="plus" color="#E32636"></box-icon>
    //     </span>
    //     <span className="statDescription opacity-90">Daily Visitors</span>
    //   </div>
    //   <hr className="mx-10 h-24 bg-white w-0.5" />
    //   <div className="Stat flex flex-col gap-2 flex-wrap items-center justify-center">
    //     <span className="stat-number text-5xl items-center ">
    //       35<box-icon name="plus" color="#E32636"></box-icon>
    //     </span>
    //     <span className="statDescription opacity-90">Achievements</span>
    //   </div>
    // </div>
    <div className="stats-container lg:h-[25vh] flex justify-center items items-center bg-slate-950 text-white p-5">
      <div className="stats flex flex-col justify-center items-center md:flex-row md:gap-15 gap-10">
        <div className="stat flex flex-row justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="stat-number  bg-transparent text-5xl items-center ">
              200<box-icon name="plus" color="#E32636" size="md"></box-icon>
            </span>
            <span className="statDescription opacity-90">Achievements</span>
          </div>
          <hr className="mx-10 hidden h-24 sm:block bg-white w-0.5" />
        </div>

        <div className="stat flex flex-row justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="stat-number text-5xl items-center ">
              15<box-icon name="plus" color="#E32636" size="md"></box-icon>
            </span>
            <span className="statDescription opacity-90">
              Years of Experience
            </span>
          </div>
          <hr className="mx-10 hidden h-24 sm:block bg-white w-0.5" />
        </div>

        <div className="stat flex flex-row justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="stat-number text-5xl items-center ">
              5<box-icon name="plus" color="#E32636" size="md"></box-icon>
            </span>
            <span className="statDescription opacity-90">
              Master Chefs
            </span>
          </div>
          <hr className="mx-10 hidden h-24 sm:block bg-white w-0.5" />
        </div>
      </div>
    </div>
  );
}

export default Stats;
