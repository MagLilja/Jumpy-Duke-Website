<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jumpy Duke</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="utils.js"></script>
</head>

<body>
    <?php 
    echo "HELLO!";
    include "html-modules/header.html";
     ?>

    <div class="site-container">

        <header module-header="html-modules/header.html" class="header include-html-module-header"></header>

        <main class="main-container">
            <div class="main-middle-container">
                <div class="game-box-title">
                    <h2 class="game-box-title-row">game mode</h2>
                    <span class="game-box-title-row">Normal</span>
                </div>
                <ul class="game-box-body-list">
                    <li class="game-box-body-title">high score</li>
                    <li class="game-box-body-item">-------</li>
                    <li class="game-box-body-item">Magnus - 23</li>
                    <li class="game-box-body-item">Rayan - 17</li>
                    <li class="game-box-body-item">Wille - 15</li>
                    <li class="game-box-body-item">Eyvind - 12</li>
                    <li class="game-box-body-item">Nora - 7</li>
                    <li class="game-box-body-item">Wille - 15</li>
                    <li class="game-box-body-item">Eyvind - 12</li>
                    <li class="game-box-body-item">Nora - 7</li>
                    <li class="game-box-body-item">Wille - 15</li>
                    <li class="game-box-body-item">Eyvind - 12</li>

                </ul>
                <ul class="game-mode-selector-list">
                    <li><a href="#">easy</a></li>
                    <li><a href="#">normal</a></li>
                    <li><a href="#">hard</a></li>
                </ul>
                <div class="cloud-animation-container">
                    <img src="resources/images/Clouds_lower_600x181.png" alt="" class="lowerclouds">
                </div>
            </div>
        </main>
        <footer module-footer="html-modules/footer.html"></footer>


    </div>
    <script>
        includeHTMLModule("module-header");
        includeHTMLModule("module-footer");
    </script>

</body>

</html>