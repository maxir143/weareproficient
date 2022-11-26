export default function Footer() {
  const FooterData = {
    social: [
      {
        alt: 'twitter',
        src: '/icons/twitter.png'
      },
      {
        alt: 'facebook',
        src: '/icons/facebook.png'
      },
      {
        alt: 'instagram',
        src: '/icons/instagram.png'
      }
    ],
    columns : [
      {
        title: 'About Us',
        rows: [
          'About',
          'Privacy & Policy',
          'Terms & Conditions',
          'Faq'
        ]
      },
      {
        title: 'Navigate',
        rows: [
          'How We Work',
          'Services',
          'Faq',
          'Contact',
          'Free Quote'
        ]
      },
      {
        title: 'Contact Us',
        rows: [
          'Ricardo Margain 444',
          'Call: +52 81 1234 5678',
          'Email: info@challenge.com'
        ],
        img:{
          src: '/icons/whatsapp-logo.png',
          alt: 'whatsapp'
        }
      }
    ]
  }
  return(
    <div className='footer'>
      <div className='footer-col'>
        <img src='/icons/cil_house.png' alt='house' />
        <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
        <div className='social-container'>
        { FooterData.social.map(({src, alt}, index)=> (
          <div key={index} className='social-item'>
            <img src={src} alt={alt} />
            <img src='/icons/circle.png' alt={alt}/>
          </div>
        ))}
        </div>
      </div>
      {
        FooterData.columns.map(({title, rows, img}, index)=>(
          <div key={index} className='footer-col'>
            <h3>{title}</h3>
            <ul>
            { rows.map((text, index)=><li key={index}>{text}</li>) }
            </ul>
            {img ? <img src={img.src} alt={img.alt} /> : null}
          </div>
        ))
      }
    </div>
  )
}