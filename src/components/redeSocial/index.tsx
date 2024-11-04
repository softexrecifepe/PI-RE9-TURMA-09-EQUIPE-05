import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Social() {
  return (
    <div className='boxSocial'>
      <h1 className='text-2xl font-bold text-corSecundaria'>Social</h1>
      <div className='social'>
        <i className='fa-brands fa-square-facebook'>
          <FaFacebookSquare />
        </i>
        <i className='fa-brands fa-linkedin'>
          <FaLinkedin />
        </i>
        <i className='fa-solid fa-square-envelope'>
          <FaEnvelope />
        </i>
        <i className='fa-brands fa-square-whatsapp'>
          <FaWhatsappSquare />
        </i>
      </div>
    </div>
  );
}
