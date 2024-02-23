import "./Education.css";
import React from 'react'


const Education = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Form Data:", formDataObject);
    // You can perform further actions here, such as sending the data to a server
  };

  return (
    <div className="cont">
      <div className="primary">
        <h2>EDUCATIONAL RECORD</h2>
        <form onSubmit={handleSubmit}>
          <legend>Primary School Information</legend>
          <label htmlFor="primarySchoolName">School Name:</label>
          <input type="text" id="primarySchoolName" name="primarySchoolName" required/>
          
          <label htmlFor="primarySchoolLocation">Location:</label>
          <input type="text" id="primarySchoolLocation" name="primarySchoolLocation"/>

          <label htmlFor="inputCity">City:</label>
          <input type="text" id="inputCity" name="inputCity" required/>

          <label htmlFor="primarySchoolStartDate">Starting Date of Primary School:</label>
          <input type="date" id="primarySchoolStartDate" name="primarySchoolStartDate" required/>
          
          <label htmlFor="primarySchoolEndDate">Ending Date of Primary School:</label>
          <input type="date" id="primarySchoolEndDate" name="primarySchoolEndDate" required/>
          
          <label htmlFor="primarySchoolCertificationFile">Primary School Certification File or Image:</label>
          <input type="file" id="primarySchoolCertificationFile" name="primarySchoolCertificationFile" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" required/>
          
          <legend>Secondary School Information</legend>
          
          <label htmlFor="secondarySchoolName">School Name:</label>
          <input type="text" id="secondarySchoolName" name="secondarySchoolName" required/>

          <label htmlFor="secondarySchoolLocation">Location:</label>
          <input type="text" id="secondarySchoolLocation" name="secondarySchoolLocation"/>

          <label htmlFor="secondaryCity">City:</label>
          <input type="text" id="secondaryCity" name="secondaryCity" required/>

          <label htmlFor="secondarySchoolStartDate">Starting Date of Secondary School:</label>
          <input type="date" id="secondarySchoolStartDate" name="secondarySchoolStartDate" required/>
          
          <label htmlFor="secondarySchoolEndDate">Ending Date of Secondary School:</label>
          <input type="date" id="secondarySchoolEndDate" name="secondarySchoolEndDate" required/>
          
          <label htmlFor="secondarySchoolCertificationFile">Secondary School Certification File or Image:</label>
          <input type="file" id="secondarySchoolCertificationFile" name="secondarySchoolCertificationFile" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" required/>

          <legend>Graduation Institute Information</legend>
          <label htmlFor="graduationInstituteName">Institute Name:</label>
          <input type="text" id="graduationInstituteName" name="graduationInstituteName"/>

          <label htmlFor="graduationInstituteLocation">Location:</label>
          <input type="text" id="graduationInstituteLocation" name="graduationInstituteLocation"/>

          <label htmlFor="certification">Certification:</label>
          <input type="text" id="certification" name="certification"/>

          <label htmlFor="majorSubject">Major Subject:</label>
          <input type="text" id="majorSubject" name="majorSubject"/>

          <label htmlFor="gpa">GPA:</label>
          <input type="text" id="gpa" name="gpa"/>

          <label htmlFor="graduationStartDate">Starting Date of Graduation:</label>
          <input type="date" id="graduationStartDate" name="graduationStartDate"/>
          
          <label htmlFor="graduationEndDate">Ending Date of Graduation:</label>
          <input type="date" id="graduationEndDate" name="graduationEndDate"/>
          
          <label htmlFor="graduationCertificationFile">Graduation Certification File or Image:</label>
          <input type="file" id="graduationCertificationFile" name="graduationCertificationFile" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"/>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// const Education = () => {
//   return (
//   <div className="cont">
//   <div className="primary">
//     <h2> EDUCATIONAL RECORD </h2>
//     <form  onSubmit={handleSubmit}> 
//   <legend>Primary School Information</legend>
//   <label htmlFor="primarySchoolName">School Name:</label>
//   <input type="text" id="primarySchoolName" name="primarySchoolName" required/>
  
//   <label htmlFor="primarySchoolLocation">Location:</label>
//   <input type="text" id="primarySchoolLocation" name="primarySchoolLocation"/>

//   <label htmlFor="inputCity">City:</label>
//   <input type="text" id="inputCity" name="inputCity" required/>

//   <label htmlFor="primarySchoolStartDate">Starting Date of Primary School:</label>
//   <input type="date" id="primarySchoolStartDate" name="primarySchoolStartDate" required/>
  
//   <label htmlFor="primarySchoolEndDate">Ending Date of Primary School:</label>
//   <input type="date" id="primarySchoolEndDate" name="primarySchoolEndDate" required/>
  
//   <label htmlFor="primarySchoolCertificationFile">Primary School Certification File or Image:</label>
//   <input type="file" id="primarySchoolCertificationFile" name="primarySchoolCertificationFile" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" required/>
  
//   <legend>Secondary School Information</legend>
  
//   <label htmlFor="secondarySchoolName">School Name:</label>
//   <input type="text" id="secondarySchoolName" name="secondarySchoolName" required/>

//   <label htmlFor="secondarySchoolLocation">Location:</label>
//   <input type="text" id="secondarySchoolLocation" name="secondarySchoolLocation"/>

//   <label htmlFor="secondaryCity">City:</label>
//   <input type="text" id="secondaryCity" name="secondaryCity" required/>

//   <label htmlFor="secondarySchoolStartDate">Starting Date of Secondary School:</label>
//   <input type="date" id="secondarySchoolStartDate" name="secondarySchoolStartDate" required/>
  
//   <label htmlFor="secondarySchoolEndDate">Ending Date of Secondary School:</label>
//   <input type="date" id="secondarySchoolEndDate" name="secondarySchoolEndDate" required/>
  
//   <label htmlFor="secondarySchoolCertificationFile">Secondary School Certification File or Image:</label>
//   <input type="file" id="secondarySchoolCertificationFile" name="secondarySchoolCertificationFile" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" required/>

//   <legend>Graduation Institute Information</legend>
//   <label htmlFor="graduationInstituteName">Institute Name:</label>
//   <input type="text" id="graduationInstituteName" name="graduationInstituteName"/>

//   <label htmlFor="graduationInstituteLocation">Location:</label>
//   <input type="text" id="graduationInstituteLocation" name="graduationInstituteLocation"/>

//   <label htmlFor="certification">Certification:</label>
//   <input type="text" id="certification" name="certification"/>

//   <label htmlFor="majorSubject">Major Subject:</label>
//   <input type="text" id="majorSubject" name="majorSubject"/>

//   <label htmlFor="gpa">GPA:</label>
//   <input type="text" id="gpa" name="gpa"/>

//   <label htmlFor="graduationStartDate">Starting Date of Graduation:</label>
//   <input type="date" id="graduationStartDate" name="graduationStartDate"/>
  
//   <label htmlFor="graduationEndDate">Ending Date of Graduation:</label>
//   <input type="date" id="graduationEndDate" name="graduationEndDate"/>
  
//   <label htmlFor="graduationCertificationFile">Graduation Certification File or Image:</label>
//   <input type="file" id="graduationCertificationFile" name="graduationCertificationFile" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"/>

//   <div className="col-12">
//     <button type="submit" className="btn btn-primary">Submit</button>
//   </div>
// </form>

  
//   </div>
// </div>      
   
//   )
// }

export default Education;
