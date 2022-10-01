import { Avatar } from "../Avavtar";
import { LikeIcon } from "../icons";
import { TrustIcon } from "../icons/trust";
import SaveButton from "../saveButton";
import ShareButton from "../shareButton";
import ViewCount from "../viewCount";

export const DoctorHead = ({
  name,
  family,
  image,
  viewCount,
  isBookmarked,
  profileUrl,
  expertise,
  satisfaction,
  commentsCount,
  waitingTime,
}) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <SaveButton defaultState={isBookmarked} />
          <ShareButton fullName={`${name} ${family}`} url={profileUrl} />
        </div>
        <ViewCount count={viewCount} />
      </div>
      <div className="flex items-center p-4 rounded-lg bg-slate-50">
        <Avatar src={image} />
        <div className="flex flex-col ml-4">
          <span className="flex items-center gap-2 text-lg font-bold">
            {name} {family} <TrustIcon />
          </span>
          <span className="text-sm">{expertise}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="flex items-center gap-1 p-1 px-3 text-sm font-semibold text-white bg-green-600 rounded-full">
          <LikeIcon />
          {satisfaction}%
        </div>
        <span className="text-sm font-medium">Satisfaction ({commentsCount} comments)</span>
      </div>
    </div>
  );
};

export default DoctorHead;
