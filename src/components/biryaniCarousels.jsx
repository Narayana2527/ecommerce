import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChickenRecipesSlider = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet and Laptop View
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile View
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 1000,
          dots: false,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "gray",
            display: "inline-block",
            margin: "0 5px",
          }}
        ></div>
      );
    },
  };

  return (
    <div className="container mx-auto bg-white my-4">
      <h1 className='flex items-center justify-center text-customGreen font-semibold text-xl mt-1'>Deal's Today</h1>
      <h2 className='text-3xl text-black flex items-center font-extrabold justify-center mt-1'>TODAY SPECIAL DISH</h2>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <div key={index} className="p-4">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-xl text-center text-customGreen font-semibold">{recipe.strMeal}</h3>
            <h4 className='text-sm text-black font-light text-center mx-auto mt-1'>Lorel ipsum dolor sit amet, consectetur Vesti bulum vel ipsum</h4>
            <h5 className='text-xl text-center font-extrabold'>Starts at <span className='text-sm text-customGreen'>₹249</span></h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ChickenRecipesSlider;
