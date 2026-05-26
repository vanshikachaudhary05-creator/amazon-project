import React from "react";

import headphones from "./headphones.jpg";

import watch from "./smartwatch.jpg";

import laptop from "./laptop.jpg";

import mobile from "./mobile.png";

function App() {

  const products = [

    {

      id: 1,

      name: "Wireless Headphones",

      price: "₹2,499",

      image: headphones,

    },

    {

      id: 2,

      name: "Smart Watch",

      price: "₹4,999",

      image: watch,

    },

    {

      id: 3,

      name: "Laptop",

      price: "₹55,999",

      image: laptop,

    },

    {

      id: 4,

      name: "Mobile",

      price: "₹19,999",

      image: mobile,

    },

  ];

  return (

    <div>

      

      {/* Navbar */}

      <div

        style={{

          backgroundColor: "#131921",

          color: "white",

          padding: "15px",

          display: "flex",

          alignItems: "center",

          justifyContent: "space-between",

        }}

      >

        <h2>Amazon Clone</h2>

        <input

          type="text"

          placeholder="Search products"

          style={{

            width: "40%",

            padding: "10px",

            borderRadius: "5px",

            border: "none",

          }}

        />

        <div>

          <span style={{ marginRight: "20px" }}>Account</span>

          <span>Cart 🛒</span>

        </div>

      </div>

      

      {/* Banner */}

      <div

        style={{

          background:

            "linear-gradient(to right, #f3a847, #ffd814)",

          padding: "40px",

          textAlign: "center",

          fontSize: "30px",

          fontWeight: "bold",

        }}

      >

        Welcome to Amazon Clone

      </div>

      

      {/* Products */}

      <div

        style={{

          display: "grid",

          gridTemplateColumns: "repeat(4, 1fr)",

          gap: "20px",

          padding: "20px",

          backgroundColor: "#eaeded",

        }}

      >

        {products.map((item) => (

          <div

            key={item.id}

            style={{

              backgroundColor: "white",

              padding: "15px",

              borderRadius: "10px",

              textAlign: "center",

              boxShadow: "0 0 10px lightgray",

            }}

          >

            <img

              src={item.image}

              alt={item.name}

              style={{

                width: "180px",

                height: "180px",

                objectFit: "contain",

              }}

            />

            <h3>{item.name}</h3>

            <p

              style={{

                color: "#B12704",

                fontWeight: "bold",

                fontSize: "20px",

              }}

            >

              {item.price}

            </p>

            <button

              style={{

                backgroundColor: "#ffd814",

                border: "none",

                padding: "10px 20px",

                borderRadius: "20px",

                cursor: "pointer",

              }}

            >

              Add to Cart

            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default App;