import React from 'react';
import { Link } from 'react-router-dom';
import { FaSteam, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RAWG Xyms</h3>
          <p>O melhor catálogo de jogos inspirado no visual da Steam.</p>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/xymsko" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Steam"><FaSteam /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Jogos Populares</Link></li>
            <li><Link to="/">Lançamentos</Link></li>
            <li><Link to="/">Próximos Jogos</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Informações</h4>
          <ul>
            <li><Link to="/">Sobre Nós</Link></li>
            <li><Link to="/">Termos de Serviço</Link></li>
            <li><Link to="/">Política de Privacidade</Link></li>
            <li><Link to="/">Contato</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RAWG Xyms. Todos os direitos reservados.</p>
        <p>Dados fornecidos pela RAWG API</p>
      </div>
    </footer>
  );
};

export default Footer;
