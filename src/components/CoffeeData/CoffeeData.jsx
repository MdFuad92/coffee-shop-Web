import React from 'react';
import Swal from 'sweetalert2';

const CoffeeData = ({coffee}) => {
    const {_id,name,quantity,supply,taste,category,details,photo} = coffee

    const handleDelete = (_id)=>{
      console.log(_id)
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
         

          fetch(`http://localhost:3000/coffee/${_id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then((data)=>{
            console.log(data)
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success"
          });
        }
          }
        )
        }
      });
    }
    return (
        <div className=''>
            <div className="card card-side h-80  bg-[#F5F4F1] shadow-xl    ">
  <figure><img className='w-52' src={photo} alt="Movie"/></figure>
  <div className=" flex justify-between items-center gap-40  pl-14 ">
   <div className='space-y-3'>
   <p><span className='font-bold'>Name:</span> {name}</p>
    <p><span className='font-bold'>Quantity:</span> {quantity}</p>
    <p><span className='font-bold'>Taste:</span>  {taste}</p>
   </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-6">
  <button className="btn btn-success join-item">View</button>
  <button className="btn join-item">Edit</button>
  <button onClick={()=>handleDelete(_id)} className="btn join-item btn-error">X</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeData;