import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CharactersPage from "./pages/CharactersPage";
import Question16 from "./pages/pageQuestions";
import Question710 from "./pages/pageQuestions710";

import CharacterDetailPage from "./pages/CharacterDetailPage";
import { getCharacterById, getCharacters } from "./api/character-api";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CharactersPage />,
                loader: ({request}) => {
                    const url = new URL(request.url);
                    const orderBy = url.searchParams.get("orderBy");
                    const order = url.searchParams.get("order");

                    if (orderBy && order) {
                        return getCharacters(orderBy, order);
                    }else{
                        return getCharacters();
                    }
                },
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id),
            },
            { 
                path: "/about", 
                element: <AboutPage /> 
            },
            { 
                path: "/contact", 
                element: <ContactPage /> 
            },
            {
                path: "/questions16",
                element: <Question16/>,
            },
            {
                path: "/questions710",
                element: <Question710/>,
            },
        ],
    },
];

export default routes;
