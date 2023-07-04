import { IoHelpBuoyOutline } from 'react-icons/io5';
import {
  Layer,
  ContentContainer,
  CTADescription,
  CTAContainer,
  CTATitle,
  HelpCenterButton,
} from './index.style';

const CallToAction = () => (
  <CTAContainer>
    <Layer>
      <ContentContainer>
        <CTATitle>We are all close together</CTATitle>
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

export default CallToAction;
