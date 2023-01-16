import React from "react";

const InfoCard = () => {
  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: "1px solid black",
        borderRadius: 10,
        fontFamily: "Rubik,sans-serif",
        fontWeight: "bold",
        fontSize: "13px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "20%",
          width: "100%",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            position: "absolute",
            width: "20%",
            top: "-25%",
            left: "-5%",
            border: "1px solid black",
            borderRadius: 100,
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15%",
            }}
          >
            text
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            position: "absolute",
            width: "20%",
            top: "-25%",
            right: "-5%",
            border: "1px solid black",
            borderRadius: 100,
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15%",
            }}
          >
            text{" "}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          height: "50%",
          width: "100%",
          border: "1px solid black",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          justifyContent: "center",
          position: "absolute",
          top: "0%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          border: "1px solid black",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "50%",
        }}
      >
        test
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          border: "1px solid black",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "60%",
        }}
      >
        test
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          border: "1px solid black",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "70%",
        }}
      >
        test
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "10%",
          width: "100%",
          border: "1px solid black",
          fontFamily: "Rubik,sans-serif",
          fontWeight: "bold",
          fontSize: "13px",
          position: "absolute",
          top: "80%",
        }}
      >
        test
      </div>
    </div>
  );
};

export default InfoCard;
