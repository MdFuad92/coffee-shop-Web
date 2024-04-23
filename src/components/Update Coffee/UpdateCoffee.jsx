import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id,name,quantity,supply,taste,category,details,photo} = coffee

    const handleAddcoffe=(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supply = form.supply.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const updateCoffee = {name,quantity,supply,taste,category,details,photo}
        console.log(updateCoffee)

        console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Update it!"
        }).then((result) => {
          if (result.isConfirmed) {
           
  
            fetch(`http://localhost:3000/coffee/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json'
                } ,
                body: JSON.stringify(updateCoffee)
            })
            .then(res=>res.json())
            .then((data)=>{
              console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: "Updated!",
              text: "Your coffee has been Updated.",
              icon: "success"
            });
          }
            }
          )
          }
        });

     
    }
    return (
        <div className=' bg-[#F4F3F0] p-24'>
           
       
        <h2 className='font-extrabold text-3xl text-center'>Add a Coffee</h2>
    <form onSubmit={handleAddcoffe} className="card-body ">
       {/* form name and quantity*/} 
    <div className='md:flex items-center gap-8'>
    <div className="form-control w-1/2  ">
        <label className="label">
        <span className="label-text">Coffee Name</span>
        </label>
        <input  type="text" placeholder="name" name='name' defaultValue={name} className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
        <label className="label">
        <span className="label-text">Add Quantity</span>
        </label>
        <input type="text" name='quantity' placeholder="quantity" defaultValue={quantity} className="input input-bordered" required />
      
        </div>
       
    </div>
     {/* form supply and taste*/} 
    <div className='flex gap-8 items-center '>
    <div className="form-control w-1/2 ">
        <label className="label">
        <span className="label-text">Coffee Name</span>
        </label>
        <input  type="text" placeholder="coffee supplier" defaultValue={supply} name='supply' className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
        <label className="label">
        <span className="label-text">Taste</span>
        </label>
        <input type="text" name='taste' placeholder="enter taste" defaultValue={taste} className="input input-bordered" required />
      
        </div>
       
    </div>
        {/* form category and details*/} 
    <div className='flex items-center gap-8 '>
    <div className="form-control w-1/2 ">
        <label className="label">
        <span className="label-text">Category</span>
        </label>
        <input  type="text" placeholder="enter category" name='category' defaultValue={category} className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
        <label className="label">
        <span className="label-text">Details</span>
        </label>
        <input type="text" name='details' placeholder="details" defaultValue={details} className="input input-bordered" required />
      
        </div>
       
    </div>
 
    <div className=' '>
    <div className="form-control w-full ">
        <label className="label">
        <span className="label-text">Photo URL</span>
        </label>
        <input  type="text" placeholder="Photo URL" name='photo' defaultValue={photo} className="input input-bordered w-full" required />
        </div>
       
       
    </div>

    <input type="submit" value='Add Coffee' className='btn btn-block btn-neutral' />
        </form>
       
        

       

      
      </div>
    );
};

export default UpdateCoffee;