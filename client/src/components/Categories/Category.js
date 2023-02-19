import { Paper } from '@mui/material';
import React from 'react'
import { categoryData } from '../../Data'
import Categories from './Categories'
import './Category.css'
function Category() {
  return (
    <Paper elevation={4} className='category-container'>
      {categoryData.map((data,index) => (
        <Categories img={data.img} title={data.title} id={data.id} key={data.id} cat={data.cat} />
      ))}
    </Paper>
  );
}

export default Category