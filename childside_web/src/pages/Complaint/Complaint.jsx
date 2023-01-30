// import "./complaint.scss";
import './complaint.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Complaint = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ((newComplaint) => {
      return makeRequest.post("/complaint", newComplaint);
    }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["complaint"]})
    },
  })

  const handleClick =async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ name,desc, img: imgUrl });
    console.log(desc);
    setDesc("");  
    setFile(null);
  };

  // return (
  //   <div className="share">
  //     <div className="container">
  //           <div>

  //           <h1>Child Labour/Adolescent Child Details</h1>
  //           </div>
  //       <div className="top">
  //         <div className="left">
  //           {/* <img src={"/upload/" + currentUser.profilePic} alt="" /> */}
  //           <img src={currentUser.profilePic} alt="" /> 
  //           <input type="text" placeholder="Enter Name" />
  //           <input
  //             type="text"
  //             placeholder={`Something about the situation ${currentUser.name}?`}
  //             onChange={(e) => setDesc(e.target.value)}
  //             value={desc}
  //             />
  //           <label htmlFor="file">
  //             <div className="item">
  //               {/* <img src={Image} alt="" /> */}
  //               <span>Add Image</span>
  //             </div>
  //           </label>
  //         </div>
  //         <div className="right">
  //           {file && (
  //             <img className="file" alt="" src={URL.createObjectURL(file)} />
  //             )}
  //         </div>
  //       </div>
  //             <h1>Address where child found</h1>
  //       <hr />
  //       <div className="bottom container w-75">
  //         <div className="">
  //             <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}
  //             value={name}/>
  //             <input type="text" placeholder="Village/Mohalla" />
  //             <input type="text" placeholder="Ward/Panchayat" />
  //             <input type="text" placeholder="Taluk/Block" />
  //             <input type="text" placeholder="Tehsil/Subdistrict" />
  //             <input type="text" placeholder="Landmark" />
  //             <input type="text" placeholder="State" />
  //             <input type="text" placeholder="District" />
  //           <input
  //             type="file"
  //             id="file"
  //             style={{ display: "none" }}
  //             onChange={(e) => setFile(e.target.files[0])}
  //           />
  //           {/* <label htmlFor="file">
  //             <div className="item">
  //               <img src={Image} alt="" />
  //               <span>Add Image</span>
  //             </div>
  //           </label>
  //           <div className="item">
  //             <img src={Map} alt="" />
  //             <span>Add Place</span>
  //           </div>
  //           <div className="item">
  //             <img src={Friend} alt="" />
  //             <span>Tag Friends</span>
  //           </div> */}
  //         </div>
  //         <div className="right">
  //           <button onClick={handleClick}>Share</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return(
    <div class="container">
    <div class="row d-flex justify-content-center mt-200"> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Launch multistep Wizard </button> </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Smart Wizard modal</h5> <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body">
    <div id="smartwizard">
                         <ul>
                             <li><a href="#step-1">Step 1<br /><small>Account Info</small></a></li>
                             <li><a href="#step-2">Step 2<br /><small>Personal Info</small></a></li>
                             <li><a href="#step-3">Step 3<br /><small>Payment Info</small></a></li>
                             <li><a href="#step-4">Step 4<br /><small>Confirm details</small></a></li>
                         </ul>
                         <div class="mt-4">
                             <div id="step-1">
                                 <div class="row">
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Name" required/> </div>
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Email" required/> </div>
                                 </div>
                                 <div class="row mt-3">
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Password" required/> </div>
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Repeat password" required/> </div>
                                 </div>
                             </div>
                             <div id="step-2">
                                 <div class="row">
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Address" required/> </div>
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="City" required/> </div>
                                 </div>
                                 <div class="row mt-3">
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="State" required/> </div>
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Country" required/> </div>
                                 </div>
                             </div>
                             <div id="step-3" class="">
                                 <div class="row">
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Card Number" required/> </div>
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Card Holder Name" required/> </div>
                                 </div>
                                 <div class="row mt-3">
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="CVV" required/> </div>
                                     <div class="col-md-6"> <input type="text" class="form-control" placeholder="Mobile Number" required/> </div>
                                 </div>
                             </div>
                             <div id="step-4" class="">
                                 <div class="row">
                                     <div class="col-md-12"> <span>Thanks For submitting your details with BBBootstrap.com. we will send you a confirmation email. We will review your details and revert back.</span> </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     </div>
             </div>
         </div>
     </div>
 </div>
  )
};

export default Complaint;