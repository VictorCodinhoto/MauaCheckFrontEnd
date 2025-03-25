import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";
import NavbarMauaCheck from "../Components/NavBar";



export default function MainPage() {
    const [status, setStatus] = useState<null | boolean>(null);
    useEffect(() => {
        fetchStatusFromBackend()
        }, []);

    function fetchStatusFromBackend(){
        setStatus(null); 
        setTimeout(() => {
            const responseFromBackend = Math.random() > 0.5; 
            setStatus(responseFromBackend);
            }, 6000); 
          };
   
    
    const getCardProps = () => {
        if (status === true) {
          return { bg: "success", text: "Carro cadastrado" };
        } else if (status === false) {
          return { bg: "danger", text: "Carro não cadastrado" };
        } else {
          return { bg: "dark", text: "Carregando..." };
        }
      };
      
    
      const { bg, text } = getCardProps();
    
  return (
    <div className="position-relative vh-100">


    {/* Card que ocupa metade direita */}
    <div className="position-absolute end-0 w-50" style={{ height: "100vh", top: "0px" }}>
      <Card className="h-100 w-100 border-0 shadow-lg">
        {/* Parte superior com imagem e botão */}
        <div className="d-flex flex-column align-items-center justify-content-center h-50 bg-dark">
          <Button onClick={fetchStatusFromBackend}>Quando detecta o carro</Button>
        </div>

        {/* Parte inferior com status */}
        <Card.Body className={`h-50 text-white bg-${bg} d-flex align-items-center justify-content-center`}>
          <h1 className="text-center">{text}</h1>
        </Card.Body>
      </Card>
    </div>
  </div>
  );
}
