import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeData = ({coffee,coffees,setCoffees}) => {
    const {_id,name,quantity,supply,taste,category,details,photo} = coffee

    const handleDelete = (_id)=>{
      console.log(_id)
     
     
         

          fetch(`http://localhost:3000/coffee/${_id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then((data)=>{
            console.log(data)
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Coffee!",
            text: "Successfully removed",
            icon: "success"
          });
        const filter = coffees.filter(c=>c._id !== _id)
        setCoffees(filter)
        console.log(filter)
       
        }
      
          })
         
        

     
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
 <Link to={`update/${_id}`}> <button className="btn join-item">Edit</button></Link>
  <button onClick={()=>handleDelete(_id)} className="btn join-item btn-error">X</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeData;