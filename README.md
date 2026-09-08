# Decifra Óleo — Landing Page

Página de vendas do produto digital **"Decifra Óleo: o Guia de 48h para Ler Qualquer
Laudo Sem Depender de Ninguém"** — CTF do Brasil.

Site estático, sem build. HTML + CSS + JS puro.

## Estrutura

```
index.html              Página completa
assets/css/styles.css   Design system + estilos
assets/js/main.js       Header, menu, reveal, checkout, ano
assets/img/             Logos e imagens (ver assets/img/README.md)
COPY.md                 Copy completo, wireframe e variações A/B
```

## Rodar localmente

Abra `index.html` no navegador, ou use um servidor estático:

```powershell
python -m http.server 5173
# depois: http://localhost:5173
```

No VS Code, a extensão **Live Preview** (`ms-vscode.live-server`) também serve.

## Antes de publicar

1. Colocar os arquivos de imagem em `assets/img/` (lista em `assets/img/README.md`).
2. Em `assets/js/main.js`, trocar `CHECKOUT_URL` pelo link real da plataforma de pagamento.
3. Revisar dados de contato e CNPJ no rodapé do `index.html`.
4. Conferir a URL canônica e a imagem de compartilhamento (`og:image`) no `<head>`.

## Paleta

| Papel | Cor |
|---|---|
| Azul petróleo (base) | `#0c2a45` |
| Grafite (texto) | `#111a22` |
| Âmbar (alerta técnico / CTA) | `#e0921a` |
| Sinais semáforo | verde `#2f7d4f` · âmbar `#d9911d` · vermelho `#b23c2b` |

Tipografia: **Sarabun** (mesma família usada no site institucional da CTF do Brasil),
com fallback `Segoe UI` / `Helvetica Neue`.
