import React from 'react'
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    console.log(rooms)
    if (loading) {
        return <Loading />;
      }
      return (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={rooms} />
        </>
      );
    }
    
    export default withRoomConsumer(RoomContainer);


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value =>{
//                 console.log(value)
//                 return(
//                     <div>
//                         Hello from Rooms RoomsContainer
//                     </div>
//                 )
//             }}
            
//         </RoomConsumer>
//     )
// }
