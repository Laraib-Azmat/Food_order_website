import React from 'react';
import appStyle from './AppDownload.module.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className={appStyle['app-download']} id='app-download'>
        <p>For Better Experience Download <br/> <span style={{color:'#8a2b06',fontWeight:600}}>OrdFoo. App</span></p>

        <div className={appStyle['app-platform']}>

            <img src={assets.play_store} alt='play-store' />
            <img src={assets.app_store} alt='app-store' />

        </div>
        
    </div>
  )
}

export default AppDownload