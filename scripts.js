// Dados dos stakeholders
const stakeholders = [
    {
        id: 1,
        icone: "👔",
        titulo: "VP de Recursos Humanos da MegaCorp",
        resumo: "Executiva que propõe a implementação do sistema para modernizar RH e demonstrar resultados ao board.",
        objetivoPrincipal: "Liderar a transformação digital do departamento de RH, comprovar que inovações tecnológicas trazem resultados mensuráveis (redução de custos, aumento de eficiência) e consolidar sua posição como líder inovadora na empresa, garantindo promoção futura e reconhecimento no mercado.",
        argumentos: [
            "Dados do projeto piloto mostram 70% de aumento na eficiência e economia anual de R$ 2,8 milhões, números que beneficiam toda a organização",
            "Sistemas de IA eliminam vieses humanos inconscientes como favoritismo, atratividade física e networking privilegiado",
            "Padronização garante que todos os candidatos sejam avaliados pelos mesmos critérios objetivos, tornando processo mais justo",
            "Profissionais de RH serão liberados de tarefas repetitivas para focar em desenvolvimento humano, retenção de talentos e cultura organizacional",
            "Empresa precisa se manter competitiva: concorrentes já estão adotando tecnologias similares e atraindo talentos mais rapidamente",
            "Sistema pode ser auditado e ajustado continuamente; se houver problemas, temos controle para corrigi-los rapidamente"
        ]
    },
    {
        id: 2,
        icone: "👩🏾‍💼",
        titulo: "Candidata Rejeitada pelo Sistema",
        resumo: "Profissional qualificada eliminada automaticamente sem entender os motivos da rejeição.",
        objetivoPrincipal: "Compreender por que foi rejeitada apesar de atender todos os requisitos da vaga, garantir que teve avaliação justa e não foi discriminada por características pessoais, e conseguir oportunidade de demonstrar seu valor além dos algoritmos.",
        argumentos: [
            "Tenho todas as qualificações técnicas exigidas na descrição da vaga, mas fui eliminada em 48 horas sem feedback específico ou chance de me explicar",
            "Sou mulher negra, mãe solo, formada em universidade pública - o sistema pode ter me penalizado por marcadores sociais disfarçados de 'fit cultural'",
            "Minha trajetória profissional é não-linear por necessidades de cuidado familiar; algoritmos privilegiam currículos 'perfeitos' que refletem privilégios",
            "Gravação de vídeo não captura minha real capacidade: estava nervosa, minha internet caiu duas vezes, não pude demonstrar como trabalho em equipe",
            "Impossível contestar decisão de uma IA - com recrutador humano, eu poderia pedir reconsideração, mostrar portfólio, explicar contextos",
            "Empresas terceirizam responsabilidade para tecnologia: quando denuncio possível discriminação, dizem 'o sistema é neutro', mas ninguém me dá explicações"
        ]
    },
    {
        id: 3,
        icone: "🔬",
        titulo: "Cientista de Dados Especialista em Viés Algorítmico",
        resumo: "Pesquisadora que alerta para riscos técnicos de discriminação automatizada em sistemas de IA.",
        objetivoPrincipal: "Demonstrar com evidências científicas que sistemas de IA para recrutamento frequentemente reproduzem e amplificam desigualdades sociais existentes, defender necessidade de auditoria externa independente e regulamentação rigorosa, e proteger grupos historicamente marginalizados de novas formas de discriminação.",
        argumentos: [
            "Estudos acadêmicos comprovam que sistemas similares discriminam mulheres, negros, pessoas acima de 40 anos e pessoas com deficiência mesmo sem intenção explícita",
            "'Dados históricos' refletem discriminações passadas: se empresa sempre contratou determinado perfil, IA aprende que esse é o 'padrão de sucesso'",
            "Análise de vídeo identifica marcadores raciais, de gênero e classe através de sotaque, expressões culturais, iluminação de casa, qualidade da câmera",
            "Termo 'eliminar viés humano' é marketing enganoso - substitui viés individual por viés sistêmico em escala industrial, mais difícil de detectar e contestar",
            "Empresa não tem transparência sobre funcionamento do algoritmo: sem auditoria externa, impossível garantir fairness; fornecedor protege 'segredo comercial'",
            "Casos reais documentados: Amazon descartou sistema similar em 2018 por discriminar mulheres; outros sistemas penalizam nomes 'étnicos' e universidades públicas"
        ]
    },
    {
        id: 4,
        icone: "🏢",
        titulo: "CEO da MegaCorp Brasil",
        resumo: "Líder máximo focado em resultados financeiros, competitividade e satisfação dos acionistas.",
        objetivoPrincipal: "Maximizar eficiência operacional e lucratividade da empresa, demonstrar aos acionistas que está na vanguarda da inovação tecnológica, e evitar crises de imagem ou processos judiciais que possam prejudicar valor de mercado e reputação corporativa.",
        argumentos: [
            "Investimento de R$ 4,5 milhões retorna em menos de 2 anos; economias anuais de R$ 2,8 milhões vão direto para o resultado da companhia",
            "Velocidade é vantagem competitiva crítica: contratar talentos 60% mais rápido que concorrentes define quem ganha projetos estratégicos",
            "Temos compromisso público com diversidade e inclusão; relatórios anuais mostram metas ESG - sistema pode ajudar a atingi-las de forma mensurável",
            "Riscos legais existem em qualquer processo de contratação; assessoria jurídica garante que estamos em conformidade com LGPD e leis trabalhistas",
            "Não podemos ficar para trás enquanto concorrentes globais já usam IA em tudo - nossa sobrevivência depende de inovação constante",
            "Se surgir problema real (não especulação), temos recursos e expertise para corrigi-lo; somos empresa responsável e transparente"
        ]
    },
    {
        id: 5,
        icone: "⚖️",
        titulo: "Advogada Trabalhista e de Direitos Digitais",
        resumo: "Profissional que defende trabalhadores e alerta para violações legais e de direitos fundamentais.",
        objetivoPrincipal: "Garantir que trabalhadores e candidatos tenham seus direitos fundamentais respeitados no uso de tecnologias, assegurar conformidade legal rigorosa com LGPD e legislação trabalhista, e construir jurisprudência que responsabilize empresas por discriminação algorítmica.",
        argumentos: [
            "LGPD proíbe decisões automatizadas que afetem significativamente direitos sem revisão humana - rejeição automática pode violar Art. 20 da lei",
            "Candidato tem direito legal de saber critérios de avaliação e contestar decisão (princípio do contraditório); sistema opaco impede isso",
            "Análise de características biométricas (face, voz) são dados sensíveis que requerem consentimento explícito e específico, não genérico",
            "Discriminação algorítmica é discriminação real: se sistema rejeita mais mulheres ou negros, empresa é responsável mesmo que não intencional",
            "Armazenamento de dados por 5 anos sem justificativa clara viola princípio da minimização; compartilhamento com fornecedor aumenta riscos",
            "Já estamos preparando ações coletivas contra empresas que usam sistemas similares; precedentes judiciais estão se formando contra essas práticas"
        ]
    },
    {
        id: 6,
        icone: "👨‍💼",
        titulo: "Recrutador Sênior com 15 Anos de Experiência",
        resumo: "Profissional de RH que teme perder emprego e acredita que intuição humana é insubstituível.",
        objetivoPrincipal: "Preservar relevância profissional e emprego da equipe de recrutamento, defender valor da avaliação humana no processo seletivo, e garantir que candidatos sejam tratados com dignidade e não como dados processáveis por máquinas.",
        argumentos: [
            "Melhores contratações que fiz na carreira foram pessoas que 'no papel' não eram ideais, mas tinham algo especial que algoritmo nunca detectaria",
            "Recrutamento é sobre conexão humana, entender contextos de vida, potencial de crescimento - IA não capta resiliência, criatividade genuína ou fit cultural real",
            "Empresa demitirá metade do time de RH após implementação; estamos usando IA para contratar enquanto destruímos carreiras de quem trabalhou aqui por anos",
            "Candidatos já reclamam que processo é frio e desumano; isso prejudica employer branding e afasta talentos que valorizam cultura humanizada",
            "Quando sistema errar (e vai errar), não teremos expertise humana para identificar e corrigir rapidamente; estamos criando dependência perigosa",
            "IA pode triar em volume, mas entrevista final ainda é humana - por que não investir em treinar recrutadores contra vieses em vez de substituí-los?"
        ]
    },
    {
        id: 7,
        icone: "💼",
        titulo: "Investidor e Entusiasta de Tecnologia",
        resumo: "Empreendedor que vê IA como inevitável e defende rápida adoção de inovações disruptivas.",
        objetivoPrincipal: "Promover adoção ampla de tecnologias de IA para transformar mercado de trabalho, defender que benefícios da automação superam custos de transição, e garantir retorno sobre investimentos em startups de HR tech.",
        argumentos: [
            "Automação é tendência irreversível; resistir é lutar contra o futuro - melhor adaptar-se rapidamente e liderar mudança do que ficar obsoleto",
            "IA democratiza acesso a oportunidades: candidato de qualquer lugar pode participar sem precisar viajar, gastar com roupa ou ter networking privilegiado",
            "Empresas que adotam IA crescem mais rápido, contratam melhor e lucram mais - isso gera mais empregos no médio prazo, mesmo com ajustes no curto",
            "Problemas técnicos são temporários e resolvíveis; cada iteração melhora o sistema - primeiras críticas a carros, aviões e internet também previam catástrofes",
            "Países asiáticos e empresas americanas já usam massivamente; se Brasil resistir por medo, ficaremos ainda mais atrasados tecnologicamente",
            "Mercado de 'auditoria de IA' e 'ética algorítmica' está crescendo - própria tecnologia cria novos empregos qualificados que substituem os antigos"
        ]
    },
    {
        id: 8,
        icone: "👩‍⚖️",
        titulo: "Representante do Ministério Público do Trabalho",
        resumo: "Procuradora responsável por fiscalizar cumprimento de direitos trabalhistas e combater discriminação.",
        objetivoPrincipal: "Investigar se sistema viola direitos trabalhistas e princípios constitucionais de igualdade, assegurar que empresas não usem tecnologia para mascarar práticas discriminatórias, e estabelecer precedentes regulatórios para uso ético de IA em relações de trabalho.",
        argumentos: [
            "MPT tem poder de instaurar inquérito civil e exigir auditoria técnica completa do algoritmo, incluindo dados de treinamento e lógica de decisão",
            "Se sistema resulta em impacto desproporcional contra grupos protegidos (mulheres, negros, pessoas com deficiência), configura discriminação indireta ilegal",
            "Constituição garante igualdade material, não apenas formal; empresas não podem se esconder atrás de 'neutralidade técnica' para violar direitos fundamentais",
            "Estudos de caso de sistemas similares mostram padrões: precisamos de regulação preventiva, não apenas reativa após danos massivos já causados",
            "Termo de Ajustamento de Conduta pode exigir: revisão humana obrigatória, transparência de critérios, compensação para discriminados, auditoria periódica",
            "Interesse público exige que Estado regule inovações que afetam direito ao trabalho; liberdade empresarial não é absoluta quando colide com direitos sociais"
        ]
    },
    {
        id: 9,
        icone: "📰",
        titulo: "Jornalista Investigativa de Tecnologia",
        resumo: "Profissional de imprensa investigando impactos sociais de sistemas de IA e responsabilidade corporativa.",
        objetivoPrincipal: "Revelar ao público como decisões tecnológicas afetam vidas reais, expor práticas corporativas questionáveis, e pressionar empresas e governos por transparência e accountability no uso de IA.",
        argumentos: [
            "Investigação revelou que 68% dos candidatos eliminados pelo sistema piloto eram mulheres ou negros, proporção desproporcional ao pool de candidatos",
            "Documentos internos vazados mostram que empresa sabia de alertas sobre viés, mas priorizou economia de custos sobre correções éticas",
            "Fornecedora TalentAI Inc. já foi processada em 3 países por discriminação; MegaCorp não fez due diligence adequada ou escolheu ignorar histórico",
            "Candidatos relatam experiências humilhantes: sistema rejeitou deficientes visuais por 'contato visual inadequado', penalizou sotaques regionais",
            "Cláusula permitindo uso de dados para 'aprimoramento' significa que perfis de brasileiros estão treinando IA em servidor americano sem controle",
            "Público tem direito de saber como decisões que afetam suas vidas são tomadas; empresas que resistem à transparência têm algo a esconder"
        ]
    },
    {
        id: 10,
        icone: "👨‍💻",
        titulo: "Jovem Desenvolvedor que Trabalhou no Projeto",
        resumo: "Engenheiro de software que ajudou a construir o sistema e agora questiona implicações éticas de seu trabalho.",
        objetivoPrincipal: "Compartilhar conhecimento interno sobre funcionamento e limitações do sistema, alertar sobre decisões de design que priorizaram performance sobre fairness, e reconciliar ambição profissional com responsabilidade ética sobre impacto de seu código.",
        argumentos: [
            "Fui instruído a otimizar para 'replicar decisões de contratação históricas bem-sucedidas', o que por definição replica vieses do passado",
            "Testamos modelo apenas com métricas técnicas (acurácia, velocidade); ninguém pediu análise de impacto em grupos demográficos diferentes",
            "Sistema usa características correlacionadas com raça/gênero sem dizer: nome, CEP, universidade, padrões linguísticos são proxies estatísticos",
            "Análise facial foi treinada principalmente com rostos brancos; precisão cai 30% em rostos negros - viés técnico documentado na literatura científica",
            "Pressionamos por mais testes éticos, mas cronograma e orçamento venceram; management disse que 'melhorias viriam depois do lançamento'",
            "Jovens desenvolvedores como eu enfrentam dilema: tecnologia paga bem, mas posso estar construindo ferramentas que prejudicam pessoas - preciso de diretrizes claras"
        ]
    }
];

// Função para carregar stakeholders na página
function carregarStakeholders() {
    const container = document.getElementById('lista-stakeholders');
    
    stakeholders.forEach(stakeholder => {
        const card = document.createElement('div');
        card.className = 'card-stakeholder';
        card.onclick = () => abrirModal(stakeholder);
        
        card.innerHTML = `
            <div class="icone">${stakeholder.icone}</div>
            <h3>${stakeholder.titulo}</h3>
            <p class="resumo">${stakeholder.resumo}</p>
            <span class="ver-mais">Ver detalhes →</span>
        `;
        
        container.appendChild(card);
    });
}

// Função para abrir modal com detalhes do stakeholder
function abrirModal(stakeholder) {
    const modal = document.getElementById('modal-stakeholder');
    const modalBody = document.getElementById('modal-body');
    
    let argumentosHTML = '';
    stakeholder.argumentos.forEach(arg => {
        argumentosHTML += `<li>${arg}</li>`;
    });
    
    modalBody.innerHTML = `
        <h2>${stakeholder.icone} ${stakeholder.titulo}</h2>
        <p class="modal-resumo">${stakeholder.resumo}</p>
        
        <h3>🎯 Objetivo Principal</h3>
        <div class="objetivo">
            <p>${stakeholder.objetivoPrincipal}</p>
        </div>
        
        <h3>💭 Argumentos Típicos</h3>
        <ul>
            ${argumentosHTML}
        </ul>
    `;
    
    modal.style.display = 'block';
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('modal-stakeholder');
    modal.style.display = 'none';
}

// Navegação entre seções
function configurarNavegacao() {
    const botoes = document.querySelectorAll('.btn-nav');
    const secoes = document.querySelectorAll('.secao');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const secaoAlvo = botao.getAttribute('data-secao');
            
            // Remove classe ativa de todos os botões
            botoes.forEach(b => b.classList.remove('active'));
            
            // Adiciona classe ativa ao botão clicado
            botao.classList.add('active');
            
            // Esconde todas as seções
            secoes.forEach(secao => secao.classList.remove('ativa'));
            
            // Mostra seção alvo
            document.getElementById(secaoAlvo).classList.add('ativa');
            
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    carregarStakeholders();
    configurarNavegacao();
    
    // Fechar modal ao clicar no X
    document.querySelector('.fechar').onclick = fecharModal;
    
    // Fechar modal ao clicar fora dele
    window.onclick = (event) => {
        const modal = document.getElementById('modal-stakeholder');
        if (event.target === modal) {
            fecharModal();
        }
    };
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            fecharModal();
        }
    });
});