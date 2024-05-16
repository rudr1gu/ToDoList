import { Container } from "react-bootstrap";
import { FooterContainer } from "../../styles/Footer/Footer.style";

const Footer = ()=>{
    return(
<>
<FooterContainer>
    <Container>
    <div className="d-flex flex-column justify-content-center align-items-center">
        <p>Rudr1gu</p>
    </div>
    </Container>
</FooterContainer>

</>
    )
}

export default Footer;