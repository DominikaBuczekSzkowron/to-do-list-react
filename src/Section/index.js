import { Sections, BodyDiv, HeaderContent } from "./styled";
const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <BodyDiv>
      <HeaderContent>{title}</HeaderContent>
      {extraHeaderContent}
    </BodyDiv>
    {body}
  </Sections>
);
export default Section;
