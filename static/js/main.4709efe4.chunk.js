(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(7),l=a.n(n),o=(a(15),a(9)),m=a(2),s=a(3),c=a(5),d=a(4),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:n},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var p=a(1),g=a(19),v=function(e){var t=e.errorField,a=e.field,i=e.fieldName,n=e.onChange,l=e.onBlur;return r.a.createElement("div",null,r.a.createElement("input",{name:i,placeholder:i,type:"text",value:a,className:g("form-control",{"is-valid":"valid"===t,"is-invalid":"invalid"===t||"empty"===t}),onChange:function(e){return n(e)},onBlur:function(){l(i,"error".concat(i[0].toUpperCase()).concat(i.slice(1)))}}),"empty"===t?r.a.createElement("div",null,"This field should not be empty"):"invalid"===t?r.a.createElement("div",null,"This should be URL"):"")},b=(a(20),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errorTitle:!1,errorImgUrl:!1,errorImdbUrl:!1,errorImdbId:!1},e.onChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.onBlur=function(t,a){var i=e.state[t];i?/url/i.test(t)?i.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/)?e.setState(Object(p.a)({},a,"valid")):e.setState(Object(p.a)({},a,"invalid")):e.setState(Object(p.a)({},a,"valid")):e.setState(Object(p.a)({},a,"empty"))},e.resetState=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errorTitle:!1,errorImgUrl:!1,errorImdbUrl:!1,errorImdbId:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.addMovie,a=this.state,i=a.title,n=a.description,l=a.imgUrl,o=a.imdbUrl,m=a.imdbId,s=a.errorTitle,c=a.errorImgUrl,d=a.errorImdbUrl,u=a.errorImdbId,h=!0===s||!i||!0===c||!l||!0===d||!o||!0===u||!m;return r.a.createElement("form",{className:"form form-group",onSubmit:function(a){a.preventDefault(),h||(t(e.state),e.resetState())}},r.a.createElement(v,{errorField:s,field:i,fieldName:"title",onChange:this.onChange,onBlur:this.onBlur}),r.a.createElement("textarea",{name:"description",placeholder:"description",type:"text",className:"form-control",value:n,onChange:function(t){return e.onChange(t)}}),r.a.createElement(v,{errorField:c,field:l,fieldName:"imgUrl",onChange:this.onChange,onBlur:this.onBlur}),r.a.createElement(v,{errorField:d,field:o,fieldName:"imdbUrl",onChange:this.onChange,onBlur:this.onBlur}),r.a.createElement(v,{errorField:u,field:m,fieldName:"imdbId",onChange:this.onChange,onBlur:this.onBlur}),r.a.createElement("button",{type:"submit",className:h?"btn btn-dark disabled":"btn btn-dark"},"Add a movie"))}}]),a}(i.Component)),f=a(8),w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(h,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(b,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4709efe4.chunk.js.map