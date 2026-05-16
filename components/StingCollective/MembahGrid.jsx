import React from 'react';
import membahs from '../../utils/constants/membah-images';
import {
  MembahGridWrapper,
  MembahCard,
  MembahAvatar,
  MembahName,
  MembahCode,
} from './styles';

const MembahGrid = () => (
  <MembahGridWrapper>
    {membahs.map(m => (
      <MembahCard key={m.id}>
        <MembahAvatar src={m.image} alt={m.name} />
        <MembahName>{m.name}</MembahName>
        <MembahCode>{m.id}</MembahCode>
      </MembahCard>
    ))}
  </MembahGridWrapper>
);

export default React.memo(MembahGrid);
