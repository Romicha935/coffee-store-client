import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id,name,quantity,supplier,taste,category,photo,details} = coffee

    const handleDelete = _id => {
       console.log(_id);
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
        
          fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'DELETE'
          })
          
          .then(res=> res.json())
          .then(data=> {
            console.log(data);
           if(data.deleteCount > 0) {
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
<div className="card bg-base-100 w-96 shadow-sm flex">
  <figure>
    <img
      src={photo}
      alt="Shoes" />
  </figure>
  <div className=" flex justify-between border border-4 w-ull pr-4">
    <div>
    <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p> {supplier} </p>
    <p>{taste}</p>
    </div>
    <div className="card-actions justify-end">
 <div className='btn-group flex flex-col space-y-5'>
 <button className="btn btn-primary">
    view
 </button>
     <Link to={`updateCoffee/${_id}`}>
     <button className="btn btn-primary">Edit</button></Link>
      <button onClick={()=> handleDelete(_id)} className="btn bg-red-400">X</button>
 </div>
    </div>
  </div>
</div>
  )
}

export default CoffeeCard