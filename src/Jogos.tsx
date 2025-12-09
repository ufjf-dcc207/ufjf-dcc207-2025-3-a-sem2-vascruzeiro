import './Jogos.css';
import { useState } from 'react';

type Status = 'nao-jogado' | 'jogando' | 'jogado'

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
}

export default function Jogos ({
  titulo = 'Título não disponível',
  ano = 'Ano não disponível',
  imagem = 'assets/imagem-padrao.jpg',
  estilo = 'Informação não disponível',
  plataforma = 'Informação não disponível',
  desenvolvedora = 'Informação não disponível',
  nota = 0,
  descricao = 'Informação não disponível',
}: JogosProps) {

  const [joguei, setJoguei] = useState(0);

  const [clicado0, setClicado0] = useState(false);
  const [clicado1, setClicado1] = useState(false);
  const [clicado2, setClicado2] = useState(false);

  const classes = [
    'nao-jogado',
    'jogando',
    'zerado'
  ];

  return (
    <div className={`jogos ${classes[joguei]}`}>
      <div className='Titulo'>{titulo}</div>
      <div className='Imagem'><img src={imagem} alt={titulo} style={{ maxWidth: '300px' }}/></div>
       <div className='info-container'>
        <div className='info-item'>
          <span>Ano:</span>
          <span>{ano}</span>
        </div>
        <div className='info-item'>
          <span>Estilo:</span>
          <span>{estilo}</span>
        </div>
        <div className='info-item'>
          <span>Plataforma:</span>
          <span>{plataforma}</span>
        </div>
        <div className='info-item'>
          <span>Desenvolvedora:</span>
          <span>{desenvolvedora}</span>
        </div>
        <div className='info-item'>
          <span>Nota:</span>
          <span className='Nota'>
            {nota > 0 ? `${nota}/10` : '—'}
          </span>
        </div>
      </div>
      <div className='Descricao'>{descricao}</div>
      <div>
        <button 
          className={`Botao ${clicado0? 'nao-jogado' : ''}`}
          onClick={()=>
          {setJoguei(0);
           setClicado0(!clicado0);
           setClicado1(false);
           setClicado2(false);
          }}>
          Quero jogar
      </button>
      <button 
        className={`Botao ${clicado1? 'jogando' : ''}`}
        onClick={()=>
        {setJoguei(1);
         setClicado0(false);
         setClicado1(!clicado1);
         setClicado2(false);

        }}>
        Jogando
      </button>
      <button 
        className={`Botao ${clicado2? 'zerado' : ''}`}
        onClick={()=>
        {setJoguei(2);
         setClicado0(false);
         setClicado1(false);
         setClicado2(!clicado2);
        }}>
        Zerado
      </button>
      </div>
    </div>
  )
}