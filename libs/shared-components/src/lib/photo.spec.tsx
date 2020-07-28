import React from 'react';
import { render } from '@testing-library/react';

import Photo from './photo';
import { UserProfile } from '@sportnetwork/shared-contracts';

describe(' Photo', () => {
  it('should render successfully', () => {
    const profile = {firstName: 'Roman', lastName: 'Protyk', photoUrl: ''} as UserProfile;
    const { baseElement } = render(<Photo profile={profile} />);
    expect(baseElement).toBeTruthy();
  });
});
