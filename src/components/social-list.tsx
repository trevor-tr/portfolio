import { GITHUB_LINK } from "@/const";

const SocialList = () => {
  return (
    <div className="container mx-auto grid">
      <p>My socials:</p>
      <ul>
        <li>
          <a href={GITHUB_LINK}>GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
