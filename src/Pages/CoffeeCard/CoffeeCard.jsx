import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-six-teal.vercel.app/coffee/${_id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (coffee.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = coffees.filter(cof => cof._id !== _id)
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl border">
      <figure className="p-3 w-1/2">
        <img className="w-96 h-60" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{supplier}</p>
        <p>{category}</p>
        <h1>Chef : {chef}</h1>
        <p>{taste}</p>
        <p>{details}</p>
      </div>

      <div className="card-body join join-vertical">
        <button className="btn join-item">
          <FaEye />{" "}
        </button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn join-item">
            <FaEdit />
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn join-item">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
