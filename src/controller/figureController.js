import multer from "multer";

import { salvarFigure,listarFigures,buscarPorId,buscarPorCategoria, removerFigure,alterarFigure,alterarImagem } from "../repository/figureRepository.js";

import { Router } from "express";
let servidor = Router();

const upload = multer({dest:'storage/figure'})

servidor.post('/figure', async(req,resp)=>{
    let figure = req.body;

    let figureInserido = await salvarFigure(figure);
    resp.send(figureInserido);
})

servidor.get('/figure', async(req, resp) =>{
    let listaFigures = await listarFigures();
    resp.send(listaFigures);
})

servidor.get('/figure/id/:id', async(req, resp) =>{
    let listaFigures = await buscarPorId(req.params.id);
    resp.send(listaFigures);
})

servidor.get('/figure/categoria/:categoria', async (req,resp) =>{
  let listaFigures = await buscarPorCategoria(req.params.categoria);
  resp.send(listaFigures);
})

servidor.delete('/figure/:id', async(req,resp)=>{
    let linhasAfetadas = await removerFigure(req.params.id);
    if (linhasAfetadas == 0)
        resp.status(404).send();
      else
        resp.status(202).send();
})

servidor.put('/figure/:id', async (req,resp) =>{
    let id = req.params.id;
    let figure = req.body;

    let linhasAfetadas = await alterarFigure(figure,id);
    if (linhasAfetadas == 0)
        resp.status(404).send();
      else
        resp.status(202).send();
})

servidor.put('/figure/imagem/:id', upload.single('imagem'), async (req, resp)=>{
    let id = req.params.id;
    let imagem = req.file.path;

    let linhasAfetadas = await alterarImagem(id, imagem);
    if (linhasAfetadas == 0)
        resp.status(404).send();
      else
        resp.status(202).send();
})

export default servidor;