import React,{ useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";

function Image_content() 
{
    let history = useHistory();
    const [Title ,setTitle]             = useState('');
    const [TitleError, setTitleError]   = useState('');

    const [Desc, setDesc]           = useState('');
    const [DescError, setDescError] = useState('');
    

    const [Image, setImage]             = useState('');
    const [ImageError, setImageError]   = useState('');

    const [Image1, setImage1]           = useState('');
    const [ImageError1, setImageError1] = useState('');

    const [Image2, setImage2]           = useState('');
    const [ImageError2, setImageError2] = useState('');

    const [Image3, setImage3] = useState('');
    const [ImageError3, setImageError3] = useState('');

    const [Image4, setImage4]           = useState('');
    const [ImageError4, setImageError4] = useState('');

    const [Image5, setImage5]           = useState('');
    const [ImageError5, setImageError5] = useState('');


    const [Status, setStatus]           = useState('Inactive');

    function savedata() 
    {
        var error = false;
        if (Title) {
            setTitleError('');
        }
        else {
            setTitleError("Please Enter Title");
            error = true;
        }
        if (Desc) {
            setDescError('');
        }
        else {
            setDescError("Please Enter Desc");
            error = true;
        }

        if (Image) {
            setImageError('');
        }
        else {
            setImageError("Please Select Image");
            error = true;
        }
        if (Image1) {
            setImageError1('');
        }
        else {
            setImageError1("Please Select Image");
            error = true;
        }
        if (Image2) {
            setImageError2('');
        }
        else {
            setImageError2("Please Select Image");
            error = true;
        }
        if (Image3) {
            setImageError3('');
        }
        else {
            setImageError3("Please Select Image");
            error = true;
        }
        if (Image4) {
            setImageError4('');
        }
        else {
            setImageError4("Please Select Image");
            error = true;
        }
        if (Image5) {
            setImageError5('');
        }
        else {
            setImageError5("Please Select Image");
            error = true;
        }
        

        var answer = window.location.href;
        const answer_array = answer.split('/');
        console.log(answer_array);

        if (answer_array[2] == 'localhost:3000') {
            var url = 'http://localhost/compeletestack/backend/api/add_image_data';
        }
        else {
            var url = 'https://compeletestack.justcodenow.com/backend/api/add_image_data';
        }
        const fd = new FormData();
        fd.append('vTitle', Title);
        fd.append('vDesc', Desc);
        fd.append('vImage', Image);
        fd.append('vImage1', Image1);
        fd.append('vImage2', Image2);
        fd.append('vImage3', Image3);
        fd.append('vImage4', Image4);
        fd.append('vImage5', Image5);
        fd.append('eStatus', Status);
        
        if (error==false) 
        {
            // setGif(true);
            const dataa = axios.post(url, fd)
                .then(res => {
                    if (res.data.Status == '0') {
                        // setGif(false);
                        toast.success(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                        setTimeout(function () {
                            history.push("/admin/listing");
                        }, 2000);
                    }
                    else {
                        // setGif(false);
                        toast.error(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                })
                .catch(error => {
                })
        }

    }



  return (
    <>
        <Sidebar/>
          <section id="content">
              <main>
                  <div className="main-content" id="panel" >
                      <div className="container-fluid">
                          <div className="row">
                              <div className="col-xl-12 col-md-12 col-sm-12">
                                  <div className="card">
                                      <div className="card-header border-0">
                                          <div className="row align-items-center">
                                              <div className="col">
                                                  <h3 className="mb-0">Image Added </h3>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body">
                                          <form>
                                              <h6 className="heading-small text-muted mb-4">Image Content information</h6>
                                              <div className="pl-lg-4">
                                                  <div className="row">
                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vTitle">Title</label>
                                                              <input type="text" id="vTitle" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" value={Title} />
                                                              <span className="red">{TitleError}</span>
                                                          </div>
                                                      </div>
                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vImage">First Image</label>
                                                              <input type="file" id="vImage" onChange={(e) => setImage(e.target.files[0])} className="form-control vImage" />
                                                              
                                                              {
                                                                  Image ?
                                                                    <>
                                                                      <span className="red"></span>
                                                                      < img src="" className="img1 h-101" />
                                                                    </>
                                                                      :
                                                                    <span className="red">{ImageError}</span>
                                                              }
                                                          </div>
                                                      </div>
                                                     
                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vImage">Second Image</label>
                                                              <input type="file" id="vImage1" onChange={(e) => setImage1(e.target.files[0])} className="form-control vImage" />
                                                              {
                                                                  Image1 ?
                                                                      <>
                                                                          <span className="red"></span>
                                                                          < img src="" className="img11 h-101" />
                                                                      </>
                                                                      :
                                                                      <span className="red">{ImageError1}</span>
                                                              }
                                                          </div>
                                                      </div>
                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vImage">Third Image</label>
                                                              <input type="file" id="vImage2" onChange={(e) => setImage2(e.target.files[0])} className="form-control vImage" />
                                                              {
                                                                  Image2 ?
                                                                      <>
                                                                          <span className="red"></span>
                                                                          < img src="" className="img2 h-101" />
                                                                      </>
                                                                      :
                                                                      <span className="red">{ImageError2}</span>
                                                              }
                                                          </div>
                                                      </div>
                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vImage">Fourth Image</label>
                                                              <input type="file" id="vImage3" onChange={(e) => setImage3(e.target.files[0])} className="form-control vImage" />
                                                              {
                                                                  Image3 ?
                                                                      <>
                                                                          <span className="red"></span>
                                                                          < img src="" className="img3 h-101" />
                                                                      </>
                                                                      :
                                                                      <span className="red">{ImageError3}</span>
                                                              }
                                                          </div>
                                                      </div>
                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vImage">Fifth Image</label>
                                                              <input type="file" id="vImage4" onChange={(e) => setImage4(e.target.files[0])} className="form-control vImage" />
                                                              {
                                                                  Image4 ?
                                                                      <>
                                                                          <span className="red"></span>
                                                                          < img src="" className="img4 h-101" />
                                                                      </>
                                                                      :
                                                                      <span className="red">{ImageError3}</span>
                                                              }
                                                          </div>
                                                      </div>
                                                        <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vImage">Logo Image</label>
                                                              <input type="file" id="vImage5" onChange={(e) => setImage5(e.target.files[0])} className="form-control vImage" />
                                                              {
                                                                  Image5 ?
                                                                      <>
                                                                          <span className="red"></span>
                                                                          < img src="" className="img5 h-101" />
                                                                      </>
                                                                      :
                                                                      <span className="red">{ImageError5}</span>
                                                              }
                                                          </div>
                                                      </div>



                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="form-control-label black" for="vEmail">Description</label>
                                                                <textarea onChange={(e) => setDesc(e.target.value)} id="vDescription" rows="4" className="form-control" placeholder="Description..."></textarea>
                                                                <span className="red">{DescError}</span>

                                                            </div>
                                                        </div>

                                                      <div className="col-lg-6">
                                                          <div className="form-group">
                                                              <label className="form-control-label black" for="vEmail">Status</label>
                                                              <select className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                                                  <option value="inActive">Inactive</option>
                                                                  <option value="Active">Active</option>

                                                              </select>
                                                          </div>
                                                      </div>
                                                      

                                                      {/* <div className="col-lg-6">
                                                  <div className="form-group">
                                                      <label className="form-control-label" for="vDescription">Description</label>
                                                      <textarea onChange={(e) => setDesc(e.target.value)} id="vDescription" rows="4" className="form-control" placeholder="Description..."></textarea>
                                                      <span className="red">{DescError}</span>
                                                  </div>
                                              </div> */}


                                                      <div className="col-lg-12 mt-5">
                                                          <div className="form-group">
                                                              <button type="button" onClick={savedata} className="btn  btn-primary ">
                                                                  Submit
                                                              </button> &nbsp;&nbsp;&nbsp;
                                                              <Link to="/admin/listing">
                                                                  <a><button type="button" className="btn btn-warning margin-left">Back</button></a>
                                                              </Link>

                                                          </div>


                                                          <ToastContainer
                                                            position="top-right"
                                                            autoClose={5000}
                                                            hideProgressBar={false}
                                                            newestOnTop={false}
                                                            closeOnClick
                                                            rtl={false}
                                                            pauseOnFocusLoss
                                                            draggable
                                                            pauseOnHover
                                                        />
                                                      </div>


                                                  </div>

                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>


                  
              </main>

          </section>
         
    </>
  )
}

export default Image_content