import React from 'react'
import { Avatar } from '@mui/material';
function Recommendvideos() {
  const data=[
    {
    image: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    title:"Marvel's The Avengers" ,
    channel:"sathish developer",
    views:"3M views",
    timestamp:"3 days ago",
    channelImage:"https://yt3.ggpht.com/ytc/AL5GRJU3ZrddHnAxUplEPt6yNrpHZyeAx6F3Gm7FVQSDfw=s68-c-k-c0x00ffffff-no-rj"

 },
{
 image:"https://i.ytimg.com/vi/xuYXUTsarMU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAGs5p2281UHxgwodTZsDaX0upJoQ",
 title:"Dhanush speech - vaathi audio launch",
 channel:"Sun tv",
 views:"532k views",
 timestamp:"10 hours ago",
 channelImage:"https://yt3.ggpht.com/ytc/AL5GRJWdbuEpjeZLUa8E8Wj7PJbG3Oxl8DcCopzBUA4kbA=s68-c-k-c0x00ffffff-no-rj"
},
{
 image:"https://i.ytimg.com/vi/CP6AV7lfViI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDwFwpoaPqCumHsCa8eD6-Tr3CQ6Q",
 title:"Police sothanaigal - Micset",
 channel:"Micset",
 views:"2M views",
 timestamp:"1 week ago",
 channelImage:"https://yt3.ggpht.com/ytc/AL5GRJU3ZrddHnAxUplEPt6yNrpHZyeAx6F3Gm7FVQSDfw=s68-c-k-c0x00ffffff-no-rj"
},
{
 image:"https://i.ytimg.com/vi/5ECJ_MMe9kY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA55EGSAH-Lsb_EI4fT-T0fLqrDBA",
 title:"How to THINK in english | STOP translating in YOUR head",
 channel:"English with Nab",
 views:"61k views",
 timestamp:"2 years ago",
 channelImage:"https://yt3.ggpht.com/ytc/AL5GRJUa4eq2hUr8O27GMd0T7BnmQcmEIJWe-V9ZWTFh=s68-c-k-c0x00ffffff-no-rj"
},
{
 image:"https://i.ytimg.com/vi/cd3P3yXyx30/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCi0i3i7NsbAn-YwkAlMdlWg7nhow",
 title:"React JS Tutorial - Basic to Advance(2023)",
 channel:"Nerd's lesson",
 views:"38k views",
 timestamp:"9 days ago",
 channelImage:"https://yt3.ggpht.com/ytc/AL5GRJXr6kUc4cU3jzoLun6KS1apNdD7-WG5g7XzW-6n=s68-c-k-c0x00ffffff-no-rj"
},
{
 image:"https://i.ytimg.com/vi/og3wCO98HkQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAtBtcISUfULrctsbLoNk5M8ng_wQ",
 title:"Build a Slider with React.js",
 channel:"The Web School",
 views:"87views",
 timestamp:"1 year ago",
 channelImage:" 	https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj"
},
{
 image:"https://i.ytimg.com/vi/A7fF6czIxEo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLADuu9wojfxAtpmbvZ4HZcM5dK2qw",
 title:"How Much HTML,CSS,&JS is Enough?",
 channel:"Chris Sean",
 views:"284K views",
 timestamp:"2 months ago",
 channelImage:"https://yt3.ggpht.com/UWGbeD_4uD67sbk0tpNRGyuL6H2r…XWLDRtCKsrg59uNnXbuviQw=s68-c-k-c0x00ffffff-no-rj"
},
{
  image:"https://i.ytimg.com/vi/5TfFVWWPw4s/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBG7TWuTMSs7zRhR3TeN3j3HZ-vwg",
  title:"Class room Sothanaigal - Micset",
  channel:"Micset",
  views:"2.8M views",
  timestamp:"8 week ago",
  channelImage:"https://yt3.ggpht.com/ytc/AL5GRJU3ZrddHnAxUplEPt6yNrpHZyeAx6F3Gm7FVQSDfw=s68-c-k-c0x00ffffff-no-rj"
},
{
  image:"https://i.ytimg.com/vi/r8a6SZAUgDM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCwoDc_KbHtGCG9g5qgrs3XLrwS4A",
  title:"Eruma Saani | Husband vs wife",
  channel:"Eruma saani",
  views:"6.8M views",
  timestamp:"8 months ago",
  channelImage:"https://yt3.ggpht.com/ytc/AL5GRJXFMBHb83gM0411sPjig1vO8AS5SlIigNuIP6-Jig=s68-c-k-c0x00ffffff-no-rj"
},{
  image:"https://i.ytimg.com/vi/jv_Syd5vB8k/hq720.jpg?sqp=-…j0AgKJDeAE=&rs=AOn4CLAAx-tTP5OJ3a5jf4tz5vbJG1YuJw",
  title:"IT paridhabangal",
  channel:"Paridhabangal",
  views:"67M views",
  timestamp:"2 days ago",
  channelImage:"https://yt3.ggpht.com/Z72n1HBCgory8N9NqnAIFAkJpSQr…KOBD2j8m8PltqAlRvvrjXEA=s68-c-k-c0x00ffffff-no-rj"
 },
 {
  image:"https://i.ytimg.com/vi/iVMiVXKNPwg/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLBbNB6b4qcXHON9x9XDSH7xidh1wg",
  title:"Vadachennai - trailer",
  channel:"Wunderbar films",
  views:"4.9M views",
  timestamp:"4 years ago",
  channelImage:"https://yt3.ggpht.com/zfpc0aBJw8DcM9gp6VGaipf1xyKn…wshLKEZlI1vQar-JG2MJ-bw=s68-c-k-c0x00ffffff-no-rj"
 },
 {
  image:"https://i.ytimg.com/vi/poQXNp9ItL4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAS0Omi0HBPBdlWKLyzk7GroLy6ew",
  title:"Redux tutorial - Learn Redux from Tutorial",
  channel:"Programming with mash",
  views:"914k views",
  timestamp:"2 years ago",
  channelImage:"	https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azz…w2PXSwzMBKVR7W0MI7gyND8=s68-c-k-c0x00ffffff-no-rj"
 }

]
  return (<>
    <div className="Recommendvideos">
    <h2>Recommended</h2>
    <div className="Recommendedvideos-video">
       {data.map((video)=>(
        <VideoCard video={video} />
       ))}
        
    </div>
    </div>
    </>)
}
function VideoCard({video}){
   
    return(<>
       <div className='videoCard'>
        <img className='videoCard-thumbnail' src={video.image} alt={video.channel} />
         <div className="videoInfo">
            <Avatar className="videocard-avatar" alt={video.channel} src={video.channelImage} />
           <div className='video-text'>
            <h6 className='video-title'>{video.title} </h6>
            <p className='video-channel'>{video.channel}</p>
            <p className='video-views'>
                {video.views} • {video.timestamp}
            </p>
           </div>
         </div>
       </div>


    </>)
}

export default Recommendvideos