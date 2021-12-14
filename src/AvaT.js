import React from 'react'
import "./avaT.css"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const AvaT = () => {
    return (
        <>
          <div className='Avatar_con'>
          <div>
            <h3>Daily Scrum Meeting</h3>
            <h4>Date:22/08/2020</h4>
            <p className='line_p'>Daily Stand up for Aled team working on 1project </p>
            <br />
            <hr />
            <br/>
            <div className='profile-con'>
                
              <div className='profile_first'>
              <p className='Avatar_tittle'>Owener</p> 
                 <Avatar className='Avatar' src="/broken-image.jpg" />
              </div>
              <div className='profile_first'>
              <p className='Avatar_tittle'>Watcher</p> 
              <AvatarGroup max={3}>
                        <Avatar alt="Remy Sharp" src="https://cutewallpaper.org/21/hd-profile-pic/WhatsApp-DP-and-Profile-Pictures-365-BEST-and-LATEST-HD-Pics.jpg" />
                         <Avatar alt="Travis Howard" src="https://dp.profilepics.in/profile_pictures/stylish-girl-pic-hiding-face-2019/stylish-girl-pic-hiding-face-2019-05.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
              </div>
              <div className='profile_first'>
              <p className='Avatar_tittle'>Participants</p> 
              <AvatarGroup total={15}>
                  <Avatar alt="Remy Sharp" src="https://cutewallpaper.org/21/hd-profile-pictures/Check-Profile-For-More-Fb-Profile-Pic-For-Boys-Hd-Hd-.jpg" />
                   <Avatar alt="Travis Howard" src="https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/10/Cute-Girl-Dp-Images-Pictures-110.jpg?fit=503%2C599&ssl=1" />
                   <Avatar alt="Agnes Walker" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  <Avatar alt="Agnes Walker" src="https://www.trickscity.com/wp-content/uploads/2017/05/cool-facebook-profile-pictures-for-boy-hd.jpg" />
              </AvatarGroup>
              </div>
              </div>
          </div>
          <br/>
          <hr/>
          <div className='Meeting_hour'>
            <h3>Meeting Hour</h3>
             <h7>3 hr 20 min</h7>

          </div>
        </div>  
        </>
    )
}

export default AvaT
