# rick-and-morty

## How to run

Just run `docker-compose up --build`

To make very easy to run app during development, I have created docker compose services include: 
- database (Mongodb) running on port **27017**
- Mongo express (to view the data) running on port **8080**
- backend running on port **5000**
- frontend running on port **3000**

## Additional Libraries

### Backend:
- @hapi/joi --> for validation
- axios --> handling network requests
- bcrypt --> to encrypt and decrypt passwords
- cors --> handling cors issues
- express-async-errors --> handle async errors in the app. better than wrapping every request with try and catch
- helmet --> best practice
- joi-objectid --> validates object id of mongodb with joi
- joi-password-complexity --> validates passwords with joi
- jsonwebtoken --> for creating and handling jwt based auth
- lodash --> :)
- mongoose --> mongodb client


### Frontend
- axios --> handling network requests
- react-redux --> state managment
- redux --> state managment
- redux-thunk --> handling async actions in redux
- react-router-dom --> routing
- styled-components --> manage styling in a robust way. use by top companies!


## Backlog
- add tests
- pagination
- migrate to typescript
- handle an expected errors
