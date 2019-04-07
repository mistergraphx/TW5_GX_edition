Edition de [TiddlyWiki](https://tiddlywiki.com/)
Intégrant les fonctionnalités suivantes :

- Langage Français
- Diagrammes et Flow charts avec Mermaid
- Syntaxe Markdown
- Édition avec Code mirror editor
- Coloration syntaxique avec Higlight
- Présentation d'arborescences et système de fichier avec $:/plugins/mistergraphx/treeview
- Sprite svg et icons $:/plugins/mistergraphx/tw5sprite

## Installation

Prérequis : Avoir déjà node.js d'installé

[Doc TiddlyWiki on Node](https://tiddlywiki.com/#TiddlyWiki%20on%20Node.js)
et se référer à [Installer TydllyWiki on node](https://tiddlywiki.com/#Installing%20TiddlyWiki%20on%20Node.js).


```sh
# Récupérer le dépôt
git clone https://github.com/mistergraphx/TW5_GX_edition.git monWiki
# Démarrer le serveur local sur ce wiki
tiddlywiki nomWiki --server 8080
```

Le wiki doit être accessible sur http://127.0.0.1:8080/


**Créer d'autres wikis depuis cette base.**

Créer un dossier et son fichier tiddlywiki.info

```json
{
    "description": "New Wiki",
    "plugins": [
  		"tiddlywiki/tiddlyweb",
  		"tiddlywiki/filesystem"
  	],
    "themes": [
        "tiddlywiki/vanilla",
        "tiddlywiki/snowwhite"
    ],
    "includeWikis": [
  		"../TW5_GX_edition"
  	]
}
```



```shell
# démarrer le serveur
tiddlywiki testWiki --server 8282
# Produire une version statique
tiddlywiki testWiki --rendertiddler $:/core/save/all index.html text/plain
```
