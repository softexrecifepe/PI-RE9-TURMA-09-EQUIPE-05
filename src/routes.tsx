"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index"
import Sobre from "./pages/sobre/index"
import Vagas from "./pages/vagas/index"
import Cadastro from "./pages/cadastro/index"
import Contato from "./pages/contato/index"

export default function AppRoutes() {
    return (
        <BrowserRouter> 
            <Routes>         
                <Route path="/" element={<Home/>}></Route>  
                <Route path="/sobre" element={<Sobre/>}></Route> 
                <Route path="/vagas" element={<Vagas/>}></Route> 
                <Route path="/cadastro" element={<Cadastro/>}></Route> 
                <Route path="/contato" element={<Contato/>}></Route> 
            </Routes>                
        </BrowserRouter>
    )
}