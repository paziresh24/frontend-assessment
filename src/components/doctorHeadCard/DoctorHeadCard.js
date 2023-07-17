import { NameAndExpertise } from "./doctorPersonalInformation/nameAndExpertise/NameAndExpertise";
import { Avatar } from "./doctorPersonalInformation/avavtar/Avatar";
import { BookmarkProfile } from "./cardActions/BookmarkProfile";
import { Satisfaction } from "./satisfaction/Satisfaction";
import { ShareProfile } from "./cardActions/ShareProfile";
import { ViewCount } from "./cardActions/ViewCount";

export const DoctorHeadCard = ({
  doctorInformation: {
    image,
    name,
    family,
    viewCount,
    expertise,
    isBookmarked,
    satisfaction,
    commentsCount,
    profileUrl,
    waitingTime,
  },
}) => {
  return (
    <div className='flex-col bg-white p-5 rounded-lg space-y-4 justify-center'>
      <div className='flex justify-between'>
        <div className='flex'>
          <BookmarkProfile isBookmarked={isBookmarked} />
          <ShareProfile
            profileUrl={profileUrl}
            name={name}
            expertise={expertise}
          />
        </div>
        <ViewCount viewCount={viewCount} />
      </div>
      <div className='flex items-center bg-gray-100 p-4 rounded-md gap-4'>
        <Avatar avatar={image} name={name} family={family} />
        <NameAndExpertise
          name={name}
          family={family}
          expertise={expertise}
          satisfaction={satisfaction}
          commentsCount={commentsCount}
          waitingTime={waitingTime}
        />
      </div>
      <div className='flex justify-center'>
        <Satisfaction
          satisfaction={satisfaction}
          commentsCount={commentsCount}
        />
      </div>
    </div>
  );
};

export default DoctorHeadCard;
