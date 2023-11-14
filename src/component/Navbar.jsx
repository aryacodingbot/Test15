import logo from "C:/Users/aryar/Downloads/mentel_health_pjt/signin/src/logo.svg"

export function Navbar()
{
    return(
        {/*just a navbar with image tag created here */},
        <nav class="navbar navbar-light bg-dark">
            <div class="container">
                <label class="navbar-brand" href="dummy1">
                    <img src={logo} alt="rout1" width="30" height="30"></img>
                </label>
                <lable style={{color: "white",fontFamily: "cursive"}}>Sign In Page</lable>
            </div>
        </nav>
    )
}