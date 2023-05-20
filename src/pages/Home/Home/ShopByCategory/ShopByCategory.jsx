import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleShopByCagory from './SingleShopByCagory';
const ShopByCategory = () => {
    const [categories, setCategories] = useState('Remote Control');
    const [subCategories, setsubCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/shopByCategory/${categories}`)
            .then(res => res.json())
            .then(data => {
                setsubCategories(data)
            })
    }, [])
    console.log(subCategories)
    return (
        <Tabs>
            <TabList>
                <Tab onClick={() => setCategories("Remote Control")}>Remote Control</Tab>
                <Tab onClick={() => setCategories("Remote Control")}>Remote Control</Tab>
                <Tab onClick={() => setCategories("Remote Control")}>Remote Control</Tab>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                    {
                        subCategories.map(subCategory => <SingleShopByCagory
                            key={subCategory._id}
                            subCategory={subCategory}
                        ></SingleShopByCagory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                    {
                        subCategories.map(subCategory => <SingleShopByCagory
                            key={subCategory._id}
                            subCategory={subCategory}
                        ></SingleShopByCagory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                    {
                        subCategories.map(subCategory => <SingleShopByCagory
                            key={subCategory._id}
                            subCategory={subCategory}
                        ></SingleShopByCagory>)
                    }
                </div>
            </TabPanel>

        </Tabs>
    );
};

export default ShopByCategory;