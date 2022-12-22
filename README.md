# NoApp-API

Sets of APIs for a JWT authenticated user to upload contact profile via csv file or to view the uploaded contacts, below is the documentation of the APIs.

### api endpoint : ./auth/register | Request type: POST ###
Whenever a new user try to access the contact api first he nead to register using a valid username and password.

Password Constraint:
[![image](https://www.linkpicture.com/q/password-length-for-user-login.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

Successful Registration of a new user, password is stored in cryptred hashed form in order to maintain data privacy:
![image](https://i.postimg.cc/mgwRHfBY/user-register.jpg)

Re register with the same username:
[![image](https://www.linkpicture.com/q/usera-already-exist.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

### api endpoint : ./auth/login | Request type: POST ###
User after registering need to login with correct credentials, in order to get authenticated for contact API use.

Passwrod validation:
[![image](https://www.linkpicture.com/q/inm-orrct-pasword.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

Successful login results in a generation of JWT token:
[![image](https://www.linkpicture.com/q/succesfull-login-jwt-token.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

### api endpoint: ./contacts | Request type: POST ###
This endpoint helps the valid authenticated users to insert the contact profiles into DB from a single [csv file](https://docs.google.com/spreadsheets/d/11E1oNOHqrTLwH9Dpt7ltLgBnFkRQ-TAZ5Nqqivz2QJ8/edit?usp=sharing).
accessing the api without JWT token:
[![image](https://www.linkpicture.com/q/contact-post-without-jwt.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

Sucessful data insertion from the csv using valid JWT token:
[![image](https://www.linkpicture.com/q/data-insertion-with-jwt.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

DataBase with all the data from CSV
![image](https://i.postimg.cc/QxcjjKzn/data-DB.jpg)



### api endpoint: ./contacts | Request type: GET ###
We can access this end point to get all the data of the contact profiles in the DB

token validation to access data
[![image](https://www.linkpicture.com/q/invalid-token-to-access-data.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

Successful data access using valid JWT token and login credentials
[![image](https://www.linkpicture.com/q/succ-data-view.jpg)](https://www.linkpicture.com/view.php?img=LPic63a453b9628eb1624111349)

