import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Skills() {

	const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const customFunction = (d) => {
    sessionStorage.setItem("skills", JSON.stringify(d));
    const data = JSON.parse(sessionStorage.getItem('skills'))
    // console.log(sessionStorage.key(0))
    console.log(data)
  }

	return (
		<div>
			<form onSubmit={handleSubmit((data) => customFunction(data))}>
      	<table border="1" className="skillTable">
      		<thead>
      			<tr>
      				<th>Select</th>
      				<th>Category</th>
      				<th>Skill</th>
      			</tr>
      		</thead>
      		<tbody>
      			<tr key={0}>
      				<td><input {...register('skill')} type="checkbox" name='skill[]' value="Agile" /></td>
      				<td>Business Analysis</td>
      				<td>Agile</td>
      			</tr>
      			<tr key={1}>
      				<td><input {...register('skill')} type="checkbox" name='skill[]' value="Business Requirement Doc" /></td>
      				<td>Business Analysis</td>
      				<td>Business Requirement Doc</td>
      			</tr>
      			<tr key={2}>
      				<td><input {...register('skill')} type="checkbox" name='skill[]' value="Flow Diagrams" /></td>
      				<td>Business Analysis</td>
      				<td>Flow Diagrams</td>
      			</tr>
      			<tr key={3}>
      				<td><input {...register('skill')} type="checkbox" name='skill[]' value="Wireframe" /></td>
      				<td>Business Analysis</td>
      				<td>Wireframe</td>
      			</tr>
      			<tr key={4}>
      				<td><input {...register('skill')} type="checkbox" name='skill[]' value="Other" /></td>
      				<td>Business Analysis</td>
      				<td>Other</td>
      			</tr>
      		</tbody>
      	</table>
            
      	<input type="submit" name="skills" value="Save" />
    </form>
		</div>
	)
}

export default Skills