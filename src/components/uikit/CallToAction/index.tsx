import { styled } from 'styled-components';
import { IoHelpBuoyOutline } from 'react-icons/io5';

const CallToAction = () => (
  <CTAContainer>
    <Layer>
      <ContentContainer>
        <CTATitle>We are all close together, be toxic</CTATitle>
        <CTADescription>
          A problem, a question, an emergency?
          <br />
          Do not hesitate to visit the help centre, we can help you
        </CTADescription>
        <HelpCenterButton>
          <IoHelpBuoyOutline />
          Help center
        </HelpCenterButton>
      </ContentContainer>
    </Layer>
  </CTAContainer>
);

const Layer = styled.div`
  background-color: rgba(78, 100, 221, 0.9);
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  align-items: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const CTADescription = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
`;

const CTAContainer = styled.div`
  background: url('https://intranet.cera-theme.com/wp-content/uploads/sites/2/2019/10/timj-6BVinN0Y7Xk-unsplash-1850x550.jpg')
    no-repeat center center;
  background-size: cover;
  width: 100%;
`;

const CTATitle = styled.h3`
  color: #fff;
  font-size: 34.4px;
  font-weight: 600;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  z-index: 1;
`;

const HelpCenterButton = styled.a`
  display: flex;
  gap: 2px;
  width: 105px;
  height: 20px;
  padding: 12.8px 20px;
  border: 1.6px solid #fefefe;
  font-weight: 600;
  font-size: 15px;
  background-color: #fefefe;
  color: #4e64dd;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  margin: 16px auto auto;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;

  &:hover {
    background-color: #4e64dd;
    color: #fefefe;
    border: 1.6px solid #3f50b1;
  }
`;

export default CallToAction;
