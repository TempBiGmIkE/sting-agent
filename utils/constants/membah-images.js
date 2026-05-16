import teamGroups from './team-membahs';

const membahImages = teamGroups.flatMap(group =>
  group.members.map(m => ({ id: m.id, name: m.name, image: m.image })),
);

export default membahImages;
