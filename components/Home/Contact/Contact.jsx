import React, { useState } from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { WorkWithUsButton, WorkWithUsModal } from '../../WorkWithUs';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AnimateOnScreen>
        <ContactSection>
    <WorkWithUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <div className="column">
            <a
              className="contact-text"
              href="tel:+234.905.841.4196"
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              +234.905.841.4196
            </a>
            <br />
            <a
              className="contact-text"
              href="mailto:mgmt@thestinginc.com"
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              mgmt@thestinginc.com
            </a>
          </div>
          <address className="column contact-text">
            We have remote Studio Offices In Lagos
            <br />
            And globally around the Diaspora
          </address>
          <SocialMedia className="column" />
        </ContactSection>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <div style={{ textAlign: 'center', padding: '60px 32px' }}>
          <WorkWithUsButton onClick={() => setIsModalOpen(true)} />
        </div>
      </AnimateOnScreen>

    </>
  );
};

export default React.memo(Contact);
