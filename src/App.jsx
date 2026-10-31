
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const buscarCEP = async (e) => {
    e.preventDefault();

    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido com 8 dígitos.');
      return;
    }

    setCarregando(true);
    setErro('');
    setDados(null);

    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      if (response.data.erro) {
        setErro('CEP não encontrado.');
      } else {
        setDados(response.data);
      }
    } catch (error) {
      console.error(error);
      setErro('Erro ao consultar o CEP. Verifique sua conexão.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#121214',
      minHeight: '100vh',
      color: '#e1e1e6',
      fontFamily: 'sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: '#202024',
        padding: '30px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h1 style={{ textAlign: 'center', color: '#00b37e' }}>
          Consulta de CEP
        </h1>

        <p style={{ textAlign: 'center', color: '#8d8d99' }}>
          Busque endereços completos automaticamente
        </p>

        <form onSubmit={buscarCEP}>
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength={8}
            style={{
              padding: '12px',
              width: '55%',
              backgroundColor: '#121214',
              color: '#fff',
              border: '1px solid #323238',
              borderRadius: '6px'
            }}
          />

          <button
            type="submit"
            disabled={carregando}
            style={{
              padding: '12px',
              marginLeft: '8px',
              backgroundColor: '#00b37e',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {carregando ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {erro && (
          <p style={{ color: '#f75a68' }}>{erro}</p>
        )}

        {dados && (
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#00b37e' }}>
              Resultado: {dados.cep}
            </h2>
            <p><strong>Logradouro:</strong> {dados.logradouro || 'Não informado'}</p>
            <p><strong>Bairro:</strong> {dados.bairro || 'Não informado'}</p>
            <p><strong>Cidade:</strong> {dados.localidade}</p>
            <p><strong>Estado:</strong> {dados.uf}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
