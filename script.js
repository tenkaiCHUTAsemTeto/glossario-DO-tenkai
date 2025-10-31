<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glossário do GitHub</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            color: #333;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        body.dark-mode {
            background-color: #121212;
            color: #e0e0e0;
        }
        header {
            text-align: center;
            background-color: #24292e;
            color: white;
            padding: 20px;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }
        body.dark-mode header {
            background-color: #1a1a1a;
        }
        #search {
            width: 100%;
            padding: 10px;
            margin: 20px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }
        body.dark-mode #search {
            background-color: #333;
            color: #e0e0e0;
            border-color: #555;
        }
        .glossary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .term {
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }
        body.dark-mode .term {
            background-color: #2a2a2a;
            color: #e0e0e0;
        }
        .term:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .term h3 {
            margin-top: 0;
            color: #0366d6;
        }
        body.dark-mode .term h3 {
            color: #58a6ff;
        }
        .term p {
            margin-bottom: 0;
        }
        .hidden {
            display: none;
        }
        #theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #0366d6;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        body.dark-mode #theme-toggle {
            background-color: #58a6ff;
        }
    </style>
</head>
<body>
    <button id="theme-toggle">Modo Escuro</button>
    <header>
        <h1>Glossário do GitHub</h1>
        <p>Aprenda termos essenciais do GitHub com definições simples.</p>
    </header>
    
    <input type="text" id="search" placeholder="Pesquise um termo...">
    
    <div class="glossary" id="glossary">
        <div class="term">
            <h3>Repositório</h3>
            <p>Um local onde o código e os arquivos do projeto são armazenados e versionados.</p>
        </div>
        <div class="term">
            <h3>Commit</h3>
            <p>Uma mudança salva no repositório, como uma "fotografia" do estado do código.</p>
        </div>
        <div class="term">
            <h3>Pull Request</h3>
            <p>Uma solicitação para mesclar mudanças de uma branch para outra, permitindo revisão.</p>
        </div>
        <div class="term">
            <h3>Branch</h3>
            <p>Uma versão paralela do repositório para trabalhar em novas funcionalidades sem afetar o código principal.</p>
        </div>
        <div class="term">
            <h3>Fork</h3>
            <p>Uma cópia de um repositório em sua conta, permitindo contribuições independentes.</p>
        </div>
        <div class="term">
            <h3>Issue</h3>
            <p>Um relatório de bug, sugestão ou tarefa relacionada ao projeto.</p>
        </div>
        <div class="term">
            <h3>Merge</h3>
            <p>O ato de combinar mudanças de uma branch para outra.</p>
        </div>
        <div class="term">
            <h3>Clone</h3>
            <p>Copiar um repositório do GitHub para o seu computador local.</p>
        </div>
        <div class="term">
            <h3>Push</h3>
            <p>Enviar commits locais para o repositório remoto no GitHub.</p>
        </div>
        <div class="term">
            <h3>Pull</h3>
            <p>Baixar e mesclar mudanças do repositório remoto para o local.</p>
        </div>
    </div>

    <script src="script.js"></script>  <!-- Link para o arquivo script.js -->
</body>
</html>

