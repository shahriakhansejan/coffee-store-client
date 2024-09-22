import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Home = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-six-teal.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                    if(users.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }
    return (
        <div className="max-w-xl mx-auto">
            <h2>Users : {loadedUsers.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Email</th>
        <th>Created Date</th>
        <th>Last Login</th>
        <th>Action</th>
      </tr>
    </thead>
        {
            users.map((user, index) =>     <tbody key={index}>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>{index+1}</th>
                  <td>{user.email}</td>
                  <td>{user.createdTime}</td>
                  <td>{user?.lastLoggedAt}</td>
                  <td><button onClick={()=> handleDelete(user._id)} className="btn">X</button></td>
                </tr>
              </tbody>)
        }
  </table>
</div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;