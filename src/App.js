 
import './App.css';
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";


function App() {
 
   const [loading, setLoading] = useState(true);
   const [jobs, setJobs] = useState([]);
   const [value, setValue] = useState(0);




const fetchJobs = async () => {
  const reponse = await fetch(url);
  const newJobs = await reponse.json();
  setJobs(newJobs);
  setLoading(false);
};


useEffect(() => {
  fetchJobs();
}, []);



if (loading) {
  return (
    <section className="section loading">
      <h1>Loading...</h1>
    </section>
  );
}


const { company, dates, duties, title } = jobs[value];
 
  return (
    <>
      <div className="flex justify-center text-2xl font-bold p-5 text-[#3e5c76]">
        Experience
      </div>

      <div>
        <div>
          <div class="m-5 w-4/5  md:pr-10 md:py-6">
            <p className="  text-slate-900 font-bold text-2xl">{title}</p>

            <div className="flex py-2 ">
              <p className="px-4 rounded-sm bg-[#daddd8] text-[#5fa8d3] font-bold">
                {company}
              </p>
            </div>

            <p className="mb-10 text-gray-500 font-bold text-sm">{dates}</p>
          </div>
        </div>

        <section class="text-gray-600 body-font">
          <div class="container   mx-auto   flex-wrap">
            <div class="  relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="  flex-shrink-0 w-96 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                

                {jobs.map((item, index) => {
                  return (
                  <div className='mx-2 border-x-2'>
                     <button
                      key={item.id}
                      onClick={() => setValue(index)}
                      className={`job-btn ${index === value && "active-btn"}`}
                    >
                      {item.company}
                    </button>
                  </div>
                   
                  );
                })}
              </div>

              <div class="flex-grow md:pl-8 pl-6  sm:items-center items-start flex-col sm:flex-row">
                {duties.map((duty, index) => {
                  return (
                    <div key={index}>
                      <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <FaAngleDoubleRight></FaAngleDoubleRight>
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <p class="leading-relaxed">{duty}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
