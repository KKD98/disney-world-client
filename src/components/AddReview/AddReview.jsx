import React, { useState } from 'react';
import review from '../../assets/reviews.png';
import Swal from 'sweetalert2';

const AddReview = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleReview = (event) => {
    event.preventDefault();
    if (name.trim() === '' || rating.trim() === '' || reviewText.trim() === '') {
      Swal.fire('Please fill in all required fields.');
    } else {
      Swal.fire('Review Added Successfully.', '', 'success');
  
    
      setName('');
      setRating('');
      setImage('');
      setReviewText('');
    }
  };
  

  return (
    <div className="mt-4 mb-6 w-full lg:w-4/5 mx-auto">
      <p className="text-sky-400 text-center text-4xl">--------------------</p>
      <h1 className="text-3xl text-center font-semibold text-black font-mono">Add Review</h1>
      <p className="text-sky-400 text-center text-4xl">--------------------</p>

      <div className="flex flex-col lg:flex-row gap-3 items-center justify-center w-full lg:w-4/5 mx-auto">
        <div className="w-full flex justify-center mx-auto">
          <img src={review} alt="" />
        </div>

        <div className="w-full">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name*</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Image*</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                id="image"
                type="file"
                name="image"
                placeholder="Your image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">Rating*</label>
              <select
                className="shadow appearance-none border rounded w-full normal-case py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="rating"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
                <option>1 Star</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">Review*</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                id="review"
                placeholder="Write your review"
                name="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleReview}
                className="bg-sky-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
