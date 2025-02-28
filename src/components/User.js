import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from "@material-ui/icons/Mail"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="Daniel Kiyana naDan" width="150" />
      <h1 className="user__name">Daniel Kiyana</h1>
      <p className="user__profession">Développeur Web | Mobile | Desktop</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> Bujumbura | Burundi
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+25761146621">+25761146621</a>
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+243827518639">+243827518639</a>
        </p>
        <p className="user__info">
          <WhatsAppIcon /> <a href="tel:+243827518639">+243827518639</a>
        </p>
        <p className="user__info">
          <FacebookIcon /> <a href="https://www.facebook.com/daniel.kiyana.3" rel="noreferrer noopener" target="_blank">Daniel Kiyana NaDan</a>
        </p>
        <p className="user__info">
          <InstagramIcon /> <a href="https://www.instagram.com/daniel_kiyana_/" rel="noreferrer noopener" target="_blank">Daniel Kiyana Nadan</a>
        </p>
        <p className="user__info">
          <TwitterIcon /> <a href="https://twitter.com/nadan_kiyana" rel="noreferrer noopener" target="_blank">Daniel Kiyana naDan</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:danielkiyana512@gmail.com">danielkiyana512@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default User
