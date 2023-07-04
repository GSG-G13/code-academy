import { useState, useEffect } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { styled } from 'styled-components';

const Scroll = styled('div')`
  position: fixed;
  right: 25px;
  bottom: 50px;
  height: 52px;
  width: 52px;
  font-size: larger;
  color: aliceblue;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  z-index: 1203;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background: #277cf3;
  }
`;

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showScroll && (
        <Scroll onClick={handleScrollTop}>
          <BsChevronUp />
        </Scroll>
      )}
    </div>
  );
};

export default ScrollUp;
