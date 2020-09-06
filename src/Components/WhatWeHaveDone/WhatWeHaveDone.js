import React from "react";
import WhatDoneCard from "./WhatDoneCard/WhatDoneCard";
import "./WhatWeHaveDone-style.css";

const WhatWeHaveDone = props => {
   const millHouse = {
      title: "Mill House Inns",
      backTitle: (
         <div className='back-title'>
            The revitalisation of <br />
            <span>Mill House Inns</span>
         </div>
      ),
      backContent: (
         <div className='back-content'>
            This saw a group of 55 unfocussed and under-performing pubs, restaurants and hotels segmented into
            3 distinct trading styles. This allowed for quality and selected acquisitions to be made using
            bank debt and self-generated funds and the sale of the by then 80 freehold pubs to Punch Taverns
            plc.
         </div>
      ),
   };

   const angloIrish = {
      title: "Anglo-Irish",
      backTitle: (
         <div className='back-title'>
            The rescue of the old <br />
            <span>Anglo-Irish</span>
            <br /> loan book
         </div>
      ),
      backContent: (
         <div className='back-content'>
            This entailed creating a solvent OpCo from the ruins of 5 failed PubCos in the leased and tenanted
            sector and taking over the running over 500 pubs and then undertaking a strategic review which led
            to the largest ever tied to free-of-tie conversion. This bold move along with focused operating
            and a tight management of cash saw a total return of over £76m to the banks, significantly ahead
            of the original expectations.
         </div>
      ),
   };

   const barracuda = {
      title: "Barracuda Propco.",
      backTitle: (
         <div className='back-title'>
            The salvage of <br />
            <span>Barracuda Propco.</span>
         </div>
      ),
      backContent: (
         <div className='back-content'>
            Reunited the freeholds with the leaseholds on the 14 highly valued pubs Propco owned following the
            collapse of the Bramwell Pub Company. By focusing on each pub’s local market, taking on
            operational management and outsourcing the back office and procurement trading was grown enabling
            a running yield to the Propco and facilitating the successful sale of each pub within 24 months.
         </div>
      ),
   };

   const dominion = {
      title: "Dominion Hospitality",
      backTitle: (
         <div className='back-title'>
            The focusing of <br />
            <span>Dominion Hospitality</span>
         </div>
      ),
      backContent: (
         <div className='back-content'>
            A buy-and-break-up strategy that has seen the successful reshaping of the 30 pubs and pub-hotels
            purchased as a part of The Chapman Group acquisition. Recruited an MD and operations team to
            ensure focus going forwards whilst outsourcing the back-office functions.
         </div>
      ),
   };

   const duckRice = {
      title: "Duck & Rice",
      backTitle: (
         <div className='back-title'>
            The commercialisation of
            <br /> <span>Duck</span> & <span>Rice</span>
         </div>
      ),
      backContent: (
         <div className='back-content'>
            A great but initially loss-making high-volume Soho pub and restaurant. Took on the day-to-day
            operations and whilst maintaining its unique market position and very strong sales, we introduced
            a robust operations platform to deliver positive cash generation and a format ready-to-roll.
         </div>
      ),
   };

   return (
      <div className='what-done-container'>
         <div className='what-done-intro-container'>
            <div className='what-done-intro-larger'>
               Recovery requires the drawing together of a number of key skills and then the{" "}
               <span>drive</span>, <span>commitment</span> & <span>tenacity</span> to deliver a successful
               outcome.
            </div>
            <div className='what-done-intro-smaller'>Here are some of our success stories.</div>
         </div>
         <div className='what-done-cards-flex-container'>
            <WhatDoneCard success={millHouse} />
            <WhatDoneCard success={angloIrish} />
            <WhatDoneCard success={barracuda} />
            <WhatDoneCard success={dominion} />
            <WhatDoneCard success={duckRice} />
         </div>
      </div>
   );
};

export default WhatWeHaveDone;
