import React, { useState } from 'react';
import img1 from "../assets/image/fiver.jpg";

const Resume = () => {

     const [skills, setSkills] = useState({
    HTML: 90,
    CSS: 80,
    JS: 70,
    React: 75,
    NodeJS: 65,
    NextJS: 60,
  });

  const handleChange = (skill, value) => {
    setSkills({ ...skills, [skill]: parseInt(value) });
  };
    return (
        <div className="min-h-screen flex justify-center items-start bg-white">
            <div className="w-full max-w-[900px] shadow-2xl">
                <div className="flex flex-col md:flex-row mt-6 px-4">
                    {/* Left Yellow Bar & Profile */}
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-96 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 flex flex-col items-center">
                            <div className="w-56 aspect-square bg-gradient-to-br from-blue-500 via-white to-yellow-400 rounded-full mt-10 shadow-2xl flex items-center justify-center">
                                <div className="w-4/5 h-4/5 bg-yellow-400 rounded-full shadow-xl overflow-hidden">
                                    <img src={img1} alt="profile" className="w-full h-full object-cover rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="ml-40 mt-[-4rem] md:mt-0">
                        <h1 className="text-[60px] leading-[75px] font-extrabold text-gray-800">Belal Khan</h1>
                        <p className="text-[33px] text-gray-800">WEB DEVELOPER</p>
                        <div className="flex gap-5 mt-6">
                            <a href="#" className="w-7 h-7 bg-yellow-400 flex items-center justify-center rounded-full text-white">
                                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="w-7 h-7 bg-yellow-400 flex items-center justify-center rounded-full text-white">
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="w-7 h-7 bg-yellow-400 flex items-center justify-center rounded-full text-white">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between mt-8">
                    {/* Left Column */}
                    <div className="w-full lg:w-[35%] flex flex-col items-center px-6">
                        <div className="w-full space-y-6">
                            {/* Contact & Skills */}
                            <div className="space-y-4">
                                <div className="bg-gray-800 rounded-full px-5 py-2 shadow-md">
                                    <h3 className="text-white text-lg">Contact</h3>
                                </div>
                                <div className="flex flex-col gap-4 text-gray-800">
                                    <p><i className="fa fa-map-marker"></i> 123 Main Street, Rangpur</p>
                                    <p><i className="fa fa-phone"></i> +8801309707330</p>
                                    <p><i className="fa fa-envelope"></i> belalkhan24baba@gmail.com</p>
                                    <p><i className="fa fa-chrome"></i> www.belalkhan.com</p>
                                </div>
                                <div className="bg-gray-800 rounded-full px-5 py-2 shadow-md">
                                    <h3 className="text-white text-lg">Skill</h3>
                                </div>
                               <div className="space-y-4">
      {Object.entries(skills).map(([skill, value]) => (
        <div key={skill}>
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm">{skill}</p>
            <p className="text-sm">{value}%</p>
          </div>
          <div className="w-full bg-gray-300 rounded h-2 overflow-hidden mb-1">
            <div
              className="bg-yellow-400 h-full"
              style={{ width: `${value}%` }}
            ></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => handleChange(skill, e.target.value)}
            className="w-full"
          />
        </div>
      ))}
    </div>
                            </div>

                            {/* Hobbies */}
                            <div>
                                <div className="bg-gray-800 rounded-full px-5 py-2 shadow-md text-white mb-4">Hobbies</div>
                                <div className="flex flex-col gap-3 text-gray-800">
                                    <p><i className="fa fa-book"></i> Reading Books</p>
                                    <p><i className="fa fa-plane"></i> Traveling</p>
                                    <p><i className="fa fa-video-camera"></i> Movies</p>
                                    <p><i className="fa fa-apple"></i> Apple Devices</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-[65%] bg-black text-white rounded-tl-[100px] px-10 py-12">
                        <div className="bg-yellow-400 rounded-full px-5 py-2 shadow-md inline-flex items-center mb-6">
                            <i className="fa fa-user mr-2"></i> <p>Profile</p>
                        </div>
                        <div className="text-gray-100 space-y-4 mb-8">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>

                        {/* Education */}
                        <div className="bg-yellow-400 rounded-full px-5 py-2 shadow-md mb-4 text-black">
                            <h3 className="font-bold">Education</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                                    <p className="ml-3">University of Springfield</p>
                                </div>
                                <div className="ml-8 text-sm text-gray-300">
                                    <p>Springfield</p>
                                    <p>Graduation: May 2024</p>
                                    <p>Relevant Courses: Graphic Design, UX/UI Design</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                                    <p className="ml-3">Metropolis University</p>
                                </div>
                                <div className="ml-8 text-sm text-gray-300">
                                    <p>Metropolis, NY</p>
                                    <p>Graduation: May 2018</p>
                                    <p>Relevant Courses: Software Development, Mobile App Development</p>
                                </div>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div className="mt-10">
                            <div className="bg-yellow-400 rounded-full px-5 py-2 shadow-md mb-4 text-black">
                                <h3 className="font-bold"><i className="fa fa-briefcase mr-2"></i> Work Experience</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                                        <p className="ml-3">Teach Innovators Inc</p>
                                    </div>
                                    <div className="ml-8 text-sm text-gray-300">
                                        <p>Metropolis, NY</p>
                                        <p>Worked as frontend developer using React and Tailwind</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                                        <p className="ml-3">Creative Solution Co</p>
                                    </div>
                                    <div className="ml-8 text-sm text-gray-300">
                                        <p>Metropolis, NY</p>
                                        <p>Worked as UI/UX Designer and Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;