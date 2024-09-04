import ic1 from "../assets/bolt-solid.svg";
import ic2 from "../assets/user-group-solid.svg";
import ic3 from "../assets/book-solid.svg";
import ic4 from "../assets/circle-nodes-solid.svg";
import ic5 from "../assets/comment-dots-solid.svg";
import ic6 from "../assets/image-solid.svg";
const FeaturesCard = () => {
  return (
    <>
        <section className="py-5">
               <div className="container">
                 <h2 className="">Why memo?</h2>
                 <p className="">Experience the power of a modern, all-in-one workspace</p>
                 <div className="row mt-4">
                   <div className="col-md-2 d-flex align-items-stretch">
                     <div style={{width: "100%"}} className="card border-1 shadow-sm mb-4">
                       <img style={{width: "20px", height: "20px", flexShrink: 0}} src={ic1} alt="icon" className="ms-3 mt-3" />
                       <div className="card-body">
                         <h5 className="card-title">Fast & reliable</h5>
                         <p className="card-text">Instantly find what you need, when you need it.</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-2 d-flex align-items-stretch">
                     <div style={{width: "100%"}} className="card border-1 shadow-sm mb-4">
                     <img style={{width: "20px", height: "20px", flexShrink: 0}} src={ic2} alt="icon" className="ms-3 mt-3" />
                       <div className="card-body">
                         <h5 className="card-title">Perfect for teams</h5>
                         <p className="card-text">Invite teammates, share docs, and collaborate in real time.</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-2 d-flex align-items-stretch">
                     <div style={{width: "100%"}} className="card border-1 shadow-sm mb-4">
                     <img style={{width: "20px", height: "20px", flexShrink: 0}} src={ic3} alt="icon" className="ms-3 mt-3" />
                       <div className="card-body">
                         <h5 className="card-title">Flexible organization</h5>
                         <p className="card-text">Create, customize, and connect pages with ease.</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-2 d-flex align-items-stretch">
                     <div style={{width: "100%"}} className="card border-1 shadow-sm mb-4">
                     <img style={{width: "20px", height: "20px", flexShrink: 0}} src={ic4} alt="icon" className="ms-3 mt-3" />
                       <div className="card-body">
                         <h5 className="card-title">Seamless integrations</h5>
                         <p className="card-text">Connect your favorite tools and automate workflows.</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-2 d-flex align-items-stretch">
                     <div style={{width: "100%"}} className="card border-1 shadow-sm mb-4">
                     <img style={{width: "20px", height: "20px", flexShrink: 0}} src={ic5} alt="icon" className="ms-3 mt-3" />
                       <div className="card-body">
                         <h5 className="card-title">Real-time communication</h5>
                         <p className="card-text">Comment on pages, mention coworkers, and chat in real time.</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-2 d-flex align-items-stretch"></div>
                   <div className="col-md-2 d-flex align-items-stretch">
                     <div style={{width: "100%"}} className="card border-1 shadow-sm mb-4">
                     <img style={{width: "20px", height: "20px", flexShrink: 0}} src={ic6} alt="icon" className="ms-3 mt-3" />
                       <div className="card-body">
                         <h5 className="card-title">Rich media support</h5>
                         <p className="card-text">Embed videos, audio, images, and more.</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
    </>
  )
}

export default FeaturesCard