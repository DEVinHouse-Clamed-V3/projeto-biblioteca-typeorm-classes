import { Router } from 'express';
import Autor from "../entities/Autor"
import { AppDataSource } from '../database/data-source';


const autorRoutes = Router();

const authorRepository = AppDataSource.getRepository(Autor);
/* Implemente aqui os métodos que irão atender as requisições HTTP para a entidade Autor. */

/**
 * Criar um autor
 * POST /authors
 */
autorRoutes.post("/", async (req, res) => {
    try {
      const { name, birthdate, biography, nationality, active } = req.body;
  
      const author = authorRepository.create({
        name,
        birthdate,
        biography,
        nationality,
        active,
      });
  
      const savedAuthor = await authorRepository.save(author);
      return res.status(201).json(savedAuthor);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar o autor" });
    }
  });

/**
 * Buscar todos os autores
 * GET /authors
 */
  autorRoutes.get("/", async (_req, res) => {
    try {
      const authors = await authorRepository.find();
      return res.json(authors);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar autores" });
    }
  });

/**
 * Buscar um autor específico
 * GET /authors/:id
 */
  autorRoutes.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const author = await authorRepository.findOneBy({ id: parseInt(id) });
  
      if (!author) {
        return res.status(404).json({ error: "Autor não encontrado" });
      }
  
      return res.json(author);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar o autor" });
    }
  });

  /**
 * Atualizar as informações de um autor
 * PUT /authors/:id
 */
  autorRoutes.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, birthdate, biography, nationality, active } = req.body;
  
      const author = await authorRepository.findOneBy({ id: parseInt(id) });
  
      if (!author) {
        return res.status(404).json({ error: "Autor não encontrado" });
      }
  
      author.name = name ?? author.name;
      author.birthdate = birthdate ?? author.birthdate;
      author.biography = biography ?? author.biography;
      author.nationality = nationality ?? author.nationality;
      author.active = active ?? author.active;
  
      const updatedAuthor = await authorRepository.save(author);
      return res.json(updatedAuthor);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar o autor" });
    }
  });

/**
 * Deletar um autor
 * DELETE /authors/:id
 */
  autorRoutes.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const author = await authorRepository.findOneBy({ id: parseInt(id) });
  
      if (!author) {
        return res.status(404).json({ error: "Autor não encontrado" });
      }
  
      await authorRepository.remove(author);
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar o autor" });
    }
  });

export default autorRoutes;