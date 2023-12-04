import React from 'react';

const Question16 = () => {
    // change the title of the page
    document.title = "Questions | Marvel App";

    return (
        <>
            <h2>Git</h2>
            <h3>Q1 :</h3>
            <p>L'intérêt principal de comiter régulièrement est de pouvoir suivre les changements de chaque fonctionnalité sur notre application, permettrent autres développeurs d'avoir les dernières mise à jour ainsi que les utilisateurs.</p>
            <p> Et de manière atomique pour pouvoir revenir à un commit précédent si un bug est apparu ou si une fonctionnalité ne fonctionne pas.</p>
            <h3>Q2 :</h3>
            <p>Une branche de type feature permet de développer une nouvelle fonctionnalité sans impacter le code de la branche principale. Une fois la fonctionnalité terminée, elle est mergée dans la branche develop.</p>
            <p>   Dans le network on peut ainsi suivre l'évolution de chaque fonctionnalité.</p>
            <h3>Q3 :</h3>
            <p>La branche main est la branche principale, elle contient le code de la dernière version stable de l'application. La branche develop est la branche de développement, elle contient le code de la prochaine version de l'application.</p>
                <p>La branche develop permet de merger toute les features alors que la main elle ne contient que les features validées et prête à être mise à la vue de tous.</p>
            <h3>Q4 :</h3>
            <p>Le git add permet d'ajouter les fichiers modifiés dans le prochain commit. Le git commit permet de créer un commit avec les fichiers ajoutés. Le git push permet d'envoyer les commits sur le répertoire git</p>
            <h2>Github</h2>
            <h3>Q5 :</h3> 
            <p>L'intérêt de protéger une branche est d'éviter les merges direct sur celle-ci si ils ne sont pas voulu, d'éviter une suppresion malencontreuse</p>
            <h3>Q6 :</h3>
            <p>Les pull requests permettent de demander une relecture du code par un autre développeur avant de merger une branche dans une autre. Elles permettent aussi de voir les différences entre les deux branches.</p>  
           


        </>
    );
};

export default Question16;