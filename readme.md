# Estudo de Caso: Sistema de IA para Recrutamento e Seleção

## 📋 Sobre o Projeto

Esta aplicação web apresenta um estudo de caso educacional sobre o uso de inteligência artificial em processos de recrutamento e seleção de pessoas. O material foi desenvolvido para ser utilizado em disciplinas de **Computação e Sociedade**, visando promover reflexão crítica sobre implicações éticas e sociais das tecnologias emergentes.

## 🎯 Objetivos Pedagógicos

- **Compreender diferentes perspectivas** sobre tecnologias controversas
- **Identificar conflitos entre valores** sociais, empresariais e individuais
- **Desenvolver pensamento crítico** sobre implicações éticas da tecnologia
- **Praticar argumentação** e tomada de decisão em grupo
- **Analisar stakeholders** com interesses divergentes

## 📖 Sobre o Estudo de Caso

### Cenário
A **MegaCorp Brasil**, uma multinacional de tecnologia, planeja implementar o **TalentAI Pro**, um sistema de IA que automatiza completamente o processo de recrutamento, analisando currículos e entrevistas em vídeo para classificar candidatos.

### Dilemas Centrais
- **Eficiência vs. Viés discriminatório**
- **Inovação vs. Direitos fundamentais**
- **Automação vs. Dignidade humana**
- **Objetividade algorítmica vs. Julgamento contextual**

### Valores em Conflito
- Eficiência econômica vs. Justiça social
- Inovação tecnológica vs. Direitos fundamentais
- Autonomia empresarial vs. Regulação estatal
- Mérito individual vs. Equidade estrutural
- Objetividade algorítmica vs. Julgamento humano contextual

## 🚀 Como Usar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação ou dependência necessária

### Executando a Aplicação

1. **Clone ou baixe o repositório:**
```bash
git clone https://github.com/seu-usuario/estudo-caso-ia-recrutamento.git
cd estudo-caso-ia-recrutamento
```

2. **Abra o arquivo `index.html` no navegador:**
   - Duplo clique no arquivo `index.html`, ou
   - Arraste o arquivo para o navegador, ou
   - Use um servidor local (opcional):
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve
```

3. **Navegue pelas seções:**
   - Use o menu de navegação no topo da página
   - Explore informações sobre a tecnologia, benefícios e riscos
   - Clique nos cards dos stakeholders para ver detalhes completos

### Dinâmica em Sala de Aula

#### Formato Sugerido (90-120 minutos)

1. **Apresentação do caso** (10-15 min)
   - Professor apresenta o contexto usando a aplicação
   - Alunos exploram as seções da aplicação

2. **Divisão em grupos** (5 min)
   - Cada grupo representa um stakeholder diferente
   - Distribuir entre 5-10 grupos dependendo do tamanho da turma

3. **Preparação** (20-25 min)
   - Grupos estudam a perspectiva de seu stakeholder
   - Preparam argumentos e estratégias de defesa
   - Antecipam contra-argumentos

4. **Rodadas de apresentação** (30-40 min)
   - Cada grupo apresenta sua posição (3-5 minutos)
   - Outros grupos podem fazer perguntas (2 minutos por grupo)

5. **Debate e negociação** (15-20 min)
   - Discussão aberta entre todos os stakeholders
   - Tentativa de construir consenso ou mapear impasses

6. **Reflexão final** (15-20 min)
   - Discussão facilitada pelo professor sobre:
     - Quais valores foram priorizados?
     - Quem tem mais poder de decisão?
     - Que compromissos são possíveis?
     - Que soluções regulatórias fariam sentido?

#### Variações de Dinâmica

**Comitê de ética Simulado:**
- Um grupo atua como membros do comitê de ética
- Outros grupos apresentam argumentos pró e contra
- Membros deliberam e tomam decisão fundamentada

**Audiência Pública:**
- Um aluno representa autoridade reguladora
- Stakeholders apresentam posições
- Autoridade toma decisão considerando argumentos

**Mesa de Negociação:**
- Grupos negociam termos de implementação
- Objetivo: criar documento com salvaguardas e condições

## 📂 Estrutura de Arquivos

```
estudo-caso-ia-recrutamento/
│
├── index.html           # Estrutura HTML da aplicação
├── estilos.css          # Estilos e design responsivo
├── scripts.js           # Dados dos stakeholders e lógica de interação
├── README.md            # Este arquivo
└── .gitignore          # Arquivos ignorados pelo Git
```

### Descrição dos Arquivos

- **index.html**: Contém a estrutura completa da aplicação, incluindo todas as seções (Introdução, Tecnologia, Benefícios, Riscos, Stakeholders) e o modal para detalhes dos stakeholders.

- **estilos.css**: Define toda a aparência visual da aplicação, incluindo cores, tipografia, layout responsivo e animações. Utiliza variáveis CSS para facilitar customização.

- **scripts.js**: Contém o objeto JavaScript com dados de todos os 10 stakeholders e funções para:
  - Carregar dinamicamente os cards de stakeholders
  - Gerenciar navegação entre seções
  - Abrir/fechar modal com detalhes
  - Interações do usuário

- **README.md**: Documentação completa do projeto com instruções de uso e sugestões pedagógicas.

- **.gitignore**: Lista de arquivos e diretórios que não devem ser versionados no Git.

## 🎭 Stakeholders Incluídos

A aplicação apresenta 10 stakeholders com perspectivas diversas:

1. **VP de Recursos Humanos** - Defensora da implementação
2. **Candidata Rejeitada** - Vítima do sistema
3. **Cientista de Dados Especialista** - Crítica técnica
4. **CEO da Empresa** - Visão estratégica de negócios
5. **Advogada Trabalhista** - Defesa de direitos
6. **Recrutador Sênior** - Profissional ameaçado
7. **Investidor Tech** - Entusiasta da inovação
8. **Procuradora do MPT** - Reguladora estatal
9. **Jornalista Investigativa** - Observadora crítica
10. **Desenvolvedor do Sistema** - Conflito ético interno

Cada stakeholder possui:
- Objetivo principal claramente definido
- 5-6 argumentos típicos de sua perspectiva
- Resumo de uma linha para identificação rápida

## 🎨 Personalização

### Modificar Cores
Edite as variáveis CSS no arquivo `estilos.css`:

```css
:root {
    --cor-primaria: #2563eb;    /* Azul principal */
    --cor-secundaria: #1e40af;  /* Azul escuro */
    --cor-sucesso: #10b981;     /* Verde */
    --cor-alerta: #f59e0b;      /* Laranja */
    --cor-perigo: #ef4444;      /* Vermelho */
}
```

### Adicionar Novos Stakeholders
No arquivo `scripts.js`, adicione um novo objeto ao array `stakeholders`:

```javascript
{
    id: 11,
    icone: "🎓",
    titulo: "Nome do Stakeholder",
    resumo: "Breve descrição em uma linha",
    objetivoPrincipal: "Descrição detalhada do objetivo...",
    argumentos: [
        "Argumento 1",
        "Argumento 2",
        // ... mais argumentos
    ]
}
```

### Modificar Conteúdo
- **Benefícios e Riscos**: Edite diretamente no `index.html` nas seções correspondentes
- **Especificações técnicas**: Atualize a seção "A Tecnologia" no `index.html`
- **Valores em conflito**: Modifique a seção de badges na introdução

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a:
- 📱 Smartphones (≥ 320px)
- 📱 Tablets (≥ 768px)
- 💻 Desktops (≥ 1024px)
- 🖥️ Telas grandes (≥ 1440px)

## 📝 Licença

Este material é disponibilizado para **uso educacional livre**. Professores e educadores podem:
- Usar em suas disciplinas sem restrições
- Modificar e adaptar o conteúdo
- Compartilhar com colegas e alunos

Ao usar ou modificar este material, considere:
- Manter créditos de autoria
- Compartilhar melhorias com a comunidade
- Respeitar o propósito educacional

## 📚 Recursos Adicionais

### Para Aprofundamento

**Artigos Acadêmicos:**
- "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification" (Buolamwini & Gebru, 2018)
- "Discrimination in Online Ad Delivery" (Sweeney, 2013)
- "Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings" (Bolukbasi et al., 2016)

**Casos Reais:**
- Amazon interrompe uso de ferramenta de recrutamento com IA por viés de gênero (2018)
- HireVue enfrenta investigação da FTC sobre análise facial (2020)
- LinkedIn acusado de viés em anúncios de emprego (2019)

**Documentários e Vídeos:**
- "Coded Bias" (Netflix, 2020)
- "The Social Dilemma" (Netflix, 2020)

**Frameworks Éticos:**
- Princípios de IA da OCDE
- Diretrizes éticas para IA confiável (Comissão Europeia)
- Princípios de Asilomar para IA

## 👨‍🏫 Sobre o Material

Este estudo de caso foi desenvolvido como material pedagógico para disciplinas de Computação e Sociedade, Ética em Tecnologia, Ciência de Dados e áreas correlatas.

**Objetivo:** Fomentar discussão crítica e informada sobre o impacto social de tecnologias emergentes, preparando profissionais de tecnologia para tomar decisões éticas e socialmente responsáveis.
