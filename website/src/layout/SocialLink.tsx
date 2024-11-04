import { SocialProfile } from "../types/navLink";

interface SocialLinkProps {
  profile: SocialProfile;
}

const SocialLink = ({ profile }: SocialLinkProps) => {
  const iconClasses = {
    LinkedIn: "fab fa-linkedin",
    X: "fab fa-x-twitter",
    GitHub: "fab fa-github",
    Facebook: "fab fa-facebook-square",
    Steam: "fab fa-steam",
    Reddit: "fab fa-reddit",
    Discord: "fab fa-discord",
  };

  return (
    <button
      type="button"
      onClick={() => window.open(profile.url, "_blank")}
      className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
    >
      <i className={iconClasses[profile.network] || "fas fa-globe"}></i>
    </button>
  );
};

export default SocialLink;
