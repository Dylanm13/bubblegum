import React from 'react'

import './club.css'

import photo from '../../assets/logo_masterclasses.png'
import photo2 from '../../assets/logo_writer.png'
import photo3 from '../../assets/logo_discord.png'
import photo4 from '../../assets/logo_sponsorship.png'
import photo5 from '../../assets/logo_discount.png'
import photo6 from '../../assets/logo_event.png'
import logo from '../../assets/BBG_COLOR.png'

const Club = () => {
  return (
    <div className='bgs__club'>
      <div className='bgs__club-container'>
          <div className='bgs__club-container_banner'>
              <div className='bgs__club-container__image'>
                <img src={logo} alt='logo' className='img__logo'/>
              </div>
          </div>
        <h1>Welcome to Bubblegum Club, where music enthusiasts and aspiring artists come together to ignite their creativity and propel their careers to new heights. Our club offers a range of exceptional services that cater to every aspect of the music industry.</h1>
        <div className='bgs__club-container_text'>
            <div className='bgs__club-container_text--infos'>
                <div className='bgs__club-container_text--infos_titles'>
                    <img src={photo} alt='logo'/>
                    <h2>Masterclasses</h2>
                </div>
                <div className='bgs__club-container_text--infos_advantages'>
                    <p>We are going to organise masterclasses <strong>from 1 to 4 times a month</strong> where you will have the opportunity to learn from Jalal or other industry professionals on various topics related to the creative or business side of the industry. (Online and on location)</p>
                </div>
            </div>
            <div className='bgs__club-container_text--infos'>
                <div className='bgs__club-container_text--infos_titles'>
                    <img src={photo4} alt='logo'/>
                    <h2>Sponsorships</h2>
                </div>
                <div className='bgs__club-container_text--infos_advantages'>
                    <p>Being a member of the Bubblegum Club will allow you to sponsor your friends. If one of your friends books a session with us and says that it is thanks to you that he is here. You will <strong>get a 50€ discount on your next session</strong>.</p>
                </div>
            </div>
            <div className='bgs__club-container_text--infos'>
                <div className='bgs__club-container_text--infos_titles'>
                    <img src={photo2} alt='logo'/>
                    <h2>Writer’s Camps</h2>
                </div>
                <div className='bgs__club-container_text--infos_advantages'>
                    <p>If you are a songwriter, you will be thrilled to join our writer’s camps where you will <strong>learn more about songwriting with professionals</strong>. (Will occur once per trimester)</p>
                </div>
            </div>
            <div className='bgs__club-container_text--infos'>
                <div className='bgs__club-container_text--infos_titles'>
                    <img src={photo5} alt='logo'/>
                    <h2>Discounts</h2>
                </div>
                <div className='bgs__club-container_text--infos_advantages'>
                    <p>Joining the Club will give you a <strong>10% discount</strong> on all your future bookings at the studio.</p>
                </div>
            </div>
            <div className='bgs__club-container_text--infos'>
                <div className='bgs__club-container_text--infos_titles'>
                    <img src={photo3} alt='logo'/>
                    <h2>Discord Server</h2>
                </div>
                <div className='bgs__club-container_text--infos_advantages'>
                    <p>With our Discord server you will be able <strong>to stay in touch with the Club</strong>. Hop on a call or chat with other members about the next event, get feedback on your songs, pitch your ideas, network etc…</p>
                </div>
            </div>
            <div className='bgs__club-container_text--infos'>
                <div className='bgs__club-container_text--infos_titles'>
                    <img src={photo6} alt='logo'/>
                    <h2>Events</h2>
                </div>
                <div className='bgs__club-container_text--infos_advantages'>
                    <p>Once a week we are going to organise events with all club members where you will be able to <strong>access all studios for 3 hours</strong>, network with other artists, get feedback on your songs and enjoy our free drinks.</p>
                </div>
            </div>
        </div>
        <div className='bgs__club-container_top'>
            <button className='button_gradient'><a href='https://docs.google.com/forms/d/e/1FAIpQLSc3p3sqwzwZDoA4ymcy7EagHj7dkx2DZHhrVA-Z1DD3drx8AA/viewform' target='_blank' rel="noreferrer noopener">APPLY NOW</a></button>
        </div>
        <div className='bgs__club-container_footer'>
            <p>Important Notice: Please be informed that in order to become a member of the Club, there is a <strong>requirement to settle the Club's annual fees, amounting to 100€</strong>. Additionally, to proceed with your Club Application, kindly click on the "APPLY" button.</p>
        </div>
      </div>
    </div>
  )
}

export default Club
