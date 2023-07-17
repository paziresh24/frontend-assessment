import { useEffect, useState } from "react";
import { TrustIcon } from "../../../icons/icons";

export const NameAndExpertise = ({
  name,
  expertise,
  satisfaction,
  commentsCount,
  waitingTime,
  family,
}) => {
  const [isTrusted, setIsTrusted] = useState(false);

  useEffect(() => {
    switch (true) {
      case satisfaction > 90:
      case commentsCount >= 100:
      case waitingTime === 1:
        setIsTrusted(true);
        break;
      default:
        break;
    }
  }, [satisfaction, commentsCount, waitingTime]);

  return (
    <>
      <div className='flex-col'>
        <div className='flex gap-2 items-center'>
          <p className='font-bold'>{`${name} ${family}`}</p>
          {isTrusted ? <TrustIcon /> : null}
        </div>
        <p>{expertise}</p>
      </div>
    </>
  );
};
