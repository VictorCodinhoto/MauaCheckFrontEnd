import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import NavbarMauaCheck from "../Components/NavBar";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";



export default function Relatorio(){
    const [historico, setHistorico] = useState<Veiculo[]>([]);
    interface Veiculo {
        placa: string;
        ra: string;
        nome: string;
        horario: string;
      }
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem("historicoVeiculos") || "[]");
        setHistorico(dados);
    }, []);
    const exportarParaExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(historico);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Relatórios");
    
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, "relatorio-veiculos.xlsx");
      };
    return (
        <div className="container mt-5 text-white">
          <h2 className="mb-4">Últimos 15 Veículos Cadastrados</h2>
          <div className="table-responsive">
            <table className="table table-dark table-striped table-bordered">
              <thead>
                <tr>
                  <th>Placa</th>
                  <th>RA</th>
                  <th>Nome</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                {historico.map((v, index) => (
                  <tr key={index}>
                    <td>{v.placa}</td>
                    <td>{v.ra}</td>
                    <td>{v.nome}</td>
                    <td>{v.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button className="btn btn-success d-flex align-items-center gap-2" onClick={exportarParaExcel}>
            Transferir
            <img src={"https://cdn-icons-png.flaticon.com/512/732/732220.png"} alt="Excel" style={{ width: "20px", height: "20px" }} />
            </Button>
        </div>
    );
}
