import React from 'react';

import './photo.scss';
import { UserProfile } from '@sportnetwork/shared-contracts';

export interface PhotoProps {
  profile: UserProfile;
}

export const Photo = (props: PhotoProps) => {
  return (
    <div>
      <img src={props.profile.photoUrl} alt={props.profile.firstName} className='image'></img>
    </div>
  );
};

export default Photo;
