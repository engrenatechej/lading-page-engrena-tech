# Engrenatech | Site estático

Site institucional feito com HTML e CSS. Não precisa instalar dependências, configurar chaves ou executar um servidor de aplicação.

## Estrutura

```text
.
├── index.html
├── pages/
│   ├── contato.html
│   ├── portfolio.html
│   ├── sobre.html
│   └── solucoes.html
└── assets/
	└── css/
		└── styles.css
```

## Editar

- Edite o conteúdo de cada página diretamente nos arquivos `.html`.
- Os estilos compartilhados ficam em `assets/css/styles.css`.
- Navegação, textos, contatos e links externos são HTML comum; não há componentes nem código de aplicação para compilar.
- O contato é feito pelos links de WhatsApp e e-mail. O site não armazena dados nem simula o envio de formulário.

## Visualizar e publicar

Abra `index.html` no navegador. Para publicar, envie `index.html`, `pages/` e `assets/` para qualquer hospedagem de arquivos estáticos, mantendo a estrutura de pastas.