[![Test Unitaire](https://github.com/LeoCdrt/Marvel-app/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/LeoCdrt/Marvel-app)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=LeoCdrt_Marvel-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=LeoCdrt_Marvel-app)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LeoCdrt_Marvel-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LeoCdrt_Marvel-app)

# Marvel App

## Installation

git clone url-du-projet
cd marvel-app

npm install

```bash
git clone https://github.com/LeoCdrt/Marvel-app
cd Marvel-app
npm install
```
## Lancement
```bash
npm start
```
L'application est accessible à l'adresse http://localhost:3000

## Test
Execution des tests unitaires en mode watch, c'est à dire que les tests sont relancés à chaque modification de code.
```bash
npm test
```
Execution des tests uniquement une fois avec un rapport détaillé de la couverture du code
```bash
npm run test:coverage
```
## Conception 
Le projet est décomposé en 4 étapes :
* Home (page d'acceuil): Liste des personnages
* Character : Page de détail d'un personnage 
* About : Page dinformation sur l'application 
* Contact : Page de contact 


```mermaid
graph LR
    A["Home"] -- /about --> B["About"]
    A["Home"] -- /contact --> C["Contact"]
    A["Home"] -- /character/:id --> D((("Character")))
```
