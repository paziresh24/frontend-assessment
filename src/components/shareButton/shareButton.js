import { ShareIcon } from "../icons";

export const ShareButton = ({ fullName, url }) => {
  const handleShare = () => {
    // Complete the code here
  };

  return (
    <button className="flex items-center gap-1" onClick={handleShare}>
      <ShareIcon />
      <span className="text-sm font-medium">Share</span>
    </button>
  );
};

export default ShareButton;
