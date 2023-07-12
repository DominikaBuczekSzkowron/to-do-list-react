import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { DetailWrapper } from "../styled";

export default () => (
  <Container className="container">
    <Header title="O autorze" />

    <Section
      title="Dominika Buczek-Szkowron"
      body={
        <>
          <DetailWrapper>
            <p>
              <strong>O mnie</strong>
            </p>
            <p>
              Cześć! Z zawodu budowlaniec, szczęśliwa żona, mama trójki dzieci.
            </p>
            <p>
              <strong>Zainteresowania</strong>
            </p>
            <p>
              Architektura wnętrz, dobra książka, nauka języków obcych, gra na
              pianinie, psychologia, rowzwój dzieci, wycieczki górskie.
            </p>
          </DetailWrapper>
        </>
      }
    ></Section>
  </Container>
);
