import React, { useState } from 'react'
import './add.css'
import {assets} from '../../assets/asset'
import axios from "axios";
import { toast } from 'react-toastify';
const Add = ({url}) => {

  //const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    vendor: "Saly"
  })

  const onSubmitHandler = async (event) => {
    // Prevnet the reload of the form
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number (data.price))
    formData.append("vendor", data.vendor)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        vendor: "Saly"
      });
      setImage(false);
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  /*useEffect(()=> {
    console.log(data  )
  }, [data])*/

  const onChangeHandler = (event)=> {
    const name=event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  } 
  return (
    <div>
        <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
          <div className="add-image-upload flex-col">
            <p className="text-upload-image">
              Joindre un image
            </p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden required/>
          </div>
          <div onChange={onChangeHandler} value={data.name} className="add-product-name flex-col">
            <p>Nom du produit</p>
            <input type="text" name='name' placeholder='Ecrivez ici...' />
          </div>
          <div  className="add-product-description flex-col">
            <p>Description du produit</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Ecrivez la description du produit ici....' required></textarea>
          </div>
          <div className="add-vendor-price">
            <div className="add-vendor flex-col">
              <p>Vendeurs</p>
              <select onChange={onChangeHandler} value={data.vendor} name="vendor">
                <option value="Saly">Saly</option>
                <option value="Coura">Coura</option>
                <option value="Mami">Mamy</option>
                <option value="Bintou">Bintou</option>
                
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Prix du produit</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='Ex. 200' />
            </div>
            
          </div>
          <button type='submit' className='add-btn'>Ajouter</button>
        </form>
        </div>
    </div>
  )
}

export default Add
