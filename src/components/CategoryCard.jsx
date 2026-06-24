// const CategoryCard = ({ title, emoji }) => {
//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer text-center">
//       <div className="text-5xl mb-4">
//         {emoji}
//       </div>

//       <h3 className="text-lg font-semibold">
//         {title}
//       </h3>
//     </div>
//   );
// };

// export default CategoryCard;

import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, emoji }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/menu")}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer text-center"
    >
      <div className="text-5xl mb-4">
        {emoji}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;