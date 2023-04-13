import React from 'react'
import { BarChartRounded, DashboardRounded } from '@mui/icons-material';
import { default as GroupIcon } from '@mui/icons-material/Group'
import HandshakeIcon from '@mui/icons-material/Handshake';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import PaymentsIcon from '@mui/icons-material/Payments';
import HelpIcon from '@mui/icons-material/Help';
import Item from './Item'
function SideMenu() {
    return (
        <div>
            <div className='sidebar-container'>
                <div className='sidebar'>
                    <div className='profile'>
                        {/* <img src="https://images.freeimages.com/images/large-previews/7be/vector-4-1147260.jpg" alt='profile-img'></img> */}
                        <img src="https://cdn.pixabay.com/photo/2013/07/12/16/01/alphabet-150764_960_720.png" alt='profile-img'></img>
                    </div>
                    <div className='groups'>
                        <div className='group'>
                            <Item icon={<DashboardRounded />} name='Dashboard' />
                            <Item icon={<BarChartRounded />} name='Orders' />
                        </div>
                        <div className='group'>
                            <Item icon={<GroupIcon />} name='Team Members' />
                            <Item icon={<HandshakeIcon />} name='Partners' />
                        </div>
                        <div className='group'>
                            <Item icon={<AssignmentIcon />} name='Product Listing' />
                            <Item icon={<EmojiEventsIcon />} name='Awards & Honours' />
                        </div>
                        <div className='group'>
                            <Item icon={<InfoIcon />} name='About Us' />
                            <Item icon={<PaymentsIcon />} name='Payment Info' />
                        </div>
                    </div>
                    <div className='need-help'>
                        <div><HelpIcon /></div>
                        <h5> Need Help ?</h5>
                        <h6>Our support team is at your disposal</h6> 
                        <button type='button' >Get Help</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideMenu