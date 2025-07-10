import Detail from "../pages/Detail/Index";
import Home from "../pages/Home/Index";
import SiteRoot from "../pages/SiteRoot";

const ROUTER = [

    {
        path: '/',
        element: <SiteRoot />,
        children: [
            {
                path: '',
                element: <Home />

            },
            {
                path: '/:id',
                element: <Detail />
            }
        ]
    }
]

export default ROUTER