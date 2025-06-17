import React from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const suggestion = "Including results for pronutrition.lk";
  const alternative = "Do you want results only for pronutrition.lk?";

  const results = [
    { title: "CLA", link: "/cla", description: "Conjugated Linoleic Acid (CLA) for fat loss and muscle tone." },
    { title: "Creatine", link: "/creatine", description: "Boost strength and endurance with our creatine supplements." },
    { title: "Fat Burners", link: "/fat-burners", description: "High-performance fat burners to accelerate weight loss." },
    { title: "L-Carnitine", link: "/l-carnitine", description: "L-Carnitine for enhanced energy and fat metabolism." },
    { title: "Mass Gainers", link: "/mass-gainers", description: "Build muscle with high-calorie mass gainers." },
    { title: "Multi-Vitamin", link: "/multi-vitamin", description: "Daily multivitamins for overall health and wellness." },
    { title: "Pre-Workouts", link: "/pre-workouts", description: "Pre-workout supplements for energy and endurance." },
    { title: "Whey Proteins", link: "/whey-proteins", description: "High-quality whey protein for muscle recovery." },
    { title: "Best Sellers", link: "/best-sellers", description: "Check out our top-selling products." },
    { title: "Shop", link: "/shop", description: "Explore our full range of nutrition products." },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Suggestion Banner */}
      <div className="bg-gray-100 p-3 rounded-md mb-4 text-sm">
        <p className="font-semibold">{suggestion}</p>
        <p className="text-blue-600 cursor-pointer">{alternative}</p>
      </div>

      {/* Search Results */}
      {results.map((result, index) => (
        <div key={index} className="mb-4">
          <Link to={result.link} className="text-blue-700 text-lg hover:underline">
            {result.title}
          </Link>
          <p className="text-gray-600 text-sm">{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
