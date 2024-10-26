import React from "react";
import Profile from '../asset/HD-wallpaper-attack-on-titan-poster-digital-2022.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                    Tentang Saya
                </h2>

                <div className="flex flex-col items-center mb-12">
                    <img src={`${Profile}`} alt="Profile Picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-gray-600 mb-2">Student</p>
                    <p className="text-xl text-gray-700 font-semibold">I'm a Student and rookie Programmer</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">IoT</h3>
                        <p className="text-gray-700 mb-4">
                        I am a student at SMK N 8 Semarang
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Hobby</h3>
                        <p className="text-gray-700 mb-4">
                            Basketball, Voly and Playing Games
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Sosial Media</h3>
                        <p className="text-gray-700 mb-4">
                        Instagram : raul_daffa
                        </p>
                    </div>
                </div>
                <p className="text-lg text-gray-600 mt-8">
                    Now Learn About ReactJS
                </p>
            </div>
        </section>
    )
}

export default About