import React, { useEffect } from 'react';

function FetchProducts() {
  useEffect(() => {
    async function fetchData() {
      const loader = document.getElementById("loader");
      const disp = document.getElementById("disp");

      try {
        loader.innerHTML = '<h2 style="color:red">Loading Data...</h2>';

        const serverData = await fetch("https://dummyjson.com/products");
        const jsonData = await serverData.json();

        let table = `
          <table border="2">
            ${jsonData
              .map(
                (ele) => `
                  <tr>
                    <td>
                      <img src="${ele.image}" height="200" width="200" />
                    </td>
                    <td>${ele.title}</td>
                    <td>${ele.description}</td>
                    <td>${ele.price}</td>
                    <td>${ele.category}</td>
                  </tr>
                `
              )
              .join("")}
          </table>
        `;

        disp.innerHTML = table;
      } catch (e) {
        console.log("Error is " + e);
      } finally {
        loader.innerHTML = "";
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div id="loader"></div>
      <div id="disp"></div>
    </div>
  );
}

export default FetchProducts;