
import Home from "~/pages/Home"
import Following from "~/pages/Following"

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
]

//Private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }