import './Jogos.css';
import { useState } from 'react';

type JogosProps = {
  id: number;
  titulo?: string;
  ano?: string | number;
  imagem?: string;
  estilo?: string;
  plataforma?: string;
  desenvolvedora?: string;
  nota?: number;
  descricao: string;
};

export default function Jogos({
  titulo = 'Título não disponível',
  ano = 'Ano não disponível',
  imagem = 'assets/imagem-padrao.jpg',
  estilo = 'Informação não disponível',
  plataforma = 'Informação não disponível',
  desenvolvedora = 'Informação não disponível',
  nota = 0,
  descricao = 'Informação não disponível',
}: JogosProps) {

  const [status, setStatus] = useState<number | null>(null);

  const [favorito, setFavorito] = useState(false);

  const [notaUsuario, setNotaUsuario] = useState<number>(0);

  const classes = ['nao-jogado', 'jogando', 'zerado'];

  const cardClasse = status !== null ? classes[status] : '';

  const alteraStatus = (valor: number) => {
    setStatus((prev) => (prev === valor ? null : valor));
  };

  return (
    <div className={`jogos ${cardClasse}`}>
      {status === 2 && (
        <div
          className={`estrela-emoji ${favorito ? "ativo" : "inativo"}`}
          onClick={() => {
            setFavorito(!favorito);
          }}
        >
          ⭐
        </div>
      )}
      <div className="Titulo">{titulo}</div>
      <div className="Imagem">
        <img src={imagem} alt={titulo} style={{ maxWidth: '300px' }} />
      </div>

      <div className="info-container">
        <div className="info-item">
          <span>Ano:</span>
          <span>{ano}</span>
        </div>
        <div className="info-item">
          <span>Estilo:</span>
          <span>{estilo}</span>
        </div>
        <div className="info-item">
          <span>Plataforma:</span>
          <span>{plataforma}</span>
        </div>
        <div className="info-item">
          <span>Desenvolvedora:</span>
          <span>{desenvolvedora}</span>
        </div>
        <div className="info-item">
          <span>Nota Geral:</span>
          <span className="Nota">{nota > 0 ? `${nota}/10` : '—'}</span>
        </div>
        {status === 2 && (
          <div className="info-item">
            <span>Sua Nota:</span>
            <div className="nota-usuario">
              {[1, 2, 3, 4, 5].map((estrela) => (
                <span
                  key={estrela}
                  className={estrela <= notaUsuario ? "estrela-escolhida" : "estrela-nao-escolhida"}
                  onClick={() => {
                    if (notaUsuario === estrela) {
                      setNotaUsuario(0);
                    } 
                    else {
                      setNotaUsuario(estrela);
                    }
                  }}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="Descricao">{descricao}</div>

      <div>
        <button
          className={`Botao ${status === 0 ? 'nao-jogado' : ''}`}
          onClick={() => alteraStatus(0)}
        >
          Não jogado
        </button>

        <button
          className={`Botao ${status === 1 ? 'jogando' : ''}`}
          onClick={() => alteraStatus(1)}
        >
          Jogando
        </button>

        <button
          className={`Botao ${status === 2 ? 'zerado' : ''}`}
          onClick={() => alteraStatus(2)}
        >
          Zerado
        </button>
      </div>
    </div>
  );
}