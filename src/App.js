import { useEffect, useState } from "react";
import logo from "../src/assets/logo.svg";
import DoctorHeadCard from "./components/doctorHeadCard/DoctorHeadCard";
import OnlineApointments from "./components/service/OnlineAppointments";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  const [doctorInformation, setdoctorInformation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/profile.json");
        if (!response.ok) {
          throw new Error("currently network doesn't response");
        }
        const data = await response.json();
        setdoctorInformation(data);
      } catch (error) {
        // handles error for example console.log(error)
      }
    };
    fetchData();
  }, []);

  if (!doctorInformation) return <NotFound />;

  return (
    <div className='h-screen bg-slate-100'>
      <header className='flex h-16 bg-white opacity-60'>
        <div className='container flex items-center justify-between mx-auto'>
          <div className='flex items-center gap-2'>
            <img src={logo} alt='' />
            <div className='w-20 h-3 rounded-full bg-slate-100' />
          </div>
          <nav className='flex gap-5'>
            <div className='w-20 h-3 rounded-full bg-slate-100' />
            <div className='w-20 h-3 rounded-full bg-slate-100' />
            <div className='w-20 h-3 rounded-full bg-slate-100' />
          </nav>
          <div className='rounded-md w-28 h-9 bg-slate-100' />
        </div>
      </header>
      <main className='container grid grid-cols-3 pt-10 mx-auto gap-7'>
        <div className='flex flex-col col-span-2 gap-5'>
          <DoctorHeadCard doctorInformation={doctorInformation} />
          <div className='bg-white rounded-lg h-96 bg-opacity-60' />
          <div className='h-56 bg-white rounded-lg bg-opacity-60' />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='bg-white rounded-lg bg-opacity-60 h-52' />
          <OnlineApointments waitingTime={doctorInformation.waitingTime} />
        </div>
      </main>
    </div>
  );
};

export default App;
