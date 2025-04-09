import React from 'react';
import './Banner.css'; // Import the custom CSS

const Banner = () => {
  return (
    <div className="md:w-1/2 w-full bg-white text-black bg-opacity-60 p-8 rounded-2xl shadow-lg">
      <h1 className="md:text-5xl text-2xl font-semibold mb-7 text-yellow-600">
        <span className="typing-animation text-black">Hey Readers!</span>
      </h1>
      <p className="mb-10 text-black text-lg">
        It's time to refresh your bookshelf with this week's most anticipated literary releases! Whether you're craving heart-pounding thrillers, deeply moving memoirs, or unforgettable fiction, there's something in store for every kind of reader. Dive into the latest page-turners and discover stories that will stay with you long after the last chapter.
      </p>
    </div>
  );
};

export default Banner;

