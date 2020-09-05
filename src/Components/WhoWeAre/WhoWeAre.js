import React, { useState } from "react";
import TitleCard from "./TeamMemberTitleCard/TeamMemberTitleCard";
import "./WhoWeAre-style.css";
import karenPic from "../../Assets/Media/Karen.jpg";
import richardPic from "../../Assets/Media/richard.jpg";
import tedPic from "../../Assets/Media/USETHIS_Ted.jpg";
import keithPic from "../../Assets/Media/USETHIS_keith.jpg";

const WhoWeAre = props => {
   const [activeCard, setActiveCard] = useState(null);

   const ted = {
      name: "Ted Kennedy",
      responsibility: "Strategy",
      content1:
         "Ted is a marketing-orientated leisure operator who held a number of senior positions with Whitbread plc before moving into private equity.",
      content2:
         "He has held positions as Managing Director, CEO, and Chairman. His experience covers managed pubs, tenanted pubs, hotels, restaurants, and bars.",
      content3:
         "He has led companies through growth, retrenchment, recovery and exit and has extensive experience of working with shareholders, management, and banks to secure successful outcomes for all parties.",
      img: tedPic,
   };

   const keith = {
      name: "Keith Thomson",
      responsibility: "Finance",
      content1:
         "Keith is a qualified FCCA with extensive experience in private equity backed companies as Director/Equity stakeholder.",
      content2:
         "He has held positions as Chief Executive, Chief Operating Officer and Finance Director. Keith’s experience embraces both retail (where he worked at Budgens plc and Wax Lyrical) and leisure (where he has worked with Whitbread plc, Scottish & Newcastle plc, Millhouse Inns, GRS Pubs Investments and Pebble Hotels).",
      content3:
         "He has held positions as Chief Executive, Chief Operating Officer and Finance Director. Keith’s experience embraces both retail (where he worked at Budgens plc and Wax Lyrical) and leisure (where he has worked with Whitbread plc, Scottish & Newcastle plc, Millhouse Inns, GRS Pubs Investments and Pebble Hotels).",
      img: keithPic,
   };

   const richard = {
      name: "Richard Littman",
      responsibility: "Operations",
      content1:
         "Richard has worked with some of the industry’s recognised cutting-edge hospitality brands in restaurants, bars, and nightclubs in the UK.",
      content2:
         "His experience includes GM roles at My Kinda Town and Operations Director roles at Tiger Tiger and Chez Gerard.",
      content3:
         "He has purchased, revitalised and exited a package of five bars and nightclubs, developed, traded and sold Steam and Rye (a new 10,000 square foot bar and restaurant in the City of London), runs an 80,000 square foot conference and serviced office venue on the Thames in the City of London, and leads the operation of Duck and Rice in Soho.",
      img: richardPic,
   };

   const karen = {
      name: "Karen Davies",
      responsibility: "Human Resources",
      content1:
         "Karen has extensive board-level HR experience including with Novus Leisure, Beds and Bar Group, and Scottish and Newcastle Retail and as a consultant with Casual Dining Group, Parkdean Resorts, and Burger King.",
      content2:
         "She has worked on a number of corporate mergers, acquisitions, and restructures with Casual Dining Group, Burger King, Parkdean Resorts, Novus Leisure, and Drake and Morgan.",
      content3:
         "Karen has worked in the UK and Europe and is the founder and CEO of The People Factor HR Consultancy, a leading provider of specialist HR advise to the hospitality sector.",
      img: karenPic,
   };

   return (
      <div className='who-we-are-container'>
         <div className='list-of-team-members'>
            <TitleCard person={ted} setActiveCard={setActiveCard} />

            <TitleCard person={keith} setActiveCard={setActiveCard} />

            <TitleCard person={richard} setActiveCard={setActiveCard} />

            <TitleCard person={karen} setActiveCard={setActiveCard} />
         </div>

         <div className='expanded-panel'>
         {!activeCard && <div className='no-card-selected'>Meet the Team</div>}
            <div className='mughsot-container'>
               <img src={activeCard?.img} className='mugshot' />
            </div>
            <div className='panel-content'>
               <div className='panel-name'>
                  {activeCard?.name}{" "}
               </div>
               <div className='responsibility'>{activeCard?.responsibility}</div>
               <div className='panel-content1 content'>{activeCard?.content1}</div>
               <div className='panel-content2 content'>{activeCard?.content2}</div>
               <div className='panel-content3 content'>{activeCard?.content3}</div>
            </div>
         </div>
      </div>
   );
};

export default WhoWeAre;
