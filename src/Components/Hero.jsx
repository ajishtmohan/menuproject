import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex h-screen items-center gap-12">
      <div className="block w-full">
        <p className="uppercase">Doctor led ayurveda</p>
        <h1>
          <span>Real Healing.</span>
          <br />
          <span>Rooted in you.</span>
        </h1>
        <p>
          Personalised diagnosis and treatments for skin, stress, sleep, and
          chronic conditions.
        </p>
        <p>Beyond relaxation. Focused on lasting healing.</p>
        <div className="flex gap-6">
          <Link
            to="./consultation"
            className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-white"
          >
            <span>
              <FaCalendarAlt />
            </span>
            <span>Book Consultation</span>
          </Link>
          <Link
            to="https://wa.me/+919459453936"
            className="flex items-center gap-2 rounded-lg border-2 border-red-500 bg-white px-6 py-3"
          >
            <FaWhatsapp />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>
      </div>
      <div className="block w-full overflow-hidden rounded-2xl bg-red-300">
        <img src="../../public/img/consultation.webp" />
      </div>
    </div>
  );
}

export default Hero;
