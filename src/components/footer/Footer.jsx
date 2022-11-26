export default function Footer() {
  return(
    <div className="footer">
      <div className="footer-col">
        <img src="/icons/cil_house.png" alt="house" />
        <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
        <div className="social-container">
          <div className="social-item">
            <img src="/icons/twitter.png" alt="" />
            <img src="/icons/circle.png" alt="" />
          </div>
          <div className="social-item">
            <img src="/icons/facebook.png" alt="" />
            <img src="/icons/circle.png" alt="" />
          </div>
          <div className="social-item">
            <img src="/icons/instagram.png" alt="" />
            <img src="/icons/circle.png" alt="" />
          </div>
        </div>
      </div>

      <div className="footer-col">
        <h3>About Us</h3>
        <ul>
          <li>About</li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
          <li>Faq</li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Navigate</h3>
        <ul>
          <li>How We Work</li>
          <li>Services</li>
          <li>Faq</li>
          <li>Contact</li>
          <li>Free Quote</li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Contact Us</h3>
        <ul>
          <li>Ricardo Margain 444</li>
          <li>Call: +52 81 1234 5678</li>
          <li>Email: info@challenge.com</li>
          <img src="/icons/whatsapp-logo.png" alt="whatsapp" />
        </ul>
        
      </div>
    </div>
  )
}