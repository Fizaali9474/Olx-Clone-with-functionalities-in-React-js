import { useState } from "react"
// import "./index.css"
import { addItem } from "../../config/Firebase"
import "./index.css"
// import { Toaster } from "react-hot-toast"
const Sell = () => {
  const [brand, setBrand] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [ images ,setImages  ]=useState()
  console.log(images)
  const handleSubmit = async () => {
    await addItem({ brand, title, description, category, price , images })
    
  }
  return (
    <div className='max-w-[1000px] mx-auto mt-10 con'>
      
      <h2 className='text-[37px] mb-2 font-bold '>
    Add Items
      </h2>
     
        <div className='flex flex-col gap-1 brand-div'>
          <label htmlFor="" className="brand-head">Brand</label>
          <input onChange={(e) => setBrand(e.target.value)} className='brand-input' type="text" placeholder='Brand' />
        </div>
        <div className='flex flex-col gap-1 title-div'>
          <label htmlFor="" className="title-head">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} className='title-input' type="text" placeholder='Title' />
        </div>
        <div className='flex flex-col gap-1 cat-div'>
          <label htmlFor="" className="cat-head">Category</label>
          <input onChange={(e) => setCategory(e.target.value)} className='cat-input' type="text" placeholder='Category' />
        </div>
        <div className='flex flex-col gap-1 price-div'>
          <label htmlFor="" className="price-head">Price</label>
          <input onChange={(e) => setPrice(e.target.value)} className='price-input' type="text" placeholder='Price' />
        </div>
        <div className='flex flex-col gap-1 des-div'>
          <label htmlFor="" className="des-head">Description</label>
          <input onChange={(e) => setDescription(e.target.value)} className='des-input' type="text" placeholder='Description' />
        </div>
<div className='flex flex-col gap-1 des-div' >
<label htmlFor="password" className="img-head">Images</label>
<input onChange={(e) => setImages([e.target.files])} multiple  className='img-div' 
type="file" 
placeholder='Images' />
  </div>

        <button onClick={handleSubmit}
         className="bg-white px-2 py-2 transition-all duration-200 hover:bg-[#ecebeb] w-1/3 mt-3  rounded-md text-[18px] font-bold">
          Add </button>
      
    </div>
  )
}

export default Sell