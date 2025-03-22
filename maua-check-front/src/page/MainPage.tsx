import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";



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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="w-100 h-100 border-0">
        {/* Metade superior com imagem */}
        <div className="h-50 bg-dark d-flex align-items-center justify-content-center">
          <Button onClick={fetchStatusFromBackend}>Quando detecta o carro</Button>
          <img
            src="https://via.placeholder.com/600x300" 
            alt="Imagem do Card"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Metade inferior com status */}
        <Card.Body className={`h-20 text-white bg-${bg} d-flex align-items-center justify-content-center`}>
          <h1>{text}</h1>
        </Card.Body>
      </Card>
    </div>
  );
}
