// import { useState } from 'react';
// import { MapPin, ArrowUpRight } from 'lucide-react';

// function localDateString(date = new Date()) {
//   const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
//   return local.toISOString().slice(0, 10);
// }
// function nextDay(value) {
//   const date = new Date(`${value}T12:00:00`);
//   date.setDate(date.getDate() + 1);
//   return localDateString(date);
// }

// export default function StaySearch({ onSearch }) {
//   const today = localDateString();
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [guests, setGuests] = useState('2');
//   const [error, setError] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (Boolean(checkIn) !== Boolean(checkOut)) {
//       setError('Choose both check-in and check-out dates, or leave both blank.');
//       return;
//     }
//     if (checkIn && checkOut <= checkIn) {
//       setError('Check-out must be after check-in.');
//       return;
//     }
//     setError('');
//     onSearch?.({ location: 'Atlanta, Georgia', checkIn, checkOut, guests: Number(guests) });
//   }

//   return (
//     <section aria-label="Plan your stay" className="relative z-10 bg-white px-[5%] py-7">
//       <div className="mx-auto max-w-[1500px]">
//         <form onSubmit={handleSubmit} className="relative z-20 -mt-10 grid grid-cols-2 gap-x-2 gap-y-3 rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_8px_35px_rgba(0,0,0,.045)] sm:gap-x-3 lg:-mt-0 lg:grid-cols-[1.2fr_1fr_1fr_.75fr_1.15fr] lg:items-center lg:gap-0 lg:rounded-[20px] lg:p-3">
//           <div className="col-span-2 flex min-h-[65px] flex-col justify-center border-b border-neutral-100 px-3 py-2 lg:col-span-1 lg:border-b-0 lg:border-r lg:px-6">
//             <label className="mb-2 text-xs font-semibold" htmlFor="stay-location">Where</label>
//             <div className="flex items-center gap-2 text-sm text-neutral-600"><MapPin size={15} className="text-neutral-400" /><input id="stay-location" value="Atlanta, Georgia" readOnly className="w-full bg-transparent outline-none" /></div>
//           </div>
//           <div className="flex min-h-[65px] flex-col justify-center px-3 py-2 lg:border-r lg:px-6">
//             <label htmlFor="check-in" className="mb-2 text-xs font-semibold">Check in</label>
//             <input id="check-in" type="date" min={today} value={checkIn} onChange={(e) => { setCheckIn(e.target.value); setError(''); }} className="min-w-0 w-full bg-transparent text-sm text-neutral-700 outline-none" />
//           </div>
//           <div className="flex min-h-[65px] flex-col justify-center border-l border-neutral-100 px-3 py-2 lg:border-r lg:border-l-0 lg:px-6">
//             <label htmlFor="check-out" className="mb-2 text-xs font-semibold">Check out</label>
//             <input id="check-out" type="date" min={checkIn ? nextDay(checkIn) : today} value={checkOut} onChange={(e) => { setCheckOut(e.target.value); setError(''); }} className="min-w-0 w-full bg-transparent text-sm text-neutral-700 outline-none" />
//           </div>
//           <div className="flex min-h-[65px] flex-col justify-center border-t border-neutral-100 px-3 py-2 sm:border-t-0 lg:border-r lg:px-6">
//             <label htmlFor="guests" className="mb-2 text-xs font-semibold">Guests</label>
//             <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full bg-transparent text-sm text-neutral-700 outline-none">
//               {[1, 2, 4, 6, 7, 8, 10, 12].map((count) => <option key={count} value={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}
//             </select>
//           </div>
//           <div className="col-span-2 p-1 lg:col-span-1 lg:p-1.5">
//             <button type="submit" className="flex min-h-[60px] w-full items-center justify-center gap-2 rounded-xl bg-gp-red px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#b20820]">Find my stay <ArrowUpRight size={16} /></button>
//           </div>
//         </form>
//         {error && <p role="alert" className="mt-2 px-1 text-xs text-red-700">{error}</p>}
//         <p className="mt-3 px-1 leading-relaxed text-neutral-500 sm:text-xs md:text-base">Browse by group size. Live rates, availability and reservations are confirmed on Airbnb.</p>
//       </div>
//     </section>
//   );
// }
