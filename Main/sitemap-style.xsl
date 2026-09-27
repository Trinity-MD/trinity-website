<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="pt-br">
      <head>
        <title>Sitemap - Trinity Midia Digital</title>
        <style>
          body {
            font-family: 'Montserrat', sans-serif;
            background-color: #020617;
            color: #ffffff;
            margin: 0;
            padding: 40px;
          }
          h1 {
            color: #22d3ee; /* Cyan */
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 20px;
            margin-bottom: 20px;
          }
          p.desc {
            color: #94a3b8;
            margin-bottom: 40px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #0f172a;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          th {
            background: #1e1b4b;
            color: #a855f7; /* Roxo */
            text-align: left;
            padding: 16px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          td {
            padding: 16px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            color: #cbd5e1;
            font-size: 14px;
          }
          tr:hover td {
            background: rgba(255,255,255,0.02);
          }
          a {
            color: #22d3ee;
            text-decoration: none;
            transition: 0.3s;
          }
          a:hover {
            text-decoration: underline;
            color: #ffffff;
          }
        </style>
      </head>
      <body>
        <h1>Sitemap XML</h1>
        <p class="desc">Este é o mapa do site Trinity Midia Digital, listando todas as páginas indexáveis para motores de busca.</p>
        
        <table>
          <thead>
            <tr>
              <th>URL da Página</th>
              <th>Prioridade</th>
              <th>Frequência</th>
              <th>Última Modificação</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}" target="_blank">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td><xsl:value-of select="sitemap:priority"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>