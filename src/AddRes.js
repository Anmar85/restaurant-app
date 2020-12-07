import React,{useState} from 'react';
import {Modal, Header , Button} from 'semantic-ui-react' ;
import useUpdateData from './useUpdateData.js';


export default function AddRes(props){

  const [open,setOpen]= React.useState(false)

  const [data,handleData]= useUpdateData({
      resName:'',
      phoneNum:'',
      address:'',
      resUrl:'',
      geometry: {
        location :{
          lng:() => 0,
          lat:() => 0
        }
      }
   });

  /*const [resName,setResName]= useUpdateData('');
  const [phoneNum,setPhoneNum]= useUpdateData('');
  const [address,setAddress]= useUpdateData('');
  const [resUrl,setResUrl]= useUpdateData('');*/

  function handleSubmit(e,data){

    e.preventDefault();
   console.log(data)
   
  }
  data.geometry.location.lat = () => props.position.lat;
  data.geometry.location.lng = () => props.position.lng;

return (
    <Modal className="form"
     size= "small"
    onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Add New Restaurant</Button>}
    >
    <Header>Add Restaurant</Header>
       <Modal.Description>
       <form  onSubmit={handleSubmit}>
          <fieldset>
             <label>Resataurant Name</label>
             <input onChange={handleData}
                         placeholder=' Pizza Pepper'
                         value={data.resName} name="resName" />
            </fieldset>
          <fieldset>
             <label>Phone Number</label>
             <input onChange={handleData}
                         placeholder='0121 473 5050' 
                         value={data.phoneNum} name="phoneNum" /> 
          </fieldset>
          <fieldset> 
          <label>Adrees</label>
             <input onChange={handleData} 
                         placeholder='766 Bristol Rd, Selly Oak, Birmingham'
                         value={data.address} name="address" />
          </fieldset>
          <fieldset>
               <label>Website</label>
              <input onChange={handleData}  
                         placeholder='pizzapeppersellyoak.com.uk'
                         value={data.resUrl} name="resUrl" /> 
          </fieldset>
          <div>
          <button  type="cancel" onClick={() => setOpen(false)}>Cancel</button>
          <button type="add" onClick={(e) => props.addRestaurant(data)}>Add</button> 
          </div>
        </form>
       </Modal.Description>
    </Modal>
  )
}