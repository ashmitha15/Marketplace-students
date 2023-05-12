import './pages.scss'
import Header from './components/Header';
import { mdiDeleteCircle } from '@mdi/js';
import { mdiImageEditOutline } from '@mdi/js';
import Icon from '@mdi/react'
import { useState, useEffect} from "react"
import axios from 'axios';
import $ from "jquery";
import Input from './components/Input'
import Button from './components/Button';
import { Link } from "react-router-dom";
import Label from './components/Label';
import {useSelector} from 'react-redux'
function Products({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const [changeVar, setChangeVar] = useState("Add")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [photo, setPhoto] = useState();
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    }
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
    let fileUpload = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('image', photo, photo.name);
        axios.post('http://localhost:8000/core_php.php', fd, config
        ).then(res=>
        {
        console.log(res);
        }
        );
        
      }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const editproduct = (e) => {
        e.preventDefault();
        setName($(e.target).serializeArray()[0].value)
        setDescription($(e.target).serializeArray()[1].value)
        setPrice($(e.target).serializeArray()[2].value)
        setCategory($(e.target).serializeArray()[3].value)
        setChangeVar("Edit")
    }
    const deleteproduct = (e) => {
        e.preventDefault();
        const form = $(e.target);
        {console.log(form.serialize())}
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        }); 
        getproducts();
    }
    const [result, setResult] = useState("");
    useEffect(() => {
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        if(result==='true')
        {
            // alert('Product added successfully')
        }
        if(result==='false')
            alert('Error in adding product')
    },[ result])
    const handleSumbit = (e) => {
        e.preventDefault();
        fileUpload(e)
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
        e.target.reset();
        alert('Product added successfully')
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setChangeVar('Add')
    };
    const handleEdit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
        e.target.reset();
        alert('Product edited successfully')
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setChangeVar('Add')
    };
    const [products, getproductss]=useState([])
    const getproducts = () => {
        $.ajax({
            type: "POST",
            url: 'http://localhost:8000/fetch-products.php',
            data: 'name='+data.userId,
            success(data) {
                getproductss(eval(data));
            },
        }); 
    }
    useEffect(()=> {
        getproducts();
    },[]);
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
            Products
        </div>
        <div className='posts-body'>
            <div className='partition1'>
            {changeVar==='Add'?<form className='posts-left-wrapper' onSubmit={(event) => handleSumbit(event)}
                action="http://localhost:8000/add-product.php"
                method="post" enctype='multipart/form-data'>
                <span className='heading'>Add new product</span><br/>
                <input value={data.userId} name='userid' style={{display:'none'}}/> 
                <Label text='Add photo'/><br/>
                <Input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePhoto} />
                <input type='text' value={photo?.name} name='photo1' style={{display:'none'}}/> 
                <Label text='Product Name'/><br/>
                <Input type='text' required name='name' onChange={(event) => handleName(event)} value={name}/><br/>
                <Label text='Product Description'/><br/>
                <Input type='text' required name='description' onChange={(event) => handleDescription(event)} value={description}/><br/>
                <Label text='Price'/><br/>
                <Input type='number' required name='price' onChange={(event) => handlePrice(event)} value={price}/><br/>
                <Label text='Quantity'/><br/>
                <Input type='number' required name='quantity' onChange={(event) => handleQuantity(event)} value={quantity}/><br/>
                <Label text='Category'/><br/>
                <select name='category'>
                    <option hidden value=' ' disabled selected>Category</option>
                    <option  onChange={(event) => handleCategory(event)} value={'Books'}>Books</option>
                    <option onChange={(event) => handleCategory(event)} value={'Stationery'}>Stationery</option>
                </select>
                <Button text={'Add Product'} type='submit' />
            </form>:
            <form className='posts-left-wrapper' onSubmit={(event) => handleEdit(event)}
                action="http://localhost:8000/edit-product.php"
                method="post" enctype='multipart/form-data'>
                <span className='heading'>Edit product</span><br/>
                <Label text='Product Name'/><br/>
                <input value={data.userId} name='userid' style={{display:'none'}}/> 
                <Input type='text' required name='name1' onChange={(event) => handleName(event)} value={name} disabled/><br/>
                <Input type='text' name='name' value={name} style={{display:'none'}}/><br/>
                <Label text='Product Description'/><br/>
                <Input type='text' required name='description' onChange={(event) => handleDescription(event)} value={description}/><br/>
                <Label text='Price'/><br/>
                <Input type='number' required name='price' onChange={(event) => handlePrice(event)} value={price}/><br/>
                <Label text='Category'/><br/>
                <select name='category'>
                    <option hidden value=' ' disabled selected>Category</option>
                    <option  onChange={(event) => handleCategory(event)} value={'Books'}>Books</option>
                    <option onChange={(event) => handleCategory(event)} value={'Stationery'}>Stationery</option>
                </select>
                <Button text={'Edit Product'} type='submit' />
            </form>}
            </div>
            <div className='partition2'>
            <div className='clubs-container'>
                <span className='heading'>Products</span><span></span><span></span>
                {products?.map(data => {
                return (
                    <>
                    <div className='grid-item'>
                    <Link to='../product-detail' state={{name:data[0],description:data[1],price:data[2],category:data[4],photo:data[3]}}><img src={require('../controllers/image/'+data[3])} alt='failed to load image' style={{cursor:'pointer'}} className='img' /></Link>
                    <div className='content cont'>{data[0]}</div>
                    <div className='content cont icon-div'>
                        <form  onSubmit={(event) => editproduct(event)}>
                            <span title='edit'>
                                <input style={{display:'none'}} name='name' value={data[0]}/>
                                <input style={{display:'none'}} name='description' value={data[1]}/>
                                <input style={{display:'none'}} name='price' value={data[2]}/>
                                <input style={{display:'none'}} name='category' value={data[4]}/>
                                <button type='submit'><Icon path={mdiImageEditOutline} className='icon ' /></button>
                            </span>
                        </form>
                        <form action="http://localhost:8000/delete-product.php" method="post" onSubmit={(event) => deleteproduct(event)}><span title='delete'><input style={{display:'none'}} name='name' value={data[0]}/><button type='submit'><Icon path={mdiDeleteCircle} className='icon delete-icon' /></button></span></form>
                    </div>
                    </div>
                    </>
                );
                })}
            </div>
            </div>
        </div>
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default Products;
