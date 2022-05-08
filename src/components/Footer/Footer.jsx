import './Footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer__about">
          <p>О GETPET</p>
          <ul>
            <li>
              <a href="/">О GETPET</a>
            </li>
            <li>
              <a href="/">Принципы GETPET</a>
            </li>
            <li>
              <a href="/">Партнерские отношения</a>
            </li>
            <li>
              <a href="/">Условия обслуживания</a>
            </li>
            <li>
              <a href="/">Для разработчиков</a>
            </li>
          </ul>
        </div>
        <div className="footer__adoption">
          <p>О ПРИНЯТИИ ДОМАШНИХ ЖИВОТНЫХ </p>
          <ul>
            <li>
              <a href="/">О принятии собак</a>
            </li>
            <li>
              <a href="/">О принятии кошек</a>
            </li>
            <li>
              <a href="/">Поиск Организаций По Усыновлению</a>
            </li>
            <li>
              <a href="/">Счастливые истории домашних животных</a>
            </li>
          </ul>
        </div>
        <div className="footer__care">
          <p>ТЕМЫ ПО УХОДУ ЗА ДОМАШНИМИ ЖИВОТНЫМИ</p>
          <ul>
            <li>
              <a href="/">Уход за собаками</a>
            </li>
            <li>
              <a href="/">Уход за кошками</a>
            </li>
            <li>
              <a href="/">Уход за другими животными</a>
            </li>
            <li>
              <a href="/">Животные нуждающиеся в помощи</a>
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
