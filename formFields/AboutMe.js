import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AboutMe() {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const customFunction = (d) => {
    sessionStorage.setItem("aboutme", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('aboutme'))
    console.log(sessionStorage.key(0))
    console.log(data)
  }

  // const addBulletPoint = () => {
  //   const inp = document.createElement("input");
  //   inp.setAttribute('type', 'text');
  //   inp.setAttribute('name', 'points[]');
  //   inp.setAttribute('placeholder', 'Write in bulleted list');
  //   inp.setAttribute('object', '{...register(about)}');
  //   document.querySelector(".bulletPoints").appendChild(inp);
  // }


	return (
    <form onSubmit={handleSubmit((data) => customFunction(data))}>
      <textarea {...register('about')} name="about" placeholder="Write something about yourself" id="about" cols="30" rows="10"></textarea> 
      <div className="bulletPoints">
        <input {...register('points')} type="text" name="points[]" placeholder="Write in bulleted list" />
      </div>
            
      <input type="submit" name="aboutme" value="Save" />
    </form>
  );
}

export default AboutMe