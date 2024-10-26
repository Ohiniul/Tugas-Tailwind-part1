import React from "react";
import dbr from '../asset/dbr.jpg';
import maximum from '../asset/maximum.jpg';
import bi from '../asset/bi.jpg';

const Project = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={dbr} alt="Raul" className="w-full h-83 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Picture</h3>
                        <p className="text-gray-700">Ungaran Mountain</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={maximum} alt="Raul" className="w-full h-83 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Picture</h3>
                        <p className="text-gray-700">Ice Cream Gelato</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={bi} alt="Raul" className="w-full h-83 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Picture</h3>
                        <p className="text-gray-700">Malioboro</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;