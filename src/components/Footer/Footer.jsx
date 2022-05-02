import './Footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer__about">
          <p>ABOUT PETFINDER</p>
          <ul>
            <li>
              <a href="/">About Petfinder</a>
            </li>
            <li>
              <a href="/">Partnerships</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Petfinder Foundation</a>
            </li>
            <li>
              <a href="/">For Developers</a>
            </li>
          </ul>
        </div>
        <div className="footer__adoption">
          <p>PET ADOPTION</p>
          <ul>
            <li>
              <a href="/">Dog Adoption</a>
            </li>
            <li>
              <a href="/">Cat Adoption</a>
            </li>
            <li>
              <a href="/">Search Adoption Organizations</a>
            </li>
            <li>
              <a href="/">Happy Tails Pet Adoption Stories</a>
            </li>
          </ul>
        </div>
        <div className="footer__care">
          <p>PET CARE TOPICS</p>
          <ul>
            <li>
              <a href="/">Dog Care</a>
            </li>
            <li>
              <a href="/">Cat Care</a>
            </li>
            <li>
              <a href="/">All Pet Care</a>
            </li>
            <li>
              <a href="/">Helping Pets</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <ul>
            <li>
              <a href="/">
                <img src="/icons/social/telegram.png" alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/icons/social/instagram.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/icons/social/youtube.png" alt="youtube" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/icons/social/vk.png" alt="vk" />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="/icons/social/odnoklassniki.png"
                  alt="odnoklassniki"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
