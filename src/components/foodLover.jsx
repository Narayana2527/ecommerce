import React ,{useState,useEffect}from 'react'

const FoodLover = () => {
    const [recipes, setRecipes] = useState([]);
    const [nonVeg, setNonVeg] = useState([]);
    const [isVeg,setIsVeg] = useState(false)
    const [isNonVeg,setIsNonVeg] = useState(false)
    
    useEffect(() => {
      const fetchNonVegData = async () => {
        try {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const data = await response.json();
          setNonVeg(data.categories.slice(0,3)); // Adjust this based on the actual response structure
        } catch (error) {
          console.log("Error fetching recipes:", error);
        }
      };
      const fetchVegData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/recipes');
          const data = await response.json();
          setRecipes(data.recipes.slice(0,3)); // Adjust this based on the actual response structure
        } catch (error) {
          console.log("Error fetching recipes:", error);
        }
      };
      
      fetchNonVegData();
      fetchVegData();
      
    }, []);
  
    
    const vegRecipiesHandler = () => {
      setIsVeg(true);
      setIsNonVeg(false)
    };
  
    const nonVegRecipiesHandler = () => {
      setIsNonVeg(true)
      setIsVeg(false)
    };
    return (
        <div className=' bg-menuBg my-3'>
            <div className="container">
          <div className='mt-3'>
            <h1 className="text-center text-xl text-customGreen font-semibold py-3">Food Lover</h1>
            <h2 className='text-center text-3xl text-black font-extrabold py-2'>RESTURANT MENU</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-between md:gap-4 mt-3 md:mt-0">
            <button
              className="w-full md:w-30 bg-menuButton text-sm text-black active:bg-customGreen active:text-white px-3 py-2 border rounded-xl"
              onClick={vegRecipiesHandler}
            >
              All Dishes
            </button>
            <button
              className="w-full md:w-30 bg-menuButton text-sm text-black active:bg-customGreen active:text-white px-3 py-2 border rounded-xl"
              onClick={vegRecipiesHandler}
            >
              Dinner
            </button>
            <button
              className="w-full md:w-30 bg-menuButton text-sm text-black active:bg-customGreen active:text-white px-3 py-2 border rounded-xl"
              onClick={nonVegRecipiesHandler}
            >
              Lunch
            </button>
            <button
              className="w-full md:w-30 bg-menuButton text-sm text-black active:bg-customGreen active:text-white px-3 py-2 border rounded-xl"
              onClick={vegRecipiesHandler}
            >
              Drinks
            </button>
            <button
              className="w-full md:w-30 bg-menuButton text-sm text-black active:bg-customGreen active:text-white px-3 py-2 border rounded-2xl"
              onClick={nonVegRecipiesHandler}
            >
              Starters
            </button>          
          </div>
            
          <div className='my-4'>
          {/* <h3 className={`text-3xl font-semibold text-gray-800 ${isVeg ?"block" :"hidden"}`}>Vegetarian Dishes</h3> */}
          <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>        
              {        
              isVeg ?(          
                recipes.map((recipe, index) => (   
                  <div className='card'>         
                  <div key={index} className='card-body'>                
                      {/* <p className='text-sm text-gray-600'>Description: {recipe.description}</p> */}
                      <img src={recipe.image} alt='description' className='w-full h-30' /> 
                      <p className='text-xl text-center mt-1 bg-white p-2'>{recipe.name}</p>    
                  </div>
                  </div>
                ))
              ):(
                <div className='hidden'></div>
              )
              }
            </div>        
          </div>
          <div className='mt-5'>
          {/* <h3 className={`text-3xl font-semibold text-gray-800 ${isVeg ?"block" :"hidden"}`}>Vegetarian Dishes</h3> */}
          <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>        
              {        
              isNonVeg ?(          
                nonVeg.map((category, index) => (   
                  <div className='card'>         
                  <div key={index} className='card-body'>                
                      {/* <p className='text-sm text-gray-600'>Description: {recipe.description}</p> */}
                      <img src={category.strCategoryThumb} alt='description' className='w-full h-30' /> 
                      <p className='text-xl text-center mt-1 bg-white p-2'>{category.strCategory}</p>    
                  </div>
                  </div>
                ))
              ):(
                <div className='hidden'></div>
              )
              }
            </div>        
          </div>          
        </div>
        </div>
        
    );
  };

export default FoodLover
