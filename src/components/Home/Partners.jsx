import React from 'react'
import PartnerProfile from './PartnerProfile'
import { partnerProfiles } from '../../utils/partnerProfiles';

export default function Partners() {
    const profiles = partnerProfiles;
    
  return (
    <div className='bg-white p-14 grid grid-cols-1 gap-14'>
      <h1 className='text-center text-3xl font-semibold'>Our Partners</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            profiles.map((profile, idx)=> (
                <PartnerProfile key={idx}
                                image={profile.image}
                                name={profile.name}
                                description={profile.description}
                />
            ))
        }
      </div>
    </div>
  )
}
