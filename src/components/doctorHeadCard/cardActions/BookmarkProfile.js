import { useState } from "react";
import { SaveIcon } from "../../icons/icons";

export const BookmarkProfile = ({ isBookmarked }) => {
  const [profileIsBookmarked, setProfileIsBookmarked] = useState(isBookmarked);

  const toggleSave = () => {
    /* rest of our logic */
    setProfileIsBookmarked(!profileIsBookmarked);
  };

  return (
    <button
      onClick={toggleSave}
      className='cursor-pointer flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 hover:outline-gray-400'>
      <SaveIcon fill={profileIsBookmarked} />
      <p>save</p>
    </button>
  );
};
