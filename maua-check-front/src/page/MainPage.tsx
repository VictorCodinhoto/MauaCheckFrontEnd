import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import NavbarMauaCheck from "../Components/NavBar";

export default function MainPage() {
  const [status, setStatus] = useState<null | boolean>(null);
  const [aluno, setAluno] = useState<{ placa: string; ra: string; nome: string } | null>(null);

  useEffect(() => {
    fetchStatusFromBackend();
  }, []);

  function fetchStatusFromBackend() {
    setStatus(null);
    setAluno(null);
  
    setTimeout(() => {
      const responseFromBackend = Math.random() > 0.5;
      setStatus(responseFromBackend);
  
      if (responseFromBackend) {
        const novoAluno = {
          placa: "ABC1D23",
          ra: "12345678",
          nome: "Victor Codinhoto",
          horario: new Date().toLocaleString("pt-BR"),
        };
        setAluno(novoAluno);
  
        // Atualiza histórico no localStorage
        const historicoSalvo = JSON.parse(localStorage.getItem("historicoVeiculos") || "[]");
        const novoHistorico = [novoAluno, ...historicoSalvo].slice(0, 15); 
        localStorage.setItem("historicoVeiculos", JSON.stringify(novoHistorico));
      }
    }, 6000);
  }

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
    <div className="position-relative vh-100 vw-100 bg-black text-white">
      {/* Seção à esquerda com informações do aluno */}
      {aluno && (
        <div className="position-absolute start-0 w-50 h-100 d-flex justify-content-center align-items-center">
        <div className="text-start">
          <h4 className="mb-3">Placa: {aluno.placa}</h4>
          <h4 className="mb-3">RA: {aluno.ra}</h4>
          <h4 className="mb-3">Nome: {aluno.nome}</h4>
        </div>
      </div>
      
      )}

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
