import React, { useState } from 'react';
import profiles from '../model/profileData.json';
import { FaGithub, FaLinkedin, FaGoogle, FaInstagram, FaFacebookF } from 'react-icons/fa';

const imageMap: Record<string, string> = {
    'PicA.jpg': '/assets/PicA.jpg',
    'PicB.jpg': '/assets/PicB.jpg'
};

const Profile: React.FC = () => {
    const activeProfile = Array.isArray(profiles)
        ? profiles.find(profile => profile.active)
        : null;

    const [flipped, setFlipped] = useState(false);

    if (!activeProfile) return null;

    const {
        name,
        title,
        role,
        education,
        university,
        year,
        imageA,
        imageB,
        socialLinks
    } = activeProfile;

    return (
        <div className="min-h-[860px] rounded-lg shadow-lg bg-violet-200 bg-opacity-20 backdrop-blur-3xl sm:col-span-4 p-4 flex flex-col overflow-y-auto">
            {/* Profile Picture */}
            <div className="flex justify-center items-center my-4 zoom">
                <label className="swap swap-flip">
                    <input
                        type="checkbox"
                        onChange={() => setFlipped(!flipped)}
                        checked={flipped}
                        className="hidden"
                    />
                    <div className={`avatar ${!flipped ? 'swap-off' : 'hidden'}`}>
                        <div className="w-96 lg:w-96 rounded-full shadow-lg">
                            <img src={imageMap[imageA]} alt={`Profile A of ${name}`} />
                        </div>
                    </div>
                    <div className={`avatar ${flipped ? 'swap-on' : 'hidden'}`}>
                        <div className="w-96 lg:w-96 rounded-full shadow-lg">
                            <img src={imageMap[imageB]} alt={`Profile B of ${name}`} />
                        </div>
                    </div>
                </label>
            </div>

            {/* ID Section */}
            <div className="mx-2 sm:mx-5 lg:mx-8 bg-stone-400 bg-opacity-20 shadow-2xl p-5 rounded-lg flex-grow">
                <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white">{name}</h2>
                <p className="font-bold text-lg sm:text-xl lg:text-xl my-4 text-white">{title}</p>
                <p className="text-lg sm:text-xl lg:text-2xl my-4 text-white">{role}</p>
                <p className="font-bold text-lg sm:text-xl lg:text-2xl mt-4 text-white">
                    {university}, <br /> {education}, {year}
                </p>
            </div>

            {/* Social Media Links */}
            <div className="mx-4 sm:mx-14 lg:mx-20 mt-5 bg-stone-400 bg-opacity-20 shadow-2xl p-5 rounded-lg text-center">
                <div className="flex justify-center space-x-4 text-white">
                    {socialLinks.github && (
                        <a href={socialLinks.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl sm:text-4xl lg:text-5xl hover:animate-pulse" />
                        </a>
                    )}
                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 hover:animate-bounce" />
                        </a>
                    )}
                    {socialLinks.email && (
                        <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                            <FaGoogle className="text-3xl sm:text-4xl lg:text-5xl text-lime-400 hover:animate-ping" />
                        </a>
                    )}
                    {socialLinks.instagram && (
                        <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl text-pink-600 hover:animate-spin" />
                        </a>
                    )}
                    {socialLinks.facebook && (
                        <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 hover:animate-bounce" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
