import { ShareIcon } from "../../icons/icons";

export const ShareProfile = ({ profileUrl, name, expertise }) => {
  const doctorUrl = profileUrl;
  const shareTitle = `${name}, ${expertise}`;

  const shareUrlWithWebAPI = () => {
    if (navigator.share) {
      navigator.share({
        url: doctorUrl,
        title: shareTitle,
      });
    }
  };

  return (
    <button
      onClick={shareUrlWithWebAPI}
      className='cursor-pointer flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 hover:outline-gray-400'>
      <ShareIcon />
      <p>share</p>
    </button>
  );
};
