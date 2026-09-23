import React, { useState } from 'react';

function NameChange() {
    const [name, setName] = useState("XYZ");
    const [college, setCollege] = useState("ABES");
    function changeName() {
        setName("Roshni");
    }
    function changeCollege() {
        setCollege("ABES Engineering College Ghaziabad");
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>College: {college}</h2>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeCollege}>Change College</button>
        </div>
    );
}
export default NameChange;