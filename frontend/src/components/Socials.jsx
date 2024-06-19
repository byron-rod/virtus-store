import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiTiktokFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    id: 1,
    icon: <RiYoutubeFill className="socials" color="rgba(39, 50, 115, 1" />,
    url: "https://www.youtube.com/",
  },
  {
    id: 2,
    icon: <RiLinkedinFill className="socials" color="rgba(39, 50, 115, 1" />,
    url: "https://www.linkedin.com/",
  },
  {
    id: 3,
    icon: <RiFacebookFill className="socials" color="rgba(39, 50, 115, 1" />,
    url: "https://www.facebook.com/",
  },
  {
    id: 4,
    icon: <RiTiktokFill className="socials" color="rgba(39, 50, 115, 1" />,
    url: "https://www.tiktok.com/",
  },
  {
    id: 5,
    icon: <RiInstagramFill className="socials" color="rgba(39, 50, 115, 1" />,
    url: "https://www.instagram.com/",
  },
];

function Socials() {
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        {icons.map((item) => (
          <a
            className="socials text-[30px] hover:text-fourth transition-colors duration-300 ease-in-out cursor-pointer"
            key={item.id}
            href={icons.url}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
