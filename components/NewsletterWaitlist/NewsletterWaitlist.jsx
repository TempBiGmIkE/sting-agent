import React from 'react';
import {
  CloseButton,
  Dialog,
  Eyebrow,
  Form,
  Input,
  JoinButton,
  Overlay,
  PerkList,
  SignupMessage,
  SignupText,
  Title,
} from './styles';

const storageKey = '@StingInc:NewsletterWaitlistShown';

const NewsletterWaitlist = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [signupMessage, setSignupMessage] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 120 || window.localStorage.getItem(storageKey)) {
        return;
      }

      window.localStorage.setItem(storageKey, 'true');
      setIsOpen(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = event => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = event => {
    event.preventDefault();
    const subject = encodeURIComponent('Join the Sting Inc newsletter');
    const body = encodeURIComponent(
      `Please add ${email} to the newsletter list.`,
    );
    window.location.href = `mailto:mgmt@thestinginc.com?subject=${subject}&body=${body}`;
    setSignupMessage(
      'Your email app should open with a signup request. Send the message to finish joining.',
    );
  };

  if (!isOpen) return null;

  return (
    <Overlay
      role="presentation"
      onMouseDown={event => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        aria-describedby="newsletter-description"
      >
        <CloseButton
          type="button"
          aria-label="Close newsletter signup"
          onClick={() => setIsOpen(false)}
        >
          ×
        </CloseButton>
        <Eyebrow>THE STING LIST / MEMBERS GET MORE</Eyebrow>
        <Title id="newsletter-title">
          Get closer
          <br />
          to the culture.
        </Title>
        <SignupText id="newsletter-description">
          The good stuff, before everybody else hears about it.
        </SignupText>
        <PerkList>
          <li>Culture reports &amp; industry insight</li>
          <li>New drops, store coupons &amp; event tickets</li>
          <li>Member perks, giveaways &amp; more</li>
        </PerkList>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email">Your email</label>
          <div>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
            <JoinButton type="submit">Count me in ↗</JoinButton>
          </div>
        </Form>
        {signupMessage && (
          <SignupMessage role="status">{signupMessage}</SignupMessage>
        )}
        <p className="privacy-note">No noise. Unsubscribe whenever.</p>
      </Dialog>
    </Overlay>
  );
};

export default NewsletterWaitlist;
