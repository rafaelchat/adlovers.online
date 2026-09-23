# Sincronização Figma -> AdLovers

Este projeto está integrado para transformar designs do Figma diretamente em código React com Tailwind CSS e TypeScript.

## Como Usar

### 1. Criar ou importar uma página diretamente pelo chat
Basta colar a URL do Figma (arquivo ou Frame específico) no chat do Antigravity:
```text
"Crie uma nova página a partir deste frame do Figma: https://www.figma.com/design/<fileKey>/Projeto?node-id=<nodeId>"
```

### 2. O que a IA faz automaticamente:
1. **Lê o layout e estrutura:** O assistente aciona a ferramenta MCP do Figma (`get_figma_data`) usando o `fileKey` e `nodeId`.
2. **Extrai Tokens e Imagens:** Baixa ícones, vetores e assets visuais (`download_figma_images`) diretamente para `public/assets/`.
3. **Gera o Código:** Transforma a árvore de nós do Figma em componentes React limpos, responsivos e acessíveis com Tailwind CSS na pasta `src/pages/` ou `src/components/`.
4. **Registra a Rota:** Conecta o novo componente no roteador principal (`src/App.tsx`) e na barra de navegação.

## Variáveis de Ambiente (Opcional para chamadas externas diretas)
Caso deseje usar a API REST do Figma diretamente via scripts:
```env
FIGMA_ACCESS_TOKEN="seu_token_pessoal_do_figma"
```
Gerado em: **Figma > Settings > Security > Personal Access Tokens**.
