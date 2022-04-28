import React from 'react'
import { Layout } from 'antd';
import { FacebookOutlined, WhatsAppOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './foot.css'

const { Footer } = Layout;

const Foot = () => {
  return (
    <Footer className='footer__main'>
      <div className='flex__footer'>
        <Link className='logo__footer' to='/'>
          <p>
            Gʌming<span>SHOP</span>
          </p>
        </Link>
        <div className='flex__icons--footer'>
          <FacebookOutlined  className='icon__footer'/>
          <WhatsAppOutlined  className='icon__footer'/>
          <LinkedinOutlined className='icon__footer'/>
        </div>
      </div>
      <div className='footer__copyright'>© Copyright 2021</div> 
    </Footer>
  )
}

export default Foot