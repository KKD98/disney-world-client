import React from 'react';
import { Form } from 'react-router-dom';

const AddAToy = () => {

    const handleSubmitForm = event => {
        event.preventDefault();
        const form = event.target;
        const sellerEmail = form.sellerEmail.value;
        const sellerName = form.sellerName.value;
        const toyName = form.toyName.value;
        const toyUrl = form.toyUrl.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const category = form.category.value;

        console.log('sellerEmail' , sellerEmail)
        console.log('sellerName' , sellerName)
        console.log('toyName' , toyName)
        console.log('toyUrl' , toyUrl)
        console.log('price' , price)
        console.log('ratings' , ratings)
        console.log('quantity' , quantity)
        console.log('description' , description)
        console.log('category' , category)
        
    }
    return (
        <div className='my-8 w-full'>
          <h1 className='text-2xl text-center font-semibold text-sky-600 mb-4 py-2'>Fill the form to Add A Toy</h1>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <Form onSubmit={handleSubmitForm} className="card-body w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name='sellerEmail' placeholder="Seller Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy URL</span>
                            </label>
                            <input type="text" name='toyUrl' placeholder="Toy URL" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name='ratings' placeholder="Ratings" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <select className="selected w-full max-w-xs mt-8 ml-1" name='category' required>
                                <option disabled selected>Select your category</option>
                                <option value="disneyprincess">disneyprincess</option>
                                <option value="lego">lego</option>
                                <option value="actionfigure">actionfigure</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-[30%] mx-auto mt-6">
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddAToy;