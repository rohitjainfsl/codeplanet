import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Fetching() {

	const [data, setData] = useState({})


	//whenever we want a piece of code to run on a specific condition/ variable, we use useEffect

	useEffect(() => {
		axios.get('https://dummyjson.com/products/1')
		.then((response) => {
			// console.log(response.data)
			setData(response.data)
		})
		.catch((err) => {
			console.log(err)
		})	
	}, []);

	// console.log(data)


	// useEffect(() => {
	// 	async function fetchData(){
	// 		axios.get('https://dummyjson.com/products/1')
	// 	  .then(function (response) {
	// 	    console.log(response);		    
	// 	  })
	// 	  .catch(function (error) {
	// 	    console.log(error);
	// 	  }); 
	// 	}
	// 	fetchData()
	// }, [])

	

  // console.log(data)

	return (
		<div>
			<h1>Fetching data via axios</h1>
			<table border="1">
				<thead>
					<tr>
						<th>ID</th>
						<th>Image</th>
						<th>Title</th>
						<th>Price</th>
						<th>Brand</th>
						<th>Category</th>
					</tr>	
				</thead>
				<tbody>			
					<tr>
						<td>{data.id}</td>
						<td><img src={data.thumbnail} alt={data.title} /></td>
						<td>{data.title}</td>
						<td>{data.price}</td>
						<td>{data.brand}</td>
						<td>{data.category}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Fetching