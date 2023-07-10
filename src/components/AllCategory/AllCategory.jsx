import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from '../SingleCategory/SingleCategory';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    const [categoryName , setCategoryName] = useState("disneyprincess");

    useEffect(() => {
        fetch(`https://toy-marketplace-server-peach.vercel.app/toysbycategory/${categoryName}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categoryName])

    let handleCategory = name => {
        setCategoryName(name);
    }
    return (
        <div className='mt-4 mb-6 w-full lg:w-4/5 mx-auto'>
        <p className='text-sky-400 text-center text-4xl'>--------------------</p>
      <h1 className='text-3xl text-center font-semibold text-black font-mono'>Shop By Category </h1>
      <p className='text-sky-400 text-center text-4xl'>--------------------</p>
    
    
          <Tabs>
            <TabList className="flex justify-center gap-2 mb-6">
                <Tab onClick={() => handleCategory("disneyprincess")} className="p-4 text-xl border-2 border-sky-400 font-semibold bg-sky-400 text-white font-mono">Disney Princess</Tab>
                <Tab onClick={() => handleCategory("lego")} className="p-4 text-xl border-2 border-sky-400 font-semibold bg-sky-400 text-white font-mono">Lego</Tab>
                <Tab onClick={() => handleCategory("actionfigure")} className="p-4 text-xl border-2 border-sky-400 font-semibold bg-sky-400 text-white font-mono">Action Figure</Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full  mx-auto'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='lg:mx-2 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full  mx-auto'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='lg:mx-2 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full  mx-auto'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }
                </div>
            </TabPanel>
        </Tabs>
          </div>
        
    );
};

export default AllCategory;