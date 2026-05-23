import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WorkWithUsButton = styled.button`
  background: ${props => props.theme.colors?.red || '#EA281E'};
  color: white;
  border: 2px solid ${props => props.theme.colors?.red || '#EA281E'};
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: 'Presicav', sans-serif;

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors?.red || '#EA281E'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
`;

export const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 48px;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: ${props => props.theme.colors?.red || '#EA281E'};
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 48px;
`;

export const ModalTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: 'Presicav', sans-serif;
  margin: 0 0 12px;
  color: ${props => props.theme.colors?.red || '#EA281E'};
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ModalSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 2px solid #eee;
  overflow-x: auto;
  padding-bottom: 0;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const Tab = styled.button`
  background: none;
  border: none;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: ${props => (props.active ? props.theme.colors?.red || '#EA281E' : '#999')};
  border-bottom: 3px solid ${props => (props.active ? props.theme.colors?.red || '#EA281E' : 'transparent')};
  transition: all 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: 'Presicav', sans-serif;

  &:hover {
    color: ${props => props.theme.colors?.red || '#EA281E'};
  }
`;

export const TabContent = styled(motion.div)`
  min-height: 300px;
`;

export const Section = styled.div`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Presicav', sans-serif;
  margin: 0 0 16px;
  color: ${props => props.theme.colors?.red || '#EA281E'};
  letter-spacing: -0.02em;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin: 0 0 16px;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 24px;
  background: #f9f9f9;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors?.red || '#EA281E'};
    box-shadow: 0 8px 24px rgba(234, 40, 30, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #222;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
`;

export const ListItem = styled.li`
  font-size: 15px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;

  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors?.red || '#EA281E'};
    font-weight: bold;
  }
`;

export const Milestone = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  border-left: 3px solid ${props => props.theme.colors?.red || '#EA281E'};
  background: rgba(234, 40, 30, 0.05);
`;

export const MilestoneIcon = styled.div`
  font-size: 24px;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors?.red || '#EA281E'};
  font-weight: bold;
`;

export const MilestoneContent = styled.div``;

export const MilestoneTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px;
  color: #222;
`;

export const MilestoneDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

export const ManifestoBlock = styled.blockquote`
  border-left: 4px solid ${props => props.theme.colors?.red || '#EA281E'};
  padding: 24px;
  margin: 24px 0;
  background: rgba(234, 40, 30, 0.08);
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  font-style: italic;

  p {
    margin: 12px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
