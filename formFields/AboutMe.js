import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AboutMe() {
	const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
	return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("name")} placeholder="Your name" name="name" id="name" />
      <select name="role" id="role" {...register("role")} multiple>
        <option value="">Select...</option>
        <option value="business analyst">Business Analyst</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="qa">QA</option>
      </select>
      <input {...register("experience")} placeholder="Total Experience" name="experience" id="experience" />
      <p>{data}</p>
      <input type="submit" name="mydetails" value="Save" />
    </form>
  );
}

export default AboutMe