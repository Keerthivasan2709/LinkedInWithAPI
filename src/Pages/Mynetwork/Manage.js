import React from 'react'
import { manage_my_network_list } from '../../Assets/Link'
import Ads from '../../Components/Ads/Ads'
import CardList from '../../Components/CardList'
import PersonalContact from './PersonalContact'

function Manage() {
    return (
        <div className='sm-hide card mt-2 makeSticky'>
            <p className='smallHeading mt-1 mb-1 list'>Manage my network</p>
            <CardList list={manage_my_network_list} />
            <div className='hr mt-1 mb-1'></div>
            <div>
                <PersonalContact />
            </div>
        </div >
    )
}

export default Manage