import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CharactersPage from "./pages/CharactersPage";
import Question15 from "./pages/pageQuestions";
import Question510 from "./pages/pageQuestions510";

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
                path: "/questions15",
                element: <Question15/>,
            },
            {
                path: "/questions510",
                element: <Question510/>,
            },
        ],
    },
];

export default routes;
