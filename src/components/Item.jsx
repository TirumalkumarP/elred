import React from 'react'
import { DashboardRounded } from '@mui/icons-material'
// import { motion } from 'framer-motion'
import './item.css'
function Item(props) {
    return (
        <div className='item'>
            
            <div className='icon'>
                {props.icon}
            </div>
            <span>
                {props.name}
            </span>
        </div>
    )
}

export default Item