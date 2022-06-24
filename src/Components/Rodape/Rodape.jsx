import React from "react";
import Facebook from "../../img/facebook.png"
import Gmail from "../../img/gmail.png"
import Twitter from "../../img/twitter.png"
import Linkedin from "../../img/linkedIn.png"
import Logo from "../../img/logo.png";
import Instagram from "../../img/instagram.png"
import { Container, Box, ImgLogo, PRedes, PCorp, RedesSociais } from "./Style";

export default class Rodape extends React.Component {

    voltarParaOTopo = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container>
                <Box>
                    <ImgLogo onClick={this.voltarParaOTopo} src={Logo} alt="To Mars" />
                    <PRedes>Redes Sociais</PRedes>
                    <div>
                        <a href="https://facebook.com" rel="noopener noreferrer" target="_blank"><RedesSociais src={Facebook} alt="Facebook" /></a>
                        <a href="https://instagram.com" rel="noopener noreferrer" target="_blank"><RedesSociais src={Instagram} alt="Instagram" /></a>
                        <a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><RedesSociais src={Twitter} alt="Twitter" /></a>
                        <a href="https://gmail.com" rel="noopener noreferrer" target="_blank"><RedesSociais src={Gmail} alt="Gmail" /></a>
                        <a href="https://Linkedin.com" rel="noopener noreferrer" target="_blank"><RedesSociais src={Linkedin} alt="Linkedin" /></a>
                    </div>
                    <PCorp>TM AND © 1981 - 1988 TOMARS LTD</PCorp>
                </Box>
            </Container>
        )
    }
}