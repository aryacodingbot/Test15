import "C:/Users/aryar/Downloads/mentel_health_pjt/signin/src/component/style.css"
import Face from "C:/Users/aryar/Downloads/mentel_health_pjt/signin/src/component/face.jpg"
export function Sign_in()
{
    return(
        <body class="container-fluid" id="body">
            <div>
                <br></br>
                <form className="form form-container form-responsive" id="form1" action="dummy1">
                    <h1>Let's create your account here !!</h1>
                    <br></br>
                    <img src={Face} alt="faceimage" height="20%" width="20%" class = "img-respomsive"></img>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div class="mb-3">
                        <label for="firstname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fn" required></input>
                        <p id="p1"></p>
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="ln" required></input>
                        <p id="p2"></p>
                    </div>
                    <div>
                        <label>Enter your date of birth </label>
                    </div>
                    <div>
                        <select required class="handw">
                            <option>Date</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                        <select required class="handw">
                            <option>Month</option>
                            <option>January</option>
                            <option>Feburary</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <select required class="handw">
                            <option>Year</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                        </select>
                    </div>
                    <br></br>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone number</label>
                        <input type="tel" class="form-control" id="ph" required></input>
                        <p id="p3"></p>
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" class="form-control" id="ln" required></input>
                        <p id="p4"></p>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email ID</label>
                        <input type="email" class="form-control" id="email" required></input>
                        <id ></id>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Re-Enter Password</label>
                        <input type="password" class="form-control" id="Repassword" required></input>
                    </div>
                    <div>
                        <label required>
                            Select your Gender
                        </label>
                    </div>
                    <br></br>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="male" value="option1"></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Male
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="female" value="option2"></input>
                        <label class="form-check-label" for="exampleRadios2">
                            Female
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                        <label class="form-check-label" for="exampleRadios3">
                            Other
                        </label>
                        </div>
                        <br></br>
                        <div>
                            <label required>Write about your self in few lines</label>
                        </div>
                        <div>
                        <textarea type="form-control"></textarea>
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-warning" id="submit1">Submit</button>
                        <br></br>
                        <br></br>
                        <button type="reset" className="btn btn-primary" id="submit1">Refresh the content</button>
                    </form>
            </div>
        </body>
    )
}