import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';


const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id,name,quantity,supplier,taste,category,photo,details} = coffee

  
  

  
    const handleAddCoffee = event => {
      event.preventDefault()
  
      const form = event.target;
  
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const photo = form.photo.value;
        const details = form.details.value;
  
        const updatedCoffee = {name,quantity,supplier,taste,category,photo,details}
        console.log(updatedCoffee);
  
        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedCoffee)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
          
        })
        
    }
    
  return (
    <div className='bg-[#F4F3F0] p-24'>
    <h2 className='text-3xl font-extrabold items-center justify-center mx-auto'>Update Coffee: {name} </h2>
    <form onSubmit={handleAddCoffee} action="">
      {/* form name and quantity */}
      <div className='md:flex gap-5'>
      <div className='form-control md:w-1/2'>
        <label htmlFor="">
          <span className='label-text'>Coffee Name </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='coffee Name' defaultValue={name} className='input input-bordered w-full' name="name" id="" />
        </label>
        </div>
        <div className='form-control md:w-1/2'>
        <label htmlFor="">
          <span className='label-text'>Available Quantity </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='available quantity' defaultValue={quantity} className='input input-bordered w-full' name="quantity" id="" />
        </label>
        </div>
      </div>
      {/* form supplier row*/}
      <div className='md:flex gap-5'>
      <div className='form-control md:w-1/2'>
        <label htmlFor="">
          <span className='label-text'>Supplier Name </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='Supplier' defaultValue={supplier} className='input input-bordered w-full' name="supplier" id="" />
        </label>
        </div>
        <div className='form-control md:w-1/2'>
        <label htmlFor="">
          <span className='label-text'>Taste </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='Taste' defaultValue={taste} className='input input-bordered w-full' name="taste" id="" />
        </label>
        </div>
      </div>
      {/* form category and details */}
      <div className='md:flex gap-5'>
      <div className='form-control md:w-1/2'>
        <label htmlFor="">
          <span className='label-text'>Category </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='Category' defaultValue={category} className='input input-bordered w-full' name="category" id="" />
        </label>
        </div>
        <div className='form-control md:w-1/2'>
        <label htmlFor="">
          <span className='label-text'>Details </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='Details' defaultValue={details} className='input input-bordered w-full' name="details" id="" />
        </label>
        </div>
      </div>
      {/*form  photo url */}
      <div className='mb-8'>
      <div className='form-control w-full'>
        <label htmlFor="">
          <span className='label-text'>Photo URL </span>
        </label>
        <label htmlFor="">
          <input type="text" placeholder='Photo URL' className='input input-bordered w-full' name="photo" id="" />
        </label>
        </div>
        
      </div>
      
      <input type="submit" value='Add Coffee' className='btn btn-block'/>
    </form>
  </div>
  )
}

export default UpdateCoffee