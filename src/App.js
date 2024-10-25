import { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState("");
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const contactHandler = (event) => {
    setContact(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const subjectsHandler = (event) => {
    const value = event.target.value;
    setSubjects((prevSubjects) =>
      prevSubjects.includes(value)
        ? prevSubjects.filter((subject) => subject !== value)
        : [...prevSubjects, value]
    );
  };

  const resumeHandler = (event) => {
    const file = event.target.files[0]; 
    setResume(file); 
  };

  const urlHandler = (event) => {
    setUrl(event.target.value);
  };

  const choiceHandler = (event) => {
    setChoice(event.target.value);
  };

  const aboutHandler = (event) => {
    setAbout(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); 
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(contact);
    console.log(gender);
    console.log(subjects);
    console.log(resume);
    console.log(url);
    console.log(choice);
    console.log(about); 
  };

  const resetHandler = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects("");
    setResume("");
    setUrl("");
    setChoice("");
    setAbout("");
  };

  return (
    <div className="flex justify-center items-center min-h-full">
      <form className="w-[500px] my-10 border-2 rounded-lg ">
        <h1 className="text-center font-bold text-2xl py-5 text-green-600">
          Form in React
        </h1>
        <div className="px-[50px]">
          {/* first name */}
          <div className="grid mb-3">
            <label htmlFor="firstname" className="mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={firstNameHandler}
              placeholder="Enter first name"
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
              required
            />
          </div>
          {/* last name */}
          <div className="grid mb-3">
            <label htmlFor="lastname" className="mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={lastNameHandler}
              placeholder="Enter last name"
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
              required
            />
          </div>
          {/* email */}
          <div className="grid mb-3">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={emailHandler}
              placeholder="Enter email"
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
            />
          </div>
          {/* contact */}
          <div className="grid mb-3">
            <label htmlFor="contact" className="mb-2">
              Contact
            </label>
            <input
              type="number"
              name="contact"
              value={contact}
              onChange={contactHandler}
              placeholder="Enter mobile number"
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
            />
          </div>
          {/* gender */}
          <div className="grid mb-3">
            <label htmlFor="gender" className="mb-2">
              Gender
            </label>
            <div className="flex justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="radio"
                  name="gender"
                  value="male" // Set value to "male"
                  checked={gender === "male"} // Check if gender state is "male"
                  onChange={genderHandler}
                  className="border-2"
                />
                <p>Male</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="radio"
                  className="border-2"
                  name="gender"
                  value="female" // Set value to "female"
                  checked={gender === "female"} // Check if gender state is "female"
                  onChange={genderHandler}
                />
                <p>Female</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="radio"
                  className="border-2"
                  name="gender"
                  value="other" // Set value to "other"
                  checked={gender === "other"} // Check if gender state is "other"
                  onChange={genderHandler}
                />
                <p>Other</p>
              </div>
            </div>
          </div>
          {/* your best subject */}
          <div className="grid mb-3">
            <label htmlFor="subject" className="mb-2">
              Your best Subject
            </label>
            <div className="flex justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  name="subject"
                  value="english"
                  checked={subjects.includes("english")}
                  onChange={subjectsHandler}
                  className="border-2"
                />
                <p>English</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  name="subject"
                  value="maths"
                  checked={subjects.includes("maths")}
                  onChange={subjectsHandler}
                  className="border-2"
                />
                <p>Maths</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  name="subject"
                  value="physics"
                  checked={subjects.includes("physics")}
                  onChange={subjectsHandler}
                  className="border-2"
                />
                <p>Physics</p>
              </div>
            </div>
          </div>
          {/* upload resume */}
          <div className="grid mb-3">
            <label htmlFor="resume" className="mb-2">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.docx,.doc,.jpg,.jpeg,.png"
              onChange={resumeHandler} 
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
            />
            {resume && <p className="text-sm text-green-400 font-light">Uploaded Resume: {resume.name}</p>}{" "}
          </div>
          {/* enter url */}
          <div className="grid mb-3">
            <label htmlFor="url" className="mb-2">
              Enter URL
            </label>
            <input
              type="url"
              name="url"
              value={url}
              onChange={urlHandler}
              placeholder="Enter url"
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
            />
          </div>
          {/* select your choice */}
          <div className="grid mb-3">
            <label htmlFor="choices" className="mb-2">
              Select your choice
            </label>
            <select
              name="choices"
              value={choice}
              id="choices"
              onChange={choiceHandler}
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
            >
              <option value="">Select your choice</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          {/* about */}
          <div className="grid mb-3">
            <label htmlFor="about" className="mb-2">
              About
            </label>
            <textarea
              name="about"
              value={about}
              onChange={aboutHandler}
              placeholder="Enter your self"
              cols={10}
              rows={5}
              className="border-2 px-2 py-1 text-sm rounded-md focus:outline-none"
            />
          </div>
          {/* submit or reset text */}
          <div className="">
            <p className="font-bold">Submit OR Reset</p>
          </div>
          {/* reset and submit button */}
          <div className="flex justify-around px-[50px] mb-10 mt-5">
            <input
              type="submit"
              value="Submit"
              className="border-2 px-10 rounded-lg py-2 bg-green-600 text-white"
              onClick={submitHandler}
            />
            <input
              type="reset"
              value="Reset"
              className="border-2 px-10 rounded-lg py-2 bg-green-600 text-white"
              onClick={resetHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
