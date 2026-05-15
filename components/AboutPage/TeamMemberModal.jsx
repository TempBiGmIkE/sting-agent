import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalImageSection,
  ModalInfo,
  ModalName,
  ModalRole,
  ModalBio,
  ModalSection,
  ModalSectionTitle,
  ModalWorksList,
  ModalWorkItem,
  ModalLinksContainer,
  ModalLink,
  ModalDownloadLink,
} from './styles';

const TeamMemberModal = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>

        <ModalHeader>
          <ModalImageSection>
            <img src={member.image} alt={member.name} />
          </ModalImageSection>

          <ModalInfo>
            <ModalName>{member.name}</ModalName>
            <ModalRole>{member.role}</ModalRole>
            {member.bio && <ModalBio>{member.bio}</ModalBio>}
          </ModalInfo>
        </ModalHeader>

        {member.recentWorks && member.recentWorks.length > 0 && (
          <ModalSection>
            <ModalSectionTitle>Recent Works</ModalSectionTitle>
            <ModalWorksList>
              {member.recentWorks.map((work, index) => (
                <ModalWorkItem key={index}>{work}</ModalWorkItem>
              ))}
            </ModalWorksList>
          </ModalSection>
        )}

        <ModalSection>
          <ModalSectionTitle>Links & Resources</ModalSectionTitle>
          <ModalLinksContainer>
            {member.portfolio && (
              <ModalLink
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </ModalLink>
            )}
            {member.resume && (
              <ModalDownloadLink
                href={member.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </ModalDownloadLink>
            )}
            {member.socialLinks && (
              <>
                {member.socialLinks.instagram && (
                  <ModalLink
                    href={member.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </ModalLink>
                )}
                {member.socialLinks.twitter && (
                  <ModalLink
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </ModalLink>
                )}
                {member.socialLinks.linkedin && (
                  <ModalLink
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </ModalLink>
                )}
                {member.socialLinks.dribbble && (
                  <ModalLink
                    href={member.socialLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </ModalLink>
                )}
                {member.socialLinks.behance && (
                  <ModalLink
                    href={member.socialLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </ModalLink>
                )}
                {member.socialLinks.github && (
                  <ModalLink
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </ModalLink>
                )}
                {member.socialLinks.vimeo && (
                  <ModalLink
                    href={member.socialLinks.vimeo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vimeo
                  </ModalLink>
                )}
                {member.socialLinks.soundcloud && (
                  <ModalLink
                    href={member.socialLinks.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SoundCloud
                  </ModalLink>
                )}
                {member.socialLinks.youtube && (
                  <ModalLink
                    href={member.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </ModalLink>
                )}
                {member.socialLinks.artstation && (
                  <ModalLink
                    href={member.socialLinks.artstation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ArtStation
                  </ModalLink>
                )}
                {member.socialLinks.pinterest && (
                  <ModalLink
                    href={member.socialLinks.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pinterest
                  </ModalLink>
                )}
              </>
            )}
          </ModalLinksContainer>
        </ModalSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default TeamMemberModal;
