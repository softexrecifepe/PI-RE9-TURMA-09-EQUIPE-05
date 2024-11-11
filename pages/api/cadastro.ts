import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

// Definindo um tipo para os dados do usuário
interface Usuario {
  nome: string;
  sobreNome: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  senha: string;
}

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST, // Deve ser "127.0.0.1" ou "localhost"
      user: process.env.DB_USER, // Nome do usuário do banco
      password: process.env.DB_PASSWORD, // Senha do banco
      database: process.env.DB_NAME, // Nome do banco
      port: Number(process.env.DB_PORT), // 3306 para MySQL
    });
    console.log("Conexão com o banco de dados bem-sucedida.");
    return connection;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw new Error("Erro ao conectar ao banco de dados");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Código para inserção de novo usuário
    const {
      nome,
      sobreNome,
      email,
      telefone,
      cep,
      endereco,
      bairro,
      cidade,
      estado,
      senha,
    }: Usuario = req.body;

    try {
      const db = await connectToDatabase();
      const hashedPassword = await bcrypt.hash(senha, 10);
      const query = `
        INSERT INTO usuarios (nome, sobrenome, email, telefone, cep, endereco, bairro, cidade, estado, senha)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        nome,
        sobreNome,
        email,
        telefone,
        cep,
        endereco,
        bairro,
        cidade,
        estado,
        hashedPassword,
      ];
      await db.execute(query, values);
      res.status(200).json({ message: "Cadastro realizado com sucesso!" });
    } catch (error) {
      console.error("Erro ao inserir dados:", error);
      res.status(500).json({ error: "Erro ao cadastrar usuário." });
    }
  } else if (req.method === "GET") {
    // Código para listagem de usuários
    try {
      const db = await connectToDatabase();
      const [rows] = await db.execute(
        "SELECT nome, sobrenome, email, telefone, cep, endereco, bairro, cidade, estado FROM usuarios"
      );
      res.status(200).json(rows);
    } catch (error) {
      console.error("Erro ao buscar registros:", error);
      res.status(500).json({ error: "Erro ao buscar usuários." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}
