import React, { useEffect } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Axios from 'axios';


export default function Home() {

    const [pkgList,setpkgList] = React.useState([])

    const fatchPkg=()=>{
        Axios.get('http://localhost:5000/package/fatch').then((ans)=>{
            
            setpkgList(ans.data)
        })
    }
    useEffect(()=>{fatchPkg()},[])
    
    return (
        <div>
            <Navbar />
            <div className = "header">
                <img url= "header-background.jpg"></img>
                <div className = "header-cont">
                <h1>Welcome to Dreamland Holidays</h1>
                <p>Enjoy our dream vacation.Travel to the any corner fo the world,Whitout goinga round circles.</p>
                </div>
            </div>
            <div className = "packge">
                <div className = "packge-img">
                <img src = "https://preview.colorlib.com/theme/travelers/images/ximg_2.jpg.pagespeed.ic.O2X5ML22wr.webp"></img>
                <p>Write down your experience</p>
                </div>
                <div className = "packge-img">
                <img src = "https://preview.colorlib.com/theme/travelers/images/ximg_1.jpg.pagespeed.ic.9-q5m7McXm.webp"></img>
                <p>Explor the mountains</p>
                </div>
                <div className = "packge-img">
                <img src = "https://preview.colorlib.com/theme/travelers/images/ximg_3.jpg.pagespeed.ic.c7933FfA3l.webp"></img>
                <p>Safe Trip With Aieasia</p>
                </div>
            </div>
            <div className = "subcribe">
                <div className = "subcribe-sub">
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscribe newsletter to get offers and about new places to discover.</p>
                </div>
                <div className = "subcribe-sub">
                <input className = "subcribe-email" placeholder = "  Your mail"></input>
                </div>
                <div className = "subcribe-sub">
                <button className = "subcribe-but" type = "submit">Subcribe</button>
                </div>
            </div>
            <div className="service">
                <div className = "service-sub">
                    <img src = "https://preview.colorlib.com/theme/travelo/img/svg_icon/1.svg" className = "icon"></img>
                    <h3>Comfortable Journey</h3>
                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
                <div className = "service-sub">
                    <img src = "https://preview.colorlib.com/theme/travelo/img/svg_icon/2.svg" className = "icon"></img>
                    <h3>Luxuries Hotel</h3>
                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
                <div className = "service-sub">
                    <img src = "https://preview.colorlib.com/theme/travelo/img/svg_icon/3.svg" className = "icon"></img>
                    <h3>Comfortable Journey</h3>
                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
            </div>
            
            <div className='partation'>
                
            </div>
            <div className = "search" >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#4D4D4D" fill-opacity="1" d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
                    {/* <div>
                    <span><input  placeholder="Search"></input></span>
                    <span><button className = "search-bt" type="submit">Search</button></span>
                    </div> */}
            </div>
            <div className = "package_cont">
                {/* <span><input className = "search" placeholder="Search"></input></span>
                <span><button className = "search-bt" type="submit">Search</button></span> */}
                
                
                {
                    pkgList.map((item)=>{
                        return(
                            
                                <div className='package_details' key={item._id}>
                                    <img src = {item.imgURL}></img>
                                    
                                        <div className='sub_details'>
                                            <p className = "p_heading">{item.pName}</p>
                                            <div  className="p_description"><p>{item.description}
                                            </p></div>
                                            <p>{item.location}</p>

                                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span><br/>

                                            <span>{item.days}</span>   <span className='price'>{item.price}</span>
                                        </div>
                                    </div>
                            

                        )
                    })
                }
                
            </div>
            
    </div>
    )
}
