import React, { useEffect, useState } from 'react';

function FetchProducts() {
  const[data,setData]=useState([]);
  useEffect(() => {
    async function fetchData() {
      const loader = document.getElementById("loader");
      const disp = document.getElementById("disp");
      try {
        loader.innerHTML ='<h2 style="color:red">Loading Data...</h2>';
        const res = await fetch("https://dummyjson.com/products");
        const jsonData = await res.json();
        //console.log(jsonData);
        let table = `<table border=2px>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
            ${jsonData.products.map((ele) => `
                  <tr>
                    <td><img src="${ele.thumbnail}" height="200" width="200" /></td>
                    <td>${ele.title}</td>
                    <td>${ele.description}</td>
                    <td>${ele.price}</td>
                    <td>${ele.category}</td>
                    <td>
                    <button onclick=${cartData}>Add to cart</button>
                    </td>
                  </tr>`
                )}
          </table>`;
        disp.innerHTML = table;
      } catch (e) {
        console.log("Error is " + e);
      } finally {
        loader.innerHTML = "";
      }
    }
    fetchData();
  }, []);


  function cartData(element){

  }

  return (
    <div>Fetch Product
      <div id="loader"></div>
      <div id="disp"></div>
    </div>
  );
}

export default FetchProducts;