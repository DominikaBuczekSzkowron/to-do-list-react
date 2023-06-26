import { Sections, Header, Title } from "./styled";
const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </Sections>
);
export default Section;
