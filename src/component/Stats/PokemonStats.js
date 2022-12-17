import React from "react";
import StatBar from "./StatBar";

//The idea is to use two lists(Statname,Statvalue) as inputs of PokemonStats component. I'm using raw values by the moment

const PokemonStats = () => {
    return (
        <table 
            style={{
                color: "gray",
                fontFamily: "Rubik,sans-serif",
                fontWeight: "bold",
                fontSize: "13px",
            }} cellPadding ="3px" >
            <tr>
                <td align="right" >Hp</td>
                <td style={{paddingLeft:"20px",paddingRight:"20px", color:"black", fontWeight:"lighter"}}>45</td>
                <td width={180}><StatBar value={45} /></td>
            </tr>
            <tr>
                <td align="right">Attack</td>
                <td style={{paddingLeft:"20px",paddingRight:"20px", color:"black", fontWeight:"lighter"}}>49</td>
                <td><StatBar value={49} /></td>
            </tr>
            <tr>
                <td align="right">Defense</td>
                <td style={{paddingLeft:"20px",paddingRight:"20px", color:"black", fontWeight:"lighter"}}>49</td>
                <td><StatBar value={49} /></td>
            </tr>
            <tr>
                <td align="right">Special Attack</td>
                <td style={{paddingLeft:"20px",paddingRight:"20px", color:"black", fontWeight:"lighter"}}>65</td>
                <td><StatBar value={65} /></td>
            </tr>
            <tr>
                <td align="right">Special Defense</td>
                <td style={{paddingLeft:"20px",paddingRight:"20px", color:"black", fontWeight:"lighter"}}>65</td>
                <td><StatBar value={65} /></td>
            </tr>
            <tr>
                <td align="right">Speed</td>
                <td style={{paddingLeft:"20px",paddingRight:"20px", color:"black", fontWeight:"lighter"}}>45</td>
                <td><StatBar value={45} /></td>
            </tr>
        </table>
    );
}

export default PokemonStats
