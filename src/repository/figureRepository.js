import con from "./connection.js";

export async function salvarFigure(figure) {
  let comando = `
    insert into figure (nome, preco, altura, largura, categoria) 
                  values (?, ?, ?, ?, ?)
  `

  let resp = await con.query(comando, [figure.nome, figure.preco, figure.altura, figure.largura, figure.categoria])
  let info = resp[0];

  figure.id = info.insertId;
  return figure;
}

export async function listarFigures() {
  let comando = `
      select idFigure           id,
              nome              nome,
              preco             preco,
              altura            altura,
              largura           largura,
              categoria         categoria,
              imagem            imagem
       from figure
  `

  let resp = await con.query(comando, []);
  let linhas = resp[0];

  return linhas;

}

export async function buscarPorCategoria(categoria) {
  let comando = `
  select idFigure           id,
          nome              nome,
          preco             preco,
          altura            altura,
          largura           largura,
          categoria         categoria,
          imagem            imagem
   from figure
   where categoria = ?
`
  let resp = await con.query(comando, [categoria]);
  let linhas = resp[0];

  return linhas;
}

export async function buscarPorId(id) {
  let comando = `
      select idFigure           id,
              nome              nome,
              preco             preco,
              altura            altura,
              largura           largura,
              categoria         categoria,
              imagem            imagem
       from figure
       where idFigure = ?
  `

  let resp = await con.query(comando, [id]);
  let linhas = resp[0];

  return linhas[0];
}

export async function removerFigure(id) {
  let comando = `
      delete from figure where idFigure = ?
    `

  let resp = await con.query(comando, [id]);
  let info = resp[0];

  return info.affectedRows;
}

export async function alterarFigure(figure, id) {
  let comando = `
      update figure
         set nome = ?,
             preco = ?,
             altura = ?,
             largura = ?,
             categoria = ?
       where idFigure = ?
    `

  let resp = await con.query(comando, [figure.nome, figure.preco, figure.altura, figure.largura, figure.categoria, id]);
  let info = resp[0];

  return info.affectedRows;
}

export async function alterarImagem(id, caminho) {
  let comando = `
      update figure
         set imagem = ?
       where idFigure = ?
    `

  let resp = await con.query(comando, [caminho, id]);
  let info = resp[0];

  return info.affectedRows;
}