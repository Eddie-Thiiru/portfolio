const Footer = () => {
  <footer>
    <div className="footerOne">
      <div className="emailWrapper">
        <h2>
          Let&rsquo;s
          <br />
          Connect
        </h2>
        <p>eddiewachaga6@gmail.com</p>
      </div>
      <div className="formWrapper">
        <form>
          <label>
            Your name:
            <input type="text" />
          </label>
          <label>
            Your email address:
            <input type="email" />
          </label>
          <label>
            Your message:
            <input type="text" />
          </label>
          <button type="submit" className="msgBtn">
            Send
          </button>
        </form>
      </div>
    </div>
    <div className="footerTwo">
      <nav className="socialLinks">
        <a>
          <img src="" alt="" />
        </a>
        <a>
          <img src="" alt="" />
        </a>
        <a>
          <img src="" alt="" />
        </a>
      </nav>
      <p>copyright</p>
    </div>
  </footer>;
};

export default Footer;
