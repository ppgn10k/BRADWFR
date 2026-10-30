import { useState } from 'react';

function App() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const buscarCEP = async (e) => {
    e.preventDefault();
    
    const cepLimpo = cep.replace(/\D/g, '').trim();

    if (cepLimpo.length !== 8) {
      setErro('Por favor, digite um CEP válido com 8 dígitos.');
      return;
    }

    setCarregando(true);
    setErro('');
    setDados(null);

    try {
      // Usando o fetch nativo do navegador para evitar erros de biblioteca
      const response = await fetch(`https://viacep.com.br{cepLimpo}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        setErro('CEP não encontrado. Tente outro número.');
      } else {
        setDados(data);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro('Erro de conexão com o servidor. Verifique sua rede ou tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#121214', minHeight: '100vh', color: '#e1e1e6', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#202024', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px' }}>
        
        <h1 style={{ textAlign: 'center', color: '#00b37e', marginBottom: '10px', fontSize: '1.8rem' }}>Consulta de CEP</h1>
        <p style={{ textAlign: 'center', color: '#8d8d99', marginBottom: '25px', fontSize: '0.9rem' }}>Busque endereços completos de forma automática</p>
        
        <form onSubmit={buscarCEP} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="text" 
            placeholder="Ex: 01001000" 
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength={8}
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #323238', backgroundColor: '#121214', color: '#fff', fontSize: '1rem', outline: 'none' }}
          />
          <button 
            type="submit" 
            disabled={carregando}
            style={{ backgroundColor: '#00b37e', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
          >
            {carregando ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {erro && (
          <div style={{ color: '#f75a68', backgroundColor: '#291e20', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.9rem', borderLeft: '4px solid #f75a68' }}>
            {erro}
          </div>
        )}

        {dados && (
          <div style={{ marginTop: '20px', borderTop: '1px solid #323238', paddingTop: '20px' }}>
            <h2 style={{ fontSize: '1.4rem', color: '#00b37e', marginBottom: '15px' }}>Resultado para CEP {dados.cep}</h2>
            
            <div style={{ backgroundColor: '#121214', padding: '15px', borderRadius: '6px', border: '1px solid #323238' }}>
              <p style={{ margin: '8px 0' }}><strong>Logradouro:</strong> {dados.logradouro || 'Não informado'}</p>
              <p style={{ margin: '8px 0' }}><strong>Bairro:</strong> {dados.bairro || 'Não informado'}</p>
              <p style={{ margin: '8px 0' }}><strong>Cidade:</strong> {dados.localidade}</p>
              <p style={{ margin: '8px 0' }}><strong>Estado (UF):</strong> {dados.uf}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
