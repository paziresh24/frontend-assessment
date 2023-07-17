import Button from "../button/PrimaryButton";

export const OnlineApointments = ({ waitingTime }) => {
  let waitingTimeText;

  switch (waitingTime) {
    case 0:
      waitingTimeText = "Less than half an hour";
      break;
    case 1:
      waitingTimeText = "Less than one hour";
      break;
    case 2:
      waitingTimeText = "Less than two hours";
      break;
    case 3:
      waitingTimeText = "More than two hours";
      break;
    default:
      waitingTimeText = "";
      break;
  }

  return (
    <div className='flex flex-col gap-4 p-5 bg-white rounded-lg shadow-sm'>
      <h2 className='pb-3 font-bold border-b border-solid border-slate-200'>
        Online Appointments
      </h2>
      <ul className='relative pl-3 flex flex-col gap-1 text-sm before:content before:w-[2px] before:h-full before:bg-slate-200 before:absolute before:left-0'>
        <li>The possibility of getting the earliest appointment</li>
        <li>
          Average waiting time for a visit: <b>{waitingTimeText}</b>
        </li>
      </ul>
      <Button>Get Turn</Button>
    </div>
  );
};

export default OnlineApointments;
